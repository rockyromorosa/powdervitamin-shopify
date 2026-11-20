# PowderVitamin — WordPress/WooCommerce to Shopify Migration

**Professional client project | My Amazon Guy (MAG)**  
**Role:** Shopify Developer (collaborative agency project)  
**Status:** **Completed and launched**  
**Platform:** WordPress / WooCommerce → Shopify  
**Technologies & tools:** Shopify, Liquid, HTML, CSS, JavaScript, Matrixify

## Project overview

PowderVitamin is a health and wellness eCommerce brand. As part of the My Amazon Guy development team, I contributed to the **completed migration of its WordPress/WooCommerce store to Shopify** and the development of the new Shopify storefront.

The work involved assessing the legacy website, supporting data migration, building and customizing storefront interfaces, and testing the customer-facing experience. The Shopify migration was completed and the new storefront launched.

> **Portfolio scope:** This repository documents my contributions within a broader team project through selected screenshots and an interaction demo. It is not a full copy of the client's proprietary Shopify theme.

## My work on the project

### 1. WordPress/WooCommerce audit and migration planning

- Reviewed the previous WordPress/WooCommerce storefront, theme structure, plugins, and custom functionality.
- Mapped site features and dependencies to Shopify theme features, native capabilities, and third-party integrations.
- Helped identify requirements for products, collections, customer and order data, content, and redirects.

### 2. Shopify migration and implementation

- Worked with **Matrixify** for product and collection migration activities, including import checks and validation.
- Supported migration preparation and checks for other store data as part of the team workflow.
- Contributed to translating the previous storefront experience into Shopify-compatible pages, sections, and purchase interfaces.

### 3. Shopify frontend development

- Worked on Shopify storefront sections and templates with **Liquid, HTML, CSS, and JavaScript**.
- Customized homepage hero slides, merchandising sections, benefit content, informational layouts, and calls to action.
- Worked on product detail page presentation, flavor/serving-size selection, purchase-option interfaces, and bundle promotions.
- Built or refined interactive sections such as accordions and supporting content blocks.

### 4. Quality assurance and launch support

- Reviewed storefront layouts and behavior across desktop and mobile contexts.
- Tested or inspected interactive components, product-selection states, and merchandising presentation.
- Supported the implementation and validation work that led to the **completed, launched Shopify website**.

## Storefront screenshots

### Homepage hero slides

The homepage uses branded promotional slides to introduce the product range and direct shoppers to key offers.

![Homepage — Thirsty Is Too Late](<01 - Homepage Hero Slides/PowderVitamin_01_Hero_Slide1.png>)

[PREHYDRATE bundles hero](<01 - Homepage Hero Slides/PowderVitamin_02_Hero_Prehydrate_Bundles.png>) · [Value bundles hero](<01 - Homepage Hero Slides/PowderVitamin_03_Hero_Value_Bundles.png>)

### Homepage merchandising and offers

The storefront presents product bundles and promotional offers alongside product education and customer trust content.

![Bundle product cards](<02 - Homepage Sections/PowderVitamin_05_Bundle_Product_Cards.png>)

![Build Your Own Bundle promotion](<02 - Homepage Sections/PowderVitamin_20_Build_Your_Own_Bundle.png>)

### Interactive sections and social proof

![Clean Formula accordion](<02 - Homepage Sections/PowderVitamin_06_Accordion_Clean_Formula.png>)

![Customer reviews and social proof](<02 - Homepage Sections/PowderVitamin_08_Customer_Reviews_Social_Proof.png>)

[View the Electrolyte Benefits accordion demo](<02 - Homepage Sections/PowderVitamin_19_Electrolyte_Benefits_Accordion.mp4>)

### Technical spotlight: Interactive Benefits Accordion

This custom Shopify section combines **Liquid, JavaScript custom elements, and responsive CSS** to present educational product benefits alongside product imagery and a testimonial.

**Implementation details documented from the project files:**

- **Liquid section:** `sections/pv-benefits.liquid` builds the list from configurable Shopify `feature` blocks and supports editable heading, benefit copy, product imagery, testimonial, and decorative information cards.
- **JavaScript interaction:** The `<pv-autoplay-steps>` custom element in `assets/pv-components.js` cycles through the benefit items. Visitors can also select a benefit directly. An animated progress bar uses `requestAnimationFrame` to display the current step's elapsed time.
- **Configurable timing:** The theme section schema exposes an interval of **3–12 seconds**, with a default of **5 seconds**.
- **Styling:** `assets/section-pv-benefits.css` controls the active panel, expansion transitions, progress indicator, visual effects, light/dark appearance, and mobile adaptations.
- **Responsive behavior:** On smaller screens, spacing and text styles adapt and decorative floating cards are hidden.

The repository showcases the feature through screenshots and a demonstration video rather than redistributing the client's production source code.


### Product detail page and purchase experience

Product pages feature product imagery, benefit messaging, serving-size options, and distinct one-time and subscription selection states.

![Lemonade product detail page](<03 - Product Detail Pages/PowderVitamin_23_Lemonade_Product_Page.png>)

![Lemonade purchase options](<03 - Product Detail Pages/PowderVitamin_24_Lemonade_Purchase_Options.png>)

![Lemonade subscription selected](<03 - Product Detail Pages/PowderVitamin_25_Lemonade_Subscription_Selected.png>)

### Technical spotlight: Product detail page and purchase options

The PowderVitamin product page uses a **custom Shopify Liquid section** (`sections/pv-product-00.liquid`) alongside a JavaScript controller (`assets/pv-product-00-1.js`) to present a responsive product purchase experience.

**Implementation details reviewed from the source files:**

- **Shopify product data:** Liquid renders the current product and selected variant, including the initial price and purchase-button state. It exposes the selected product's details and configurable section blocks to the JavaScript controller.
- **Migration-aware product mapping:** The JavaScript retains product descriptions and configuration originally ported from WooCommerce, matches legacy product slugs, and uses Shopify product information to override prices, variant IDs, and gallery images where available.
- **Flavor and size selection:** Interactive chips display the selected flavor and serving size and navigate to the corresponding Shopify product URL.
- **Purchase options:** One-time purchase is the default. Eligible core flavors can display **Monthly Subscription** with a configurable Subscribe & Save percentage; other flavors have that option disabled by the page logic.
- **Pricing and quantity:** Client-side UI logic updates the displayed purchase prices, active selection, and quantity.
- **Inventory-dependent states:** Product interface code supports **Add to Cart**, **Preorder Now**, and **Notify Me When in Stock**, depending on stock and backorder information.
- **Supporting PDP features:** A product-image gallery, detail accordions, reviews interface, FAQ content, and responsive presentation support the purchase flow.

**Integration note:** The supplied JavaScript retains WooCommerce-style URLs and AJAX calls as part of the migration. Its comments refer to a Shopify compatibility layer (`pv-compat.js`); that adapter was not reviewed here, so this documentation does not independently verify the complete cart or subscription integration. The project itself is completed and launched.

As with the benefits accordion, the repository documents this feature without including the client's proprietary production source files.

### Supporting brand pages

![Our Story](<04 - Other Pages/PowderVitamin_28_Our_Story_Page.png>)

![Reactive vs. Proactive](<04 - Other Pages/PowderVitamin_29_Reactive_vs_Proactive.png>)

### Collection page

The collection layout presents the migrated product catalog and helps shoppers browse the Shopify storefront.

![Shop All collection](<05 - Collection Pages/PowderVitamin_30_Shop_All_Collection.png>)

## What this project demonstrates

- Experience working on a **real, completed WordPress/WooCommerce-to-Shopify migration** at an eCommerce agency.
- Practical Shopify theme development and frontend customization.
- Product merchandising, bundle presentation, and purchase-option interface work.
- Collaboration across migration, development, testing, and launch activities.

## Project ownership and confidentiality

This was a **team project at My Amazon Guy**, not a solo build. The screenshots are included to document the work and storefront experience; they do not represent a claim that I personally developed every component or integration.

**Keep this repository private until the client or authorized project owner approves publication.** Do not upload credentials, customer information, order exports, private configuration, or proprietary theme source without permission.
