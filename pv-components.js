/*
 * PowderVitamin shared UI components (custom elements). Each instance is self-contained, so a section can be used
 * any number of times on a page. Loaded once, deferred, from snippets/pv-head.liquid.
 *
 *   <pv-carousel data-interval="6000">   slides [data-slide] (active one has data-active="true"),
 *                                          dots [data-dot], buttons [data-prev] / [data-next]; pauses on hover
 *   <pv-autoplay-steps data-interval="5000" data-active-class="active">
 *                                          items [data-step]; progress bars [data-step-progress] inside each item
 *   <pv-accordion>                        items [data-accordion-item] toggled by [data-accordion-trigger]; one open
 *   <pv-add-to-cart data-variant-id="…">  wraps a button; adds the variant and opens the side cart (PVCart)
 *   <pv-scroller data-step="300">        horizontal scroll row with prev/next buttons and dots
 */
(function () {
  if (window.customElements && customElements.get('pv-carousel')) return;

  class PVCarousel extends HTMLElement {
    connectedCallback() {
      this.slides = [...this.querySelectorAll('[data-slide]')];
      this.dots = [...this.querySelectorAll('[data-dot]')];
      this.index = Math.max(0, this.slides.findIndex((s) => s.dataset.active === 'true'));
      this.interval = Number(this.dataset.interval) || 6000;
      this.addEventListener('click', (e) => {
        if (e.target.closest('[data-prev]')) this.go(this.index - 1);
        else if (e.target.closest('[data-next]')) this.go(this.index + 1);
        else {
          const dot = e.target.closest('[data-dot]');
          if (dot) this.go(this.dots.indexOf(dot));
        }
      });
      this.addEventListener('mouseenter', () => this.stop());
      this.addEventListener('mouseleave', () => this.start());
      this.addEventListener('focusin', () => this.stop());
      this.start();
    }
    disconnectedCallback() { this.stop(); }
    start() {
      this.stop();
      if (this.slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.timer = setInterval(() => this.go(this.index + 1), this.interval);
      }
    }
    stop() { clearInterval(this.timer); }
    go(i) {
      if (!this.slides.length) return;
      this.index = (i + this.slides.length) % this.slides.length;
      this.slides.forEach((s, n) => { s.dataset.active = String(n === this.index); s.toggleAttribute('inert', n !== this.index); });
      this.dots.forEach((d, n) => { d.classList.toggle('active', n === this.index); d.setAttribute('aria-current', n === this.index ? 'true' : 'false'); });
    }
  }

  class PVAutoplaySteps extends HTMLElement {
    connectedCallback() {
      this.steps = [...this.querySelectorAll('[data-step]')];
      this.activeClass = this.dataset.activeClass || 'active';
      this.duration = Number(this.dataset.interval) || 5000;
      this.index = Math.max(0, this.steps.findIndex((s) => s.classList.contains(this.activeClass)));
      this.steps.forEach((step, i) => step.addEventListener('click', () => { if (i !== this.index) this.go(i); }));
      this.go(this.index);
    }
    disconnectedCallback() { cancelAnimationFrame(this.frame); }
    go(i) {
      this.index = i;
      this.startedAt = performance.now();
      this.steps.forEach((s, n) => {
        s.classList.toggle(this.activeClass, n === i);
        const bar = s.querySelector('[data-step-progress]');
        if (bar) bar.style.width = '0%';
      });
      cancelAnimationFrame(this.frame);
      const tick = (now) => {
        const pct = Math.min(100, ((now - this.startedAt) / this.duration) * 100);
        const bar = this.steps[this.index] && this.steps[this.index].querySelector('[data-step-progress]');
        if (bar) bar.style.width = pct + '%';
        if (pct >= 100) this.go((this.index + 1) % this.steps.length);
        else this.frame = requestAnimationFrame(tick);
      };
      if (this.steps.length > 1) this.frame = requestAnimationFrame(tick);
    }
  }

  class PVAccordion extends HTMLElement {
    connectedCallback() {
      this.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-accordion-trigger]');
        if (!trigger || !this.contains(trigger)) return;
        const item = trigger.closest('[data-accordion-item]');
        const open = !item.classList.contains('active');
        this.querySelectorAll('[data-accordion-item]').forEach((el) => {
          el.classList.remove('active');
          const t = el.querySelector('[data-accordion-trigger]');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
        if (open) { item.classList.add('active'); trigger.setAttribute('aria-expanded', 'true'); }
      });
    }
  }

  class PVAddToCart extends HTMLElement {
    connectedCallback() {
      this.addEventListener('click', (e) => {
        const button = e.target.closest('button, [role="button"]');
        if (!button || button.disabled || button.getAttribute('aria-disabled') === 'true' || this.busy) return;
        e.preventDefault();
        this.add(button);
      });
    }
    add(button) {
      this.busy = true;
      button.setAttribute('aria-busy', 'true');
      const body = { items: [{ id: Number(this.dataset.variantId), quantity: Number(this.dataset.quantity) || 1 }] };
      if (this.dataset.sellingPlan) body.items[0].selling_plan = Number(this.dataset.sellingPlan);
      // A PREORDER NOW card (data-preorder="true") carries the hidden preorder marker; pv-compat.js then sets the cart attribute
      if (this.dataset.preorder === 'true') body.items[0].properties = { _pv_preorder: 'true' };
      fetch((window.Shopify && Shopify.routes ? Shopify.routes.root : '/') + 'cart/add.js', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body)
      })
        .then((r) => r.json().then((json) => ({ ok: r.ok, json })))
        .then(({ ok, json }) => {
          if (!ok) throw new Error(json && json.description);
          if (window.PV) PV.syncCartCount();
          if (window.PVCart) PVCart.open();
        })
        .catch(() => { window.location.href = (window.Shopify && Shopify.routes ? Shopify.routes.root : '/') + 'cart'; })
        .finally(() => { this.busy = false; button.removeAttribute('aria-busy'); });
    }
  }

  /* Horizontal scroll row: track [data-scroller-track], buttons [data-scroll-prev] / [data-scroll-next],
     dots [data-scroller-dot]. data-step = px per click on desktop (phones scroll one screen);
     data-autoplay-mobile = ms between auto-scrolls on phones (stops on touch). */
  class PVScroller extends HTMLElement {
    connectedCallback() {
      this.track = this.querySelector('[data-scroller-track]');
      this.dots = [...this.querySelectorAll('[data-scroller-dot]')];
      if (!this.track) return;
      this.addEventListener('click', (e) => {
        if (e.target.closest('[data-scroll-prev]')) this.scroll(-1);
        else if (e.target.closest('[data-scroll-next]')) this.scroll(1);
      });
      this.track.addEventListener('scroll', () => this.syncDots(), { passive: true });
      this.addEventListener('touchstart', () => clearInterval(this.timer), { passive: true });
      const auto = Number(this.dataset.autoplayMobile);
      if (auto && window.matchMedia('(max-width: 767px)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.timer = setInterval(() => {
          const max = this.track.scrollWidth - this.track.offsetWidth;
          if (this.track.scrollLeft >= max - 10) this.track.scrollTo({ left: 0, behavior: 'smooth' });
          else this.scroll(1);
        }, auto);
      }
    }
    disconnectedCallback() { clearInterval(this.timer); }
    scroll(dir) {
      const mobile = window.matchMedia('(max-width: 767px)').matches;
      this.track.scrollBy({ left: dir * (mobile ? this.track.offsetWidth : Number(this.dataset.step) || 300), behavior: 'smooth' });
    }
    syncDots() {
      if (!this.dots.length) return;
      const i = Math.round(this.track.scrollLeft / this.track.offsetWidth);
      this.dots.forEach((d, n) => d.classList.toggle('is-active', n === i));
    }
  }

  customElements.define('pv-scroller', PVScroller);
  customElements.define('pv-carousel', PVCarousel);
  customElements.define('pv-autoplay-steps', PVAutoplaySteps);
  customElements.define('pv-accordion', PVAccordion);
  customElements.define('pv-add-to-cart', PVAddToCart);
})();
