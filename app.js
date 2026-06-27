/* ==========================================================================
   CLINICAL DATASETS (SERVICES, BEFORE-AFTER, BLOGS)
   ========================================================================== */

const SERVICES_DATA = {
    acne: {
        title: "Clinical Acne & Scar Resolution",
        category: "Clinical Dermatology",
        overview: "A scientific approach to resolving active acne, preventing outbreaks, and clearing marks. We treat the disease at its root by analyzing sebum secretions, keratinization, and hormonal dynamics.",
        symptoms: [
            "Persistent blackheads, whiteheads, and microcomedones.",
            "Inflammatory papules (red bumps) and painful pustules.",
            "Deep nodular cysts that run a high risk of scarring.",
            "Post-inflammatory erythema (PIE) and red/brown spots."
        ],
        causes: [
            "Excess sebum (oil) production triggered by high androgen levels.",
            "Follicular hyperkeratinization leading to clogged pores.",
            "P. acnes bacteria colonization within the hair follicle.",
            "High glycemic diet, dairy triggers, and cortisol (stress hormones)."
        ],
        process: "The treatment starts with a digital skin analysis. Depending on severity, we prescribe a customized regimen: topical retinoids, medical comedone extraction under sterile conditions, salicylic acid chemical peels to exfoliate pores, or oral sebum regulators. Active inflammatory stages may be supported with blue light therapy.",
        benefits: [
            "Rapid clearing of active inflammatory acne.",
            "Prevents deep dermal tissue damage and permanent pit scars.",
            "Regulates oil production for long-term control.",
            "Smooths overall skin texture."
        ],
        recovery: "Peels might cause mild flaking for 2-3 days. Normal skincare can be resumed immediately. Broad-spectrum SPF 50+ is mandatory.",
        expectedResults: "Significant reduction in active lesions within 4-6 weeks. Near-complete clearance and skin stability in 3 months of consistent care.",
        faqs: [
            { q: "Will squeezing my pimples clear them?", a: "Squeezing forces inflammatory material deeper into the dermis, causing severe scarring and hyperpigmentation. Comedones should only be extracted professionally." },
            { q: "Does diet affect acne?", a: "Yes. High glycemic index foods (sugars, white bread) and excessive dairy can elevate insulin-like growth factor (IGF-1), worsening breakouts." }
        ]
    },
    pigmentation: {
        title: "Hyperpigmentation & Melasma Correction",
        category: "Clinical Dermatology",
        overview: "Clinical treatments to regulate epidermal melanin synthesis and safely eliminate dark spots, sun damage, and hormonal melasma patches.",
        symptoms: [
            "Symmetrical brown or gray-brown patches on cheeks, forehead, and upper lip.",
            "Freckles, age spots, and localized hyperpigmentation from UV exposure.",
            "Post-inflammatory hyperpigmentation (PIH) left behind by healed acne."
        ],
        causes: [
            "Overactive melanocytes (pigment-producing cells) triggered by UV radiation.",
            "Hormonal fluctuations during pregnancy, oral contraceptives, or thyroid issues.",
            "Dermal inflammation and barrier impairment."
        ],
        process: "We employ a combination of prescription tyrosinase inhibitors, advanced glycolic/lactic acid chemical peels to lift superficial pigment, and Q-Switched Nd:YAG laser sessions to shatter deep-seated dermal melanin particles.",
        benefits: [
            "Safely lightens stubborn dark patches.",
            "Restores an even, glowing skin tone.",
            "Minimizes sun spots and prevents future melanic shifts."
        ],
        recovery: "Mild redness and slight darkening of patches before they peel off in 3-5 days. Absolute sun protection using physical sunscreens is required.",
        expectedResults: "Visible fading of spots in 3-4 weeks. Severe melasma requires a structured 4-6 month maintenance program.",
        faqs: [
            { q: "Can melasma be cured permanently?", a: "Melasma can be successfully cleared and controlled, but it has a high tendency to recur if skin is exposed to direct sunlight without sun block." }
        ]
    },
    eczema: {
        title: "Chronic Dermatoses Management",
        category: "Clinical Dermatology",
        overview: "Expert management plans to soothe chronic autoimmune skin conditions, repair the lipid barrier, and achieve long-term remission.",
        symptoms: [
            "Dry, scaling, and intensely itchy skin patches (Eczema).",
            "Thick, red plaques covered with silvery scales (Psoriasis).",
            "Fissuring and bleeding in joint folds or palms."
        ],
        causes: [
            "Genetic barrier dysfunction (filaggrin deficiency).",
            "Autoimmune-mediated rapid skin cell turnover.",
            "Triggers like allergens, stress, harsh soaps, and weather changes."
        ],
        process: "Treatment focuses on barrier repair using ceramide-dominant moisturizers, topical immunomodulators, corticosteroid pulse therapy, and systemic therapies for severe autoimmune psoriasis.",
        benefits: [
            "Stops intense itching and scratch cycles.",
            "Heals skin fissures and prevents secondary bacterial infections.",
            "Reduces systemic inflammation."
        ],
        recovery: "Symptoms subside gradually. Ongoing moisturizing protocol is crucial to prevent flare-ups.",
        expectedResults: "Control of acute itching within 48 hours. Healing of scaling plaques within 2-3 weeks.",
        faqs: [
            { q: "Is eczema contagious?", a: "No. Eczema and psoriasis are chronic inflammatory conditions driven by genetics and the immune system; they cannot spread to others." }
        ]
    },
    fungal: {
        title: "Microbial & Allergic Dermatitis Therapies",
        category: "Clinical Dermatology",
        overview: "Accurate diagnosis of chronic dermatophytosis (ringworm) and allergic contact dermatitis, followed by targeted eradication therapies.",
        symptoms: [
            "Itchy, ring-shaped red rashes with raised edges (Tinea).",
            "Symmetrical peeling, scaling, or blistering in moist areas.",
            "Hives, wheals, and swollen red skin patches (Allergies)."
        ],
        causes: [
            "Fungal dermatophytes thriving in humid weather and friction.",
            "Hypersensitivity reactions to dust, metals, cosmetics, or medicines."
        ],
        process: "We perform skin scrapings for direct microscopic check. Treatment includes specific oral and topical antifungal agents, antihistamines, and identifying triggers via allergy patch tests.",
        benefits: [
            "Eradicates persistent ringworm infections.",
            "Identifies hidden contact allergens.",
            "Provides immediate relief from hives and severe itching."
        ],
        recovery: "Normal skin returns as infection clears. Maintain dry hygiene.",
        expectedResults: "Itching resolves in 3-5 days. Complete fungal clearance requires completing the full 3-6 week drug course.",
        faqs: [
            { q: "Why does my ringworm return after stopping creams?", a: "Many OTC creams contain strong steroids which suppress inflammation temporarily but allow the fungus to multiply, causing a severe rebound once stopped." }
        ]
    },
    hairfall: {
        title: "Follicular Restoration & Alopecia Therapy",
        category: "Restorative Trichology",
        overview: "A comprehensive medical approach to halt hair shedding, optimize follicle health, and treat structural hair thinning.",
        symptoms: [
            "Shedding more than 100 hair strands daily.",
            "Widening of the middle parting or visible scalp on top.",
            "Receding hairline in temples (pattern baldness)."
        ],
        causes: [
            "Genetic sensitivity to Dihydrotestosterone (DHT) causing follicle miniaturization.",
            "Nutritional deficiencies (low Ferritin, Vitamin D3, B12, Zinc).",
            "Telogen Effluvium triggered by severe stress, fever, or pregnancy."
        ],
        process: "We perform a trichoscopic scalp scan to evaluate follicle health. Treatment includes topical minoxidil, oral DHT blockers, nutritional supplements, scalp peptide serums, and micro-needling.",
        benefits: [
            "Arrests excessive daily hair shedding.",
            "Reverses follicle miniaturization.",
            "Restores shaft diameter and density."
        ],
        recovery: "Zero downtime. Slight tenderness from micro-needling resolved in 24 hours.",
        expectedResults: "Reduction in hair fall within 4-6 weeks. Visible density improvement in 3-4 months.",
        faqs: [
            { q: "Will hair fall increase when starting treatment?", a: "A transient shedding phase can occur in the first 2-3 weeks as weak hairs are pushed out to make way for new, thicker shafts. This is a positive indicator." }
        ]
    },
    prp: {
        title: "Autologous Platelet-Rich Plasma (PRP) Therapy",
        category: "Restorative Trichology",
        overview: "An advanced autologous treatment utilizing growth factors from your own blood to stimulate dormant hair follicles and thicken existing hair.",
        symptoms: [
            "Diffuse thinning across the crown.",
            "Weak, miniaturized, or baby-like hairs.",
            "Early-stage androgenetic alopecia."
        ],
        causes: [
            "Shrinking hair follicles deprived of adequate blood supply and growth triggers."
        ],
        process: "A small quantity of your blood is drawn and spun in a specialized centrifuge to isolate the platelet-rich fraction. This concentrated plasma, loaded with growth factors, is micro-injected into the thinning zones of the scalp under local anesthesia.",
        benefits: [
            "Naturally stimulates cell division in hair roots.",
            "Thickens thin hair shafts and increases overall density.",
            "Safe and drug-free with zero allergic risks."
        ],
        recovery: "Minor scalp soreness for 24-48 hours. You can wash your hair and resume normal work the next day.",
        expectedResults: "Visible reduction in shedding after 2 sessions. Significant density increase and scalp coverage after 4 sessions.",
        faqs: [
            { q: "Is PRP painful?", a: "We apply a topical numbing spray or ring block before the session, making the micro-injections extremely tolerable." }
        ]
    },
    dandruff: {
        title: "Therapeutic Trichology & Scalp Exfoliation",
        category: "Restorative Trichology",
        overview: "Clinical therapies to treat stubborn seborrheic dermatitis, regulate scalp pH, and eliminate itching and scaling.",
        symptoms: [
            "Sticky, greasy yellow scales or dry white flakes.",
            "Itchy, red, and inflamed scalp skin.",
            "Flakes falling on shoulders and eyebrows."
        ],
        causes: [
            "Overgrowth of Malassezia yeast on sebum-rich areas of the scalp.",
            "Stress, irregular washing, or using aggressive chemical products."
        ],
        process: "We prescribe antifungal shampoos containing Ketoconazole or Zinc Pyrithione, topical salicylic lotions to dissolve scaling, and perform clarifying scalp scrubs to clear oil buildup.",
        benefits: [
            "Quickly removes sticky dandruff scale accumulation.",
            "Restores a balanced, healthy scalp microbiome.",
            "Relieves persistent scalp itchiness."
        ],
        recovery: "Immediate relief from itching. Resume regular washing routines.",
        expectedResults: "Dandruff controlled within 2-3 shampoo sessions.",
        faqs: [
            { q: "Can dandruff cause hair loss?", a: "Dandruff itself doesn't cause hair loss, but the severe inflammation and scratching it triggers can weaken hair roots, leading to shedding." }
        ]
    },
    laserscar: {
        title: "Fractional CO2 Laser Resurfacing",
        category: "Advanced Laser Procedures",
        overview: "Fractional skin resurfacing to break down thick scar tissue, stimulate deep collagen synthesis, and smooth indented acne pits.",
        symptoms: [
            "Depressed rolling, boxcar, or pick-like acne scars.",
            "Uneven, rough skin texture post-acne healing.",
            "Enlarged pores and skin laxity."
        ],
        causes: [
            "Destruction of dermal collagen by past deep nodulocystic acne inflammation."
        ],
        process: "After applying a strong numbing cream, the Fractional CO2 laser delivers micro-beams of light energy deep into the dermis. This creates thousands of microscopic thermal treatment zones, triggering rapid healing and collagen remodeling.",
        benefits: [
            "Dramatically smooths deep, pitted acne scars.",
            "Tightens open pores and refines skin texture.",
            "Stimulates new, healthy collagen layers."
        ],
        recovery: "Redness, mild swelling, and grid-like micro-crusts for 5-7 days. Strict sun avoidance and moisturizing is mandatory during recovery.",
        expectedResults: "30-50% improvement in scar depth after 3 sessions. Skin continues to improve for up to 6 months post-treatment.",
        faqs: [
            { q: "Is there downtime?", a: "Yes, expect about 5 to 7 days of healing downtime where the skin looks sunburned and peels." }
        ]
    },
    laserhair: {
        title: "Precision Laser Hair Reduction (US-FDA Approved)",
        category: "Advanced Laser Procedures",
        overview: "Safe, pain-free, and permanent reduction of unwanted body hair utilizing advanced diode and triple-wavelength laser systems.",
        symptoms: [
            "Excessive, unwanted hair growth on face, arms, legs, or body.",
            "Thick hair growth caused by PCOS or hormonal imbalances.",
            "Frequent razor bumps, ingrown hairs, or strawberry skin."
        ],
        causes: [
            "Genetic hair patterns, hormonal triggers, or cosmetic choices."
        ],
        process: "The target area is shaved and chilled gel is applied. The laser handpiece is glided over the skin, emitting light energy absorbed by melanin in the hair follicle, permanently disabling its growth cycle without damaging surrounding skin.",
        benefits: [
            "Permanent reduction in hair growth and thickness.",
            "Elminates painful waxing, cuts, and ingrown hairs.",
            "Inbuilt cooling technology makes it virtually painless."
        ],
        recovery: "Mild erythema (redness) resembling a sunburn for 1-2 hours. You can resume daily activities immediately.",
        expectedResults: "60-80% reduction in hair density after 6-8 sessions spaced 4-6 weeks apart.",
        faqs: [
            { q: "Is it permanent?", a: "Yes. It permanently reduces hair growth by up to 90%. Any sparse hair that grows back over the years is extremely thin and light." }
        ]
    },
    laserrejuvenation: {
        title: "Q-Switched Laser Photo-Facial Rejuvenation",
        category: "Advanced Laser Procedures",
        overview: "Advanced photo-rejuvenation using Q-Switched Nd:YAG laser to brighten dull skin, minimize pores, and clear freckles.",
        symptoms: [
            "Dull, fatigued, or uneven skin complexion.",
            "Fine lines, superficial sun spots, and open pores.",
            "Carbon facial requests for instant glow."
        ],
        causes: [
            "UV exposure, pollution, aging, and slowed cell turnover."
        ],
        process: "We perform a gentle Q-Switch laser pass over the face, targeting melanin clusters. For carbon laser peel, a thin layer of liquid carbon is applied first, which absorbs laser energy to deep-clean pores and exfoliate dead cells.",
        benefits: [
            "Instant glow and skin brightening.",
            "Minimizes pore size and controls sebum.",
            "Clears superficial tanning and fine spots."
        ],
        recovery: "Zero downtime. A slight pinkish glow for 30 minutes. Perfect lunch-break procedure.",
        expectedResults: "Immediate freshness and smooth skin. Cumulative brightening over 3-4 sessions.",
        faqs: [
            { q: "Is it safe?", a: "Extremely safe. The Q-Switch laser operates in nanoseconds, delivering energy so fast that it breaks down pigment without burning the skin." }
        ]
    }
};

const BEFORE_AFTER_DATA = [
    {
        title: "Severe Inflammatory Acne Clearance",
        description: "Active pustules and skin redness resolved over a 3-month course of customized medical therapy and chemical peels.",
        beforeImg: "acne_before.png",
        afterImg: "acne_after.png",
        beforeLabel: "BEFORE TREATMENT",
        afterLabel: "AFTER 3 MONTHS"
    },
    {
        title: "Hair Regrowth & Density Restoration",
        description: "Grade 3 pattern hair thinning treated with 4 sessions of autologous Platelet-Rich Plasma (PRP) therapy and nutritional support.",
        beforeImg: "hair_before.png",
        afterImg: "hair_after.png",
        beforeLabel: "BEFORE PRP",
        afterLabel: "AFTER 4 SESSIONS"
    },
    {
        title: "Pigmentation & Sun Spot Fading",
        description: "Stubborn epidermal melasma cleared using advanced Q-Switched Nd:YAG laser treatments and barrier-repair topical formulations.",
        beforeImg: "pigmentation_before.png",
        afterImg: "pigmentation_after.png",
        beforeLabel: "BEFORE LASER",
        afterLabel: "AFTER 3 SESSIONS"
    }
];

const BLOG_DATA = {
    "blog-acne": {
        title: "Understanding Acne: Hormones, Diet & Effective Medical Care",
        meta: "June 14, 2026 • 5 min read",
        imageClass: "blog-acne-img",
        body: `
            <p>Acne Vulgaris is not just a cosmetic nuisance; it is a chronic inflammatory disease of the pilosebaceous unit (hair follicle and oil gland). While commonly associated with teenage years, adult acne is increasingly common due to modern lifestyles.</p>
            <h3>1. The Four Biological Steps of Acne</h3>
            <p>Acne forms due to a precise sequence of events: excess sebum production under hormonal influence, follicular hyperkeratinization (dead skin cells clogging the pore), colonization by Cutibacterium acnes bacteria, and the resulting immune inflammation response.</p>
            <h3>2. Hormonal Triggers and Cortisol</h3>
            <p>Fluctuations in androgens (male hormones present in both men and women) stimulate the sebaceous glands to produce thicker sebum. Additionally, cortisol (the stress hormone) directly binds to oil glands, triggering flare-ups before major events.</p>
            <h3>3. The Diet Connection</h3>
            <p>High glycemic index foods (processed sugars, white rice, sodas) trigger sudden spikes in insulin. This elevates Insulin-like Growth Factor 1 (IGF-1), which increases sebum production and follicular plugging. Reducing dairy and high-sugar foods can significantly support clinical treatments.</p>
            <h3>4. Modern Clinical Solutions</h3>
            <p>Effective acne treatment should be customized. It may range from topical retinoids that regulate skin cell shedding, salicylic acid peels that unclog pores, to oral sebum regulators for severe cystic acne. At Dr. Nishi Yadav clinic, we construct targeted protocols that clear active acne and prevent dark spots and scars.</p>
        `
    },
    "blog-hair": {
        title: "The Science of Hair Fall: Stress, Nutrients, and Modern Solutions",
        meta: "May 28, 2026 • 7 min read",
        imageClass: "blog-hair-img",
        body: `
            <p>Losing hair can be emotionally challenging. To treat hair fall effectively, it is essential to distinguish between temporary shedding and progressive thinning.</p>
            <h3>1. Telogen Effluvium vs. Androgenetic Alopecia</h3>
            <p>Telogen Effluvium is a temporary condition where a physical stressor (severe infection, thyroid drop, major surgery, child birth) pushes a large percentage of hair follicles into the resting (telogen) phase simultaneously. This results in heavy shedding 2-3 months after the event. Androgenetic Alopecia, or pattern thinning, is a progressive genetic condition driven by follicle sensitivity to DHT.</p>
            <h3>2. Nutritional Deficiencies</h3>
            <p>Hair is made of keratin, a protein. Deficiencies in iron (low serum ferritin), Vitamin D3, Vitamin B12, and Zinc deprive the follicle of oxygen and vital building blocks, causing premature shedding and weak, thin shafts.</p>
            <h3>3. Platelet-Rich Plasma (PRP) Therapy</h3>
            <p>PRP is one of the most effective medical therapies to combat hair thinning. By concentrating platelets from your own blood, we create a solution rich in growth factors (VEGF, PDGF). Micro-injecting this into the scalp stimulates cellular regeneration, extends the active growth (anagen) phase of hair, and thickens shrinking follicles.</p>
        `
    },
    "blog-skincare": {
        title: "Summer Skincare Guidelines: Protect Your Skin Barrier",
        meta: "April 12, 2026 • 4 min read",
        imageClass: "blog-skincare-img",
        body: `
            <p>High temperatures and intense UV indexes during summer can cause dehydration, tanning, sun allergies, and aggravate acne due to excessive sweating.</p>
            <h3>1. Sunscreen is Non-Negotiable</h3>
            <p>UV radiation accelerates aging, damages collagen, and triggers hyperpigmentation. Use a broad-spectrum sunscreen with SPF 50 and a PA++++ rating. Ensure you apply the equivalent of two fingers for full facial coverage, and reapply every 3-4 hours if outdoors.</p>
            <h3>2. Hydration over Heavy Oils</h3>
            <p>Swap heavy, oily moisturizers for lightweight, non-comedogenic gel-based formulas containing hyaluronic acid or ceramides. This keeps your skin hydrated without clogging pores during humid days.</p>
            <h3>3. Gentle Exfoliation</h3>
            <p>Regular sweat and sebum buildup can lead to congestion. Use a gentle salicylic or glycolic acid cleanser twice a week at night to wash away dead skin and keep pores clean.</p>
        `
    },
    "blog-laser": {
        title: "Laser Hair Removal: Sessions, Safety, and Fitzpatrick Skin Types",
        meta: "March 18, 2026 • 6 min read",
        imageClass: "blog-laser-img",
        body: `
            <p>Laser hair removal is a highly effective clinical procedure to reduce unwanted body hair, but its safety and efficacy depend entirely on matching the correct wavelength to your skin type.</p>
            <h3>1. The Science of Photo-Thermolysis</h3>
            <p>Lasers target melanin, the pigment in hair shafts. The laser's light energy is absorbed by melanin, converted to heat, and travels down to damage the hair follicle, stopping future growth without injuring surrounding skin tissues.</p>
            <h3>2. Fitzpatrick Skin Types III–V</h3>
            <p>Indian skin typically falls under Fitzpatrick types III, IV, or V, which contain higher levels of epidermal melanin. Using the wrong laser system, such as IPL (Intense Pulsed Light), can lead to light absorption in the skin rather than the hair root, resulting in thermal burns, blisters, or hyperpigmentation.</p>
            <h3>3. Nd:YAG and Diode Lasers</h3>
            <p>For South Asian skin, the gold standards are the Long-Pulsed Nd:YAG laser (1064 nm) and Diode laser systems (810 nm). The 1064 nm wavelength bypasses superficial melanin and penetrates deeper into the dermis directly to the hair follicle bulb, making it the safest laser choice for darker skin tones.</p>
            <h3>4. What to Expect</h3>
            <p>Most patients require 6 to 8 sessions spaced 4 to 6 weeks apart for optimal reduction. Post-session care includes avoiding hot showers, applying soothing aloe vera, and strict broad-spectrum sun protection.</p>
        `
    },
    "blog-melasma": {
        title: "Melasma Treatment on Indian Skin: The Multi-Phased Sequence",
        meta: "February 24, 2026 • 8 min read",
        imageClass: "blog-melasma-img",
        body: `
            <p>Melasma is a chronic pigmentary disorder characterized by symmetrical brown or gray-brown patches on the face. Because melasma melanocytes are hyper-reactive, treatment must be systematic and gentle.</p>
            <h3>1. The Triggers</h3>
            <p>Melasma is triggered by UV radiation, hormonal fluctuations (pregnancy, oral contraceptives), thyroid issues, and even mild heat exposure. Heat from cooking or heavy steam can activate melanocyte receptors, worsening pigmentation.</p>
            <h3>2. Why Immediate Laser Treatment Fails</h3>
            <p>Jumping directly into laser therapy for active melasma without pre-treatment is a clinical mistake. Aggressive heat from lasers can cause inflammation, which triggers protective melanin production, leading to rebound hyperpigmentation that is darker than before.</p>
            <h3>3. The Three-Phase Treatment Protocol</h3>
            <p>First, we focus on **Barrier Repair and Priming** using topical tyrosinase inhibitors (like vitamin C, kojic acid, or prescription retinoids) and strict SPF 50+ to calm down overactive cells. Second, we perform **Gentle Resurfacing** with chemical peels (glycolic or mandelic acid) to exfoliate superficial pigment. Third, we utilize **Q-Switched Nd:YAG Laser** in a low-energy, non-thermal setting to shatter deep dermal pigment deposits safely.</p>
        `
    },
    "blog-peels": {
        title: "Chemical Peels vs Lasers: Which Skin Rejuvenation is Right for You?",
        meta: "January 15, 2026 • 7 min read",
        imageClass: "blog-peels-img",
        body: `
            <p>Chemical peels and lasers are both stellar tools in clinical dermatology to improve skin texture, tone, and clarity, but they employ very different biological mechanisms.</p>
            <h3>1. How Chemical Peels Work</h3>
            <p>Peels utilize organic acids (such as salicylic, glycolic, or trichloroacetic acid) to dissolve the cellular bonds holding dead skin cells together. This triggers controlled exfoliation of the upper skin layers, signaling the skin to produce fresh cells and unclog congested pores. Peels are highly effective for superficial acne, post-acne marks, and overall dullness.</p>
            <h3>2. How Laser Skin Resurfacing Works</h3>
            <p>Lasers use focused light beams to create micro-thermal treatment zones in the skin. This triggers the body's natural wound-healing response, stimulating fibroblasts to synthesis new collagen and elastin deep within the dermis. Lasers are ideal for structural concerns like deep acne scars, fine lines, and firming loose skin.</p>
            <h3>3. Making the Decision</h3>
            <p>Peels have shorter downtime (ranging from none to mild flaking for 3 days) and are cost-effective for active breakouts and pigment correction. Lasers require advanced protocols and may have a 3–7 day recovery phase (especially fractional resurfacing), but offer transformative structural changes for dermal scarring and aging signs.</p>
        `
    }
};

/* ==========================================================================
   INITIALIZATION & DOM EVENTS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initHeader();
    initMobileMenu();
    initServicesTabs();
    initServiceOverlay();
    initBeforeAfterSlider();
    initBookingWizard();
    initBlogFilter();
    initBlogOverlay();
    initFaqAccordion();
    initScientificScanner();
    initAnnouncementBar();
    initScrollReveal();
    initClinicStatus();
});
/* 1. Header Scroll Effect */
function initHeader() {
    const header = document.querySelector(".main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

/* Theme Toggle Handler */
function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    
    // Check saved theme or user agent preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
    
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            
            if (document.body.classList.contains("dark-theme")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }
}

/* 2. Mobile Menu Toggle */
function initMobileMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("open");
            mainNav.classList.toggle("open");
        });

        // Close menu when link is clicked
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("open");
                mainNav.classList.remove("open");
                
                // Update active link style
                navLinks.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
            });
        });
    }
}

/* 3. Services Tabs Switching */
function initServicesTabs() {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");
            
            // Toggle buttons
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            // Toggle panes
            tabPanes.forEach(pane => {
                pane.classList.remove("active");
                if (pane.getAttribute("id") === `tab-${targetTab}`) {
                    pane.classList.add("active");
                }
            });
        });
    });
}

/* 4. Detailed Service Drawer/Overlay Panel */
function initServiceOverlay() {
    const serviceCards = document.querySelectorAll(".service-card");
    const overlay = document.getElementById("service-overlay");
    const closeBtn = document.getElementById("close-overlay");
    const overlayContent = document.getElementById("overlay-content");

    if (serviceCards && overlay && closeBtn && overlayContent) {
        serviceCards.forEach(card => {
            card.addEventListener("click", () => {
                const serviceKey = card.getAttribute("data-service");
                const data = SERVICES_DATA[serviceKey];
                
                if (data) {
                    // Compile HTML structure dynamically
                    let faqHTML = "";
                    data.faqs.forEach(item => {
                        faqHTML += `
                            <div class="faq-overlay-block">
                                <strong>Q: ${item.q}</strong>
                                <p>${item.a}</p>
                            </div>
                        `;
                    });

                    let symptomsList = "";
                    data.symptoms.forEach(sym => {
                        symptomsList += `<li>${sym}</li>`;
                    });

                    let causesList = "";
                    data.causes.forEach(cause => {
                        causesList += `<li>${cause}</li>`;
                    });

                    let benefitsList = "";
                    data.benefits.forEach(benefit => {
                        benefitsList += `<li>${benefit}</li>`;
                    });

                    overlayContent.innerHTML = `
                        <div class="detailed-service-header">
                            <span class="tag">${data.category}</span>
                            <h2>${data.title}</h2>
                            <p class="lead-para"><strong>Overview:</strong> ${data.overview}</p>
                        </div>
                        
                        <div class="overlay-section">
                            <h3>Common Symptoms & Concerns</h3>
                            <ul>${symptomsList}</ul>
                        </div>
                        
                        <div class="overlay-section">
                            <h3>Key Causes & Triggers</h3>
                            <ul>${causesList}</ul>
                        </div>
                        
                        <div class="overlay-section">
                            <h3>Our Clinical Treatment Process</h3>
                            <p>${data.process}</p>
                        </div>
                        
                        <div class="overlay-section">
                            <h3>Treatment Benefits</h3>
                            <ul>${benefitsList}</ul>
                        </div>
                        
                        <div class="overlay-section">
                            <h3>Downtime & Recovery</h3>
                            <p>${data.recovery}</p>
                        </div>
                        
                        <div class="overlay-section">
                            <h3>Expected Timelines & Results</h3>
                            <p>${data.expectedResults}</p>
                        </div>
                        
                        <div class="overlay-section">
                            <h3>Treatment FAQs</h3>
                            ${faqHTML}
                        </div>
                        
                        <div class="overlay-section text-center">
                            <a href="#booking" class="btn btn-accent close-and-book-btn">Book Consultation for ${data.title}</a>
                        </div>
                    `;

                    // Open overlay
                    overlay.classList.add("open");
                    document.body.style.overflow = "hidden"; // Prevent body scroll

                    // Add listener to overlay book button
                    const bookBtn = overlayContent.querySelector(".close-and-book-btn");
                    if (bookBtn) {
                        bookBtn.addEventListener("click", () => {
                            closeOverlayPanel();
                            // Select relevant treatment option in booking form
                            selectBookingTreatment(data.category);
                        });
                    }
                }
            });
        });

        closeBtn.addEventListener("click", closeOverlayPanel);
        
        // Close on clicking outside container
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                closeOverlayPanel();
            }
        });
    }

    function closeOverlayPanel() {
        overlay.classList.remove("open");
        document.body.style.overflow = ""; // Restore body scroll
    }

    function selectBookingTreatment(category) {
        let val = "General Consultation";
        if (category.includes("Skin")) val = "Skin Care / Acne";
        else if (category.includes("Hair")) val = "Hair Loss / PRP";
        else if (category.includes("Laser")) val = "Laser Procedures";

        const radio = document.querySelector(`input[name="treatmentType"][value="${val}"]`);
        if (radio) {
            radio.checked = true;
        }
    }
}
/* 5. Before & After Slider Interactivity & Tab Swapper */
function initBeforeAfterSlider() {
    const sliderContainer = document.getElementById("comparison-slider");
    const rangeInput = document.getElementById("slider-range-input");
    const handle = document.getElementById("slider-handle");
    const afterBox = document.getElementById("slider-after-box");
    
    const navBtns = document.querySelectorAll(".gallery-nav-btn");
    const beforeImg = document.getElementById("slider-before-img");
    const afterImg = document.getElementById("slider-after-img");

    // Handle range drag
    if (rangeInput && sliderContainer) {
        const updateSlider = (val) => {
            sliderContainer.style.setProperty("--clip-pos", val + "%");
        };

        rangeInput.addEventListener("input", (e) => {
            updateSlider(e.target.value);
        });

        rangeInput.addEventListener("change", (e) => {
            updateSlider(e.target.value);
        });
    }

    // Switch case studies
    if (navBtns) {
        navBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const index = parseInt(btn.getAttribute("data-gallery-index"));
                const item = BEFORE_AFTER_DATA[index];
                
                if (item) {
                    // Update Nav
                    navBtns.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    
                    // Reset slider value to center
                    if (rangeInput) rangeInput.value = 50;
                    sliderContainer.style.setProperty("--clip-pos", "50%");

                    // Update images
                    beforeImg.style.backgroundImage = `url('${item.beforeImg}')`;
                    afterImg.style.backgroundImage = `url('${item.afterImg}')`;
                    
                    // Update static labels safely
                    const sliderBeforeLabel = document.getElementById("slider-before-label");
                    const sliderAfterLabel = document.getElementById("slider-after-label");
                    if (sliderBeforeLabel) sliderBeforeLabel.innerText = item.beforeLabel;
                    if (sliderAfterLabel) sliderAfterLabel.innerText = item.afterLabel;

                    // Update caption card below slider safely
                    const caseStudyTitle = document.getElementById("case-study-title");
                    const caseStudyDesc = document.getElementById("case-study-desc");
                    if (caseStudyTitle) caseStudyTitle.innerText = item.title;
                    if (caseStudyDesc) caseStudyDesc.innerText = item.description;
                }
            });
        });
    }
}
/* 6. Multi-Step Form Wizard with Anti-Spam Slider */
function initBookingWizard() {
    const form = document.getElementById("appointment-form");
    const steps = document.querySelectorAll(".form-step");
    const nextBtns = document.querySelectorAll(".next-step-btn");
    const prevBtns = document.querySelectorAll(".prev-step-btn");
    const progressSteps = document.querySelectorAll(".progress-step");
    
    // Tuesday Pricing and Free Camp Logic
    let isTuesdaySelected = false;

    function checkIfTuesday(dateStr) {
        if (!dateStr) return false;
        const parts = dateStr.split('-');
        if (parts.length !== 3) return false;
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[2], 10);
        const dateObj = new Date(year, month, day);
        return dateObj.getDay() === 2; // 2 = Tuesday
    }

    function updatePaymentStepUI() {
        const payClinicDesc = document.getElementById("pay-clinic-desc");
        const payClinicTitle = document.getElementById("pay-clinic-title");
        const payClinicPrice = document.getElementById("pay-clinic-price");
        const payOnlineCard = document.getElementById("pay-online-card");
        const payClinicCard = document.getElementById("pay-clinic-card");
        const onlineDetails = document.getElementById("online-payment-details");
        const tuesdayNotice = document.getElementById("tuesday-free-camp-notice");

        if (isTuesdaySelected) {
            // Show Tuesday Free Camp notice
            if (tuesdayNotice) tuesdayNotice.style.display = "flex";

            // Set Pay at Clinic text to show ₹0
            if (payClinicTitle) payClinicTitle.textContent = "Free Tuesday OPD Check-in";
            if (payClinicDesc) payClinicDesc.textContent = "Completely free skincare consultation today.";
            if (payClinicPrice) {
                payClinicPrice.textContent = "FREE";
                payClinicPrice.classList.add("free-badge");
            }

            // Hide Pay Online option
            if (payOnlineCard) {
                payOnlineCard.style.display = "none";
                payOnlineCard.classList.remove("active");
            }

            // Automatically select and activate Pay at Clinic (Free)
            if (payClinicCard) {
                payClinicCard.classList.add("active");
                const radio = payClinicCard.querySelector('input[name="paymentOption"]');
                if (radio) radio.checked = true;
            }

            // Hide any online details if visible
            if (onlineDetails) onlineDetails.style.display = "none";
            stopUpiTimer();
        } else {
            // Restore standard payment flow
            if (tuesdayNotice) tuesdayNotice.style.display = "none";

            if (payClinicTitle) payClinicTitle.textContent = "Pay at Clinic";
            if (payClinicDesc) payClinicDesc.textContent = "₹0 Now. Pay at the clinical desk during check-in.";
            if (payClinicPrice) {
                payClinicPrice.textContent = "₹300";
                payClinicPrice.classList.remove("free-badge");
            }

            if (payOnlineCard) {
                payOnlineCard.style.display = "block";
            }

            // Re-evaluate what's checked
            const checkedRadio = form.querySelector('input[name="paymentOption"]:checked');
            if (checkedRadio && checkedRadio.value === "Pay Online") {
                if (payOnlineCard) payOnlineCard.classList.add("active");
                if (payClinicCard) payClinicCard.classList.remove("active");
                if (onlineDetails) onlineDetails.style.display = "block";
            } else {
                if (payClinicCard) payClinicCard.classList.add("active");
                if (payOnlineCard) payOnlineCard.classList.remove("active");
                if (onlineDetails) onlineDetails.style.display = "none";
            }
        }
    }
    
    // CAPTCHA variables
    const captchaError = document.getElementById("captcha-error");

    // Modal popup toggle bindings
    const bookingModal = document.getElementById("booking-modal");
    const closeBookingBtn = document.getElementById("close-booking-modal");

    if (bookingModal && closeBookingBtn) {
        // Intercept all Book Appointment links globally via event delegation
        document.addEventListener("click", (e) => {
            const target = e.target.closest('a[href="#booking"], .close-and-book-btn');
            if (target) {
                e.preventDefault();
                bookingModal.classList.add("open");
                document.body.style.overflow = "hidden";
            }
        });

        closeBookingBtn.addEventListener("click", closeBookingModal);

        bookingModal.addEventListener("click", (e) => {
            if (e.target === bookingModal) {
                closeBookingModal();
            }
        });
    }

    // Toggle other concern textarea
    const chkOtherConcern = document.getElementById("chk-other-concern");
    const customConcernGroup = document.getElementById("custom-concern-group");
    if (chkOtherConcern && customConcernGroup) {
        chkOtherConcern.addEventListener("change", () => {
            if (chkOtherConcern.checked) {
                customConcernGroup.style.display = "flex";
            } else {
                customConcernGroup.style.display = "none";
                const textarea = customConcernGroup.querySelector("#p-notes");
                if (textarea) textarea.value = "";
            }
        });
    }

    function closeBookingModal() {
        bookingModal.classList.remove("open");
        document.body.style.overflow = "";
    }

    // Wizard Next Action
    nextBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const nextStepId = parseInt(btn.getAttribute("data-next"));
            const currentStep = nextStepId - 1;
            
            if (validateStep(currentStep)) {
                goToStep(nextStepId);
            }
        });
    });

    // Wizard Previous Action
    prevBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const prevStepId = parseInt(btn.getAttribute("data-prev"));
            goToStep(prevStepId);
        });
    });

    function goToStep(stepNum) {
        steps.forEach((step, idx) => {
            step.classList.remove("active");
            if (idx === (stepNum - 1)) {
                step.classList.add("active");
            }
        });

        // Update progress bar
        progressSteps.forEach((pStep, idx) => {
            pStep.classList.remove("active", "complete");
            if (idx < (stepNum - 1)) {
                pStep.classList.add("complete");
            } else if (idx === (stepNum - 1)) {
                pStep.classList.add("active");
            }
        });
    }

    // Step validations
    function validateStep(stepNum) {
        let isValid = true;
        const currentPane = document.getElementById(`step-${stepNum}`);
        
        if (stepNum === 2) {
            // Validate personal details
            const name = currentPane.querySelector("#p-name");
            const phone = currentPane.querySelector("#p-phone");
            const age = currentPane.querySelector("#p-age");
            const gender = currentPane.querySelector("#p-gender");
            const email = currentPane.querySelector("#p-email");

            // Name validation
            if (!name.value.trim()) {
                setInputError(name, true);
                isValid = false;
            } else {
                setInputError(name, false);
            }

            // Phone validation (exactly 10 digits check)
            const phonePattern = /^[6-9]\d{9}$/;
            if (!phonePattern.test(phone.value.trim())) {
                setInputError(phone, true);
                isValid = false;
            } else {
                setInputError(phone, false);
            }

            // Age validation
            const ageVal = parseInt(age.value);
            if (isNaN(ageVal) || ageVal < 1 || ageVal > 115) {
                setInputError(age, true);
                isValid = false;
            } else {
                setInputError(age, false);
            }

            // Gender validation
            if (!gender.value) {
                setInputError(gender, true);
                isValid = false;
            } else {
                setInputError(gender, false);
            }

            // Email validation (optional check)
            if (email.value.trim() && !validateEmail(email.value.trim())) {
                setInputError(email, true);
                isValid = false;
            } else {
                setInputError(email, false);
            }
        }
        
        if (stepNum === 3) {
            // Validate step 3 fields
            const date = currentPane.querySelector("#p-date");
            const time = currentPane.querySelector("#p-time");
            const captchaInput = currentPane.querySelector("#captcha-answer");

            if (!date.value) {
                setInputError(date, true);
                isValid = false;
            } else {
                // Parse date and check if it is Sunday (closed day)
                const parts = date.value.split('-');
                if (parts.length === 3) {
                    const year = parseInt(parts[0], 10);
                    const month = parseInt(parts[1], 10) - 1;
                    const day = parseInt(parts[2], 10);
                    const dateObj = new Date(year, month, day);
                    if (dateObj.getDay() === 0) { // 0 = Sunday
                        alert("The clinic is closed on Sundays. Please select a date from Monday to Saturday.");
                        setInputError(date, true);
                        isValid = false;
                    } else {
                        setInputError(date, false);
                    }
                } else {
                    setInputError(date, false);
                }
            }

            if (!time.value) {
                setInputError(time, true);
                isValid = false;
            } else {
                setInputError(time, false);
            }

            // Captcha validation
            const typedAnswer = parseInt(captchaInput.value.trim());
            if (isNaN(typedAnswer) || typedAnswer !== correctCaptchaAnswer) {
                captchaError.style.display = "block";
                isValid = false;
            } else {
                captchaError.style.display = "none";
            }
        }
        
        return isValid;
    }

    function setInputError(element, hasError) {
        const group = element.closest(".form-group");
        if (group) {
            if (hasError) {
                group.classList.add("invalid");
            } else {
                group.classList.remove("invalid");
            }
        }
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Toggle Payment Details section
    const payClinicOption = document.getElementById("pay-clinic-card");
    const payOnlineOption = document.getElementById("pay-online-card");
    const onlineDetails = document.getElementById("online-payment-details");

    if (payClinicOption && payOnlineOption && onlineDetails) {
        payClinicOption.addEventListener("click", () => {
            payClinicOption.classList.add("active");
            payOnlineOption.classList.remove("active");
            onlineDetails.style.display = "none";
            stopUpiTimer();
        });

        payOnlineOption.addEventListener("click", () => {
            payOnlineOption.classList.add("active");
            payClinicOption.classList.remove("active");
            onlineDetails.style.display = "block";
            startUpiTimer();
        });
    }

    // UPI countdown timer
    let upiTimerInterval = null;
    function startUpiTimer() {
        stopUpiTimer();
        const timerDisplay = document.getElementById("upi-countdown");
        if (!timerDisplay) return;

        let totalSeconds = 5 * 60;
        timerDisplay.textContent = "05:00";

        upiTimerInterval = setInterval(() => {
            totalSeconds--;
            if (totalSeconds <= 0) {
                clearInterval(upiTimerInterval);
                timerDisplay.textContent = "Expired";
                return;
            }

            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            timerDisplay.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }, 1000);
    }

    function stopUpiTimer() {
        if (upiTimerInterval) {
            clearInterval(upiTimerInterval);
            upiTimerInterval = null;
        }
    }

    function generateTransactionID() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let txn = "TXN_NISHI_";
        for (let i = 0; i < 8; i++) {
            txn += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return txn;
    }

    function validatePayment() {
        return true;
    }

    function processFinalBooking(paymentStatus, transactionId = "N/A") {
        const formData = new FormData(form);
        
        function escapeHTML(str) {
            if (!str) return "";
            return String(str).replace(/[&<>'"]/g, 
                tag => ({
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    "'": '&#39;',
                    '"': '&quot;'
                }[tag] || tag)
            );
        }
        
        // Compile concern options and custom textarea text
        const selectedConcerns = [];
        const checkboxes = form.querySelectorAll('input[name="concerns"]:checked');
        checkboxes.forEach(cb => {
            if (cb.value !== "Other") {
                selectedConcerns.push(escapeHTML(cb.value));
            }
        });
        const customNotes = formData.get("patientNotes") || "";
        if (customNotes.trim()) {
            selectedConcerns.push(`Custom: ${escapeHTML(customNotes.trim())}`);
        }
        const compiledNotes = selectedConcerns.length > 0 ? selectedConcerns.join(", ") : "None";

        const data = {
            treatment: escapeHTML(formData.get("treatmentType")),
            name: escapeHTML(formData.get("patientName")),
            phone: escapeHTML(formData.get("patientPhone")),
            email: escapeHTML(formData.get("patientEmail") || "Not Provided"),
            age: escapeHTML(formData.get("patientAge")),
            gender: escapeHTML(formData.get("patientGender")),
            date: escapeHTML(formData.get("preferredDate")),
            time: escapeHTML(formData.get("preferredTime")),
            notes: compiledNotes,
            payment: paymentStatus,
            txnId: transactionId
        };

        const isTuesday = checkIfTuesday(data.date);
        let paymentLabel = "";
        let paymentBadgeBg = "";
        
        if (isTuesday) {
            paymentLabel = "Free Tuesday OPD Camp (₹0)";
            paymentBadgeBg = "#10B981"; // Green
        } else {
            paymentLabel = data.txnId !== 'N/A' ? 'Pre-Paid ₹300' : 'Pay at Clinic (₹300)';
            paymentBadgeBg = data.txnId !== 'N/A' ? '#10B981' : '#F59E0B'; // Green or Orange
        }

        const summaryBox = document.getElementById("booking-summary-box");
        summaryBox.innerHTML = `
            <h4>Booking Summary</h4>
            <p><strong>Treatment:</strong> <span>${data.treatment}</span></p>
            <p><strong>Patient Name:</strong> <span>${data.name} (Age: ${data.age}, ${data.gender})</span></p>
            <p><strong>WhatsApp:</strong> <span>${data.phone}</span></p>
            <p><strong>Pref. Date:</strong> <span>${data.date}</span></p>
            <p><strong>Pref. Slot:</strong> <span>${data.time}</span></p>
            <p><strong>Payment Status:</strong> <span class="badge" style="padding: 2px 8px; border-radius: 4px; font-weight: bold; background-color: ${paymentBadgeBg}; color: white;">${paymentLabel}</span></p>
            ${data.txnId !== 'N/A' ? `<p><strong>Transaction ID:</strong> <span style="font-family: monospace; font-weight: 700;">${data.txnId}</span></p>` : ''}
        `;

        const waMessage = encodeURIComponent(
            `Hello Dr. Nishi Yadav Clinic,\n\nI would like to schedule a consultation booking:\n` +
            `• Treatment Type: ${data.treatment}\n` +
            `• Patient Name: ${data.name}\n` +
            `• Age / Gender: ${data.age} / ${data.gender}\n` +
            `• WhatsApp Phone: ${data.phone}\n` +
            `• Email: ${data.email}\n` +
            `• Preferred Date: ${data.date}\n` +
            `• Preferred Slot: ${data.time}\n` +
            `• Patient Notes: ${data.notes}\n` +
            `• Payment Method: ${data.payment}\n` +
            `• Transaction Ref: ${data.txnId}\n\n` +
            `Please confirm if this slot is available. Thank you.`
        );

        const waLink = `https://wa.me/918755807777?text=${waMessage}`;
        const waLinkEl = document.getElementById("whatsapp-booking-link");
        if (waLinkEl) waLinkEl.setAttribute("href", waLink);

        goToStep(5);
    }

    // Interactive Math CAPTCHA Mechanism (Spam prevention)
    const captchaQuestion = document.getElementById("captcha-question");
    const captchaAnswerInput = document.getElementById("captcha-answer");
    const refreshCaptchaBtn = document.getElementById("btn-refresh-captcha");
    let correctCaptchaAnswer = 0;

    function generateCaptcha() {
        if (!captchaQuestion || !captchaAnswerInput) return;

        const num1 = Math.floor(Math.random() * 12) + 4; // 4 to 15
        const num2 = Math.floor(Math.random() * 10) + 1; // 1 to 10
        const isAddition = Math.random() > 0.4; // 60% chance addition

        if (isAddition) {
            correctCaptchaAnswer = num1 + num2;
            captchaQuestion.textContent = `Solve: ${num1} + ${num2} = `;
        } else {
            const maxVal = Math.max(num1, num2);
            const minVal = Math.min(num1, num2);
            correctCaptchaAnswer = maxVal - minVal;
            captchaQuestion.textContent = `Solve: ${maxVal} - ${minVal} = `;
        }

        // Clear previous input
        captchaAnswerInput.value = "";
    }

    if (refreshCaptchaBtn) {
        refreshCaptchaBtn.addEventListener("click", generateCaptcha);
    }

    // Initial captcha generation
    generateCaptcha();

    // Trigger regeneration when modal opens
    document.addEventListener("click", (e) => {
        const target = e.target.closest('a[href="#booking"], .close-and-book-btn');
        if (target) {
            generateCaptcha();
        }
    });

    // Set minimum date picker values to today
    const dateInput = document.getElementById("p-date");
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
        
        if (mm < 10) mm = '0' + mm;
        if (dd < 10) dd = '0' + dd;
        
        dateInput.min = `${yyyy}-${mm}-${dd}`;

        // Add event listener to dynamically update pricing on Tuesday selection
        dateInput.addEventListener("change", () => {
            isTuesdaySelected = checkIfTuesday(dateInput.value);
            updatePaymentStepUI();
        });
    }

    // Form Submit Action
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Validate step 4 (Payment)
            if (validatePayment()) {
                const payOption = form.querySelector('input[name="paymentOption"]:checked').value;
                const processingOverlay = document.getElementById("payment-processing-overlay");
                
                if (payOption === "Pay Online") {
                    // Start simulated loading spinner
                    if (processingOverlay) {
                        processingOverlay.classList.add("active");
                        const statusText = document.getElementById("processing-status-text");
                        
                        setTimeout(() => {
                            if (statusText) statusText.textContent = "Authorizing with Payment Gateway...";
                        }, 800);
                        
                        setTimeout(() => {
                            if (statusText) statusText.textContent = "Verifying Secure Transaction...";
                        }, 1600);
                        
                        setTimeout(() => {
                            processingOverlay.classList.remove("active");
                            const txnId = generateTransactionID();
                            processFinalBooking("Paid (₹300 Online via UPI QR Code)", txnId);
                        }, 2500);
                    } else {
                        // Fallback if overlay element is missing
                        const txnId = generateTransactionID();
                        processFinalBooking("Paid (₹300 Online)", txnId);
                    }
                } else {
                    // Pay at Clinic selected - no delay needed
                    if (isTuesdaySelected) {
                        processFinalBooking("Free Tuesday Skin Camp (₹0)", "N/A");
                    } else {
                        processFinalBooking("Unpaid (₹300 payable at clinic)", "N/A");
                    }
                }
            }
        });
    }

    // Reset Form button
    const restartBtn = document.getElementById("restart-booking-btn");
    if (restartBtn) {
        restartBtn.addEventListener("click", () => {
            form.reset();
            generateCaptcha();

            // Reset Tuesday selections
            isTuesdaySelected = false;
            updatePaymentStepUI();

            // Reset payment interface elements
            if (onlineDetails) onlineDetails.style.display = "none";
            if (customConcernGroup) customConcernGroup.style.display = "none";
            if (payClinicOption) payClinicOption.classList.add("active");
            if (payOnlineOption) payOnlineOption.classList.remove("active");
            stopUpiTimer();
            
            goToStep(1);
        });
    }
}

/* 7. Blog Category Filtering */
function initBlogFilter() {
    const filterBtns = document.querySelectorAll(".category-btn");
    const blogCards = document.querySelectorAll(".blog-card");

    if (filterBtns && blogCards) {
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const category = btn.getAttribute("data-category");
                
                // Update active tab button style
                filterBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                
                // Filter articles
                blogCards.forEach(card => {
                    const cardCat = card.getAttribute("data-category");
                    if (category === "all" || cardCat === category) {
                        card.style.display = "flex";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }
}

/* 8. Detailed Blog Overlay Reader */
function initBlogOverlay() {
    const blogCards = document.querySelectorAll(".blog-card");
    const overlay = document.getElementById("blog-overlay");
    const closeBtn = document.getElementById("close-blog-overlay");
    const overlayContent = document.getElementById("blog-overlay-content");

    if (blogCards && overlay && closeBtn && overlayContent) {
        blogCards.forEach(card => {
            card.addEventListener("click", () => {
                const postId = card.getAttribute("data-post-id");
                const data = BLOG_DATA[postId];
                
                if (data) {
                    overlayContent.innerHTML = `
                        <div class="detailed-blog-banner ${data.imageClass}"></div>
                        <div class="detailed-blog-header">
                            <h2>${data.title}</h2>
                            <div class="blog-overlay-meta">${data.meta} • Published by Clinical Desk</div>
                        </div>
                        <div class="blog-overlay-body">
                            ${data.body}
                        </div>
                        <div class="overlay-section text-center" style="margin-top: 40px;">
                            <button type="button" class="btn btn-primary close-blog-reader-btn">Back to Articles</button>
                        </div>
                    `;

                    // Open overlay
                    overlay.classList.add("open");
                    document.body.style.overflow = "hidden"; // Prevent background scroll

                    const backBtn = overlayContent.querySelector(".close-blog-reader-btn");
                    if (backBtn) {
                        backBtn.addEventListener("click", closeBlogOverlayPanel);
                    }
                }
            });
        });

        closeBtn.addEventListener("click", closeBlogOverlayPanel);
        
        // Close on clicking outside container
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                closeBlogOverlayPanel();
            }
        });
    }

    function closeBlogOverlayPanel() {
        overlay.classList.remove("open");
        document.body.style.overflow = ""; // Restore background scroll
    }
}

/* 9. FAQ Accordion Collapse/Expand */
function initFaqAccordion() {
    const triggers = document.querySelectorAll(".faq-trigger");

    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const item = trigger.closest(".faq-item");
            const panel = item.querySelector(".faq-panel");
            const isActive = item.classList.contains("active");

            // Close all other panels safely
            document.querySelectorAll(".faq-item").forEach(otherItem => {
                otherItem.classList.remove("active");
                const otherPanel = otherItem.querySelector(".faq-panel");
                if (otherPanel) {
                    otherPanel.style.maxHeight = null;
                }
            });

            if (!isActive) {
                item.classList.add("active");
                // Smooth height transition using scrollHeight
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
}

/* 10. Scientific Scan Telemetry Cycle */
function initScientificScanner() {
    const telemetryEl = document.getElementById("scan-telemetry");
    if (!telemetryEl) return;

    const metrics = [
        "Melanin & Follicle Analysis: Optimal",
        "Melanin Level: 32% (Optimal)",
        "Follicle Density: 180/cm² (Good)",
        "Hydration Status: 68% (Optimal)",
        "Sebum Level: 18% (Stable)",
        "Skin Tone Symmetry: 96% (Balanced)",
        "Pore Clearness Index: 94% (Excellent)"
    ];

    let currentIdx = 0;
    setInterval(() => {
        currentIdx = (currentIdx + 1) % metrics.length;
        // Fade out
        telemetryEl.style.opacity = 0;
        telemetryEl.style.transition = "opacity 0.3s ease";
        
        setTimeout(() => {
            telemetryEl.innerText = metrics[currentIdx];
            // Fade in
            telemetryEl.style.opacity = 1;
        }, 300);
    }, 3000);
}

/* 11. Rotating Announcement Bar */
function initAnnouncementBar() {
    // Smooth infinite scrolling marquee is handled entirely via CSS rules for performance.
}

/* 12. Scroll Reveal Animations (Intersection Observer) */
function initScrollReveal() {
    const revealTargets = [
        { selector: '.section-header', revealClass: 'reveal-scale' },
        { selector: '.hero-text h1', revealClass: 'reveal-left' },
        { selector: '.hero-desc', revealClass: 'reveal-left' },
        { selector: '.hero-ctas', revealClass: 'reveal-left' },
        { selector: '.trust-strip', revealClass: 'reveal-left' },
        { selector: '.hero-doctor-container', revealClass: 'reveal-right' },
        { selector: '.service-card', revealClass: 'reveal-scale' },
        { selector: '.comparison-slider', revealClass: 'reveal-scale' },
        { selector: '.case-study-info', revealClass: 'reveal-scale' },
        { selector: '.feature-card', revealClass: 'reveal-scale' },
        { selector: '.about-photo-wrapper', revealClass: 'reveal-left' },
        { selector: '.about-text-content', revealClass: 'reveal-right' },
        { selector: '.testimonial-card', revealClass: 'reveal-scale' },
        { selector: '.blog-card', revealClass: 'reveal-scale' },
        { selector: '.faq-item', revealClass: 'reveal-scale' },
        { selector: '.contact-wrapper', revealClass: 'reveal-scale' },
        { selector: '.free-camp-text h2', revealClass: 'reveal-scale' },
        { selector: '.why-text h2', revealClass: 'reveal-scale' },
        { selector: '.timeline-scroll-section h2', revealClass: 'reveal-scale' },
        { selector: '.philosophy-title', revealClass: 'reveal-scale' },
        { selector: '.doctor-photo-organic', revealClass: 'reveal-left' },
        { selector: '.featured-article-card', revealClass: 'reveal-scale' },
        { selector: '.credentials-card-link', revealClass: 'reveal-scale' },
        { selector: '.timeline-node-item', revealClass: 'reveal-scale' },
        { selector: '.contact-title', revealClass: 'reveal-scale' },
        { selector: '.map-card-premium', revealClass: 'reveal-left' },
        { selector: '.contact-details-card', revealClass: 'reveal-right' },
        { selector: '.free-camp-card', revealClass: 'reveal-scale' },
        { selector: '.stat-item', revealClass: 'reveal-scale' }
    ];

    // Add classes dynamically and check if already in viewport to prevent page-load flash
    revealTargets.forEach(target => {
        document.querySelectorAll(target.selector).forEach(el => {
            const rect = el.getBoundingClientRect();
            const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
            if (isInViewport) {
                el.classList.add('reveal-on-scroll', target.revealClass, 'revealed');
            } else {
                el.classList.add('reveal-on-scroll', target.revealClass);
            }
        });
    });

    // Add staggered transition delays for sequential sibling elements
    const staggerGroups = [
        '.service-card',
        '.faq-item',
        '.feature-card',
        '.testimonial-card',
        '.credentials-card-link',
        '.timeline-node-item',
        '.stat-item'
    ];
    staggerGroups.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, i) => {
            el.style.transitionDelay = (i * 0.07) + 's';
        });
    });

    // IntersectionObserver to trigger animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '50px 0px -30px 0px',
            threshold: 0.02
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers
        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            el.classList.add('revealed');
        });
    }

    // ==========================================================================
    // SMART SKIN ANALYSIS WIZARD LOGIC WITH OPTIONAL PHOTO UPLOAD & LIVE CAMERA
    // ==========================================================================
    const startAnalysisBtn = document.getElementById("btn-start-analysis");
    const submitAnalysisBtn = document.getElementById("btn-submit-analysis");
    const bookFromAnalysisBtn = document.getElementById("btn-book-from-analysis");
    const restartAnalysisBtn = document.getElementById("btn-restart-analysis");
    const progressFill = document.getElementById("analysis-progress");

    // Photo Step Dom Elements
    const uploadZone = document.getElementById("photo-upload-zone");
    const fileInput = document.getElementById("analysis-photo-file");
    const orSeparator = document.getElementById("or-separator");
    const cameraActivationBox = document.getElementById("camera-activation-box");
    const useCameraBtn = document.getElementById("btn-use-camera");
    const cameraStreamContainer = document.getElementById("camera-stream-container");
    const webcamVideo = document.getElementById("webcam-video");
    const captureSnapshotBtn = document.getElementById("btn-capture-snapshot");
    const cancelCameraBtn = document.getElementById("btn-cancel-camera");
    const photoPreviewContainer = document.getElementById("photo-preview-container");
    const photoPreviewImg = document.getElementById("photo-preview-img");
    const removePhotoBtn = document.getElementById("btn-remove-photo");
    const photoNextBtn = document.getElementById("btn-photo-next");

    let cameraStream = null;
    let submittedPhotoDataUrl = null;

    const slides = [
        document.getElementById("slide-welcome"),
        document.getElementById("slide-step-1"),
        document.getElementById("slide-step-photo"), // Step 2 of 6: Photo/Camera
        document.getElementById("slide-step-2"),     // Step 3 of 6: Skin Type
        document.getElementById("slide-step-3"),     // Step 4 of 6: Sensitivity
        document.getElementById("slide-step-4"),     // Step 5 of 6: Exposure
        document.getElementById("slide-step-5"),     // Step 6 of 6: Contact Info
        document.getElementById("slide-results")      // Results scorecard
    ];

    let currentSlideIndex = 0;

    function stopCameraStream() {
        if (cameraStream) {
            cameraStream.getTracks().forEach(track => track.stop());
            cameraStream = null;
        }
        if (webcamVideo) {
            webcamVideo.srcObject = null;
        }
    }

    function showSlide(index) {
        // Safe check to shut off webcam stream if user navigates away
        if (index !== 2) {
            stopCameraStream();
        }

        slides.forEach((slide, idx) => {
            if (slide) {
                if (idx === index) {
                    slide.classList.add("active");
                } else {
                    slide.classList.remove("active");
                }
            }
        });
        currentSlideIndex = index;
        
        // Update progress bar (there are 6 wizard steps total)
        if (progressFill) {
            let progressPercentage = 0;
            if (index > 0 && index <= 6) {
                progressPercentage = Math.round((index / 6) * 100);
            } else if (index === 7) {
                progressPercentage = 100;
            }
            progressFill.style.width = `${progressPercentage}%`;
        }
    }

    if (startAnalysisBtn) {
        startAnalysisBtn.addEventListener("click", () => {
            showSlide(1);
        });
    }

    // Photo step event listeners & file processor
    function handleSelectedFile(file) {
        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image file.");
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            submittedPhotoDataUrl = e.target.result;
            if (photoPreviewImg) photoPreviewImg.src = submittedPhotoDataUrl;
            
            // Show preview, hide selection zones
            if (photoPreviewContainer) photoPreviewContainer.style.display = "block";
            if (uploadZone) uploadZone.style.display = "none";
            if (orSeparator) orSeparator.style.display = "none";
            if (cameraActivationBox) cameraActivationBox.style.display = "none";
            
            // Update button label from Skip to Next
            if (photoNextBtn) photoNextBtn.textContent = "Next";
        };
        reader.readAsDataURL(file);
    }

    if (uploadZone && fileInput) {
        uploadZone.addEventListener("click", (e) => {
            if (e.target !== fileInput) {
                fileInput.click();
            }
        });

        uploadZone.addEventListener("dragover", (e) => {
            e.preventDefault();
            uploadZone.classList.add("dragover");
        });

        uploadZone.addEventListener("dragleave", () => {
            uploadZone.classList.remove("dragover");
        });

        uploadZone.addEventListener("drop", (e) => {
            e.preventDefault();
            uploadZone.classList.remove("dragover");
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                handleSelectedFile(e.dataTransfer.files[0]);
            }
        });

        fileInput.addEventListener("change", () => {
            if (fileInput.files && fileInput.files[0]) {
                handleSelectedFile(fileInput.files[0]);
            }
        });
    }

    if (useCameraBtn) {
        useCameraBtn.addEventListener("click", () => {
            // Hide selection elements
            if (uploadZone) uploadZone.style.display = "none";
            if (orSeparator) orSeparator.style.display = "none";
            if (cameraActivationBox) cameraActivationBox.style.display = "none";
            
            // Show camera stream container
            if (cameraStreamContainer) cameraStreamContainer.style.display = "block";
            
            // Request user webcam access
            navigator.mediaDevices.getUserMedia({ 
                video: { 
                    facingMode: "user",
                    width: { ideal: 640 },
                    height: { ideal: 480 }
                }, 
                audio: false 
            })
            .then(stream => {
                cameraStream = stream;
                if (webcamVideo) {
                    webcamVideo.srcObject = stream;
                    webcamVideo.play().catch(err => console.error("Video play error:", err));
                }
            })
            .catch(err => {
                console.error("Camera access error:", err);
                alert("Could not access your camera. Please upload a photo instead.");
                // Restore standard file upload UI
                if (uploadZone) uploadZone.style.display = "flex";
                if (orSeparator) orSeparator.style.display = "block";
                if (cameraActivationBox) cameraActivationBox.style.display = "block";
                if (cameraStreamContainer) cameraStreamContainer.style.display = "none";
            });
        });
    }

    if (captureSnapshotBtn) {
        captureSnapshotBtn.addEventListener("click", () => {
            if (webcamVideo && cameraStream) {
                const canvas = document.createElement("canvas");
                canvas.width = webcamVideo.videoWidth || 640;
                canvas.height = webcamVideo.videoHeight || 480;
                
                const ctx = canvas.getContext("2d");
                ctx.drawImage(webcamVideo, 0, 0, canvas.width, canvas.height);
                
                submittedPhotoDataUrl = canvas.toDataURL("image/jpeg");
                if (photoPreviewImg) photoPreviewImg.src = submittedPhotoDataUrl;
                
                stopCameraStream();
                
                if (cameraStreamContainer) cameraStreamContainer.style.display = "none";
                if (photoPreviewContainer) photoPreviewContainer.style.display = "block";
                if (photoNextBtn) photoNextBtn.textContent = "Next";
            }
        });
    }

    if (cancelCameraBtn) {
        cancelCameraBtn.addEventListener("click", () => {
            stopCameraStream();
            if (cameraStreamContainer) cameraStreamContainer.style.display = "none";
            
            // Restore selection UI
            if (uploadZone) uploadZone.style.display = "flex";
            if (orSeparator) orSeparator.style.display = "block";
            if (cameraActivationBox) cameraActivationBox.style.display = "block";
        });
    }

    if (removePhotoBtn) {
        removePhotoBtn.addEventListener("click", () => {
            submittedPhotoDataUrl = null;
            if (photoPreviewImg) photoPreviewImg.src = "";
            if (photoPreviewContainer) photoPreviewContainer.style.display = "none";
            
            // Restore UI
            if (uploadZone) uploadZone.style.display = "flex";
            if (orSeparator) orSeparator.style.display = "block";
            if (cameraActivationBox) cameraActivationBox.style.display = "block";
            if (photoNextBtn) photoNextBtn.textContent = "Skip & Continue";
            if (fileInput) fileInput.value = "";
        });
    }

    // Handle Option selections & Enable "Next" button (excluding Step 2 photo step which is optional/skip-ready)
    const stepsOptions = [
        { radioName: "concern", slideId: "slide-step-1" },
        { radioName: "skin_type", slideId: "slide-step-2" },
        { radioName: "sensitivity", slideId: "slide-step-3" },
        { radioName: "exposure", slideId: "slide-step-4" }
    ];

    stepsOptions.forEach((step) => {
        const radios = document.querySelectorAll(`input[name="${step.radioName}"]`);
        const slide = document.getElementById(step.slideId);
        if (slide) {
            const nextBtn = slide.querySelector(".btn-next");
            radios.forEach(radio => {
                radio.addEventListener("change", () => {
                    if (nextBtn) nextBtn.removeAttribute("disabled");
                });
            });
        }
    });

    // Navigation buttons (Next / Prev)
    document.querySelectorAll(".analysis-wizard .btn-next").forEach(btn => {
        btn.addEventListener("click", () => {
            if (currentSlideIndex < 6) {
                showSlide(currentSlideIndex + 1);
            }
        });
    });

    document.querySelectorAll(".analysis-wizard .btn-prev").forEach(btn => {
        btn.addEventListener("click", () => {
            if (currentSlideIndex > 0) {
                showSlide(currentSlideIndex - 1);
            }
        });
    });

    // Generate Report submission
    if (submitAnalysisBtn) {
        submitAnalysisBtn.addEventListener("click", () => {
            const nameInput = document.getElementById("analysis-name");
            const phoneInput = document.getElementById("analysis-phone");
            
            if (!nameInput || !phoneInput) return;

            const name = nameInput.value.trim();
            const phone = phoneInput.value.trim();

            if (!name) {
                alert("Please enter your name.");
                nameInput.focus();
                return;
            }

            const phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(phone)) {
                alert("Please enter a valid 10-digit WhatsApp number.");
                phoneInput.focus();
                return;
            }

            // Gather inputs
            const selectedConcernRadio = document.querySelector('input[name="concern"]:checked');
            const selectedSkinTypeRadio = document.querySelector('input[name="skin_type"]:checked');
            const selectedSensitivityRadio = document.querySelector('input[name="sensitivity"]:checked');
            const selectedExposureRadio = document.querySelector('input[name="exposure"]:checked');

            const concernVal = selectedConcernRadio ? selectedConcernRadio.value : "N/A";
            const skinTypeVal = selectedSkinTypeRadio ? selectedSkinTypeRadio.value : "N/A";
            const sensitivityVal = selectedSensitivityRadio ? selectedSensitivityRadio.value : "N/A";
            const exposureVal = selectedExposureRadio ? selectedExposureRadio.value : "N/A";

            // Update result text in DOM safely
            const resName = document.getElementById("res-name");
            const resConcern = document.getElementById("res-concern");
            const resSkinType = document.getElementById("res-skin-type");
            const resSensitivity = document.getElementById("res-sensitivity");
            const resExposure = document.getElementById("res-exposure");
            
            if (resName) resName.textContent = name;
            if (resConcern) resConcern.textContent = concernVal;
            if (resSkinType) resSkinType.textContent = skinTypeVal;
            if (resSensitivity) resSensitivity.textContent = sensitivityVal;
            if (resExposure) resExposure.textContent = exposureVal;

            // Generate report copy
            let assessmentText = "";
            let treatments = [];
            let routineTip = "";

            if (concernVal === "Acne & Scars") {
                assessmentText = `Your primary concern is active acne breakouts and epidermal scarring. Combined with your ${skinTypeVal.toLowerCase()} skin type and ${sensitivityVal.toLowerCase()} profile, your barrier requires soothing, sebum-regulating care. A targeted treatment plan will clear active pustules first and then focus on skin remodeling to clear scars.`;
                treatments = ["Clinical Acne Resolution Peel", "Fractional CO2 Laser Resurfacing"];
            } else if (concernVal === "Pigmentation") {
                assessmentText = `You are experiencing hyperpigmentation or melasma, which can be triggered by sun damage or hormonal fluctuations. With a ${exposureVal.toLowerCase()} daily sun exposure profile, protecting your skin barrier and regulating melanocyte activity is essential.`;
                treatments = ["Q-Switched Laser Photo-Facial", "Deep Lightening Chemical Peel"];
            } else if (concernVal === "Hair Loss") {
                assessmentText = `You are experiencing active hair fall or follicular thinning. Addressing scalp health and stimulating blood supply to dormant follicles is the primary priority to restore density.`;
                treatments = ["Autologous Platelet-Rich Plasma (PRP)", "Restorative Trichology Scalp Therapy"];
            } else if (concernVal === "Aging") {
                assessmentText = `You are noticing structural aging, fine lines, or sagging. Your ${skinTypeVal.toLowerCase()} skin profile benefits from deep collagen stimulation and cellular turnover.`;
                treatments = ["Fractional CO2 Laser Resurfacing", "Aesthetic Anti-Aging Rejuvenation"];
            } else { // Dryness
                assessmentText = `Your skin is experiencing severe dryness, barrier dysfunction, or sensitivity. Your ${sensitivityVal.toLowerCase()} profile indicates a compromised moisture barrier. Hydrating and soothing active care is needed.`;
                treatments = ["Deep Hydrating Barrier Therapy", "Clinical Soothing Facial"];
            }

            // Routine tips
            if (skinTypeVal === "Oily") {
                routineTip = "Use a gentle Salicylic Acid foaming wash twice daily. Do not skip moisturizer; select a light, non-comedogenic oil-free gel.";
            } else if (skinTypeVal === "Dry") {
                routineTip = "Use a soap-free, cream cleanser and apply a thick, Ceramide-rich barrier repair moisturizer on damp skin.";
            } else if (skinTypeVal === "Combination") {
                routineTip = "Cleanse thoroughly in the evenings, focusing on the T-zone. Use lightweight hydrating serums (like Hyaluronic Acid) under a gel-cream.";
            } else {
                routineTip = "Maintain a basic defensive routine: Antioxidant Vitamin C + Sunscreen in the morning, and Hydrating moisturizer at night.";
            }

            if (sensitivityVal === "Highly Sensitive") {
                routineTip += " Avoid all artificial fragrances, essential oils, and physical scrubs. Always patch test active serums behind your ear first.";
            } else {
                routineTip += " Apply broad-spectrum mineral sunscreen SPF 50 daily, especially with outdoor travel.";
            }

            // Fill results in DOM safely
            const resAssess = document.getElementById("res-assessment-text");
            const resTip = document.getElementById("res-routine-tip");
            if (resAssess) resAssess.textContent = assessmentText;
            if (resTip) resTip.textContent = routineTip;

            const treatmentsList = document.getElementById("res-treatments-list");
            if (treatmentsList) {
                treatmentsList.innerHTML = "";
                treatments.forEach(t => {
                    const li = document.createElement("li");
                    li.textContent = t;
                    treatmentsList.appendChild(li);
                });
            }

            // Bind photo to results scorecard
            const resPhotoContainer = document.getElementById("res-photo-container");
            const resPhotoImg = document.getElementById("res-photo-img");
            if (resPhotoContainer && resPhotoImg) {
                if (submittedPhotoDataUrl) {
                    resPhotoImg.src = submittedPhotoDataUrl;
                    resPhotoContainer.style.display = "block";
                } else {
                    resPhotoImg.src = "";
                    resPhotoContainer.style.display = "none";
                }
            }

            // Transition to results slide
            showSlide(7);
        });
    }

    // Restart Wizard
    if (restartAnalysisBtn) {
        restartAnalysisBtn.addEventListener("click", () => {
            // Reset radios
            document.querySelectorAll('.analysis-wizard input[type="radio"]').forEach(radio => {
                radio.checked = false;
            });
            // Disable next buttons, skipping photo step next button
            document.querySelectorAll(".analysis-wizard .btn-next").forEach(btn => {
                if (btn.id !== "btn-photo-next") {
                    btn.setAttribute("disabled", "true");
                }
            });
            // Clear inputs
            const nameInput = document.getElementById("analysis-name");
            const phoneInput = document.getElementById("analysis-phone");
            if (nameInput) nameInput.value = "";
            if (phoneInput) phoneInput.value = "";

            // Reset photo upload/camera elements
            submittedPhotoDataUrl = null;
            if (photoPreviewImg) photoPreviewImg.src = "";
            if (photoPreviewContainer) photoPreviewContainer.style.display = "none";
            if (uploadZone) uploadZone.style.display = "flex";
            if (orSeparator) orSeparator.style.display = "block";
            if (cameraActivationBox) cameraActivationBox.style.display = "block";
            if (photoNextBtn) photoNextBtn.textContent = "Skip & Continue";
            if (fileInput) fileInput.value = "";

            showSlide(0);
        });
    }

    // Book Appointment CTA from results card
    if (bookFromAnalysisBtn) {
        bookFromAnalysisBtn.addEventListener("click", () => {
            // Gather result values safely
            const resName = document.getElementById("res-name");
            const analysisPhone = document.getElementById("analysis-phone");
            const name = resName ? resName.textContent : "";
            const phone = analysisPhone ? analysisPhone.value : "";

            // Open booking modal
            const bookingModal = document.getElementById("booking-modal");
            if (bookingModal) {
                bookingModal.classList.add("open");
                document.body.style.overflow = "hidden"; // Disable scroll
            }

            // Pre-fill Name & Phone
            const bookingName = document.getElementById("p-name");
            const bookingPhone = document.getElementById("p-phone");
            if (bookingName) bookingName.value = name;
            if (bookingPhone) bookingPhone.value = phone;

            // Pre-select Treatment category
            const concernRadioValue = document.querySelector('input[name="concern"]:checked')?.value;
            let targetValue = "";

            if (concernRadioValue === "Acne & Scars" || concernRadioValue === "Pigmentation") {
                targetValue = "Skin Care / Acne";
            } else if (concernRadioValue === "Hair Loss") {
                targetValue = "Hair Loss / PRP";
            } else if (concernRadioValue === "Aging") {
                targetValue = "Laser Procedures";
            } else {
                targetValue = "General Consultation";
            }

            const targetRadio = document.querySelector(`input[name="treatmentType"][value="${targetValue}"]`);
            if (targetRadio) {
                targetRadio.checked = true;
                // Trigger change event to update steps calculations in app.js
                targetRadio.dispatchEvent(new Event("change"));
            }

            // Scroll to booking or step 1
            const modalBody = document.querySelector(".booking-modal-container");
            if (modalBody) {
                modalBody.scrollTop = 0;
            }
        });
    }
}

/* Dynamic Clinic Status Checker */
function initClinicStatus() {
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    if (!statusDot || !statusText) return;

    function updateStatus() {
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        // Etawah is in India (IST, UTC+5:30)
        const ist = new Date(utc + (3600000 * 5.5));

        const day = ist.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const hours = ist.getHours();
        const minutes = ist.getMinutes();
        const timeVal = hours * 100 + minutes;

        let isOpen = false;

        if (day >= 1 && day <= 6) { // Monday to Saturday
            if (timeVal >= 1000 && timeVal < 1900) { // 10:00 AM to 07:00 PM
                isOpen = true;
            }
        }

        if (isOpen) {
            statusDot.style.background = '#10b981';
            statusDot.style.boxShadow = '0 0 8px #10b981';
            statusText.textContent = 'Open Now';
            statusText.style.color = '#10b981';
        } else {
            statusDot.style.background = '#ef4444';
            statusDot.style.boxShadow = 'none';
            statusText.textContent = 'Closed Now';
            statusText.style.color = '#ef4444';
        }
    }

    updateStatus();
    setInterval(updateStatus, 60000); // Check status every minute
}

