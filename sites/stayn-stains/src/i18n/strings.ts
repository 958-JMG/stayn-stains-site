import type { Locale } from './locales';

export interface Strings {
  meta: {
    title_home: string;
    desc_home: string;
    title_merci: string;
    desc_merci: string;
    title_404: string;
    desc_404: string;
  };
  nav: {
    programme: string;
    appartements: string;
    localisation: string;
    contact: string;
    legal: string;
    skip_to_main: string;
    open_menu: string;
    close_menu: string;
    docu_btn: string;
    call_aria: string;
  };
  urgency: {
    region_label: string;
    tag: string;
    remise_label: string;
    text_prefix: string;
    text_count_part: (n: number) => string;
    cd_prefix: string;
    cta: string;
    close_aria: string;
  };
  hero: {
    eyebrow: string;
    h1_line1: string;
    h1_line2: string;
    lead_strong: string;
    lead_body: string;
    cta_offer: string;
    cta_program: string;
    bullet_re2020: string;
    bullet_tva: string;
    bullet_ptz: string;
  };
  offer: {
    section_label: string;
    tag: string;
    title_prefix: string;
    title_or: string;
    lead_strong_first: (n: number) => string;
    lead_body: string;
    table_h: string;
    table_lot: string;
    table_before: string;
    table_after: string;
    table_save: string;
    bonus_tag: string;
    bonus_subtitle: string;
    bonus_title: string;
    bonus_body: string;
    bullet1: (date: string) => string;
    bullet2: string;
    bullet3: string;
    cta_lock: string;
    fine_prefix: string;
    fine_link: string;
    fine_suffix: string;
    counter_label: string;
    cd_d: string;
    cd_h: string;
    cd_m: string;
    cd_s: string;
    stock_label: string;
  };
  programme: {
    eyebrow: string;
    h2: string;
    f1_h: string;
    f1_p: string;
    f2_h: string;
    f2_p: string;
    f3_h: string;
    f3_p: string;
  };
  interior: {
    eyebrow: string;
    h2: string;
    lead_strong: string;
    lead_body: string;
    cta: string;
    img_alt: string;
  };
  apparts: {
    eyebrow: string;
    h2: string;
    lead: string;
    from_label: string;
    receive_plan: string;
    legal_note_prefix: string;
    legal_link: string;
    surface_t2: string;
    surface_t3: string;
    surface_t4: string;
    surface_t5: string;
    hors_parking: string;
    type_t2: string;
    type_t3: string;
    type_t4: string;
    type_t5: string;
  };
  localisation: {
    eyebrow: string;
    h2: string;
    address_strong: string;
    body: string;
    paris_15: string;
    transports_h3: string;
    rer_d: string;
    rer_b: string;
    metro_13: string;
    tram_t11: string;
    bus: string;
    gpe: string;
    map_region_aria: string;
    map_legend_aria: string;
    section_practical: string;
    section_transit: string;
    section_education: string;
    section_worship: string;
    section_sport: string;
    section_shops: string;
    walk_to: string;
    directions: string;
    legend_sale: string;
    legend_practical: string;
    legend_transit: string;
    legend_education: string;
    legend_worship: string;
    legend_sport: string;
    poi_sale: string;
    poi_sale_sub: string;
    poi_mairie: string;
    poi_mairie_sub: string;
    poi_marche: string;
    poi_marche_sub: string;
    poi_poste: string;
    poi_poste_sub: string;
    poi_rerd: string;
    poi_rerd_sub: string;
    poi_rerb: string;
    poi_rerb_sub: string;
    poi_m13: string;
    poi_m13_sub: string;
    poi_t11: string;
    poi_t11_sub: string;
    poi_bus: string;
    poi_bus_sub: string;
    poi_school_primary: string;
    poi_school_primary_sub: string;
    poi_school_secondary: string;
    poi_school_secondary_sub: string;
    poi_eglise: string;
    poi_eglise_sub: string;
    poi_mosquee: string;
    poi_mosquee_sub: string;
    poi_sport: string;
    poi_sport_sub: string;
    poi_shops: string;
    poi_shops_sub: string;
  };
  contact: {
    eyebrow: string;
    h2: string;
    lead_strong: string;
    lead_body: string;
    address_h: string;
    tel_h: string;
    email_h: string;
  };
  form: {
    field_prenom: string;
    field_nom: string;
    field_email: string;
    field_tel: string;
    field_type: string;
    field_projet: string;
    optional: string;
    placeholder_email: string;
    placeholder_tel: string;
    placeholder_projet: string;
    type_indiff: string;
    tel_help: string;
    consent_sms: string;
    consent_rgpd_prefix: string;
    consent_rgpd_link: string;
    consent_rgpd_suffix: string;
    submit: string;
    submitting: string;
    rgpd_note_prefix: string;
    rgpd_note_email: string;
    rgpd_note_suffix: string;
    err_prenom: string;
    err_nom: string;
    err_email: string;
    err_tel: string;
    err_consent: string;
    err_required_check: string;
    err_generic: string;
    success: string;
  };
  footer: {
    tagline: string;
    sale_h: string;
    promo_h: string;
    legal_h: string;
    legal_mentions: string;
    legal_cookies: string;
    legal_data: string;
    copyright: (year: number) => string;
    rights: string;
    powered_by: string;
  };
  merci: {
    eyebrow: string;
    h1: string;
    lead_strong_24h: string;
    lead_body: string;
    block1_h: string;
    block1_p: string;
    block2_h: string;
    block2_p: string;
    block2_link: string;
    back: string;
  };
  not_found: {
    eyebrow: string;
    h1: string;
    lead: string;
    cta_home: string;
  };
  legal_disclaimer: {
    h: string;
    body: string;
  };
}

const fr: Strings = {
  meta: {
    title_home: "Stay'n — Devenez propriétaire à Stains, Paris à 15 min",
    desc_home:
      "58 logements neufs T2 à T5 à Stains (93). RE 2020, TVA 5,5 %, éligible PTZ. Offre de printemps : jusqu'à −15 000 € de remise immédiate. À partir de 168 000 € hors parking.",
    title_merci: "Merci pour votre demande",
    desc_merci:
      "Votre demande de documentation a bien été enregistrée. Un conseiller vous recontacte sous 24 heures ouvrées.",
    title_404: "Page introuvable",
    desc_404: "La page que vous cherchez n'existe pas ou plus.",
  },
  nav: {
    programme: "Le programme",
    appartements: "Appartements",
    localisation: "Localisation",
    contact: "Contact",
    legal: "Mentions légales",
    skip_to_main: "Aller au contenu",
    open_menu: "Ouvrir le menu",
    close_menu: "Fermer le menu",
    docu_btn: "Documentation",
    call_aria: "Appeler — 07 63 27 78 78",
  },
  urgency: {
    region_label: "Offre de printemps",
    tag: "Offre de printemps",
    remise_label: "Jusqu'à −15 000 € de remise immédiate",
    text_prefix: "Sur",
    text_count_part: () => "les lots encore disponibles",
    cd_prefix: "Plus que",
    cta: "J'en profite",
    close_aria: "Fermer le bandeau",
  },
  hero: {
    eyebrow: "Programme neuf · Stains 93240",
    h1_line1: "C'est le moment de passer",
    h1_line2: "de locataire à propriétaire.",
    lead_strong: "Stop aux loyers perdus.",
    lead_body:
      "58 logements T2 à T5, à 15 minutes de Paris. Avec l'offre de printemps, devenez propriétaire à partir de 168 000 € au lieu de 175 000 €.",
    cta_offer: "Voir l'offre de printemps",
    cta_program: "Découvrir le programme",
    bullet_re2020: "RE 2020",
    bullet_tva: "TVA réduite 5,5 %",
    bullet_ptz: "Éligible PTZ",
  },
  offer: {
    section_label: "Offre de printemps",
    tag: "Offre de printemps",
    title_prefix: "Jusqu'à",
    title_or: "de remise immédiate",
    lead_strong_first: () => "",
    lead_body: "Sur les lots encore disponibles, voici quelques exemples :",
    table_h: "Exemples de lots disponibles",
    table_lot: "Lot",
    table_before: "Prix initial",
    table_after: "Prix de printemps",
    table_save: "Vous économisez",
    bonus_tag: "Pour le plus rapide",
    bonus_subtitle: "Offre limitée aux 5 premiers réservataires",
    bonus_title: "−4 000 € sur votre cuisine",
    bonus_body: "Bon d'achat de 4 000 € à valoir sur votre cuisine équipée, en plus de la remise sur votre logement.",
    bullet1: (date) =>
      `Choisissez votre lot et signez le contrat de réservation avant le ${date}.`,
    bullet2: "La remise est appliquée au prix TTC de votre logement.",
    bullet3: "Cumulable avec la TVA 5,5 % et le PTZ.",
    cta_lock: "Bloquer mon logement",
    fine_prefix: "Voir les ",
    fine_link: "conditions complètes",
    fine_suffix: ". Offre dans la limite des stocks disponibles.",
    counter_label: "Fin de l'offre",
    cd_d: "jours",
    cd_h: "heures",
    cd_m: "minutes",
    cd_s: "secondes",
    stock_label: "lots disponibles",
  },
  programme: {
    eyebrow: "Pourquoi Stay'n ?",
    h2: "Une résidence pensée pour la vraie vie.",
    f1_h: "Résidence neuve, moderne",
    f1_p:
      "Jardin intérieur, stationnement sécurisé, balcon ou terrasse pour chaque appartement. Cuisine ouverte, prestations soignées, fibre optique.",
    f2_h: "Norme RE 2020",
    f2_p:
      "Dernières normes environnementales, isolation renforcée et équipements économes. Confort en toute saison, factures réduites toute l'année.",
    f3_h: "TVA 5,5 % + PTZ",
    f3_p:
      "TVA réduite à 5,5 % au lieu de 20 %, sous conditions de ressources. Éligible au Prêt à Taux Zéro pour boucler votre financement sereinement.",
  },
  interior: {
    eyebrow: "Les appartements",
    h2: "Lumineux, bien conçus, prêts à vivre.",
    lead_strong: "Du 2 au 5 pièces.",
    lead_body:
      " Cuisine ouverte sur séjour, agencement optimal, balcon ou terrasse, sécurité et économies d'énergie. Des espaces pensés pour la vraie vie.",
    cta: "Télécharger la brochure",
    img_alt: "Vue intérieure d'un logement Stay'n — séjour lumineux et cuisine ouverte",
  },
  apparts: {
    eyebrow: "Grilles de prix",
    h2: "Du T2 au T5, à partir de 175 000 €.",
    lead: "Prix hors parking, premiers lots disponibles.",
    from_label: "à partir de",
    receive_plan: "Recevoir le plan",
    legal_note_prefix:
      "* Prix indicatifs susceptibles d'évoluer en fonction de la disponibilité des lots, non contractuels — voir ",
    legal_link: "conditions complètes",
    surface_t2: "à partir de 41 m²",
    surface_t3: "à partir de 60 m²",
    surface_t4: "à partir de 78 m²",
    surface_t5: "à partir de 96 m²",
    hors_parking: "hors parking",
    type_t2: "T2",
    type_t3: "T3",
    type_t4: "T4",
    type_t5: "T5",
  },
  localisation: {
    eyebrow: "Localisation",
    h2: "Un emplacement stratégique.",
    address_strong: "7-11 avenue Marcel Cachin, 93240 Stains.",
    body: " Tout à proximité — commerces, écoles, services, équipements sportifs.",
    paris_15: "Paris en 15 minutes.",
    transports_h3: "Transports",
    rer_d: "RER D · Pierrefitte – Stains",
    rer_b: "RER B · Drancy",
    metro_13: "Métro 13 · Saint-Denis Université",
    tram_t11: "Tram T11 · Pierrefitte – Stains",
    bus: "Bus 255 · 253 · 150",
    gpe: "Bientôt Grand Paris Express",
    map_region_aria: "Carte des points d'intérêt autour de Stay'n",
    map_legend_aria: "Légende des points d'intérêt",
    section_practical: "Vie pratique",
    section_transit: "Transports",
    section_education: "Éducation",
    section_worship: "Cultes",
    section_sport: "Sport & loisirs",
    section_shops: "Commerces",
    walk_to: "à pied",
    directions: "Itinéraire",
    legend_sale: "Stay'n",
    legend_practical: "Vie pratique",
    legend_transit: "Transports",
    legend_education: "Éducation",
    legend_worship: "Cultes",
    legend_sport: "Sport",
    poi_sale: "Espace de vente Stay'n",
    poi_sale_sub: "7-14 av. Marcel Cachin",
    poi_mairie: "Mairie de Stains",
    poi_mairie_sub: "6 av. Paul Vaillant-Couturier",
    poi_marche: "Marché de Stains",
    poi_marche_sub: "Mercredi & samedi matin",
    poi_poste: "La Poste",
    poi_poste_sub: "Bureau de Stains",
    poi_rerd: "RER D · Pierrefitte – Stains",
    poi_rerd_sub: "Direction Paris Gare du Nord",
    poi_rerb: "RER B · Drancy",
    poi_rerb_sub: "Direction Châtelet-les-Halles",
    poi_m13: "Métro 13 · Saint-Denis Université",
    poi_m13_sub: "Direction Châtillon-Montrouge",
    poi_t11: "Tram T11 · Pierrefitte – Stains",
    poi_t11_sub: "Express ceinture nord",
    poi_bus: "Bus 255 · 253 · 150",
    poi_bus_sub: "Arrêt Marcel Cachin",
    poi_school_primary: "Écoles primaires",
    poi_school_primary_sub: "Plusieurs groupes scolaires à proximité",
    poi_school_secondary: "Collèges & lycée",
    poi_school_secondary_sub: "Lycée Maurice Utrillo · collège Joliot-Curie",
    poi_eglise: "Église Notre-Dame de l'Assomption",
    poi_eglise_sub: "Paroisse de Stains",
    poi_mosquee: "Mosquée de Stains",
    poi_mosquee_sub: "Lieu de culte musulman",
    poi_sport: "Stade & gymnases",
    poi_sport_sub: "Équipements sportifs du quartier",
    poi_shops: "Commerces de proximité",
    poi_shops_sub: "Centre-ville de Stains",
  },
  contact: {
    eyebrow: "Recevoir la documentation",
    h2: "Prenez rendez-vous avec un conseiller.",
    lead_strong: "24 h ouvrées.",
    lead_body:
      "Brochure complète, plans des appartements, simulation TVA 5,5 % et PTZ. Un conseiller vous recontacte sous ",
    address_h: "Espace de vente",
    tel_h: "Téléphone",
    email_h: "Email",
  },
  form: {
    field_prenom: "Prénom",
    field_nom: "Nom",
    field_email: "Email",
    field_tel: "Téléphone",
    field_type: "Type de logement souhaité",
    field_projet: "Votre projet",
    optional: "(optionnel)",
    placeholder_email: "vous@exemple.fr",
    placeholder_tel: "06 12 34 56 78",
    placeholder_projet: "Résidence principale, investissement locatif, primo-accession…",
    type_indiff: "— Indifférent / non décidé —",
    tel_help: "Pour qu'un conseiller vous recontacte rapidement.",
    consent_sms:
      "J'accepte de recevoir des communications par SMS de la part de CD LINK Promotion concernant le programme Stay'n.",
    consent_rgpd_prefix: "J'ai pris connaissance des ",
    consent_rgpd_link: "mentions légales et de la politique de confidentialité",
    consent_rgpd_suffix: " et j'accepte le traitement de mes données pour répondre à ma demande.",
    submit: "Recevoir la documentation",
    submitting: "Envoi en cours…",
    rgpd_note_prefix:
      "Vos données sont conservées 18 mois et ne sont jamais cédées. Droits d'accès et de suppression : ",
    rgpd_note_email: "contact@ozimmo.fr",
    rgpd_note_suffix: ".",
    err_prenom: "Veuillez renseigner votre prénom.",
    err_nom: "Veuillez renseigner votre nom.",
    err_email: "Adresse email invalide.",
    err_tel: "Numéro de téléphone invalide.",
    err_consent: "Merci d'accepter les deux cases de consentement pour pouvoir vous recontacter.",
    err_required_check: "Merci de vérifier les champs en surbrillance.",
    err_generic: "L'envoi a échoué. Vous pouvez réessayer ou nous appeler au 07 63 27 78 78.",
    success: "Merci, votre demande a bien été enregistrée.",
  },
  footer: {
    tagline: "58 logements neufs à Stains. Paris en 15 minutes.",
    sale_h: "Espace de vente",
    promo_h: "Promoteur",
    legal_h: "Légal",
    legal_mentions: "Mentions légales",
    legal_cookies: "Cookies & traceurs",
    legal_data: "Données personnelles",
    copyright: (y) => `© ${y} CD LINK Promotion & Inoyam`,
    rights: "Tous droits réservés",
    powered_by: "Propulsé par",
  },
  merci: {
    eyebrow: "Demande enregistrée",
    h1: "Merci, votre demande est bien reçue.",
    lead_strong_24h: "24 heures ouvrées",
    lead_body:
      "Un conseiller Stay'n vous recontacte sous {x} au numéro que vous avez indiqué. Il vous fera parvenir la brochure complète, les plans des appartements, et fera le point sur les conditions TVA 5,5 % et PTZ.",
    block1_h: "Besoin de nous parler tout de suite ?",
    block1_p: "L'espace de vente est joignable du lundi au samedi.",
    block2_h: "Préparer votre venue",
    block2_p: "L'espace de vente est situé au 7-14 avenue Marcel Cachin, 93240 Stains.",
    block2_link: "Itinéraire",
    back: "← Retour à l'accueil",
  },
  not_found: {
    eyebrow: "Erreur 404",
    h1: "Cette page s'est perdue.",
    lead: "Le contenu que vous cherchez n'existe pas ou a été déplacé. Revenez à l'accueil ou appelez l'espace de vente.",
    cta_home: "Retour à l'accueil",
  },
  legal_disclaimer: {
    h: "À propos des mentions légales",
    body:
      "Pour leur valeur contractuelle, les mentions légales et les conditions de l'offre sont disponibles uniquement en français.",
  },
};

const en: Strings = {
  meta: {
    title_home: "Stay'n — Become a homeowner in Stains, 15 min from Paris",
    desc_home:
      "58 brand-new apartments (1- to 4-bedroom) in Stains (Greater Paris). RE 2020 standard, reduced 5.5% VAT, PTZ-eligible. Spring offer: up to −€15,000 instant discount. From €168,000 (excl. parking).",
    title_merci: "Thank you for your enquiry",
    desc_merci:
      "Your documentation request has been received. A consultant will get back to you within 24 business hours.",
    title_404: "Page not found",
    desc_404: "The page you were looking for does not exist or has been moved.",
  },
  nav: {
    programme: "The project",
    appartements: "Apartments",
    localisation: "Location",
    contact: "Contact",
    legal: "Legal notice",
    skip_to_main: "Skip to content",
    open_menu: "Open menu",
    close_menu: "Close menu",
    docu_btn: "Brochure",
    call_aria: "Call — +33 7 63 27 78 78",
  },
  urgency: {
    region_label: "Spring offer",
    tag: "Spring offer",
    remise_label: "Up to −€15,000 instant discount",
    text_prefix: "On",
    text_count_part: () => "available units",
    cd_prefix: "Only",
    cta: "Claim now",
    close_aria: "Close the banner",
  },
  hero: {
    eyebrow: "New development · Stains 93240",
    h1_line1: "Stop renting,",
    h1_line2: "start owning.",
    lead_strong: "No more rent disappearing each month.",
    lead_body:
      "58 brand-new 1- to 4-bedroom apartments, 15 minutes from central Paris. With the spring offer, become a homeowner from €168,000 instead of €175,000.",
    cta_offer: "See the spring offer",
    cta_program: "Discover the project",
    bullet_re2020: "RE 2020 standard",
    bullet_tva: "Reduced 5.5% VAT",
    bullet_ptz: "PTZ-eligible",
  },
  offer: {
    section_label: "Spring offer",
    tag: "Spring offer",
    title_prefix: "Up to",
    title_or: "instant discount",
    lead_strong_first: () => "",
    lead_body: "On the still-available units, a few examples below:",
    table_h: "Available units · examples",
    table_lot: "Unit",
    table_before: "List price",
    table_after: "Spring price",
    table_save: "You save",
    bonus_tag: "For the quickest",
    bonus_subtitle: "Limited to the first 5 buyers",
    bonus_title: "−€4,000 on your kitchen",
    bonus_body: "€4,000 voucher towards your fitted kitchen, on top of the apartment discount.",
    bullet1: (date) => `Pick your unit and sign the reservation contract before ${date}.`,
    bullet2: "The discount is applied to the inc. VAT price of your apartment.",
    bullet3: "Stackable with reduced 5.5% VAT and PTZ.",
    cta_lock: "Reserve my apartment",
    fine_prefix: "See the ",
    fine_link: "full conditions",
    fine_suffix: ". Subject to availability.",
    counter_label: "Offer ends",
    cd_d: "days",
    cd_h: "hours",
    cd_m: "minutes",
    cd_s: "seconds",
    stock_label: "available units",
  },
  programme: {
    eyebrow: "Why Stay'n?",
    h2: "A residence designed for real life.",
    f1_h: "Brand-new, modern",
    f1_p:
      "Inner garden, secure parking, balcony or terrace for every apartment. Open-plan kitchen, careful finishes, fibre internet.",
    f2_h: "RE 2020 standard",
    f2_p:
      "Latest environmental standards, reinforced insulation, energy-efficient equipment. Comfort year-round, lower bills.",
    f3_h: "5.5% VAT + PTZ",
    f3_p:
      "Reduced 5.5% VAT instead of 20%, subject to income criteria. PTZ-eligible (zero-rate state loan) to round out your financing.",
  },
  interior: {
    eyebrow: "The apartments",
    h2: "Bright, well-designed, ready to live in.",
    lead_strong: "From 1- to 4-bedroom.",
    lead_body:
      " Open-plan kitchen, optimal layout, balcony or terrace, security and energy savings. Spaces designed for real life.",
    cta: "Download the brochure",
    img_alt: "Interior view of a Stay'n apartment — bright living room and open kitchen",
  },
  apparts: {
    eyebrow: "Pricing",
    h2: "From 1- to 4-bedroom, starting at €175,000.",
    lead: "Prices excluding parking, first available units.",
    from_label: "starting from",
    receive_plan: "Get the floor plan",
    legal_note_prefix:
      "* Indicative prices, subject to change based on availability, non-contractual — see ",
    legal_link: "full conditions",
    surface_t2: "from 41 sqm",
    surface_t3: "from 60 sqm",
    surface_t4: "from 78 sqm",
    surface_t5: "from 96 sqm",
    hors_parking: "excl. parking",
    type_t2: "1-bdr",
    type_t3: "2-bdr",
    type_t4: "3-bdr",
    type_t5: "4-bdr",
  },
  localisation: {
    eyebrow: "Location",
    h2: "A strategic location.",
    address_strong: "7-11 avenue Marcel Cachin, 93240 Stains.",
    body: " Everything within reach — shops, schools, services, sports facilities.",
    paris_15: "Paris in 15 minutes.",
    transports_h3: "Transport",
    rer_d: "RER D · Pierrefitte – Stains",
    rer_b: "RER B · Drancy",
    metro_13: "Metro 13 · Saint-Denis Université",
    tram_t11: "Tram T11 · Pierrefitte – Stains",
    bus: "Bus 255 · 253 · 150",
    gpe: "Soon Grand Paris Express",
    map_region_aria: "Map of points of interest around Stay'n",
    map_legend_aria: "Legend of points of interest",
    section_practical: "Daily essentials",
    section_transit: "Transport",
    section_education: "Education",
    section_worship: "Places of worship",
    section_sport: "Sport & leisure",
    section_shops: "Shops",
    walk_to: "walk",
    directions: "Directions",
    legend_sale: "Stay'n",
    legend_practical: "Daily essentials",
    legend_transit: "Transport",
    legend_education: "Education",
    legend_worship: "Worship",
    legend_sport: "Sport",
    poi_sale: "Stay'n sales office",
    poi_sale_sub: "7-14 av. Marcel Cachin",
    poi_mairie: "Stains Town Hall",
    poi_mairie_sub: "6 av. Paul Vaillant-Couturier",
    poi_marche: "Stains street market",
    poi_marche_sub: "Wed. & Sat. mornings",
    poi_poste: "Post office",
    poi_poste_sub: "Stains branch",
    poi_rerd: "RER D · Pierrefitte – Stains",
    poi_rerd_sub: "Towards Paris Gare du Nord",
    poi_rerb: "RER B · Drancy",
    poi_rerb_sub: "Towards Châtelet-les-Halles",
    poi_m13: "Metro 13 · Saint-Denis Université",
    poi_m13_sub: "Towards Châtillon-Montrouge",
    poi_t11: "Tram T11 · Pierrefitte – Stains",
    poi_t11_sub: "Northern Paris express loop",
    poi_bus: "Bus 255 · 253 · 150",
    poi_bus_sub: "Marcel Cachin stop",
    poi_school_primary: "Primary schools",
    poi_school_primary_sub: "Several school groups nearby",
    poi_school_secondary: "Middle & high schools",
    poi_school_secondary_sub: "Lycée Maurice Utrillo · Joliot-Curie middle school",
    poi_eglise: "Notre-Dame de l'Assomption Church",
    poi_eglise_sub: "Stains parish",
    poi_mosquee: "Stains Mosque",
    poi_mosquee_sub: "Muslim place of worship",
    poi_sport: "Stadium & gyms",
    poi_sport_sub: "Local sports facilities",
    poi_shops: "Local shops",
    poi_shops_sub: "Stains town centre",
  },
  contact: {
    eyebrow: "Get the brochure",
    h2: "Book a meeting with a consultant.",
    lead_strong: "24 business hours.",
    lead_body:
      "Full brochure, floor plans, simulation of the 5.5% VAT and PTZ. A consultant will get back to you within ",
    address_h: "Sales office",
    tel_h: "Phone",
    email_h: "Email",
  },
  form: {
    field_prenom: "First name",
    field_nom: "Last name",
    field_email: "Email",
    field_tel: "Phone",
    field_type: "Apartment type",
    field_projet: "Your project",
    optional: "(optional)",
    placeholder_email: "you@example.com",
    placeholder_tel: "+33 6 12 34 56 78",
    placeholder_projet: "Primary residence, buy-to-let, first-time buyer…",
    type_indiff: "— No preference / undecided —",
    tel_help: "So a consultant can call you back quickly.",
    consent_sms:
      "I agree to receive SMS communications from CD LINK Promotion regarding the Stay'n project.",
    consent_rgpd_prefix: "I have read the ",
    consent_rgpd_link: "legal notice and privacy policy",
    consent_rgpd_suffix: " and I consent to my data being processed to respond to my request.",
    submit: "Get the brochure",
    submitting: "Sending…",
    rgpd_note_prefix:
      "Your data is kept for 18 months max and never sold. Access and deletion rights: ",
    rgpd_note_email: "contact@ozimmo.fr",
    rgpd_note_suffix: ".",
    err_prenom: "Please enter your first name.",
    err_nom: "Please enter your last name.",
    err_email: "Invalid email address.",
    err_tel: "Invalid phone number.",
    err_consent: "Please accept both consent boxes so we can get back to you.",
    err_required_check: "Please check the highlighted fields.",
    err_generic:
      "Submission failed. Please try again or call us at +33 7 63 27 78 78.",
    success: "Thank you, your request has been received.",
  },
  footer: {
    tagline: "58 brand-new apartments in Stains. 15 minutes from Paris.",
    sale_h: "Sales office",
    promo_h: "Developer",
    legal_h: "Legal",
    legal_mentions: "Legal notice",
    legal_cookies: "Cookies & trackers",
    legal_data: "Personal data",
    copyright: (y) => `© ${y} CD LINK Promotion & Inoyam`,
    rights: "All rights reserved",
    powered_by: "Powered by",
  },
  merci: {
    eyebrow: "Request received",
    h1: "Thank you, your request is in.",
    lead_strong_24h: "24 business hours",
    lead_body:
      "A Stay'n consultant will call you within {x} at the number you provided. They will also send you the full brochure, floor plans, and walk you through the 5.5% VAT and PTZ conditions.",
    block1_h: "Need to talk right now?",
    block1_p: "The sales office is open Monday through Saturday.",
    block2_h: "Plan your visit",
    block2_p: "Sales office: 7-14 avenue Marcel Cachin, 93240 Stains.",
    block2_link: "Directions",
    back: "← Back to home",
  },
  not_found: {
    eyebrow: "Error 404",
    h1: "This page got lost.",
    lead:
      "The content you're looking for doesn't exist or has been moved. Head back home or call the sales office.",
    cta_home: "Back to home",
  },
  legal_disclaimer: {
    h: "About the legal notice",
    body:
      "Due to its contractual nature, the legal notice and offer conditions are available in French only.",
  },
};

const ar: Strings = {
  meta: {
    title_home: "Stay'n — تَملَّك منزلك في ستان، ⁦15 دقيقة⁩ من باريس",
    desc_home:
      "58 شقة جديدة من غرفتين إلى خمس غرف في ستان (شمال باريس). معيار RE 2020، ضريبة قيمة مضافة مخفّضة 5.5٪، مؤهَّل لقرض PTZ. عرض الربيع: حتى ⁦−15 000 €⁩ خصم فوري. ابتداءً من ⁦168 000 €⁩ باستثناء موقف السيارة.",
    title_merci: "شكراً على طلبكم",
    desc_merci:
      "تم استلام طلبكم للحصول على الوثائق. سيتواصل معكم مستشار خلال 24 ساعة عمل.",
    title_404: "الصفحة غير موجودة",
    desc_404: "الصفحة التي تبحثون عنها غير موجودة أو تم نقلها.",
  },
  nav: {
    programme: "المشروع",
    appartements: "الشقق",
    localisation: "الموقع",
    contact: "تواصلوا معنا",
    legal: "الإشعار القانوني",
    skip_to_main: "الانتقال إلى المحتوى",
    open_menu: "فتح القائمة",
    close_menu: "إغلاق القائمة",
    docu_btn: "الوثائق",
    call_aria: "اتصلوا — 78 78 27 63 7 33+",
  },
  urgency: {
    region_label: "عرض الربيع",
    tag: "عرض الربيع",
    remise_label: "حتى ⁦−15 000 €⁩ خصم فوري",
    text_prefix: "على",
    text_count_part: () => "العقارات المتاحة",
    cd_prefix: "تبقّى",
    cta: "أستفيد من العرض",
    close_aria: "إغلاق الشريط",
  },
  hero: {
    eyebrow: "مشروع جديد · ستان 93240",
    h1_line1: "حان الوقت للانتقال",
    h1_line2: "من الإيجار إلى التَملُّك.",
    lead_strong: "كفى ضياعاً للإيجارات.",
    lead_body:
      "58 شقة جديدة من غرفتين إلى خمس غرف، ⁦15 دقيقة⁩ من باريس. مع عرض الربيع، تَملَّك منزلك ابتداءً من ⁦168 000 €⁩ بدلاً من ⁦175 000 €⁩.",
    cta_offer: "اطّلعوا على عرض الربيع",
    cta_program: "اكتشفوا المشروع",
    bullet_re2020: "معيار RE 2020",
    bullet_tva: "ضريبة قيمة مضافة 5.5٪",
    bullet_ptz: "مؤهَّل لقرض PTZ",
  },
  offer: {
    section_label: "عرض الربيع",
    tag: "عرض الربيع",
    title_prefix: "حتى",
    title_or: "خصم فوري",
    lead_strong_first: () => "",
    lead_body: "على العقارات المتاحة، إليكم بعض الأمثلة:",
    table_h: "أمثلة من العقارات المتاحة",
    table_lot: "العقار",
    table_before: "السعر الأصلي",
    table_after: "سعر الربيع",
    table_save: "توفِّرون",
    bonus_tag: "للأسرع",
    bonus_subtitle: "العرض محدود للحاجزين الخمسة الأوائل",
    bonus_title: "خصم ⁦4 000 €⁩ على مطبخكم",
    bonus_body: "قسيمة بقيمة ⁦4 000 €⁩ صالحة على مطبخكم المجهَّز، تُضاف إلى خصم السكن.",
    bullet1: (date) => `اختاروا العقار ووقِّعوا عقد الحجز قبل ${date}.`,
    bullet2: "يُطبَّق الخصم على السعر الإجمالي (شامل الضريبة) لشقَّتكم.",
    bullet3: "قابل للجمع مع ضريبة 5.5٪ وقرض PTZ.",
    cta_lock: "أحجز شقَّتي",
    fine_prefix: "اطَّلعوا على ",
    fine_link: "الشروط الكاملة",
    fine_suffix: ". في حدود المخزون المتاح.",
    counter_label: "ينتهي العرض في",
    cd_d: "أيام",
    cd_h: "ساعات",
    cd_m: "دقائق",
    cd_s: "ثوانٍ",
    stock_label: "عقارات متاحة",
  },
  programme: {
    eyebrow: "لماذا Stay'n؟",
    h2: "إقامة مصمَّمة لحياة حقيقية.",
    f1_h: "إقامة جديدة وعصريّة",
    f1_p:
      "حديقة داخلية، موقف سيّارات آمن، شرفة أو تراس لكل شقّة. مطبخ مفتوح، تشطيبات راقية، ألياف بصرية.",
    f2_h: "معيار RE 2020",
    f2_p:
      "أحدث المعايير البيئيّة، عزل مُعزَّز ومعدّات موفّرة للطاقة. راحة على مدار السنة، فواتير أخفض.",
    f3_h: "ضريبة 5.5٪ + قرض PTZ",
    f3_p:
      "ضريبة قيمة مضافة 5.5٪ بدلاً من 20٪، رهناً بشروط الدخل. مؤهَّل لقرض PTZ بدون فائدة لاستكمال تمويلكم.",
  },
  interior: {
    eyebrow: "الشقق",
    h2: "مضيئة، مدروسة، جاهزة للسكن.",
    lead_strong: "من غرفتين إلى خمس غرف.",
    lead_body:
      " مطبخ مفتوح على الصالة، توزيع أمثل، شرفة أو تراس، أمن واقتصاد في الطاقة. مساحات مصمَّمة للحياة الواقعية.",
    cta: "تحميل الكتيِّب",
    img_alt: "منظر داخلي لشقّة Stay'n — صالة مضيئة ومطبخ مفتوح",
  },
  apparts: {
    eyebrow: "الأسعار",
    h2: "من غرفتين إلى خمس غرف، ابتداءً من ⁦168 000 €⁩.",
    lead: "أسعار باستثناء موقف السيارة، الوحدات المتاحة الأولى.",
    from_label: "ابتداءً من",
    receive_plan: "استلام المخطّط",
    legal_note_prefix:
      "* أسعار إرشاديّة قابلة للتغيير حسب التوفُّر، غير تعاقديّة — انظر ",
    legal_link: "الشروط الكاملة",
    surface_t2: "من 41 م²",
    surface_t3: "من 60 م²",
    surface_t4: "من 78 م²",
    surface_t5: "من 96 م²",
    hors_parking: "بدون موقف",
    type_t2: "غرفتان",
    type_t3: "ثلاث غرف",
    type_t4: "أربع غرف",
    type_t5: "خمس غرف",
  },
  localisation: {
    eyebrow: "الموقع",
    h2: "موقع استراتيجي.",
    address_strong: "7-11 شارع مارسيل كاشان، 93240 ستان.",
    body: " كل شيء في متناول اليد — متاجر، مدارس، خدمات، منشآت رياضيّة.",
    paris_15: "باريس في ⁦15 دقيقة⁩.",
    transports_h3: "وسائل النقل",
    rer_d: "RER D · بييرفيت – ستان",
    rer_b: "RER B · درانسي",
    metro_13: "مترو 13 · سان دوني الجامعيّة",
    tram_t11: "ترام T11 · بييرفيت – ستان",
    bus: "حافلات ⁦255 · 253 · 150⁩",
    gpe: "قريباً Grand Paris Express",
    map_region_aria: "خريطة النقاط المهمّة حول Stay'n",
    map_legend_aria: "مفتاح الرموز",
    section_practical: "الحياة اليوميّة",
    section_transit: "وسائل النقل",
    section_education: "التعليم",
    section_worship: "أماكن العبادة",
    section_sport: "الرياضة والترفيه",
    section_shops: "المتاجر",
    walk_to: "سيراً",
    directions: "الاتّجاهات",
    legend_sale: "Stay'n",
    legend_practical: "الحياة اليوميّة",
    legend_transit: "النقل",
    legend_education: "التعليم",
    legend_worship: "العبادة",
    legend_sport: "الرياضة",
    poi_sale: "مكتب مبيعات Stay'n",
    poi_sale_sub: "7-14 شارع مارسيل كاشان",
    poi_mairie: "بلديّة ستان",
    poi_mairie_sub: "6 شارع بول فايان-كوتورييه",
    poi_marche: "سوق ستان",
    poi_marche_sub: "صباح الأربعاء والسبت",
    poi_poste: "مكتب البريد",
    poi_poste_sub: "فرع ستان",
    poi_rerd: "RER D · بييرفيت – ستان",
    poi_rerd_sub: "باتّجاه Paris Gare du Nord",
    poi_rerb: "RER B · درانسي",
    poi_rerb_sub: "باتّجاه Châtelet-les-Halles",
    poi_m13: "مترو 13 · سان دوني الجامعيّة",
    poi_m13_sub: "باتّجاه Châtillon-Montrouge",
    poi_t11: "ترام T11 · بييرفيت – ستان",
    poi_t11_sub: "حلقة سريعة شمال باريس",
    poi_bus: "حافلات ⁦255 · 253 · 150⁩",
    poi_bus_sub: "محطة مارسيل كاشان",
    poi_school_primary: "مدارس ابتدائيّة",
    poi_school_primary_sub: "عدّة مجموعات مدرسيّة قريبة",
    poi_school_secondary: "إعدادي وثانوي",
    poi_school_secondary_sub: "ثانويّة موريس أوتريلو · إعداديّة جوليو-كوري",
    poi_eglise: "كنيسة نوتردام دو لاسومسيون",
    poi_eglise_sub: "أبرشيّة ستان",
    poi_mosquee: "مسجد ستان",
    poi_mosquee_sub: "مكان عبادة إسلامي",
    poi_sport: "ملعب وصالات",
    poi_sport_sub: "منشآت رياضيّة محليّة",
    poi_shops: "متاجر قريبة",
    poi_shops_sub: "وسط مدينة ستان",
  },
  contact: {
    eyebrow: "اطلبوا الوثائق",
    h2: "حدِّدوا موعداً مع مستشار.",
    lead_strong: "24 ساعة عمل.",
    lead_body:
      "كتيّب كامل، مخطّطات الشقق، محاكاة لضريبة 5.5٪ وقرض PTZ. سيتواصل معكم مستشار خلال ",
    address_h: "مكتب المبيعات",
    tel_h: "الهاتف",
    email_h: "البريد الإلكتروني",
  },
  form: {
    field_prenom: "الاسم الشخصي",
    field_nom: "اسم العائلة",
    field_email: "البريد الإلكتروني",
    field_tel: "الهاتف",
    field_type: "نوع السكن المطلوب",
    field_projet: "مشروعكم",
    optional: "(اختياري)",
    placeholder_email: "exemple@vous.fr",
    placeholder_tel: "+33 6 12 34 56 78",
    placeholder_projet: "إقامة رئيسيّة، استثمار، أوّل اقتناء…",
    type_indiff: "— لا تفضيل / لم أحدِّد —",
    tel_help: "ليتواصل معكم مستشار بسرعة.",
    consent_sms:
      "أوافق على تلقّي رسائل SMS من CD LINK Promotion بشأن مشروع Stay'n.",
    consent_rgpd_prefix: "اطّلعتُ على ",
    consent_rgpd_link: "الإشعار القانوني وسياسة الخصوصيّة",
    consent_rgpd_suffix: " وأوافق على معالجة بياناتي للردّ على طلبي.",
    submit: "اطلبوا الوثائق",
    submitting: "جاري الإرسال…",
    rgpd_note_prefix:
      "تُحفظ بياناتكم 18 شهراً كحدّ أقصى ولا تُباع أبداً. حقّ الوصول والحذف: ",
    rgpd_note_email: "contact@ozimmo.fr",
    rgpd_note_suffix: ".",
    err_prenom: "يرجى إدخال اسمكم الشخصي.",
    err_nom: "يرجى إدخال اسم العائلة.",
    err_email: "بريد إلكتروني غير صحيح.",
    err_tel: "رقم هاتف غير صحيح.",
    err_consent: "يرجى الموافقة على المربّعَين كي نتمكّن من التواصل معكم.",
    err_required_check: "يرجى مراجعة الحقول المعلَّمة.",
    err_generic:
      "فشل الإرسال. يمكنكم المحاولة مجدَّداً أو الاتصال بنا على 78 78 27 63 7 33+.",
    success: "شكراً، تم استلام طلبكم.",
  },
  footer: {
    tagline: "58 شقة جديدة في ستان. باريس في 15 دقيقة.",
    sale_h: "مكتب المبيعات",
    promo_h: "المطوِّر",
    legal_h: "قانوني",
    legal_mentions: "الإشعار القانوني",
    legal_cookies: "ملفات تعريف الارتباط والمتعقِّبات",
    legal_data: "البيانات الشخصيّة",
    copyright: (y) => `© ${y} CD LINK Promotion & Inoyam`,
    rights: "جميع الحقوق محفوظة",
    powered_by: "مدعوم من",
  },
  merci: {
    eyebrow: "تمّ استلام الطلب",
    h1: "شكراً، تمّ استلام طلبكم.",
    lead_strong_24h: "24 ساعة عمل",
    lead_body:
      "سيتّصل بكم مستشار Stay'n خلال {x} على الرقم الذي قدّمتموه. وسيرسل لكم أيضاً الكتيّب الكامل ومخطّطات الشقق، ويقدّم لكم نظرة عامة على شروط ضريبة 5.5٪ وقرض PTZ.",
    block1_h: "تريدون التحدّث الآن؟",
    block1_p: "مكتب المبيعات متاح من الإثنين إلى السبت.",
    block2_h: "خطّطوا لزيارتكم",
    block2_p: "مكتب المبيعات: 7-14 شارع مارسيل كاشان، 93240 ستان.",
    block2_link: "الاتجاهات",
    back: "← العودة إلى الصفحة الرئيسيّة",
  },
  not_found: {
    eyebrow: "خطأ 404",
    h1: "ضاعت هذه الصفحة.",
    lead:
      "المحتوى الذي تبحثون عنه غير موجود أو تمّ نقله. عودوا إلى الصفحة الرئيسيّة أو اتّصلوا بمكتب المبيعات.",
    cta_home: "العودة إلى الصفحة الرئيسيّة",
  },
  legal_disclaimer: {
    h: "بشأن الإشعار القانوني",
    body:
      "نظراً لطبيعتها التعاقديّة، تتوفّر الإشعارات القانونيّة وشروط العرض باللغة الفرنسيّة فقط.",
  },
};

export const strings: Record<Locale, Strings> = { fr, en, ar };

export function t(lang: Locale): Strings {
  return strings[lang] || strings.fr;
}
