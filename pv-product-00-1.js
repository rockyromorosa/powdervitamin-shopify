/* Script moved out of sections/pv-product-00.liquid (256KB limit). */

		/**
		 * BUNDLE_CONFIG (Must remain at the top of the script)
		 */
		/**
		* MASTER DATABASE - All flavor/size combinations
		*/
		/**
	     * MASTER_DATABASE
	     * This object holds the configuration for all products. 
	     * The keys must match the URL slug of the product page.
	     */
		const MASTER_DATABASE = {
			//50 servings
			"lemonade-electrolytes-powder-50-servings": {
				title: "Lemonade Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This sugar-free lemonade blend is specifically formulated for clean keto-friendly hydration without artificial additives or fillers. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 29.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 17735,
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"120mg Magnesium Glycinate",
					"500mg Real Himalayan Salt",
					"Zero Sugar / Zero Carbs"
				],
				gallery: [
					"/wp-content/uploads/2026/07/Lemonade-Electrolytes-Powder-Plus™-50-Servings-Image-1.jpg",
					"/wp-content/uploads/2026/07/Lemonade-Electrolytes-Powder-Plus™-50-Servings-Image-2.jpg",
					"/wp-content/uploads/2026/07/Lemonade-Electrolytes-Powder-Plus™-50-Servings-Image-3.jpg",
					"/wp-content/uploads/2026/07/Lemonade-Electrolytes-Powder-Plus™-50-Servings-Image-4.jpg",
					"/wp-content/uploads/2026/07/Lemonade-Electrolytes-Powder-Plus™-50-Servings-Image-5.jpg",
					"/wp-content/uploads/2026/07/Lemonade-Electrolytes-Powder-Plus™-50-Servings-Image-6.jpg",
					"/wp-content/uploads/2026/07/Lemonade-Electrolytes-Powder-Plus™-50-Servings-Image-7.jpg"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of lemonade flavor includes 50 servings.</p>
                    <p><strong>Easy To Make</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto lemonade per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic beets, and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			},
			"watermelon-electrolytes-powder-50-servings": {
				title: "Watermelon Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Watermelon flavor includes 50 servings.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 17884, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1000mg Potassium Citrate",
					"120mg Magnesium Citrate",
					"120mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Organic Trace Minerals",
					"Organic Stevia"
				],
				gallery: [
					"/wp-content/uploads/2026/07/Watermelon-Electrolytes-Powder-Plus™-50-Servings-Image-1.jpg",
					"/wp-content/uploads/2026/07/Watermelon-Electrolytes-Powder-Plus™-50-Servings-Image-2.jpg",
					"/wp-content/uploads/2026/07/Watermelon-Electrolytes-Powder-Plus™-50-Servings-Image-3.jpg",
					"/wp-content/uploads/2026/07/Watermelon-Electrolytes-Powder-Plus™-50-Servings-Image-4.jpg",
					"/wp-content/uploads/2026/07/Watermelon-Electrolytes-Powder-Plus™-50-Servings-Image-5.jpg",
					"/wp-content/uploads/2026/07/Watermelon-Electrolytes-Powder-Plus™-50-Servings-Image-6.jpg",
					"/wp-content/uploads/2026/07/Watermelon-Electrolytes-Powder-Plus stream-50-Servings-Image-7.jpg"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Watermelon flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto Watermelon per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic beets, and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			},
			"orange-pineapple-electrolytes-powder-50-servings": {
				title: "Orange Pineapple Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Orange Pineapple flavor includes 50 servings.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 17760,
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1000mg Potassium Citrate",
					"120mg Magnesium Citrate",
					"120mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Organic Trace Minerals",
					"Organic Stevia"
				],
				gallery: [
					"/wp-content/uploads/2025/08/powdervitamin_orangepineapple_mainimages04.png",
					"/wp-content/uploads/2025/08/powdervitamin_orangepineapple_LISTING08_34a37a35988540b2964d1a6568523888.png",
					"/wp-content/uploads/2025/08/powdervitamin_orangepineapple_LISTING04.png",
					"/wp-content/uploads/2025/08/powdervitamin_orangepineapple_LISTING01.png",
					"/wp-content/uploads/2025/08/powdervitamin_orangepineapple_LISTING02.png",
					"/wp-content/uploads/2025/08/powdervitamin_orangepineapple_LISTING03.png",
					"/wp-content/uploads/2025/08/powdervitamin_orangepineapple_LISTING05.png",
					"/wp-content/uploads/2025/08/powdervitamin_orangepineapple_LISTING06.png",
					"/wp-content/uploads/2025/08/powdervitamin_orangepineapple_LISTING08.png"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Orange Pineapple flavor includes 50 servings.</p>
                    <p><strong>Easy To Make</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto Orange Pineapple per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic beets, and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "raspberry-electrolytes-powder-50-servings": {
				title: "Raspberry Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Raspberry flavor includes 50 servings.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 17770, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1000mg Potassium Citrate",
					"120mg Magnesium Citrate",
					"120mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Organic Trace Minerals",
					"Organic Stevia"
				],
				gallery: [
					"/wp-content/uploads/2026/07/Raspberry-Electrolytes-Powder-Plus™️-50-Servings-Image-1.jpg",
					"/wp-content/uploads/2026/07/Raspberry-Electrolytes-Powder-Plus™️-50-Servings-Image-2.jpg",
					"/wp-content/uploads/2026/07/Raspberry-Electrolytes-Powder-Plus™️-50-Servings-Image-3.jpg",
					"/wp-content/uploads/2026/07/Raspberry-Electrolytes-Powder-Plus™️-50-Servings-Image-4.jpg",
					"/wp-content/uploads/2026/07/Raspberry-Electrolytes-Powder-Plus™️-50-Servings-Image-5.jpg",
					"/wp-content/uploads/2026/07/Raspberry-Electrolytes-Powder-Plus™️-50-Servings-Image-6.jpg",
					"/wp-content/uploads/2026/07/Raspberry-Electrolytes-Powder-Plus™️-50-Servings-Image-7.jpg",
					"/wp-content/uploads/2026/07/Raspberry-Electrolytes-Powder-Plus™️-50-Servings-Image-8.png",
					"/wp-content/uploads/2026/07/Raspberry-Electrolytes-Powder-Plus™️-50-Servings-Image-9.jpg"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Raspberry flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto Raspberry per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic beets, and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "raspberry-lemonade-electrolytes-powder-50-servings": {
				title: "Raspberry Lemonade Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This sugar-free Raspberry lemonade blend is specifically formulated for clean keto-friendly hydration without artificial additives or fillers. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 17780, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"120mg Magnesium Glycinate",
					"500mg Real Himalayan Salt",
					"Zero Sugar / Zero Carbs"
				],
				gallery: [
					"/wp-content/uploads/2025/08/powdervitaminRaspberryLemonadeLISTING07.png",
					"/wp-content/uploads/2025/08/powdervitaminRaspberryLemonadeLISTING01.png",
					"/wp-content/uploads/2025/08/powdervitaminRaspberryLemonadeLISTING02.png",
					"/wp-content/uploads/2025/08/powdervitaminRaspberryLemonadeLISTING03.png",
					"/wp-content/uploads/2025/08/powdervitaminRaspberryLemonadeLISTING04.png",
					"/wp-content/uploads/2025/08/powdervitaminRaspberryLemonadeLISTING05.png",
					"/wp-content/uploads/2025/08/powdervitaminRaspberryLemonadeLISTING06.png",
					"/wp-content/uploads/2025/08/powdervitaminRaspberryLemonadeLISTING07_4ff9089393f94452a1f818b24cab668c.png",
					"/wp-content/uploads/2025/08/powdervitaminRaspberryLemonadeLISTING08.png"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Raspberry lemonade flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto Raspberry lemonade per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic beets, and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "mango-passionfruit-electrolytes-powder-50-servings": {
				title: "Mango Passionfruit Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This sugar-free Mango Passionfruit blend is specifically formulated for clean keto-friendly hydration without artificial additives or fillers. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 17751, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"120mg Magnesium Citrate",
					"120mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Organic Turmeric",
					"Organic Stevia"
				],
				gallery: [
					"/wp-content/uploads/2025/08/powdervitamin_mangopassionfruit_mainimages03.png",
					"/wp-content/uploads/2025/08/powdervitamin_mangopassionfruit_LISTING08.png",
					"/wp-content/uploads/2025/08/powdervitamin_mangopassionfruit_LISTING01.png",
					"/wp-content/uploads/2025/08/powdervitamin_mangopassionfruit_LISTING02.png",
					"/wp-content/uploads/2025/08/powdervitamin_mangopassionfruit_LISTING03.png",
					"/wp-content/uploads/2025/08/powdervitamin_mangopassionfruit_LISTING04.png",
					"/wp-content/uploads/2025/08/powdervitamin_mangopassionfruit_LISTING05.png",
					"/wp-content/uploads/2025/08/powdervitamin_mangopassionfruit_LISTING06.png"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Mango Passionfruit flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto Mango Passionfruit per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic Turmeric, and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "blueberry-grape-electrolytes-powder-50-servings": {
				title: "Blueberry Grape Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This sugar-free Blueberry Grape blend is specifically formulated for clean keto-friendly hydration without artificial additives or fillers. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 17875, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"120mg Magnesium Citrate",
					"120mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Organic Trace Minerals",
					"Organic Stevia"
				],
				gallery: [
					"/wp-content/uploads/2025/08/powdervitamin_blueberrygrape_mainimages01.png",
					"/wp-content/uploads/2025/08/powdervitamin_blueberrygrape_Listing01.png",
					"/wp-content/uploads/2025/08/powdervitamin_blueberrygrape_Listing02.png",
					"/wp-content/uploads/2025/08/powdervitamin_blueberrygrape_Listing03.png",
					"/wp-content/uploads/2025/08/powdervitamin_blueberrygrape_Listing04.png",
					"/wp-content/uploads/2025/08/powdervitamin_blueberrygrape_Listing05.png",
					"/wp-content/uploads/2025/08/powdervitamin_blueberrygrape_Listing06.png",
					"/wp-content/uploads/2025/08/powdervitamin_blueberrygrape_Listing08.png"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder –</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Blueberry Grape flavor includes 50 servings.</p>
                    <p><strong>Easy To Make –</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto Blueberry Grape per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer –</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic beets, and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder –</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated –</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "strawberry-cucumber-electrolytes-powder-50-servings": {
				title: "Strawberry Cucumber Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This sugar-free Strawberry Cucumber blend is specifically formulated for clean keto-friendly hydration without artificial additives or fillers. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 17803, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"120mg Magnesium Citrate",
					"120mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Organic Trace Minerals",
					"Organic Stevia"
				],
				gallery: [
					"/wp-content/uploads/2025/08/powdervitamin_StrawberryCucumber_listing.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberryCucumberLISTING08.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberryCucumberLISTING01.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberryCucumberLISTING02.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberryCucumberLISTING05.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberryCucumberLISTING06.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberryCucumberLISTING07.png"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of strawberry cucumber flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto strawberry cucumber per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic beets, and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "guava-kiwi-electrolytes-powder-50-servings": {
				title: "Guava Kiwi Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This sugar-free Guava Kiwi blend is specifically formulated for clean keto-friendly hydration without artificial additives or fillers. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 17834, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"120mg Magnesium Citrate",
					"120mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Organic Trace Minerals",
					"Organic Stevia"
				],
				gallery: [
					"/wp-content/uploads/2025/08/powdervitamin_guavakiwi_mainimages02.png",
					"/wp-content/uploads/2025/08/powdervitamin_guavakiwi_Listing08.png",
					"/wp-content/uploads/2025/08/powdervitamin_guavakiwi_Listing04.png",
					"/wp-content/uploads/2025/08/powdervitamin_guavakiwi_Listing01.png",
					"/wp-content/uploads/2025/08/powdervitamin_guavakiwi_Listing06.png",
					"/wp-content/uploads/2025/08/powdervitamin_guavakiwi_Listing05.png",
					"/wp-content/uploads/2025/08/powdervitamin_guavakiwi_Listing03.png",
					"/wp-content/uploads/2025/08/powdervitamin_guavakiwi_Listing02.png",
					"/wp-content/uploads/2025/08/powdervitamin_guavakiwi_EBC01.png",
					"/wp-content/uploads/2025/08/powdervitamin_guavakiwi_EBC02.png",
					"/wp-content/uploads/2025/08/powdervitamin_guavakiwi_EBC03.png",
					"/wp-content/uploads/2025/08/powdervitamin_guavakiwi_EBC04.png",
					"/wp-content/uploads/2025/08/powdervitamin_guavakiwi_EBC05.png",
					"/wp-content/uploads/2025/08/powdervitamin_guavakiwi_Listing07.png"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Guava Kiwi flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto Guava Kiwi per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic beets, and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "tangerine-pineapple-electrolytes-powder-50-servings": {
				title: "Tangerine Pineapple Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This sugar-free Tangerine Pineapple blend is specifically formulated for clean keto-friendly hydration without artificial additives or fillers. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 17824, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"120mg Magnesium Citrate",
					"120mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Organic Trace Minerals",
					"Organic Stevia"
				],
				gallery: [
					"/wp-content/uploads/2025/08/powdervitamin_TangerinePineapple_LISTING.png",
					"/wp-content/uploads/2025/08/powdervitaminTangerinePineappleLISTING01.png",
					"/wp-content/uploads/2025/08/powdervitaminTangerinePineappleLISTING02.png",
					"/wp-content/uploads/2025/08/powdervitaminTangerinePineappleLISTING03.png",
					"/wp-content/uploads/2025/08/powdervitaminTangerinePineappleLISTING04.png",
					"/wp-content/uploads/2025/08/powdervitaminTangerinePineappleLISTING05.png",
					"/wp-content/uploads/2025/08/powdervitaminTangerinePineappleLISTING06.png",
					"/wp-content/uploads/2025/08/powdervitaminTangerinePineappleLISTING07.png",
					"/wp-content/uploads/2025/08/powdervitaminTangerinePineappleLISTING08.png"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Tangerine Pineapple flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto Tangerine Pineapple per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic beets, and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "unflavored-electrolytes-powder-50-servings": {
				title: "Unflavored Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This unflavored blend is specifically formulated for clean keto-friendly hydration without artificial additives, fillers, or Stevia. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 17892, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"150mg Magnesium Citrate",
					"150mg Calcium Citrate",
					"1mg Zinc Citrate",
					"NO Stevia",
					"Zero Sugar / Zero Carbs"
				],
				gallery: [
					"/wp-content/uploads/2026/07/Unflavored-Electrolytes-Powder-Plus™️-50-Servings-Image-1.jpg",
					"/wp-content/uploads/2026/07/Unflavored-Electrolytes-Powder-Plus™️-50-Servings-Image-2.jpg",
					"/wp-content/uploads/2026/07/Unflavored-Electrolytes-Powder-Plus™️-50-Servings-Image-3.jpg",
					"/wp-content/uploads/2026/07/Unflavored-Electrolytes-Powder-Plus™️-50-Servings-Image-4.jpg",
					"/wp-content/uploads/2026/07/Unflavored-Electrolytes-Powder-Plus™️-50-Servings-Image-5.jpg",
					"/wp-content/uploads/2026/07/Unflavored-Electrolytes-Powder-Plus™️-50-Servings-Image-6.jpg",
					"/wp-content/uploads/2026/07/Unflavored-Electrolytes-Powder-Plus™️-50-Servings-Image-7.jpg",
					"/wp-content/uploads/2026/07/Unflavored-Electrolytes-Powder-Plus™️-50-Servings-Image-8.jpg",
					"/wp-content/uploads/2026/07/Unflavored-Electrolytes-Powder-Plus™️-50-Servings-Image-9.png",
					"/wp-content/uploads/2026/07/Unflavored-Electrolytes-Powder-Plus™️-50-Servings-Image-10.png"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Unflavored flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 100 20oz of refreshing keto unflavored electrolytes powder per 100g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 150mg calcium, 150mg magnesium, NO stevia, and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "grape-electrolytes-powder-50-servings": {
				title: "Grape Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This sugar-free Grape blend is specifically formulated for clean keto-friendly hydration without artificial additives or fillers. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 17862, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"120mg Magnesium Citrate",
					"120mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Organic Trace Minerals",
					"Organic Stevia"
				],
				gallery: [
					"/wp-content/uploads/2025/08/powdervitaminGrapeListing07.png",
					"/wp-content/uploads/2025/08/powdervitaminGrapeListing06.png",
					"/wp-content/uploads/2025/08/powdervitaminGrapeListing05.png",
					"/wp-content/uploads/2025/08/powdervitaminGrapeListing04.png",
					"/wp-content/uploads/2025/08/powdervitaminGrapeListing03.png",
					"/wp-content/uploads/2025/08/powdervitaminGrapeListing02.png",
					"/wp-content/uploads/2025/08/powdervitaminGrapeListing01.png",
					"/wp-content/uploads/2025/08/powdervitaminGrapeEBC01.png",
					"/wp-content/uploads/2025/08/powdervitaminGrapeEBC02.png",
					"/wp-content/uploads/2025/08/powdervitaminGrapeEBC03.png",
					"/wp-content/uploads/2025/08/powdervitaminGrapeEBC04.png",
					"/wp-content/uploads/2025/08/powdervitaminGrapeEBC05.png"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Grape flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto Grape per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic beets, and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "hibiscus-electrolytes-powder-50-servings": {
				title: "Hibiscus Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This sugar-free Hibiscus blend is specifically formulated for clean keto-friendly hydration without artificial additives or fillers. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 17849, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"120mg Magnesium Citrate",
					"120mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Organic Trace Minerals",
					"Organic Stevia"
				],
				gallery: [
					"/wp-content/uploads/2025/08/powdervitaminHibiscusListing07.png",
					"/wp-content/uploads/2025/08/powdervitaminHibiscusListing06.png",
					"/wp-content/uploads/2025/08/powdervitaminHibiscusListing05.png",
					"/wp-content/uploads/2025/08/powdervitaminHibiscusListing04.png",
					"/wp-content/uploads/2025/08/powdervitaminHibiscusListing03.png",
					"/wp-content/uploads/2025/08/powdervitaminHibiscusListing02.png",
					"/wp-content/uploads/2025/08/powdervitaminHibiscusListing01.png",
					"/wp-content/uploads/2025/08/powdervitaminHibiscusEBC01.png",
					"/wp-content/uploads/2025/08/powdervitaminHibiscusEBC02.png",
					"/wp-content/uploads/2025/08/powdervitaminHibiscusEBC03.png",
					"/wp-content/uploads/2025/08/powdervitaminHibiscusEBC04.png",
					"/wp-content/uploads/2025/08/powdervitaminHibiscusEBC05.png"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Hibiscus flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto Hibiscus per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic hibiscus, organic cinnamon, and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "strawberry-kiwi-electrolytes-powder-50-servings": {
				title: "Strawberry Kiwi Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This sugar-free Strawberry Kiwi blend is specifically formulated for clean keto-friendly hydration without artificial additives or fillers. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 17811, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"120mg Magnesium Citrate",
					"120mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Organic Trace Minerals",
					"Organic Stevia"
				],
				gallery: [
					"/wp-content/uploads/2025/08/powdervitaminStrawberrykiwiListing07.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberrykiwiListing06.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberrykiwiListing04.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberrykiwiListing05.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberrykiwiListing03.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberrykiwiListing02.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberrykiwiListing01.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberrykiwiEBC01.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberrykiwiEBC02.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberrykiwiEBC03.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberrykiwiEBC04.png",
					"/wp-content/uploads/2025/08/powdervitaminStrawberrykiwiEBC05.png"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Strawberry kiwi flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto Strawberry kiwi per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic beets, and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "strawberry-electrolytes-powder-50-servings": {
				title: "Strawberry Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This sugar-free Strawberry blend is specifically formulated for clean keto-friendly hydration without artificial additives or fillers. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 17790, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"120mg Magnesium Citrate",
					"120mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Organic Trace Minerals",
					"Organic Stevia"
				],
				gallery: [
					"/wp-content/uploads/2026/07/Strawberry-Electrolytes-Powder-Plus™-50-Servings-Image-1.jpg",
					"/wp-content/uploads/2026/07/Strawberry-Electrolytes-Powder-Plus™-50-Servings-Image-2.jpg",
					"/wp-content/uploads/2026/07/Strawberry-Electrolytes-Powder-Plus™-50-Servings-Image-3.jpg",
					"/wp-content/uploads/2026/07/Strawberry-Electrolytes-Powder-Plus™-50-Servings-Image-5.jpg",
					"/wp-content/uploads/2026/07/Strawberry-Electrolytes-Powder-Plus™-50-Servings-Image-6.jpg",
					"/wp-content/uploads/2026/07/Strawberry-Electrolytes-Powder-Plus™-50-Servings-Image-7.jpg",
					"/wp-content/uploads/2026/07/Strawberry-Electrolytes-Powder-Plus™-50-Servings-Image-9.jpg",
					"/wp-content/uploads/2026/07/Strawberry-Electrolytes-Powder-Plus™-50-Servings-Image-10.webp",
					"/wp-content/uploads/2026/07/Strawberry-Electrolytes-Powder-Plus™-50-Servings-Image-11.webp",
					"/wp-content/uploads/2026/07/Strawberry-Electrolytes-Powder-Plus™-50-Servings-Image-12.jpg"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Strawberry flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto Strawberry per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic beets, and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "black-tea-lemonade-electrolytes-powder-50-servings": {
				title: "Black Tea Lemonade Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This sugar-free Black tea lemonade blend is specifically formulated for clean keto-friendly hydration without artificial additives or fillers. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 17972, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"120mg Magnesium Citrate",
					"120mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Organic Black Tea",
					"Organic Stevia"
				],
				gallery: [
					"/wp-content/uploads/2025/08/Blacktealemonadelisting_50_07.png",
					"/wp-content/uploads/2025/08/powdervitaminelectrolytes50servingnutrition.png",
					"/wp-content/uploads/2025/08/powdervitaminblacktealemonadeelectrolytes50servings.png",
					"/wp-content/uploads/2025/08/Blacktealemonadelisting_50_01.png",
					"/wp-content/uploads/2025/08/Blacktealemonadelisting_50_03.png",
					"/wp-content/uploads/2025/08/Blacktealemonadelisting_50_02.png",
					"/wp-content/uploads/2025/08/Blacktealemonadelisting_50_04.png",
					"/wp-content/uploads/2025/08/Blacktealemonadelisting_50_05.png"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Black tea lemonade flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto Black tea lemonade per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic black tea, and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "black-tea-ginseng-electrolytes-powder-50-servings": {
				title: "Black Tea Ginseng Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This sugar-free Black tea ginseng blend is specifically formulated for clean keto-friendly hydration without artificial additives or fillers. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 18002, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"120mg Magnesium Citrate",
					"120mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Trace Minerals",
					"Organic Stevia"
				],
				gallery: [
					"/wp-content/uploads/2025/08/Blackteaginseglisting_50_07.png",
					"/wp-content/uploads/2025/08/Blackteaginseglisting_50_01.png",
					"/wp-content/uploads/2025/08/Blackteaginseglisting_50_06_4dd1e519bab84ca0a549853af02334db.png",
					"/wp-content/uploads/2025/08/powdervitaminblackteaginsengelectrolytes50servings.png",
					"/wp-content/uploads/2025/08/Blackteaginseglisting_50_03.png",
					"/wp-content/uploads/2025/08/Blackteaginseglisting_50_02.png",
					"/wp-content/uploads/2025/08/Blackteaginseglisting_50_04.png",
					"/wp-content/uploads/2025/08/Blackteaginseglisting_50_05.png"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Black tea ginseng flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto Black tea ginseng per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic black tea, organic ginseng and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "green-tea-ginseng-electrolytes-powder-50-servings": {
				title: "Green Tea Ginseng Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This sugar-free Green tea ginseng blend is specifically formulated for clean keto-friendly hydration without artificial additives or fillers. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 18039, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"120mg Magnesium Citrate",
					"120mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Trace Minerals",
					"Organic Stevia"
				],
				gallery: [
					"/wp-content/uploads/2025/08/Greenteaginseglisting_50_07.png",
					"/wp-content/uploads/2025/08/Greenteaginseglisting_50_06.png",
					"/wp-content/uploads/2025/08/Greenteaginseglisting_50_08.png",
					"/wp-content/uploads/2025/08/Greenteaginseglisting_50_05.png",
					"/wp-content/uploads/2025/08/Greenteaginseglisting_50_01.png",
					"/wp-content/uploads/2025/08/Greenteaginseglisting_50_02.png",
					"/wp-content/uploads/2025/08/Greenteaginseglisting_50_03.png",
					"/wp-content/uploads/2025/08/Greenteaginseglisting_50_04.png",
					"/wp-content/uploads/2025/08/Greenteaginseglisting_50_05_f052bacc93a44a87b4ce541710992c23.png"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Green tea ginseng flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto Green tea ginseng per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic green tea, organic ginseng and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "black-tea-hibiscus-electrolytes-powder-50-servings": {
				title: "Black Tea Hibiscus Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This sugar-free Black Tea Hibiscus blend is specifically formulated for clean keto-friendly hydration without artificial additives or fillers. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 18065, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"120mg Magnesium Citrate",
					"120mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Organic Black Tea",
					"Organic Hibiscus"
				],
				gallery: [
					"/wp-content/uploads/2025/08/Blackteahibiscuslisting_50_07.png",
					"/wp-content/uploads/2025/08/Blackteahibiscuslisting_50_06.png",
					"/wp-content/uploads/2025/08/Blackteahibiscuslisting_50_08.png",
					"/wp-content/uploads/2025/08/Blackteahibiscuslisting_50_01.png",
					"/wp-content/uploads/2025/08/Blackteahibiscuslisting_50_02.png",
					"/wp-content/uploads/2025/08/Blackteahibiscuslisting_50_03.png",
					"/wp-content/uploads/2025/08/Blackteahibiscuslisting_50_04.png",
					"/wp-content/uploads/2025/08/Blackteahibiscuslisting_50_05.png"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally, we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of Black Tea Hibiscus flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto Black Tea Hibiscus per 275g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 120mg calcium, 120mg magnesium, organic black tea, organic hibiscus and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, flavorful dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
			, "unsweetened-organic-black-tea-electrolytes-powder-50-servings": {
				title: "Unsweetened Organic Black Tea Electrolytes Powder Plus™ 50 Servings",
				description: `PowderVitamin Electrolytes Powder Plus is a high-potency hydration mix featuring 1000mg of potassium and essential minerals to support muscle recovery and daily energy. This sugar-free and stevia-free Unsweetened Black Tea blend is specifically formulated for clean keto-friendly hydration without artificial additives or fillers. It provides an easy and effective way to replenish lost nutrients and maintain optimal hydration levels throughout the day.`,
				pricing: {
					subscription_price: 21.24,
					one_time_price: 24.99,
					strikethrough_price: 24.99,
					save_label: "Save 15%"
				},
				woocommerce_product_id: 18092, // Placeholder ID
				badges: ["Best Seller", "50 Servings", "Keto Friendly"],
				includes: [
					"1,000mg Potassium Citrate",
					"150mg Magnesium Citrate",
					"150mg Calcium Citrate",
					"1mg Zinc Citrate",
					"Organic Black Tea",
					"NO Stevia"
				],
				gallery: [
					"/wp-content/uploads/2025/08/unswetenedorganicblacktealisting_50_07.png",
					"/wp-content/uploads/2025/08/organicblackteaelectrolyte50servingsfacts.png",
					"/wp-content/uploads/2025/08/unswetenedorganicblacktealisting_50_08.png",
					"/wp-content/uploads/2025/08/unswetenedorganicblacktealisting_50_05.png",
					"/wp-content/uploads/2025/08/unswetenedorganicblacktealisting_50_01.png",
					"/wp-content/uploads/2025/08/unswetenedorganicblacktealisting_50_02.png",
					"/wp-content/uploads/2025/08/unswetenedorganicblacktealisting_50_03.png",
					"/wp-content/uploads/2025/08/unswetenedorganicblacktealisting_50_04.png"
				],
				benefits: [
					{ icon: "local_shipping", label: "Free U.S. Shipping", sub: "On all bundle orders" },
					{ icon: "payments", label: "100% Money Back", sub: "No questions asked" },
					{ icon: "biotech", label: "3rd-Party Lab Tested", sub: "For purity & potency" },
					{ icon: "flag", label: "Made in USA", sub: "In GMP certified facilities" },
					{ icon: "nutrition", label: "Keto Friendly", sub: "0g Sugar, 0g Carbs" }
				],
				accordions: [
					{
						title: "Description",
						content: `<div class="space-y-4 pt-2 text-left">
                    <p><strong>Electrolyte Powder:</strong> Electrolytes Powder Plus contains 1000 mg of potassium opposed to only 250 mg in other brands. Additionally we offer a unique flavor and blend of Magnesium, Calcium, Pink Himalayan salt. Our delicious and hydrating blend of unsweetened black tea flavor includes 50 servings.</p>
                    <p><strong>Easy To Make:</strong> By stirring into flat or sparkling water, our sugar-free electrolytes powder serves up 50 20oz of refreshing keto unflavored per 125g pouch. It is a thirst-quenching recovery drink.</p>
                    <p><strong>Electrolyte Water Enhancer:</strong> Packs 1000mg potassium, 150mg calcium, 150mg magnesium, NO stevia, organic black tea and organic Vitamin C + zinc into an energy-boosting, hydration drink mix with zero calories or sugar.</p>
                    <p><strong>Clean Keto Powder:</strong> Contains No maltodextrin, fillers or additives. Enjoy guilt-free, dehydration relief by naturally replacing electrolytes lost while exercising, traveling or working-out.</p>
                    <p><strong>Keep Yourself Hydrated:</strong> Without added calories. PowderVitamin Sugar-Free Electrolyte Powder Plus aids in per workout & post workout muscle recovery with potassium and essential mineral salts.</p>
                </div>`,
						open: true
					},
					{
						title: "Nutritional Facts",
						content: `<img src="//powdervitamin-zexnvghx.myshopify.com/cdn/shop/t/15/assets/pv-nutrition-facts.webp?v=36055257056570149531792622949" alt="Nutritional Facts" class="w-full h-auto">`
					},
					{
						title: "Suggested Intake",
						content: `<div class="space-y-4 pt-2 text-left">
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">01</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Preparation</strong> Start with 16-20 oz of ice-cold filtered water in a shaker bottle.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">02</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Scoop</strong> Add 1 precisely leveled scoop of PreHydrate powder.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">03</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Mix</strong> Shake vigorously for 15 seconds until the solution is translucent.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">04</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">The Timing</strong> Consume within 30 minutes of waking for optimal metabolic activation.</p></div>
                    <div class="flex gap-4"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center text-deep-black" style="font-weight:900 !important;">05</span><p><strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">Pill Replacement</strong> This formula replaces traditional morning multivitamin pills.</p></div>
                </div>`
					},
					{
						title: "Shipping & Returns",
						content: `Orders ship within 24 hours via USPS Priority. Free shipping on all bundle orders over $50. Hassle-free returns within 30 days.`
					},
					{
						title: "Risk-Free Guarantee",
						content: `Don't love it? We'll refund your first order 100%, no questions asked. We stand by our formula.`
					}
				],
				reviews: {
					count: "0 Reviews",
					average: "0.0 / 5.0",
					recommendationPercentage: "0%",
					verifiedCount: "0",
					totalOrders: "0",
					amazonLabel: "",
					breakdown: [
						{ stars: 5, percentage: 0 },
						{ stars: 4, percentage: 0 },
						{ stars: 3, percentage: 0 },
						{ stars: 2, percentage: 0 },
						{ stars: 1, percentage: 0 }
					],
					items: []
				},
				faqs: [
					{ q: "What is the '7:00 AM Anchor' protocol?", a: "The 7:00 AM Anchor is our signature morning ritual. It involves consuming the PreHydrate mix within 30 minutes of waking to 'anchor' your hydration levels and metabolic function for the rest of the day." },
					{ q: "How does this optimize hydration benefits?", a: "Our doctor-formulated ratio of Potassium, Magnesium, and Sodium ensures that water actually reaches your cells instead of just passing through your system." },
					{ q: "What are your shipping and delivery times?", a: "Orders are processed within 24 hours. We ship via USPS Priority, so most domestic orders arrive within 2-4 business days." },
					{ q: "Is this product keto and fasting compatible?", a: "Yes, absolutely. Our formula contains 0g of sugar and 0g of carbohydrates, making it 100% keto-friendly and perfect for intermittent fasting." }
				],
				ugcMedia: []
			}
		};
		
		// 100-serving entries from the live 100-serving product pages (snippets/pv-product-db-100, rendered inline).
		// Every Shopify product is currently a 100-serving product; without these the router fell back to 50-serving data.
		Object.assign(MASTER_DATABASE, window.PV_PRODUCT_DB_100 || {});

		// --- AUTO-UPDATE FLAVOR TITLES & DESCRIPTIONS ---
		(function updateDatabaseEntries() {
			const coreKeywords = ['unflavored', 'strawberry', 'raspberry', 'watermelon', 'lemonade'];

			Object.keys(MASTER_DATABASE).forEach(key => {
				const item = MASTER_DATABASE[key];
				if (!item) return;

				const keyLower = key.toLowerCase();

				// Identify non-core flavors (excludes blends, teas, kiwi, cucumber, etc.)
				const isNonCore = keyLower.includes('raspberry-lemonade') ||
				                  keyLower.includes('tea') ||
				                  keyLower.includes('hibiscus') ||
				                  keyLower.includes('kiwi') ||
				                  keyLower.includes('cucumber') ||
				                  keyLower.includes('guava') ||
				                  keyLower.includes('passion') ||
				                  keyLower.includes('tangerine') ||
				                  keyLower.includes('pineapple') ||
				                  keyLower.includes('mango') ||
				                  keyLower.includes('grape') ||
				                  keyLower.includes('orange') ||
				                  !coreKeywords.some(core => keyLower.startsWith(core + '-'));

				const sizeMatch = key.match(/(\d+)-servings/i);
				const sizeText = sizeMatch ? `${sizeMatch[1]} Servings` : "50 Servings";

				let rawFlavor = key
					.replace(/-electrolytes-powder-\d+-servings/gi, '')
					.replace(/-electrolytes-\d+-servings/gi, '')
					.replace(/^organic-/gi, '')
					.replace(/-/g, ' ');

				let flavorName = rawFlavor.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

				if (keyLower.includes('unsweetened-organic-black-tea')) flavorName = "Unsweetened Organic Black Tea";
				else if (keyLower.includes('organic-black-tea')) flavorName = "Black Tea " + flavorName.replace(/Black Tea/i, '').trim();
				else if (keyLower.includes('organic-green-tea')) flavorName = "Green Tea " + flavorName.replace(/Green Tea/i, '').trim();

				if (!isNonCore) {
					// CORE FLAVOR FORMAT: PREHYDRATE™ [Flavor] Electrolytes [Size]
					item.title = `PREHYDRATE™ ${flavorName} Electrolytes ${sizeText}`;
				} else {
					// NON-CORE FLAVOR FORMAT: [Flavor] Electrolytes Powder Plus™ [Size]
					const fullFlavorTitle = `${flavorName} Electrolytes Powder Plus ${sizeText}`;

					item.title = `${flavorName} Electrolytes Powder Plus™ ${sizeText}`;
					item.description = `Waiting until you feel thirsty means your body is already running at a deficit. Real energy and focus come from building your mineral baseline before demand begins. Every scoop of ${fullFlavorTitle} delivers clean proactive preparation rich in potassium, essential magnesium, calcium, and Pink Himalayan salt.`;
				}
			});
		})();

		// --- DYNAMIC ROUTER ---
		const pathParts = window.PV_PATH.split('/');
		let rawSlug = pathParts[pathParts.length - 2] || pathParts[pathParts.length - 1];

		// Normalize flipped ordering (e.g., "50-electrolytes" -> "electrolytes-50")
		let normalizedSlug = rawSlug
			.replace(/^prehydrate-/, '')
			.replace(/(\d+[-a-z]*)-electrolytes/gi, 'electrolytes-$1');

		// Candidate key matching sequence
		const candidates = [
			normalizedSlug,
			normalizedSlug.replace('-electrolytes-', '-electrolytes-powder-'),
			normalizedSlug.replace('-electrolytes-powder-', '-electrolytes-'),
			normalizedSlug.replace('-electrolytes-', '-'),
			normalizedSlug.replace(/-\d+-servings$/, '-50-servings'),
			normalizedSlug.replace('-electrolytes-', '-electrolytes-powder-').replace(/-\d+-servings$/, '-50-servings'),
			rawSlug
		];

		// Match first candidate present in MASTER_DATABASE
		let matchedKey = candidates.find(key => MASTER_DATABASE[key]);

		const BUNDLE_CONFIG = MASTER_DATABASE[matchedKey] || MASTER_DATABASE["lemonade-electrolytes-powder-50-servings"];

		// Shopify is the source of truth for the product being viewed: its price and images replace the ported values
		// (the WordPress gallery URLs don't exist on Shopify). Copy, badges and FAQs stay as on powdervitamin.com.
		(function applyShopifyProduct(sp) {
			if (!sp || !BUNDLE_CONFIG) return;
			if (sp.images && sp.images.length) BUNDLE_CONFIG.gallery = sp.images.slice();
			if (BUNDLE_CONFIG.pricing && typeof sp.price === 'number') {
				BUNDLE_CONFIG.pricing.one_time_price = sp.price / 100;
				if (sp.compareAtPrice > sp.price) BUNDLE_CONFIG.pricing.strikethrough_price = sp.compareAtPrice / 100;
			}
			// Add to cart must add the product being viewed, not the entry the router fell back to (e.g. a 20-serving
			// page borrowing a 50-serving entry). pv-compat.js resolves a Shopify variant id directly.
			if (sp.variantId) BUNDLE_CONFIG.woocommerce_product_id = sp.variantId;

			// Theme editor settings/blocks of this template (sections/pv-product-00.liquid).
			var o = window.PV_PRODUCT_OVERRIDES || {};
			var sizeOf = function (s) { var m = String(s || '').match(/(\d+)\s*-?\s*servings/i); return m ? m[1] : ''; };
			var sameSize = matchedKey && sizeOf(matchedKey) === sizeOf(sp.title);
			if (o.copySource === 'shopify' || (o.copySource !== 'database' && !sameSize)) {
				if (sp.title) BUNDLE_CONFIG.title = sp.title;
				if (sp.description) BUNDLE_CONFIG.description = sp.description;
			}
			if (BUNDLE_CONFIG.pricing && typeof sp.price === 'number' && typeof o.subscriptionDiscount === 'number') {
				BUNDLE_CONFIG.pricing.subscription_price = Math.round(sp.price * (100 - o.subscriptionDiscount) / 100) / 100;
				BUNDLE_CONFIG.pricing.save_label = 'Save ' + o.subscriptionDiscount + '%';
			}
			if (o.badges && o.badges.length) BUNDLE_CONFIG.badges = o.badges.slice();
			if (o.servingsLabel) {
				var badges = (BUNDLE_CONFIG.badges || []).slice();
				var i = badges.findIndex(function (b) { return /\d+\s*(servings|count|packets)/i.test(b); });
				if (i > -1) badges[i] = o.servingsLabel; else badges.push(o.servingsLabel);
				BUNDLE_CONFIG.badges = badges;
			}
			if (o.includes && o.includes.length) BUNDLE_CONFIG.includes = o.includes.slice();
			if (o.benefits && o.benefits.length) BUNDLE_CONFIG.benefits = o.benefits.slice();
			if (o.faqs && o.faqs.length) BUNDLE_CONFIG.faqs = o.faqs.slice();
			if (o.accordions && o.accordions.length) BUNDLE_CONFIG.accordions = o.accordions.slice();
			// Product metafields (snippets/pv-product-meta.liquid) win over template settings/blocks and the built-in data.
			if (window.PVApplyProductMeta) window.PVApplyProductMeta(BUNDLE_CONFIG);
		})(window.PV_SHOPIFY_PRODUCT);
		// Elements
		const mainImg = document.getElementById('main-product-img');
		const thumbContainer = document.getElementById('gallery-thumbnails');
		const benefitsGrid = document.getElementById('benefits-grid');
		const includesList = document.getElementById('includes-list');
		const variantBadges = document.getElementById('variant-badges');
		const accordionContainer = document.getElementById('bundle-accordions');
		const reviewsFeed = document.getElementById('reviews-feed-container');
		const faqContainer = document.getElementById('faq-container');

		const displayPrice = document.getElementById('display-price');
		const strikePrice = document.getElementById('strike-price');
		const btnPriceVal = document.getElementById('btn-price-val');
		const qtyVal = document.getElementById('qty-val');

		let quantity = 1;
		let isSubscription = true;
		let currentIndex = 0;
		let isZoomEnabled = false; // New State

		// --- RENDER FUNCTIONS ---
		function checkIsCoreFlavor(productTitle) {
				if (!productTitle) return false;
				const name = productTitle.toLowerCase().trim();

				// Explicitly exclude mixed blends and tea variations
				if (name.includes('raspberry lemonade')) return false;
				if (name.includes('tea') || name.includes('hibiscus')) return false;
				if (name.includes('kiwi') || name.includes('cucumber')) return false;
				if (name.includes('guava') || name.includes('passion') || name.includes('tangerine') || name.includes('pineapple') || name.includes('mango')) return false;

				// Exact Core Flavors match (Lemonade, Watermelon, Strawberry, Raspberry, Unflavored)
				const isLemonade = name.includes('lemonade');
				const isWatermelon = name.includes('watermelon');
				const isStrawberry = name.includes('strawberry');
				const isRaspberry = name.includes('raspberry');
				const isUnflavored = name.includes('unflavored');

				return isLemonade || isWatermelon || isStrawberry || isRaspberry || isUnflavored;
			}

			function isPhysicallyInStock(data) {
				if (!data) return false;

				const isBackorder = data.is_on_backorder || data.is_backorder || data.stock_status === 'onbackorder';
				const qty = (data.stock_quantity !== undefined && data.stock_quantity !== null) ? parseInt(data.stock_quantity, 10) : null;

				if (qty !== null && qty <= 0) return false; // Stock is 0 or negative
				if (isBackorder) return false; // Item is on backorder
				if (data.in_stock === false || data.is_in_stock === false || data.stock_status === 'outofstock') return false;

				return true;
			}
		function renderPageContent() {
			// Default purchase selection to One-Time for all products
			isSubscription = false;

			// 1. URL-BASED HIGHLIGHTING LOGIC
			const pathParts = window.PV_PATH.split('/');
			const currentSlug = pathParts[pathParts.length - 2] || pathParts[pathParts.length - 1];

			// Normalize slug ordering for active UI selections
			let cleanSlug = currentSlug
				.replace(/^prehydrate-/, '')
				.replace(/(\d+[-a-z]*)-electrolytes/gi, 'electrolytes-$1');

			const slugParts = cleanSlug.includes('-electrolytes-powder-') 
				? cleanSlug.split('-electrolytes-powder-') 
				: cleanSlug.split('-electrolytes-');
			let activeFlavor = slugParts[0].replace(/-/g, ' ');
			// Some handles don't carry the flavor chip's name (the "organic-" tea handles: organic-black-tea-electrolytes-20,
			// organic-black-lemon-tea-..., organic-green-tea-ginseng-...), so no chip would match the slug. The product title
			// always names the flavor exactly as the chip does, so use it when the slug doesn't match a chip.
			const pvFlavorNames = [].map.call(document.querySelectorAll('.flavor-chip'), c => String(c.getAttribute('data-flavor') || '').toLowerCase());
			if (pvFlavorNames.indexOf(activeFlavor) < 0) {
				const titleFlavor = String((window.PV_SHOPIFY_PRODUCT && window.PV_SHOPIFY_PRODUCT.title) || '')
					.replace(/™|®/g, '').replace(/PREHYDRATE/i, '').replace(/Electrolytes/i, '').replace(/Powder Plus/i, '')
					.replace(/\d+\s*(servings?|count)/i, '').replace(/[–-]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
				if (pvFlavorNames.indexOf(titleFlavor) > -1) activeFlavor = titleFlavor;
			}
			const activeSize = slugParts[1] ? slugParts[1].replace(/-/g, ' ') : "50 servings";
			const isDark = document.documentElement.classList.contains('dark');
			const textColor = isDark ? '#ffffff' : '#0f172a';

			// RESET ALL CHIPS
			document.querySelectorAll('.flavor-chip, .size-chip').forEach(chip => {
				chip.classList.remove('active-selection', 'border-2', 'border-primary', 'bg-primary/5');
				chip.classList.add('border', 'border-primary/10');
				chip.style.removeProperty('border');
				chip.style.removeProperty('background-color');

				const textTarget = chip.querySelector('span') ? chip.querySelector('span') : chip;
				textTarget.style.removeProperty('color');
				textTarget.style.removeProperty('font-weight');
				if (chip.classList.contains('flavor-chip') && chip.querySelector('span')) {
					chip.querySelector('span').classList.add('text-slate-500');
				}
			});

			// HIGHLIGHT FLAVOR CHIP
			document.querySelectorAll('.flavor-chip').forEach(chip => {
				const text = (chip.querySelector('span') ? chip.querySelector('span').innerText : chip.innerText).toLowerCase().trim();

				if (text === activeFlavor) {
					chip.classList.add('active-selection');
					chip.classList.remove('border-primary/10');
					chip.style.setProperty('border', '2px solid var(--pv-primary)', 'important');
					chip.style.setProperty('background-color', 'rgba(var(--pv-primary-rgb), 0.05)', 'important');
					const target = chip.querySelector('span') ? chip.querySelector('span') : chip;
					target.classList.remove('text-slate-500');
					target.style.setProperty('color', textColor, 'important');
					target.style.setProperty('font-weight', '900', 'important');
					chip.style.setProperty('font-weight', '900', 'important');

					if (chip.closest('#extra-flavors')) {
						const extraContainer = document.getElementById('extra-flavors');
						const viewMoreBtn = document.getElementById('view-more-flavors');
						if (extraContainer) extraContainer.classList.remove('hidden');
						if (viewMoreBtn) {
							viewMoreBtn.querySelector('span:first-child').innerText = 'View Less';
							viewMoreBtn.querySelector('.material-symbols-outlined').style.transform = 'rotate(180deg)';
						}
					}
				}
			});

			// "Select Flavor" label: show the flavor of the product being viewed (it was static markup that always said Lemonade).
			const pvFlavorLabel = document.getElementById('selected-flavor-label');
			const pvActiveChip = document.querySelector('.flavor-chip.active-selection');
			if (pvFlavorLabel && pvActiveChip) pvFlavorLabel.textContent = pvActiveChip.getAttribute('data-flavor') || pvActiveChip.textContent.trim();

			// HIGHLIGHT SIZE CHIP
			document.querySelectorAll('.size-chip').forEach(chip => {
				const text = chip.innerText.toLowerCase().trim();
				if (text === activeSize) {
					chip.classList.add('active-selection');
					chip.classList.remove('border-primary/10');
					chip.style.setProperty('border', '2px solid var(--pv-primary)', 'important');
					chip.style.setProperty('background-color', 'rgba(var(--pv-primary-rgb), 0.05)', 'important');
					chip.style.setProperty('color', textColor, 'important');
					chip.style.setProperty('font-weight', '900', 'important');
				}
			});

			// 2. POPULATE TEXT & PRODUCT DATA
			const flavorDisplayName = activeFlavor ? (activeFlavor.charAt(0).toUpperCase() + activeFlavor.slice(1)) : "";
			
			// Update browser tab title to match processed product title
			document.title = BUNDLE_CONFIG.title;

			const breadcrumbTitle = document.getElementById('breadcrumb-title');
			if (breadcrumbTitle) breadcrumbTitle.innerText = BUNDLE_CONFIG.title;
			
			document.querySelectorAll('.bundle-title-target').forEach(el => el.innerText = BUNDLE_CONFIG.title);
			
			const bundleTitleEl = document.getElementById('bundle-title');
			if (bundleTitleEl) bundleTitleEl.innerText = BUNDLE_CONFIG.title;

			const bundleDesc = document.getElementById('bundle-desc');
			if (bundleDesc) bundleDesc.innerText = BUNDLE_CONFIG.description;

			fetch(`/wp-json/wc/store/v1/products?slug=${window.PV_PATH.split('/products/')[1]?.replace(/\/$/, '')}`)
				.then(r => r.json())
				.then(data => {
					const reviewCountEl = document.getElementById('review-count-text');
					const reviewCountElMobile = document.getElementById('review-count-text-mobile');
					const product = Array.isArray(data) ? data[0] : null;
					const countText = product ? `${parseInt(product.review_count || 0, 10)} Reviews` : BUNDLE_CONFIG.reviews.count;

					if (reviewCountEl) reviewCountEl.innerText = countText;
					if (reviewCountElMobile) reviewCountElMobile.innerText = countText;
				}).catch(() => {});

			const activePrice = isSubscription ? BUNDLE_CONFIG.pricing.subscription_price : BUNDLE_CONFIG.pricing.one_time_price;

			document.querySelectorAll('.save-badge-target').forEach(el => el.innerText = BUNDLE_CONFIG.pricing.save_label);
			document.querySelectorAll('.display-price-target').forEach(el => el.innerText = `$${activePrice}`);
			document.querySelectorAll('.strike-price-target').forEach(el => el.innerText = `$${BUNDLE_CONFIG.pricing.strikethrough_price}`);

			const saveBadge = document.getElementById('save-badge');
			if (saveBadge) saveBadge.innerText = BUNDLE_CONFIG.pricing.save_label;

			const displayPrice = document.getElementById('display-price');
			if (displayPrice) displayPrice.innerText = `$${activePrice}`;

			const strikePrice = document.getElementById('strike-price');
			if (strikePrice) strikePrice.innerText = `$${BUNDLE_CONFIG.pricing.strikethrough_price}`;

			const subPriceVal = document.getElementById('sub-price-val');
			if (subPriceVal) subPriceVal.innerText = `$${BUNDLE_CONFIG.pricing.subscription_price}`;
			
			const otPriceVal = document.getElementById('ot-price-val');
			if (otPriceVal) otPriceVal.innerText = `$${BUNDLE_CONFIG.pricing.one_time_price}`;

			const ratingAvg = document.getElementById('rating-avg');
			if (ratingAvg) ratingAvg.innerText = BUNDLE_CONFIG.reviews.average;

			const amazonLabel = document.getElementById('amazon-rating-label');
			if (amazonLabel) amazonLabel.innerText = BUNDLE_CONFIG.reviews.amazonLabel;

			const statVerified = document.getElementById('stat-verified');
			if (statVerified) statVerified.innerText = BUNDLE_CONFIG.reviews.verifiedCount;

			const statOrders = document.getElementById('stat-orders');
			if (statOrders) statOrders.innerText = BUNDLE_CONFIG.reviews.totalOrders;

			// RENDER THUMBNAILS
			if (thumbContainer) {
				thumbContainer.innerHTML = BUNDLE_CONFIG.gallery.map((src, i) => `
					<div role="button" data-index="${i}" class="gallery-thumb flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 aspect-square rounded-lg border border-primary/10 overflow-hidden opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
						<img class="w-full h-full object-cover" src="${src}"/>
					</div>
				`).join('');
			}

			// RENDER BENEFITS (DESKTOP)
			const benefitsGridDesktop = document.getElementById('benefits-grid-desktop');
			if (benefitsGridDesktop) {
				benefitsGridDesktop.innerHTML = BUNDLE_CONFIG.benefits.map(b => `
					<div class="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50/80 dark:bg-white/5 border border-primary/15 transition-all hover:border-primary/30">
						<div class="w-7 h-7 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0">
							<span class="material-symbols-outlined text-primary text-base icon-green-forced" style="color: var(--pv-primary) !important;">${b.icon}</span>
						</div>
						<div class="text-left">
							<p class="text-[11px] font-black uppercase tracking-wider text-slate-900 dark:text-white leading-tight" style="font-weight:900 !important;">${b.label}</p>
							<p class="text-[9px] text-slate-500 leading-tight">${b.sub}</p>
						</div>
					</div>
				`).join('');
			}

			// RENDER BENEFITS (MOBILE)
			const benefitsGridMobile = document.getElementById('benefits-grid-mobile');
			if (benefitsGridMobile) {
				const topThree = BUNDLE_CONFIG.benefits.slice(0, 3);
				const bottomTwo = BUNDLE_CONFIG.benefits.slice(3, 5);

				benefitsGridMobile.innerHTML = `
					<div class="grid grid-cols-3 gap-1.5 sm:gap-2">
						${topThree.map(b => `
							<div class="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-lg bg-slate-50/80 dark:bg-white/5 border border-primary/15 transition-all hover:border-primary/30">
								<div class="w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0">
									<span class="material-symbols-outlined text-primary text-sm sm:text-base icon-green-forced" style="color: var(--pv-primary) !important;">${b.icon}</span>
								</div>
								<div class="text-center sm:text-left">
									<p class="text-[9px] sm:text-[11px] font-black uppercase tracking-wider text-slate-900 dark:text-white leading-tight" style="font-weight:900 !important;">${b.label}</p>
									<p class="text-[8px] sm:text-[9px] text-slate-500 leading-tight">${b.sub}</p>
								</div>
							</div>
						`).join('')}
					</div>

					<div class="flex justify-center gap-1.5 sm:gap-4 mt-1.5 sm:mt-2">
						${bottomTwo.map(b => `
							<div class="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-lg bg-slate-50/80 dark:bg-white/5 border border-primary/15 transition-all hover:border-primary/30 w-full sm:w-auto min-w-[110px] sm:min-w-[130px]">
								<div class="w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0">
									<span class="material-symbols-outlined text-primary text-sm sm:text-base icon-green-forced" style="color: var(--pv-primary) !important;">${b.icon}</span>
								</div>
								<div class="text-center sm:text-left">
									<p class="text-[9px] sm:text-[11px] font-black uppercase tracking-wider text-slate-900 dark:text-white leading-tight" style="font-weight:900 !important;">${b.label}</p>
									<p class="text-[8px] sm:text-[9px] text-slate-500 leading-tight">${b.sub}</p>
								</div>
							</div>
						`).join('')}
					</div>
				`;
			}

			// FALLBACK IF STANDARD BENEFITS GRID EXISTS
			const benefitsGrid = document.getElementById('benefits-grid');
			if (benefitsGrid) {
				benefitsGrid.innerHTML = BUNDLE_CONFIG.benefits.map(b => `
					<div class="flex items-center gap-4">
						<div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><span class="material-symbols-outlined text-primary text-2xl">${b.icon}</span></div>
						<div><p class="text-sm font-black uppercase tracking-widest leading-none" style="margin-bottom:4px !important; font-weight:900 !important;">${b.label}</p><p class="text-xs text-slate-500">${b.sub}</p></div>
					</div>
				`).join('');
			}

			// RENDER BADGES & INCLUDES
			if (variantBadges) {
				variantBadges.innerHTML = BUNDLE_CONFIG.badges.map(b => `
					<span class="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/30 text-slate-900 dark:text-white font-black text-[9px] sm:text-[10px] uppercase tracking-wider shadow-sm" style="font-weight:900 !important;">
						<span class="w-1.5 h-1.5 rounded-full bg-primary" style="background-color: var(--pv-primary) !important;"></span>
						${b}
					</span>
				`).join('');
			}

			if (includesList) {
				includesList.innerHTML = BUNDLE_CONFIG.includes.map(inc => `
					<li class="flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-md sm:rounded-lg bg-slate-50 dark:bg-white/5 border border-primary/15 transition-all shadow-sm">
						<span class="material-symbols-outlined text-primary text-[10px] sm:text-xs flex-shrink-0 icon-green-forced" style="color:var(--pv-primary) !important;">check_circle</span>
						<span class="font-bold text-[10px] sm:text-[11px] text-slate-900 dark:text-slate-100" style="font-weight:700 !important;">${inc}</span>
					</li>
				`).join('');
			}

			// OVERRIDE FIRST ACCORDION (DESCRIPTION) WITH STYLED CARDS
			const styledDescriptionContent = `
				<div class="space-y-2 sm:space-y-2.5 pt-0.5 text-left">
					<!-- Card 1 -->
					<div class="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-slate-50 dark:bg-white/5 border border-primary/20 shadow-sm hover:border-primary/40 transition-all">
						<div class="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
							<span class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 green-text-badge text-[10px] sm:text-xs font-black flex items-center justify-center border border-primary/30" style="color: var(--pv-primary) !important; font-weight:900 !important;">100</span>
							<h4 class="font-bold text-[11px] sm:text-sm text-slate-900 dark:text-white uppercase tracking-wider" style="font-weight:800 !important;">100 Days of Optimal Daily Value</h4>
						</div>
						<p class="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium pl-0 sm:pl-8">
							Stop buying short-term fixes and start supporting long-term daily performance. PREHYDRATE™ gives you 50 servings of clean electrolyte preparation per pouch. Designed for athletes, active professionals, and daily health seekers, this high-volume format delivers maximum daily value to keep your mineral reservoir full every single day.
						</p>
					</div>

					<!-- Card 2 -->
					<div class="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-slate-50 dark:bg-white/5 border border-primary/20 shadow-sm hover:border-primary/40 transition-all space-y-1.5 sm:space-y-2">
						<div class="flex items-center gap-1.5 sm:gap-2">
							<span class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 green-text-badge text-[10px] sm:text-xs font-black flex items-center justify-center border border-primary/30" style="color: var(--pv-primary) !important; font-weight:900 !important;">+</span>
							<h4 class="font-bold text-[11px] sm:text-sm text-slate-900 dark:text-white uppercase tracking-wider" style="font-weight:800 !important;">The Electrolytes Powder Plus Difference</h4>
						</div>
						<p class="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium pl-0 sm:pl-8">
							Traditional sports drinks offer minimal potassium and hide behind excess sugar. <strong class="text-slate-900 dark:text-white" style="font-weight:700 !important;">${flavorDisplayName} PREHYDRATE™</strong> elevates your standard mix into a clean finish prehydration mix:
						</p>
						<div class="space-y-1 sm:space-y-1.5 pl-0 sm:pl-8">
							<div class="flex items-start gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg bg-white/70 dark:bg-black/30 border border-primary/15 text-[10px] sm:text-xs">
								<span class="text-primary font-black text-xs sm:text-sm leading-none mt-0.5" style="color: var(--pv-primary) !important;">•</span>
								<p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-bold" style="font-weight:700 !important;">Rich in Potassium:</strong> Formulated with 1000mg of potassium citrate per serving to outperform standard hydration packets.</p>
							</div>
							<div class="flex items-start gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg bg-white/70 dark:bg-black/30 border border-primary/15 text-[10px] sm:text-xs">
								<span class="text-primary font-black text-xs sm:text-sm leading-none mt-0.5" style="color: var(--pv-primary) !important;">•</span>
								<p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-bold" style="font-weight:700 !important;">Full Mineral Spectrum:</strong> Balanced with essential magnesium, calcium, and Pink Himalayan salt for comprehensive cellular support.</p>
							</div>
							<div class="flex items-start gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg bg-white/70 dark:bg-black/30 border border-primary/15 text-[10px] sm:text-xs">
								<span class="text-primary font-black text-xs sm:text-sm leading-none mt-0.5" style="color: var(--pv-primary) !important;">•</span>
								<p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-bold" style="font-weight:700 !important;">Clean Mix Pure Quality:</strong> Naturally refreshing flavor with zero sugar, zero maltodextrin, and zero artificial additives. Made completely sugar free and keto friendly.</p>
							</div>
						</div>
					</div>

					<!-- Card 3 -->
					<div class="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-slate-50 dark:bg-white/5 border border-primary/20 shadow-sm hover:border-primary/40 transition-all">
						<div class="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
							<span class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 green-text-badge text-[10px] sm:text-xs font-black flex items-center justify-center border border-primary/30" style="color: var(--pv-primary) !important; font-weight:900 !important;">4X</span>
							<h4 class="font-bold text-[11px] sm:text-sm text-slate-900 dark:text-white uppercase tracking-wider" style="font-weight:800 !important;">How Our Potassium-Rich Formula Outperforms Standard Packets</h4>
						</div>
						<p class="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium pl-0 sm:pl-8">
							Most standard electrolyte packets only deliver 250mg of potassium and rely on sugar to force absorption. PREHYDRATE™ provides four times the potassium baseline without added calories or sugar crashes. Building a deep mineral baseline before activity protects your physical stamina, eliminates muscle cramps, and prevents afternoon brain fog before demand even starts.
						</p>
					</div>

					<!-- Card 4 -->
					<div class="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-slate-50 dark:bg-white/5 border border-primary/20 shadow-sm hover:border-primary/40 transition-all">
						<div class="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
							<span class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 green-text-badge text-[10px] sm:text-xs font-black flex items-center justify-center border border-primary/30" style="color: var(--pv-primary) !important; font-weight:900 !important;">✓</span>
							<h4 class="font-bold text-[11px] sm:text-sm text-slate-900 dark:text-white uppercase tracking-wider" style="font-weight:800 !important;">Packaging Evolution Reassurance</h4>
						</div>
						<p class="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium pl-0 sm:pl-8">
							You may notice a fresh new look landing on your doorstep as we officially transition our packaging to reflect our PREHYDRATE™ mindset. While the outside pouch design looks clean and updated, rest assured the formula inside remains identical: the exact same quality, taste, and clean ingredients you trust every day.
						</p>
					</div>
				</div>
			`;

			if (BUNDLE_CONFIG.accordions && BUNDLE_CONFIG.accordions[0]) {
				BUNDLE_CONFIG.accordions[0].content = styledDescriptionContent;
			}

			// RENDER ACCORDIONS
			if (accordionContainer) {
				accordionContainer.innerHTML = BUNDLE_CONFIG.accordions.map(acc => `
					<details class="group border-b border-primary/10" ${acc.open ? 'open' : ''}>
						<summary class="flex items-center justify-between py-3.5 cursor-pointer list-none"><span class="text-xs sm:text-sm font-black uppercase tracking-wider" style="font-family:var(--pv-font-body) !important; font-weight:900 !important;">${acc.title}</span><span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span></summary>
						<div class="pb-3.5 text-xs text-slate-600 dark:text-slate-400">${acc.content}</div>
					</details>
				`).join('');
			}

			// RENDER FAQS
			if (faqContainer) {
				faqContainer.innerHTML = BUNDLE_CONFIG.faqs.map(f => `
					<details class="group border-b border-primary/10">
						<summary class="flex items-center justify-between py-4 cursor-pointer list-none tracking-wider font-bold text-deep-black dark:text-white">
							<span class="text-xs sm:text-base uppercase" style="font-weight:700 !important;">${f.q}</span>
							<span class="material-symbols-outlined group-open:rotate-180 transition-transform" style="text-transform:none !important;">expand_more</span>
						</summary>
						<div class="pb-4 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">${f.a}</div>
					</details>
				`).join('');
			}

			renderReviews();
			initInteractiveElements();
			pvApplyChipAvailability();
			updateMainImage(0);
			updateTotals();

			// --- REAL-TIME WOOCOMMERCE STOCK CHECK & PURCHASE TYPE TOGGLE ENGINE ---

			const subEl = document.getElementById('selector-sub');
			const otEl = document.getElementById('selector-ot');
			const purchaseTypeWrapper = subEl ? subEl.parentElement.parentElement : null;

			if (purchaseTypeWrapper) purchaseTypeWrapper.style.setProperty('display', 'block', 'important');

			isSubscription = false; // Default to One-Time purchase

			const isCore = checkIsCoreFlavor(BUNDLE_CONFIG.title);

			if (subEl) {
				if (isCore) {
					subEl.style.setProperty('opacity', '1', 'important');
					subEl.style.setProperty('pointer-events', 'auto', 'important');
					subEl.style.setProperty('cursor', 'pointer', 'important');
					subEl.style.setProperty('border', '1px solid rgba(0, 0, 0, 0.1)', 'important');
					subEl.style.setProperty('background', 'transparent', 'important');
				} else {
					// Non-core flavor: Disable Monthly Subscription
					subEl.style.setProperty('opacity', '0.4', 'important');
					subEl.style.setProperty('pointer-events', 'none', 'important');
					subEl.style.setProperty('cursor', 'not-allowed', 'important');
					subEl.style.setProperty('border', '1px solid rgba(0, 0, 0, 0.05)', 'important');
					subEl.style.setProperty('background', 'transparent', 'important');
				}
				const subRadio = subEl.querySelector('input');
				if (subRadio) subRadio.checked = false;
			}

			if (otEl) {
				otEl.style.setProperty('opacity', '1', 'important');
				otEl.style.setProperty('pointer-events', 'auto', 'important');
				otEl.style.setProperty('border', '2px solid var(--pv-primary)', 'important');
				otEl.style.setProperty('background', 'rgba(var(--pv-primary-rgb), 0.05)', 'important');
				const otRadio = otEl.querySelector('input');
				if (otRadio) otRadio.checked = true;
			}

			function isPhysicallyInStock(data) {
				if (!data) return false;
				
				const isBackorder = data.is_on_backorder || data.is_backorder || data.stock_status === 'onbackorder';
				const qty = (data.stock_quantity !== undefined && data.stock_quantity !== null) ? parseInt(data.stock_quantity, 10) : null;
				
				if (qty !== null && qty <= 0) return false; // Stock is 0 or negative
				if (isBackorder) return false; // Item is on backorder
				if (data.in_stock === false || data.is_in_stock === false || data.stock_status === 'outofstock') return false;
				
				return true;
			}

			function applyStockStatusToButton(stockData) {
				const badge = document.getElementById('badge-main');
				const atcBtn = document.getElementById('atc-main') || document.getElementById('atc-main-fixed'); // pv-product-01 renames the button
				if (!atcBtn || !stockData) return;

				const qty = (stockData.stock_quantity !== undefined && stockData.stock_quantity !== null) ? parseInt(stockData.stock_quantity, 10) : null;
				// Shopify (via pv-compat.js): "continue selling when out of stock" is backorders_allowed. Pre-order only once the
				// tracked stock is zero or negative; while stock lasts it is a normal Add to Cart, and a variant that may not be
				// oversold is Notify Me at zero.
				const backordersAllowed = stockData.backorders === 'yes' || stockData.backorders === 'notify' || stockData.backorders_allowed === true;
				const isPreorder = stockData.is_on_backorder === true || stockData.is_backorder === true || stockData.stock_status === 'onbackorder' || (backordersAllowed && qty !== null && qty <= 0);
				const isInStock = (stockData.in_stock === true || stockData.is_in_stock === true || stockData.stock_status === 'instock') && (qty === null || qty > 0) && !isPreorder;

				if (isInStock) {
					if (badge) {
						badge.innerText = 'In Stock';
						badge.className = 'bg-primary text-deep-black font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest block';
						badge.style.removeProperty('display');
					}
					atcBtn.style.opacity = '1';
					atcBtn.style.pointerEvents = 'auto';
					atcBtn.setAttribute('data-state', 'instock');
					atcBtn.style.backgroundColor = 'var(--pv-primary)';
					atcBtn.style.color = '#000000';
					atcBtn.innerHTML = 'ADD TO CART';
				} else if (isPreorder) {
					if (badge) {
						badge.innerText = 'Pre-Order';
						badge.className = 'bg-amber-500 text-black font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest block';
						badge.style.removeProperty('display');
					}
					atcBtn.style.opacity = '1';
					atcBtn.style.pointerEvents = 'auto';
					atcBtn.setAttribute('data-state', 'preorder');
					atcBtn.style.backgroundColor = 'var(--pv-primary)';
					atcBtn.style.color = '#000000';
					atcBtn.innerHTML = 'PREORDER NOW';
				} else {
					// Default Out of Stock (0 stock and not on backorder/negative)
					if (badge) {
						badge.innerText = 'Out of Stock';
						badge.className = 'bg-red-600 text-white font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest block';
						badge.style.removeProperty('display');
					}
					atcBtn.style.opacity = '1';
					atcBtn.style.pointerEvents = 'auto';
					atcBtn.setAttribute('data-state', 'notify');
					atcBtn.style.setProperty('background-color', 'var(--pv-primary)', 'important');
					atcBtn.style.setProperty('color', '#000000', 'important');
					// Sold out: the button is a green NOTIFY ME WHEN IN STOCK that opens the Notify Me popup (data-state notify);
					// the OUT OF STOCK badge above stays.
					atcBtn.innerHTML = 'NOTIFY ME WHEN IN STOCK';
				}
			}
			const productId = BUNDLE_CONFIG.woocommerce_product_id;

			// 1. Fetch live stock status via WooCommerce Store API
			const productSlug = window.PV_PATH.split('/products/')[1]?.replace(/\/$/, '');
			if (productSlug) {
				fetch(`/wp-json/wc/store/v1/products?slug=${productSlug}`)
					.then(r => r.json())
					.then(data => {
						const product = Array.isArray(data) ? data[0] : null;
						if (product) applyStockStatusToButton(product);
					})
					.catch(() => {});
			}

			// 2. Backup check via Admin-AJAX
			if (productId) {
				$.ajax({
					url: '/wp-admin/admin-ajax.php',
					type: 'POST',
					data: {
						action: 'get_product_stock_status',
						product_id: productId
					},
					success: function (response) {
						if (response && response.success && response.data) {
							applyStockStatusToButton(response.data);
						}
					}
				});
			}

			// REMOVE SKELETON LOADERS
			requestAnimationFrame(() => {
				document.body.classList.add('content-ready');
				document.querySelectorAll('.skeleton-loading').forEach(element => {
					element.classList.remove('skeleton-loading');
				});
				const imgWrapper = document.getElementById('image-skeleton-wrapper');
				if (imgWrapper) imgWrapper.classList.remove('skeleton-loading');
			});
		}
		// 1. New Logic to Save/Load from Local Browser Cache
		function getLocalCart() {
			const saved = localStorage.getItem('pv_custom_cart');
			return saved ? JSON.parse(saved) : { items: [], subtotal: "$0.00" };
		}

		function saveLocalCart(cartData) {
			localStorage.setItem('pv_custom_cart', JSON.stringify(cartData));
			updateTotals(cartData);
		}
		function updateTotals(cartData = null) {
				// Keep subscription enabled for all products

				const unitPrice = isSubscription ? BUNDLE_CONFIG.pricing.subscription_price : BUNDLE_CONFIG.pricing.one_time_price;

				if (displayPrice) displayPrice.innerText = `$${unitPrice}`;
				if (strikePrice) strikePrice.innerText = `$${BUNDLE_CONFIG.pricing.strikethrough_price}`;

				const atcBtn = document.getElementById('atc-main') || document.getElementById('atc-main-fixed'); // pv-product-01 renames the button
				const btnState = atcBtn ? atcBtn.getAttribute('data-state') : null;

				// Do not overwrite button text if it is in preorder, notify, outofstock, or loading state
				if (atcBtn && btnState !== 'preorder' && btnState !== 'notify' && btnState !== 'outofstock' && btnState !== 'loading') {
					atcBtn.innerHTML = 'ADD TO CART';
				}

				if (qtyVal) qtyVal.innerText = quantity;

				// Sidebar Sync Logic
				const cartSubtotalElement = document.getElementById('cart-subtotal');
				const cartItemsContainer = document.querySelector('#cart-sidebar .flex-1.overflow-y-auto');

				const data = cartData || getLocalCart();

				if (data.items && data.items.length > 0) {
					if (cartSubtotalElement) cartSubtotalElement.innerText = data.subtotal;
					if (cartItemsContainer) {
						cartItemsContainer.innerHTML = data.items.map((item, index) => {
							const itemIsCore = checkIsCoreFlavor(item.name);
							const isSubItem = itemIsCore && (item.purchase_type === 'subscription' || (item.wcsatt_scheme && item.wcsatt_scheme !== '0' && item.wcsatt_scheme !== 'none') || (item.price && String(item.price).includes('/mo')));
							const cleanPrice = String(item.price).replace(/\/mo/gi, '').trim();
							const displayPrice = isSubItem ? `${cleanPrice}/mo` : cleanPrice;

							return `
							<div class="flex gap-4 mb-6 pb-6 border-b border-primary/5">
								<div class="w-24 h-24 rounded-lg bg-primary/5 border border-primary/10 overflow-hidden flex-shrink-0">
									<img class="w-full h-full object-cover" src="${item.image}"/>
								</div>
								<div class="flex-1 text-left">
									<p class="font-bold text-sm uppercase">${item.name}</p>
									<p class="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
										${isSubItem ? 'Monthly Subscription' : 'One-Time Purchase'}
									</p>
									<div class="flex items-center justify-between mt-4">
										<span class="text-primary font-bold">${displayPrice}</span>
										<div class="flex items-center gap-3">
											<div class="flex items-center bg-slate-100 dark:bg-white/5 border border-primary/10">
												<div role="button" onclick="changeLocalQty(${index}, -1)" class="px-2 py-1 hover:text-primary cursor-pointer">-</div>
												<span class="px-2 font-bold text-xs">${item.quantity}</span>
												<div role="button" onclick="changeLocalQty(${index}, 1)" class="px-2 py-1 hover:text-primary cursor-pointer">+</div>
											</div>
											<div role="button" onclick="removeFromLocalCart(${index})" class="flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors cursor-pointer">
												<span class="material-symbols-outlined text-lg">delete</span>
											</div>
										</div>
									</div>
								</div>
							</div>`;
						}).join('');
					}
				} else {
					if (cartItemsContainer) cartItemsContainer.innerHTML = '<p class="text-center text-slate-500 py-10 uppercase font-bold text-xs">Your cart is empty</p>';
					if (cartSubtotalElement) cartSubtotalElement.innerText = "$0.00";
				}
			}
		function initZoom() {
			const $mainImg = $('#main-product-img');

			// 1. COMPLETELY WIPE PREVIOUS INSTANCE
			if ($mainImg.data('ezPlus')) {
				$mainImg.data('ezPlus').destroy(); // Official plugin method to kill listeners
			}
			$('.zoomContainer').remove();
			$mainImg.removeData('ezPlus');
			$mainImg.removeData('zoomImage');

			// Reset CSS that the plugin might have left behind
			$mainImg.css({ 'position': '', 'top': '', 'left': '', 'opacity': '' });

			// 2. ONLY INITIALIZE IF ENABLED
			if (isZoomEnabled) {
				$mainImg.ezPlus({
					zoomType: 'inner',
					cursor: 'zoom-in',
					scrollZoom: true,
					scrollZoomIncrement: 0.1,
					minZoomLevel: 1,
					maxZoomLevel: 4,
					responsive: true,
					borderSize: 0,
					loadingIcon: true,
					onZoomIn: function () {
						const btn = document.getElementById('zoom-toggle-btn');
						if (btn) btn.style.zIndex = "10001";
					},
					onZoomOut: function () {
						const btn = document.getElementById('zoom-toggle-btn');
						if (btn) btn.style.zIndex = "10001";
					}
				});

				// Ensure container is correctly layered
				setTimeout(() => {
					$('.zoomContainer').css('z-index', '9999');
				}, 50);
			}
		}

		function updateMainImage(index) {
			currentIndex = index;
			const thumbSrcs = BUNDLE_CONFIG.gallery;
			if (mainImg && thumbSrcs[currentIndex]) {
				mainImg.src = thumbSrcs[currentIndex];
				mainImg.setAttribute('data-zoom-image', thumbSrcs[currentIndex]);

				// Re-sync zoom state for the new image
				initZoom();
			}
		}
		// Tea products whose Shopify handles don't follow prehydrate-<flavor>-electrolytes-<size>: the chips build the generic
		// handle, which 404s for these seven, so send them to the existing product instead.
		const PV_TEA_HANDLE_FIXES = {
			'prehydrate-organic-black-tea-ginseng-electrolytes-50-servings': 'prehydrate-black-tea-ginseng-electrolytes-50-servings',
			'prehydrate-organic-black-tea-ginseng-electrolytes-20-servings': 'prehydrate-organic-black-tea-electrolytes-20-servings',
			'prehydrate-organic-black-tea-hibiscus-electrolytes-50-servings': 'prehydrate-black-tea-hibiscus-electrolytes-50-servings',
			'prehydrate-organic-black-tea-lemonade-electrolytes-50-servings': 'prehydrate-black-tea-lemonade-electrolytes-50-servings',
			'prehydrate-organic-black-tea-lemonade-electrolytes-20-servings': 'prehydrate-organic-black-lemon-tea-electrolytes-20-servings',
			'prehydrate-organic-green-tea-ginseng-electrolytes-50-servings': 'prehydrate-green-tea-ginseng-electrolytes-50-servings',
			'prehydrate-unsweetened-organic-black-tea-electrolytes-100-servings': 'prehydrate-unsweetened-organic-black-tea-electrolytes-powder-100-servings'
		};

		// Product handle a flavor + size chip pair routes to (same normalisation the chip click handlers use).
		function pvChipHandle(flavorText, sizeText) {
			let cleanFlavor = String(flavorText).toLowerCase().trim().replace(/\s+/g, '-');
			const cleanSize = String(sizeText).toLowerCase().trim().replace(/\s+/g, '-');
			if (cleanFlavor === "black-tea-lemonade") cleanFlavor = "organic-black-tea-lemonade";
			if (cleanFlavor === "black-tea-ginseng") cleanFlavor = "organic-black-tea-ginseng";
			if (cleanFlavor === "black-tea-hibiscus") cleanFlavor = "organic-black-tea-hibiscus";
			if (cleanFlavor === "green-tea-ginseng") cleanFlavor = "organic-green-tea-ginseng";
			if (cleanFlavor.includes("unsweetened") && cleanFlavor.includes("black-tea")) {
				cleanFlavor = "unsweetened-organic-black-tea";
			}
			const slug = `prehydrate-${cleanFlavor}-electrolytes-${cleanSize}`;
			return PV_TEA_HANDLE_FIXES[slug] || slug;
		}

		// Unavailable flavor/size chips (QA Alleina): a chip whose product is sold out is greyed out (pv-chip-soldout) but
		// stays clickable: it opens that product's page, which shows OUT OF STOCK. Only a flavor + size combination with no
		// product at all is inert (pv-chip-disabled) so a click can never reach a 404. Pre-order products (continue
		// selling at zero stock) are "available" in Shopify and look/behave like in-stock chips. Until the catalog
		// answers, chips are inert (pv-chips-pending); if the catalog fails or is empty nothing is greyed out.
		document.addEventListener('click', function (e) {
			const chip = e.target.closest && e.target.closest('.flavor-chip.pv-chip-disabled, .size-chip.pv-chip-disabled');
			if (chip) {
				e.preventDefault();
				e.stopImmediatePropagation();
			}
		}, true);

		function pvApplyChipAvailability() {
			if (!window.PV || typeof window.PV.loadCatalog !== 'function') return;
			const root = document.documentElement;
			root.classList.add('pv-chips-pending');
			const release = () => root.classList.remove('pv-chips-pending');
			const failsafe = setTimeout(release, 4000);

			window.PV.loadCatalog().then(catalog => {
				if (!Array.isArray(catalog) || !catalog.length) return;
				const byHandle = {};
				catalog.forEach(entry => { byHandle[entry.handle] = entry; });

				const activeFlavorChip = document.querySelector('.flavor-chip.active-selection');
				const activeSizeChip = document.querySelector('.size-chip.active-selection');
				const flavorText = activeFlavorChip ? activeFlavorChip.textContent.trim() : pvTeaPageFlavor();
				const sizeText = activeSizeChip ? activeSizeChip.textContent.trim() : '50 Servings';

				const mark = (chip, targetFlavor, targetSize, isCurrent) => {
					let reason = '';
					if (!isCurrent && targetFlavor) {
						const entry = byHandle[pvChipHandle(targetFlavor, targetSize)];
						if (!entry) reason = 'Unavailable';
						else if (!(entry.in_stock || entry.is_in_stock)) reason = 'Sold out';
					}
					chip.classList.toggle('pv-chip-disabled', reason === 'Unavailable');
					chip.classList.toggle('pv-chip-soldout', reason === 'Sold out');
					if (reason) {
						chip.setAttribute('aria-disabled', 'true');
						chip.setAttribute('title', reason);
					} else {
						chip.removeAttribute('aria-disabled');
						chip.removeAttribute('title');
					}
				};

				// The page's own flavor/size chips are never disabled (on organic-tea pages the flavor chip isn't highlighted, so match it by name).
				document.querySelectorAll('.flavor-chip').forEach(chip => {
					const name = chip.textContent.trim();
					mark(chip, name, sizeText, chip === activeFlavorChip || (!activeFlavorChip && name === flavorText));
				});
				document.querySelectorAll('.size-chip').forEach(chip => mark(chip, flavorText, chip.textContent.trim(), chip === activeSizeChip));
			}).catch(() => {}).then(() => {
				clearTimeout(failsafe);
				release();
			});
		}

		// FIX: Chip interaction across all containers (Div based)
		// High-Priority interaction logic for Flavors and Sizes + Redirect (With Organic Tea Mappings Fix)
		document.querySelectorAll('.flavor-chip, .size-chip').forEach(chip => {
			chip.addEventListener('click', function () {
				const isFlavor = this.classList.contains('flavor-chip');
				const selector = isFlavor ? '.flavor-chip' : '.size-chip';

				// 1. Reset selection styling
				document.querySelectorAll(selector).forEach(btn => {
					btn.classList.remove('active-selection');
					btn.style.setProperty('border', '1px solid rgba(var(--pv-primary-rgb), 0.2)', 'important');
					btn.style.setProperty('background-color', 'transparent', 'important');
					const target = btn.querySelector('span') ? btn.querySelector('span') : btn;
					target.style.setProperty('color', '#64748b', 'important');
					target.style.setProperty('font-weight', '400', 'important');
				});

				// 2. Activate clicked chip
				this.classList.add('active-selection');
				this.style.setProperty('border', '2px solid var(--pv-primary)', 'important');
				this.style.setProperty('background-color', 'rgba(var(--pv-primary-rgb), 0.05)', 'important');

				// 3. Construct URL and Redirect
				const selectedFlavor = document.querySelector('.flavor-chip.active-selection');
				const flavorText = selectedFlavor ? (selectedFlavor.querySelector('span') ? selectedFlavor.querySelector('span').innerText : selectedFlavor.innerText) : (pvTeaPageFlavor() || "Lemonade");

				const selectedSize = document.querySelector('.size-chip.active-selection');
				const sizeText = selectedSize ? selectedSize.innerText : "50 Servings";

				let cleanFlavor = flavorText.toLowerCase().trim().replace(/\s+/g, '-');
				let cleanSize = sizeText.toLowerCase().trim().replace(/\s+/g, '-');

				// Normalization Fix for Organic Tea Slugs mapping to MASTER_DATABASE keys
				if (cleanFlavor === "black-tea-lemonade") cleanFlavor = "organic-black-tea-lemonade";
				if (cleanFlavor === "black-tea-ginseng") cleanFlavor = "organic-black-tea-ginseng";
				if (cleanFlavor === "black-tea-hibiscus") cleanFlavor = "organic-black-tea-hibiscus";
				if (cleanFlavor === "green-tea-ginseng") cleanFlavor = "organic-green-tea-ginseng";
				if (cleanFlavor.includes("unsweetened") && cleanFlavor.includes("black-tea")) {
					cleanFlavor = "unsweetened-organic-black-tea";
				}

				// Global Slug Construction Variable
				let newSlug = "";

				// Structural URL override specifically for 30 Packets
				if (cleanSize === "30-packets") {
					cleanSize = "30-count";
					newSlug = `${cleanFlavor}-hydration-packets-${cleanSize}`;
				} else {
					newSlug = `prehydrate-${cleanFlavor}-electrolytes-${cleanSize}`;
				}

				const finalUrl = `/products/${PV_TEA_HANDLE_FIXES[newSlug] || newSlug}`;

				// Directly redirect to the live site URL path
				window.location.href = finalUrl;
			});
		});
		// FIX: Purchase Type selection colors
		function updateSelection(type) {
			const subLabel = document.getElementById('selector-sub');
			const otLabel = document.getElementById('selector-ot');
			const subPrice = subLabel.querySelector('#sub-price-val');
			const otPrice = otLabel.querySelector('#ot-price-val');

			if (!checkIsCoreFlavor(BUNDLE_CONFIG.title)) type = 'one-time';

			if (type === 'subscription') {
				isSubscription = true;
				// Activate Sub
				subLabel.classList.add('border-primary', 'bg-primary/5', 'border-2');
				subLabel.classList.remove('border-primary/10');
				if (subPrice) subPrice.classList.add('text-primary');
				// Deactivate OT
				otLabel.classList.remove('border-primary', 'bg-primary/5', 'border-2');
				otLabel.classList.add('border-primary/10');
				if (otPrice) otPrice.classList.remove('text-primary');
				subLabel.querySelector('input').checked = true;
			} else {
				isSubscription = false;
				// Activate OT
				otLabel.classList.add('border-primary', 'bg-primary/5', 'border-2');
				otLabel.classList.remove('border-primary/10');
				if (otPrice) otPrice.classList.add('text-primary');
				// Deactivate Sub
				subLabel.classList.remove('border-primary', 'bg-primary/5', 'border-2');
				subLabel.classList.add('border-primary/10');
				if (subPrice) subPrice.classList.remove('text-primary');
				otLabel.querySelector('input').checked = true;
			}
			updateTotals();
		}

		function toggleCart() {
			const sidebar = document.getElementById('cart-sidebar');
			const overlay = document.getElementById('cart-sidebar-overlay');
			if (sidebar) sidebar.classList.toggle('translate-x-full');
			if (overlay) {
				overlay.classList.toggle('opacity-0');
				overlay.classList.toggle('pointer-events-none');
			}
			document.body.classList.toggle('overflow-hidden');
		}

		function initInteractiveElements() {
			const atcMain = document.getElementById('atc-main');
			const selectorSub = document.getElementById('selector-sub');
			const selectorOt = document.getElementById('selector-ot');
			const qtyPlus = document.getElementById('qty-plus');
			const qtyMinus = document.getElementById('qty-minus');
			const prevBtn = document.getElementById('gallery-prev');
			const nextBtn = document.getElementById('gallery-next');
			const zoomBtn = document.getElementById('zoom-toggle-btn');
			// Flavor/Size chip interaction logic (Synced for Guest Accounts/Incognito compatibility)
			document.querySelectorAll('.flavor-chip, .size-chip').forEach(chip => {
				chip.addEventListener('click', function () {
					const isFlavor = this.classList.contains('flavor-chip');
					const selector = isFlavor ? '.flavor-chip' : '.size-chip';

					// 1. Sync selection styling
					document.querySelectorAll(selector).forEach(btn => {
						btn.classList.remove('active-selection');
						btn.style.setProperty('border', '1px solid rgba(var(--pv-primary-rgb), 0.2)', 'important');
						btn.style.setProperty('background-color', 'transparent', 'important');
						const target = btn.querySelector('span') ? btn.querySelector('span') : btn;
						target.style.setProperty('color', '#64748b', 'important');
						target.style.setProperty('font-weight', '400', 'important');
					});

					// 2. Activate clicked chip
					this.classList.add('active-selection');
					this.style.setProperty('border', '2px solid var(--pv-primary)', 'important');
					this.style.setProperty('background-color', 'rgba(var(--pv-primary-rgb), 0.05)', 'important');

					// 3. Construct URL values matching the main redirection function
					const selectedFlavor = document.querySelector('.flavor-chip.active-selection');
					const flavorText = selectedFlavor ? (selectedFlavor.querySelector('span') ? selectedFlavor.querySelector('span').innerText : selectedFlavor.innerText) : (pvTeaPageFlavor() || "Lemonade");

					const selectedSize = document.querySelector('.size-chip.active-selection');
					const sizeText = selectedSize ? selectedSize.innerText : "50 Servings";

					let cleanFlavor = flavorText.toLowerCase().trim().replace(/\s+/g, '-');
					let cleanSize = sizeText.toLowerCase().trim().replace(/\s+/g, '-');

					// Normalization Fix for Organic Tea Slugs mapping to MASTER_DATABASE keys
					if (cleanFlavor === "black-tea-lemonade") cleanFlavor = "organic-black-tea-lemonade";
					if (cleanFlavor === "black-tea-ginseng") cleanFlavor = "organic-black-tea-ginseng";
					if (cleanFlavor === "black-tea-hibiscus") cleanFlavor = "organic-black-tea-hibiscus";
					if (cleanFlavor === "green-tea-ginseng") cleanFlavor = "organic-green-tea-ginseng";
					if (cleanFlavor.includes("unsweetened") && cleanFlavor.includes("black-tea")) {
						cleanFlavor = "unsweetened-organic-black-tea";
					}

					// Global Slug Construction Variable
					let newSlug = "";

					// Structural URL override specifically for 30 Packets
					if (cleanSize === "30-packets") {
						cleanSize = "30-count";
						newSlug = `${cleanFlavor}-hydration-packets-${cleanSize}`;
					} else {
						newSlug = `prehydrate-${cleanFlavor}-electrolytes-${cleanSize}`;
					}

					const finalUrl = `/products/${PV_TEA_HANDLE_FIXES[newSlug] || newSlug}`;

					// Directly redirect to the live site URL path
					window.location.href = finalUrl;
				});
			});
			const viewMoreBtn = document.getElementById('view-more-flavors');
			const extraContainer = document.getElementById('extra-flavors');

			if (viewMoreBtn && extraContainer) {
				viewMoreBtn.addEventListener('click', () => {
					const isOpening = extraContainer.classList.contains('hidden');
					extraContainer.classList.toggle('hidden');

					// Toggle text
					viewMoreBtn.querySelector('span:first-child').innerText = isOpening ? 'View Less' : 'View More';
					// Toggle Icon rotation
					viewMoreBtn.querySelector('.material-symbols-outlined').style.transform = isOpening ? 'rotate(180deg)' : 'rotate(0deg)';
				});
			}
			if (atcMain) atcMain.addEventListener('click', function (e) {
				const isCore = checkIsCoreFlavor(BUNDLE_CONFIG.title);
				const currentState = atcMain.getAttribute('data-state');
				const buttonText = (atcMain.innerText || atcMain.textContent || '').toLowerCase();

				// TRAP OUT OF STOCK OR ALREADY LOADING STATE TO PREVENT DUPLICATE ACTION
				if (currentState === 'outofstock' || currentState === 'notify' || currentState === 'loading' || buttonText.includes('out of stock')) {
					e.preventDefault();
					e.stopPropagation();
					if (typeof e.stopImmediatePropagation === 'function') {
						e.stopImmediatePropagation();
					}
					return false;
				}

				e.preventDefault();

				// Save current text and apply active loading spinner state
				const previousText = atcMain.innerHTML;
				atcMain.setAttribute('data-state', 'loading');
				atcMain.style.pointerEvents = 'none';
				atcMain.style.opacity = '0.85';
				atcMain.innerHTML = `
					<span class="material-symbols-outlined animate-spin text-2xl">progress_activity</span>
					<span>ADDING TO CART...</span>
				`;

				let cart = getLocalCart();
				const productId = BUNDLE_CONFIG.woocommerce_product_id || 28231;

				const effectiveIsSub = isSubscription;
				const selectedScheme = effectiveIsSub ? '1_9294eaa42a216cf' : '0';

				const existingIdx = cart.items.findIndex(i =>
					i.product_id === productId &&
					(i.wcsatt_scheme || '0') === selectedScheme
				);

				if (existingIdx > -1) {
					cart.items[existingIdx].quantity += quantity;
				} else {
					cart.items.push({
						product_id: productId,
						name: BUNDLE_CONFIG.title,
						// Adds /mo for the visual sidebar cache only when subscription
						price: effectiveIsSub ? `$${BUNDLE_CONFIG.pricing.subscription_price}/mo` : `$${BUNDLE_CONFIG.pricing.one_time_price}`,
						quantity: quantity,
						image: BUNDLE_CONFIG.gallery[0],
						purchase_type: effectiveIsSub ? 'subscription' : 'one-time',
						wcsatt_scheme: selectedScheme
					});
				}

				let subtotal = 0;
				cart.items.forEach(i => {
					const purePrice = parseFloat(i.price.replace('$', '').replace('/mo', ''));
					subtotal += purePrice * i.quantity;
				});
				cart.subtotal = `$${subtotal.toFixed(2)}`;

				saveLocalCart(cart);

				// TRIGGER WOOCOMMERCE EVENT (Add with explicit scheme '0' and convert_to_sub '0' for One-Time)
				$.post('/?wc-ajax=add_to_cart', {
					product_id: productId,
					quantity: quantity,
					wcsatt_scheme: selectedScheme,
					convert_to_sub: selectedScheme
				}, function (response) {
					if (response.error) {
						console.error('Cart Error:', response);
						alert("This item is out of stock. Please check back later once it's in stock again.");
						// Reset button state on error
						atcMain.setAttribute('data-state', 'instock');
						atcMain.style.pointerEvents = 'auto';
						atcMain.style.opacity = '1';
						atcMain.innerHTML = previousText;
						return;
					}
					// Sync native fragments
					$(document.body).trigger('wc_fragment_refresh');

					// REDIRECT TO FULL CART: Wait for server confirmation before navigating
					window.location.href = "/cart";
				}).fail(function () {
					alert("Communication error. Please check your connection.");
					// Reset button state on error
					atcMain.setAttribute('data-state', 'instock');
					atcMain.style.pointerEvents = 'auto';
					atcMain.style.opacity = '1';
					atcMain.innerHTML = previousText;
				});
			});
			if (document.getElementById('close-cart')) document.getElementById('close-cart').addEventListener('click', toggleCart);
			if (document.getElementById('cart-sidebar-overlay')) document.getElementById('cart-sidebar-overlay').addEventListener('click', toggleCart);

			if (selectorSub) selectorSub.addEventListener('click', () => {
				if (!checkIsCoreFlavor(BUNDLE_CONFIG.title)) return; // Disable subscription for non-core flavors
				isSubscription = true;
				selectorSub.style.setProperty('border', '2px solid var(--pv-primary)', 'important');
				selectorSub.style.setProperty('background', 'rgba(var(--pv-primary-rgb), 0.05)', 'important');
				if (selectorOt) {
					const borderCol = document.documentElement.classList.contains('dark') ? 'rgba(var(--pv-primary-rgb), 0.1)' : 'rgba(0, 0, 0, 0.1)';
					selectorOt.style.setProperty('border', `1px solid ${borderCol}`, 'important');
					selectorOt.style.setProperty('background', 'transparent', 'important');
				}
				selectorSub.querySelector('input').checked = true;
				updateTotals();
			});

			if (selectorOt) selectorOt.addEventListener('click', () => {
				isSubscription = false;
				selectorOt.style.setProperty('border', '2px solid var(--pv-primary)', 'important');
				selectorOt.style.setProperty('background', 'rgba(var(--pv-primary-rgb), 0.05)', 'important');
				if (selectorSub) {
					const borderCol = document.documentElement.classList.contains('dark') ? 'rgba(var(--pv-primary-rgb), 0.1)' : 'rgba(0, 0, 0, 0.1)';
					selectorSub.style.setProperty('border', `1px solid ${borderCol}`, 'important');
					selectorSub.style.setProperty('background', 'transparent', 'important');
				}
				selectorOt.querySelector('input').checked = true;
				updateTotals();
			});

			if (qtyPlus) qtyPlus.addEventListener('click', () => { quantity++; updateTotals(); });
			if (qtyMinus) qtyMinus.addEventListener('click', () => { if (quantity > 1) { quantity--; updateTotals(); } });

			if (zoomBtn) {
				zoomBtn.addEventListener('click', function (e) {
					e.preventDefault();
					e.stopPropagation();
					isZoomEnabled = !isZoomEnabled;
					if (isZoomEnabled) {
						this.classList.add('active');
						this.innerHTML = '<span class="material-symbols-outlined">zoom_out</span>';
						this.style.zIndex = "10001";
					} else {
						this.classList.remove('active');
						this.innerHTML = '<span class="material-symbols-outlined">zoom_in</span>';
						this.style.zIndex = "40";
					}
					initZoom();
				});
			}

			document.querySelectorAll('.gallery-thumb').forEach(thumb => {
				thumb.addEventListener('click', () => updateMainImage(parseInt(thumb.dataset.index)));
			});

			if (prevBtn) prevBtn.addEventListener('click', () => {
				let newIdx = (currentIndex - 1 + BUNDLE_CONFIG.gallery.length) % BUNDLE_CONFIG.gallery.length;
				updateMainImage(newIdx);
			});

			if (nextBtn) nextBtn.addEventListener('click', () => {
				let newIdx = (currentIndex + 1) % BUNDLE_CONFIG.gallery.length;
				updateMainImage(newIdx);
			});
		} // This closes the initInteractiveElements function  
		function scrollCarousel(direction) {
			const carousel = document.getElementById('video-carousel');
			if (!carousel) return;
			carousel.scrollBy({ left: direction * 320, behavior: 'smooth' });
		}

		function toggleReview(btn) {
			const p = btn.previousElementSibling;
			if (!p) return;

			p.classList.toggle('line-clamp-3');
			btn.innerText = p.classList.contains('line-clamp-3') ? 'View More' : 'View Less';

			// Re-check heights just in case
			checkReviewClamping();
		}

		// State for Pagination
		let reviewPage = 1;
		const reviewsPerPage = 6;

		function renderReviews() {
			const container = document.getElementById('reviews-feed-container');
			const paginationContainer = document.getElementById('review-pagination');
			if (!container || !paginationContainer) return;

			const items = BUNDLE_CONFIG.reviews.items;
			const totalPages = Math.ceil(items.length / reviewsPerPage);
			const start = (reviewPage - 1) * reviewsPerPage;
			const end = start + reviewsPerPage;
			const paginatedItems = items.slice(start, end);

			container.innerHTML = paginatedItems.map((rev, localIdx) => {
				const globalIdx = start + localIdx;
				return `
            <div class="glass-card p-6 rounded-2xl flex flex-col h-full"> 
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <span class="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">${rev.author}</span>
                            <span class="amazon-badge">Amazon Verified</span>
                        </div>
                        <div class="flex text-primary text-sm">
                            ${'<span class="material-symbols-outlined fill-current text-[14px]" style="font-variation-settings: \'FILL\' 1 !important;">star</span>'.repeat(Math.floor(rev.stars))}
                        </div>
                    </div>
                    <span class="text-[10px] text-slate-500 font-bold uppercase tracking-widest">${rev.date}</span>
                </div>
                <h5 class="font-bold text-sm mb-2 text-slate-900 dark:text-white uppercase tracking-wider">${rev.title}</h5>
                <div class="flex-grow">
                    <p class="text-xs text-slate-600 dark:text-slate-400 italic line-clamp-3 review-text">${rev.body}</p>
                    <div role="button" class="view-more-btn hidden text-primary text-[10px] font-bold uppercase mt-1 hover:underline cursor-pointer inline-block p-0 m-0 border-none bg-transparent" onclick="toggleReview(this)">View More</div>
                </div>
                <div class="mt-6">
                    <div class="flex gap-2 mb-2">
                        ${rev.images.map((imgSrc, imgIdx) => `
                            <div class="w-12 h-12 rounded bg-slate-200 dark:bg-white/5 border border-primary/5 overflow-hidden cursor-pointer hover:border-primary/40 transition-colors">
                                <img class="w-full h-full object-cover" src="${imgSrc}" onclick="openReviewLightbox('review', ${globalIdx}, ${imgIdx})"/>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
			}).join('');

			// Pagination Reset
			let paginationHTML = '';
			paginationHTML += `<div role="button" onclick="changeReviewPage(${reviewPage - 1})" class="${reviewPage === 1 ? 'opacity-30 pointer-events-none' : 'hover:text-primary'} p-2 transition-colors cursor-pointer flex items-center justify-center min-w-0 w-auto h-auto bg-transparent border-none m-0 shadow-none"><span class="material-symbols-outlined">chevron_left</span></div>`;

			for (let i = 1; i <= totalPages; i++) {
				paginationHTML += `
            <div role="button" onclick="changeReviewPage(${i})" 
                    class="w-8 h-8 rounded-full font-bold text-xs transition-all flex items-center justify-center cursor-pointer border-none m-0 min-w-0 shadow-none ${reviewPage === i ? 'bg-primary text-black' : 'hover:bg-primary/20 text-slate-500 bg-transparent'}">
                ${i}
            </div>
        `;
			}

			paginationHTML += `<div role="button" onclick="changeReviewPage(${reviewPage + 1})" class="${reviewPage === totalPages ? 'opacity-30 pointer-events-none' : 'hover:text-primary'} p-2 transition-colors cursor-pointer flex items-center justify-center min-w-0 w-auto h-auto bg-transparent border-none m-0 shadow-none"><span class="material-symbols-outlined">chevron_right</span></div>`;

			paginationContainer.innerHTML = paginationHTML;
			checkReviewClamping();
		}
		function changeReviewPage(newPage) {
			const totalPages = Math.ceil(BUNDLE_CONFIG.reviews.items.length / reviewsPerPage);
			if (newPage < 1 || newPage > totalPages) return;

			reviewPage = newPage;
			renderReviews();

			// Scroll smoothly to top of reviews section
			document.getElementById('reviews-feed-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
		function checkReviewClamping() {
			// Use a timeout to ensure the browser has finished layout calculations
			setTimeout(() => {
				const reviews = document.querySelectorAll('.glass-card');
				reviews.forEach(card => {
					const textEl = card.querySelector('.review-text');
					const btn = card.querySelector('.view-more-btn');

					if (textEl && btn) {
						// Check if text is actually overflowing its container
						const isOverflowing = textEl.scrollHeight > textEl.clientHeight;

						if (isOverflowing) {
							btn.classList.remove('hidden');
							btn.classList.add('block');
						} else {
							// If it's already open (View Less state), don't hide it
							if (!textEl.classList.contains('line-clamp-3')) {
								btn.classList.remove('hidden');
								btn.classList.add('block');
							} else {
								btn.classList.add('hidden');
								btn.classList.remove('block');
							}
						}
					}
				});
			}, 50); // Small 50ms delay is usually enough for layout engine
		}
		// Also run on window resize to account for layout shifts
		window.addEventListener('resize', checkReviewClamping);

		document.addEventListener('DOMContentLoaded', renderPageContent);
		let currentLightboxType = 'review';
		let currentLightboxData = null; // List of media items
		let currentLightboxImgIdx = 0;
		let isLightboxZoomEnabled = false;

		function openReviewLightbox(type, indexOrRevIdx, imgIdx = 0) {
			currentLightboxType = type;
			const lightbox = document.getElementById('review-lightbox');
			const zoomBtn = document.getElementById('lightbox-zoom-btn');

			// Reset state
			isLightboxZoomEnabled = false;
			$('.zoomContainer').remove();
			$('#lightbox-main-img').removeData('ezPlus');
			if (zoomBtn) zoomBtn.classList.remove('active');
			if (zoomBtn) zoomBtn.innerHTML = '<span class="material-symbols-outlined">zoom_in</span>';

			// Map data based on source
			if (type === 'product') {
				currentLightboxData = BUNDLE_CONFIG.gallery.map(src => ({ type: 'image', src: src }));
				currentLightboxImgIdx = indexOrRevIdx;
			} else if (type === 'ugc') {
				currentLightboxData = BUNDLE_CONFIG.ugcMedia;
				currentLightboxImgIdx = indexOrRevIdx;
			} else {
				const review = BUNDLE_CONFIG.reviews.items[indexOrRevIdx];
				currentLightboxData = review.images.map(src => ({ type: 'image', src: src }));
				currentLightboxImgIdx = imgIdx;
			}

			updateLightboxImg(currentLightboxImgIdx);

			lightbox.classList.remove('hidden');
			lightbox.classList.add('flex');
			document.body.style.overflow = 'hidden';
		}

		function updateLightboxImg(idx) {
			if (idx >= currentLightboxData.length) idx = 0;
			if (idx < 0) idx = currentLightboxData.length - 1;
			currentLightboxImgIdx = idx;

			const media = currentLightboxData[currentLightboxImgIdx];
			const imgEl = document.getElementById('lightbox-main-img');
			const videoEl = document.getElementById('lightbox-video-player');
			const zoomBtn = document.getElementById('lightbox-zoom-btn');
			const thumbContainer = document.getElementById('lightbox-thumbs');

			// Toggle between Image and Video
			if (media.type === 'video') {
				imgEl.classList.add('hidden');
				videoEl.classList.remove('hidden');
				zoomBtn.classList.add('hidden');
				videoEl.querySelector('source').src = media.src;
				videoEl.load();
				$('.zoomContainer').remove();
			} else {
				videoEl.classList.add('hidden');
				videoEl.pause();
				imgEl.classList.remove('hidden');
				zoomBtn.classList.remove('hidden');
				imgEl.src = media.src;
				imgEl.setAttribute('data-zoom-image', media.src);
				if (isLightboxZoomEnabled) initLightboxZoom();
			}

			// Render Thumbnails
			thumbContainer.innerHTML = currentLightboxData.map((item, i) => `
        <div onclick="updateLightboxImg(${i})" class="lightbox-thumb w-16 h-16 flex-shrink-0 rounded border-2 cursor-pointer transition-all ${i === currentLightboxImgIdx ? 'border-primary opacity-100' : 'border-transparent opacity-50'}">
            <img src="${item.src}" class="w-full h-full object-cover rounded"/>
        </div>
    `).join('');
		}

		function initLightboxZoom() {
			const $img = $('#lightbox-main-img');
			$('.zoomContainer').remove();
			$img.removeData('ezPlus');

			if (isLightboxZoomEnabled && currentLightboxData[currentLightboxImgIdx].type === 'image') {
				$img.ezPlus({
					zoomType: 'inner',
					cursor: 'zoom-in',
					scrollZoom: true,
					scrollZoomIncrement: 0.1,
					responsive: true,
					borderSize: 0
				});
				// Ensure zoom layer stays on top of modal
				setTimeout(() => { $('.zoomContainer').css('z-index', '20005'); }, 50);
			}
		}
		// Helper to remove item from real Woo database
		function removeFromRealCart(cartItemKey) {
			$.ajax({
				type: 'POST',
				url: '/?wc-ajax=remove_from_cart',
				data: { cart_item_key: cartItemKey },
				success: function () {
					$(document.body).trigger('wc_fragment_refresh');
				}
			});
		}

		// Helper to update quantity in real Woo database
		function updateRealCartQty(cartItemKey, newQty) {
			if (newQty < 1) return removeFromRealCart(cartItemKey);
			$.ajax({
				type: 'POST',
				url: '/wp-admin/admin-ajax.php', // Using standard admin-ajax
				data: {
					action: 'update_item_quantity',
					cart_item_key: cartItemKey,
					quantity: newQty
				},
				success: function () {
					$(document.body).trigger('wc_fragment_refresh');
				}
			});
		}


		// ATTACH EVENT LISTENERS (Run these only once)
		document.addEventListener('DOMContentLoaded', () => {
			// Add Click listener to Main Gallery Image to open Lightbox
			const mainProdImg = document.getElementById('main-product-img');
			if (mainProdImg) {
				mainProdImg.addEventListener('click', (e) => {
					// Only open lightbox if zoom is NOT currently enabled (prevents conflict)
					if (!isZoomEnabled) {
						openReviewLightbox('product', currentIndex);
					}
				});
			}

			// Lightbox Controls
			const closeBtn = document.getElementById('close-lightbox');
			const nextBtn = document.getElementById('lightbox-next');
			const prevBtn = document.getElementById('lightbox-prev');
			const lZoomBtn = document.getElementById('lightbox-zoom-btn');

			if (closeBtn) closeBtn.onclick = () => {
				document.getElementById('review-lightbox').classList.add('hidden');
				$('.zoomContainer').remove();
				document.body.style.overflow = '';
			};

			if (lZoomBtn) lZoomBtn.onclick = (e) => {
				e.stopPropagation();
				isLightboxZoomEnabled = !isLightboxZoomEnabled;
				lZoomBtn.innerHTML = isLightboxZoomEnabled ? '<span class="material-symbols-outlined">zoom_out</span>' : '<span class="material-symbols-outlined">zoom_in</span>';
				initLightboxZoom();
			};

			if (nextBtn) nextBtn.onclick = (e) => { e.stopPropagation(); updateLightboxImg(currentLightboxImgIdx + 1); };
			if (prevBtn) prevBtn.onclick = (e) => { e.stopPropagation(); updateLightboxImg(currentLightboxImgIdx - 1); };

			document.getElementById('review-lightbox').onclick = (e) => {
				if (e.target.id === 'review-lightbox') closeBtn.click();
			};
		});


		// 2. Optimized Listeners
		$(document.body).on('added_to_cart removed_from_cart wc_fragments_refreshed wc_fragments_loaded', function () {
			fetchRealWooCart();
		});
		$(document.body).on('added_to_cart removed_from_cart wc_fragments_refreshed', function () {
			fetchRealWooCart();
		});
		function changeLocalQty(index, delta) {
			let cart = getLocalCart();
			const item = cart.items[index];

			item.quantity += delta;
			if (item.quantity < 1) return removeFromLocalCart(index);

			let subtotal = 0;
			cart.items.forEach(i => {
				const purePrice = parseFloat(i.price.replace('$', '').replace('/mo', ''));
				subtotal += purePrice * i.quantity;
			});
			cart.subtotal = `$${subtotal.toFixed(2)}`;
			saveLocalCart(cart);

			// Sync with WooCommerce
			const itemIsCore = checkIsCoreFlavor(item.name);
			const effectiveIsSub = itemIsCore && item.purchase_type === 'subscription';
			const scheme = effectiveIsSub ? (item.wcsatt_scheme || '1_9294eaa42a216cf') : '0';

			const postData = {
				product_id: item.product_id,
				quantity: delta,
				wcsatt_scheme: scheme,
				convert_to_sub: scheme
			};

			$.post('/?wc-ajax=add_to_cart', postData, function () {
				$(document.body).trigger('wc_fragment_refresh');
			});
		}
		function removeFromLocalCart(index) {
			let cart = getLocalCart();
			const item = cart.items[index];

			// To remove an item via the 'add_to_cart' endpoint, we send the negative of its current quantity
			const negativeQty = -(item.quantity);

			// Update Local UI
			cart.items.splice(index, 1);
			let subtotal = 0;
			cart.items.forEach(i => {
				subtotal += parseFloat(i.price.replace('$', '')) * i.quantity;
			});
			cart.subtotal = `$${subtotal.toFixed(2)}`;
			saveLocalCart(cart);

			// TRIGGER WOOCOMMERCE EVENT (Removal)
			$.post('/?wc-ajax=add_to_cart', {
				product_id: item.product_id || 28231,
				quantity: negativeQty
			}, function () {
				$(document.body).trigger('wc_fragment_refresh');
			});
		}
		function fetchRealWooCart() {
			$.ajax({
				type: 'GET',
				url: '/wp-admin/admin-ajax.php',
				data: { action: 'get_custom_cart_data' },
				success: function (response) {
					if (response.success && response.data.items.length > 0) {
						// Ensure non-core flavors are strictly forced to One-Time Purchase
						response.data.items.forEach(item => {
							if (!checkIsCoreFlavor(item.name)) {
								item.purchase_type = 'one-time';
								item.wcsatt_scheme = '0';
								if (item.price) item.price = String(item.price).replace(/\/mo/gi, '').trim();
							}
						});
						localStorage.setItem('pv_custom_cart', JSON.stringify(response.data));
						updateTotals(response.data);
					}
				}
			});
		}

		// On tea pages whose handle doesn't contain the flavor chip's name (the "organic-" 100/20 servings handles) no flavor
		// chip is selected; read the flavor from the page's own handle instead.
		const PV_TEA_PAGE_FLAVORS = {
			'organic black tea ginseng': 'Black Tea Ginseng',
			'organic black tea': 'Black Tea Ginseng',
			'organic black tea hibiscus': 'Black Tea Hibiscus',
			'organic black tea lemonade': 'Black Tea Lemonade',
			'organic black lemon tea': 'Black Tea Lemonade',
			'organic green tea ginseng': 'Green Tea Ginseng'
		};

		function pvTeaPageFlavor() {
			const pathParts = window.PV_PATH.split('/');
			const slug = (pathParts[pathParts.length - 2] || pathParts[pathParts.length - 1])
				.replace(/^prehydrate-/, '')
				.replace(/(\d+[-a-z]*)-electrolytes/gi, 'electrolytes-$1');
			const flavor = (slug.includes('-electrolytes-powder-') ? slug.split('-electrolytes-powder-') : slug.split('-electrolytes-'))[0].replace(/-/g, ' ');
			return PV_TEA_PAGE_FLAVORS[flavor] || null;
		}

		// 🌟 INTELLIGENT KLAVIYO ALERT ENGINE FOR PDP
		window.openSimpleModal = function (fullName) {
			const lowerName = fullName.toLowerCase();
			let detectedSize = "Standard Size";
			let cleanedFlavor = fullName;

			if (lowerName.includes("100 serving")) detectedSize = "100 Servings";
			else if (lowerName.includes("50 serving")) detectedSize = "50 Servings";
			else if (lowerName.includes("30 serving")) detectedSize = "30 Servings";
			else if (lowerName.includes("20 serving")) detectedSize = "20 Servings";
			else if (lowerName.includes("30 count") || lowerName.includes("30 packet") || lowerName.includes("packets 30")) {
				detectedSize = "30 Count Packets";
			}

			cleanedFlavor = cleanedFlavor.replace(/Electrolytes\s+Powder\s+Plus™/gi, "");
			cleanedFlavor = cleanedFlavor.replace(/Hydration\s+Packets/gi, "");
			cleanedFlavor = cleanedFlavor.replace(/Mushroom\s+Powder\s+Plus™/gi, "Mushroom");
			cleanedFlavor = cleanedFlavor.replace(/\d+\s+Servings?/gi, "");
			cleanedFlavor = cleanedFlavor.replace(/\d+\s+Count/gi, "");
			cleanedFlavor = cleanedFlavor.replace(/30\s+Packets?/gi, "");
			cleanedFlavor = cleanedFlavor.replace(/\s+/g, " ").trim();

			// What the customer selected on this page wins over the parsed product name: the active flavor chip (on the
			// "organic-" tea pages, which highlight none, the flavor read from the page handle) and the active size chip.
			const activeFlavorChip = document.querySelector('.flavor-chip.active-selection span');
			const selectedFlavor = activeFlavorChip ? activeFlavorChip.innerText.trim() : pvTeaPageFlavor();
			if (selectedFlavor) cleanedFlavor = selectedFlavor;
			const activeSizeChip = document.querySelector('.size-chip.active-selection');
			const selectedSize = activeSizeChip && activeSizeChip.innerText.match(/(\d+)\s*servings?/i);
			if (selectedSize) detectedSize = selectedSize[1] + " Servings";

			const flavorTitleEl = document.getElementById('modal-flavor-name');
			if (flavorTitleEl) {
				flavorTitleEl.innerText = cleanedFlavor;
				flavorTitleEl.setAttribute('data-extracted-flavor', cleanedFlavor);
				flavorTitleEl.setAttribute('data-extracted-size', detectedSize);
			}

			const formEl = document.getElementById('modal-form');
			if (formEl) {
				formEl.classList.remove('hidden');
				formEl.style.setProperty('display', 'block', 'important');
			}

			const successEl = document.getElementById('modal-success');
			if (successEl) {
				successEl.classList.add('hidden');
				successEl.style.setProperty('display', 'none', 'important');
			}

			const emailInput = document.getElementById('modal-email');
			if (emailInput) emailInput.value = '';

			const container = document.getElementById('simple-modal-container');
			if (container) {
				container.classList.remove('hidden');
				container.classList.add('flex');
				container.style.setProperty('display', 'flex', 'important');
				setTimeout(() => {
					container.classList.remove('opacity-0');
					const card = document.getElementById('modal-card');
					if (card) {
						card.classList.remove('scale-95');
						card.classList.add('scale-100');
					}
				}, 10);
			}
		};

		window.closeSimpleModal = function () {
			const container = document.getElementById('simple-modal-container');
			if (container) {
				const card = document.getElementById('modal-card');
				if (card) {
					card.classList.remove('scale-100');
					card.classList.add('scale-95');
				}
				container.classList.add('opacity-0');
				setTimeout(() => {
					container.classList.add('hidden');
					container.classList.remove('flex');
					container.style.setProperty('display', 'none', 'important');
				}, 300);
			}
		};

		window.handleOutsideClick = function (event) {
			const card = document.getElementById('modal-card');
			if (card && !card.contains(event.target)) {
				closeSimpleModal();
			}
		};

		let notifySubmitting = false;
		window.submitSimpleModal = function () {
			const emailInput = document.getElementById('modal-email');
			const flavorTitleEl = document.getElementById('modal-flavor-name');
			const submitBtn = document.querySelector('#modal-form button');
			const email = emailInput ? emailInput.value.trim() : '';

			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
				fireToast("VALIDATION FAILED", "Please enter a valid email address.");
				return;
			}
			// One request at a time: repeated clicks while Klaviyo answers are ignored
			if (notifySubmitting) return;
			notifySubmitting = true;
			if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '0.6'; }

			const parsedFlavor = flavorTitleEl ? (flavorTitleEl.getAttribute('data-extracted-flavor') || flavorTitleEl.innerText) : BUNDLE_CONFIG.title;
			const parsedSize = flavorTitleEl ? (flavorTitleEl.getAttribute('data-extracted-size') || "Standard Size") : "Standard Size";

			// LIVE KLAVIYO ACCOUNT KEYS
			const klaviyoPublicKey = "Yk6KWJ";
			const klaviyoListId = "XhKMSg";

			const payload = {
				data: {
					type: "subscription",
					attributes: {
						custom_source: "Product Detail Page - Back In Stock Popup",
						profile: {
							data: {
								type: "profile",
								attributes: {
									email: email,
									properties: {
										"Last_Restock_Requested_Flavor": parsedFlavor,
										"Last_Restock_Requested_Size": parsedSize
									}
								}
							}
						}
					},
					relationships: {
						list: {
							data: {
								type: "list",
								id: klaviyoListId
							}
						}
					}
				}
			};

			fetch(`https://a.klaviyo.com/client/subscriptions/?company_id=${klaviyoPublicKey}`, {
				method: "POST",
				headers: {
					"revision": "2024-10-15",
					"content-type": "application/json"
				},
				body: JSON.stringify(payload)
			})
				.then(response => {
					if (!response.ok) throw new Error('Klaviyo API Rejected Request');

					const formEl = document.getElementById('modal-form');
					if (formEl) {
						formEl.classList.add('hidden');
						formEl.style.setProperty('display', 'none', 'important');
					}

					const successEl = document.getElementById('modal-success');
					if (successEl) {
						successEl.classList.remove('hidden');
						successEl.style.setProperty('display', 'block', 'important');
					}

					fireToast("ALERT SAVED", `Subscribed to ${parsedFlavor} (${parsedSize}) alerts!`);
					setTimeout(closeSimpleModal, 2500);
				})
				.catch(err => {
					console.error("Klaviyo Alert Error:", err);
					fireToast("NETWORK ERROR", "Could not submit alert request. Please try again.");
				})
				.finally(() => {
					notifySubmitting = false;
					if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = ''; }
				});
		};

		window.fireToast = function (title, message) {
			const toast = document.getElementById('custom-toast');
			if (toast) {
				document.getElementById('toast-title').innerText = title;
				document.getElementById('toast-body').innerText = message;
				toast.classList.remove('translate-y-20', 'opacity-0');
				toast.classList.add('translate-y-0', 'opacity-100');
				setTimeout(() => {
					toast.classList.remove('translate-y-0', 'opacity-100');
					toast.classList.add('translate-y-20', 'opacity-0');
				}, 3500);
			}
		};
	