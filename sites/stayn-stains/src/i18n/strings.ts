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
    works: string;
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
    amount: string;
    per_room: string;
    notary: string;
    lead: string;
    limit: string;
    deadline: string;
    cta: string;
    note: string;
    steps_title: string;
    step1: string;
    step2: string;
    step3: string;
    fine_prefix: string;
    fine_link: string;
    fine_suffix: string;
    expired: string;
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
    project_question: string;
    project_options: string[];
    step_project: string;
    step_contact: string;
    contact_question: string;
    back: string;
    reassurance: string;
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
    title_home: "Stay’n à Stains — Offre d’automne : 2 000 € par pièce offerts",
    desc_home: "Appartements neufs T2 à T5 à Stains. Pour toute réservation avant le 31/12/2026 : 2 000 € par pièce offerts + frais de notaire offerts, pour les 5 premiers réservataires. Recevez les plans et les disponibilités.",
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
    docu_btn: "Recevoir les plans",
    call_aria: "Appeler — 07 63 27 78 78",
  },
  urgency: {
    region_label: "Offre d'automne",
    tag: "Offre d’automne",
    remise_label: "2 000 € par pièce + frais de notaire offerts",
    text_prefix: "Pour les",
    text_count_part: (n) => `${n} premiers réservataires · avant le 31/12/2026`,
    cd_prefix: "Plus que",
    cta: "Recevoir l’offre",
    close_aria: "Fermer le bandeau",
  },
  hero: {
    eyebrow: "Programme neuf · Stains 93240",
    works: "Démarrage des travaux",
    h1_line1: "Cet automne, donnez vie",
    h1_line2: "à votre projet immobilier.",
    lead_strong: "2 000 € par pièce offerts + frais de notaire offerts.",
    lead_body: " Pour toute réservation avant le 31/12/2026, offre réservée aux 5 premiers réservataires. Découvrez les appartements neufs T2 à T5 de Stay’n à Stains.",
    cta_offer: "Recevoir les plans et l’offre",
    cta_program: "Découvrir l’offre",
    bullet_re2020: "RE 2020",
    bullet_tva: "TVA 5,5 % sous conditions",
    bullet_ptz: "PTZ sous conditions",
  },
  offer: {
    section_label: "Offre d’automne",
    tag: "Offre d’automne · Stay’n à Stains",
    amount: "2 000 €",
    per_room: "offerts par pièce",
    notary: "+ frais de notaire offerts",
    lead: "Un avantage concret pour votre appartement neuf, du T2 au T5.",
    limit: "Offre réservée aux 5 premiers réservataires",
    deadline: "Pour toute réservation avant le 31/12/2026",
    cta: "Vérifier les disponibilités",
    note: "La demande d’information est sans engagement et ne constitue pas une réservation.",
    steps_title: "Votre projet commence ici",
    step1: "Parlez-nous de votre projet.",
    step2: "Recevez les plans, les prix et les conditions de l’offre.",
    step3: "Échangez avec un conseiller pour préparer votre réservation.",
    fine_prefix: "Voir les ",
    fine_link: "conditions de l’offre",
    fine_suffix: ". Sous réserve de disponibilité et de l’attribution de l’offre aux 5 premiers réservataires.",
    expired: "Cette offre est terminée. Contactez-nous pour connaître les disponibilités actuelles.",
  },
  programme: {
    eyebrow: "Pourquoi Stay'n ?",
    h2: "Une résidence pensée pour la vraie vie.",
    f1_h: "Résidence neuve, moderne",
    f1_p:
      "Jardin intérieur, stationnement sécurisé, balcon ou terrasse pour chaque appartement. Cuisine ouverte, prestations soignées, fibre optique.",
    f2_h: "Norme RE 2020",
    f2_p:
      "Dernières normes environnementales, isolation renforcée et équipements économes. Le confort du neuf : chaud en hiver, frais en été — et des factures réduites toute l'année.",
    f3_h: "TVA 5,5 % + PTZ",
    f3_p:
      "TVA réduite à 5,5 % au lieu de 20 %, sous conditions de ressources. Éligible au Prêt à Taux Zéro pour boucler votre financement sereinement.",
  },
  interior: {
    eyebrow: "Les appartements",
    h2: "Un appartement où imaginer la suite.",
    lead_strong: "Du 2 au 5 pièces.",
    lead_body:
      " Cuisine ouverte sur séjour, agencement optimal, balcon ou terrasse, sécurité et économies d'énergie. Des espaces pensés pour la vraie vie.",
    cta: "Recevoir la brochure et les plans",
    img_alt: "Vue intérieure d'un logement Stay'n — séjour lumineux et cuisine ouverte",
  },
  apparts: {
    eyebrow: "Quel appartement pour votre projet ?",
    h2: "Du T2 au T5, trouvez votre espace.",
    lead: "Choisissez une typologie : un conseiller vous transmettra les plans, les prix et les disponibilités à jour.",
    from_label: "à partir de",
    receive_plan: "Recevoir le plan",
    legal_note_prefix: "Plans, prix et disponibilité des logements à confirmer auprès de l’espace de vente. Voir les ",
    legal_link: "conditions complètes",
    surface_t2: "à partir de 41 m²",
    surface_t3: "à partir de 60 m²",
    surface_t4: "à partir de 78 m²",
    surface_t5: "à partir de 96 m²",
    hors_parking: "hors parking",
    type_t2: "T2 · 2 pièces",
    type_t3: "T3 · 3 pièces",
    type_t4: "T4 · 4 pièces",
    type_t5: "T5 · 5 pièces",
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
    eyebrow: "Plans · Prix · Offre d’automne",
    h2: "Recevez les plans et votre offre personnalisée.",
    lead_strong: "Sans engagement.",
    lead_body: "Parlons de votre projet. Un conseiller vous présente les plans, les disponibilités et l’offre. ",
    address_h: "Espace de vente",
    tel_h: "Téléphone",
    email_h: "Email",
  },
  form: {
    project_question: "Quel est votre projet ?",
    project_options: ["Mon premier achat", "Changer de résidence principale", "Investir pour louer", "Je me renseigne"],
    step_project: "1 / 2 · Votre projet",
    step_contact: "2 / 2 · Vos coordonnées",
    contact_question: "Comment vous recontacter ?",
    back: "Modifier mon projet",
    reassurance: "Sans engagement. Un conseiller vous accompagne.",
    field_prenom: "Prénom",
    field_nom: "Nom",
    field_email: "Email",
    field_tel: "Téléphone",
    field_type: "Type de logement souhaité",
    field_projet: "Précisez votre demande",
    optional: "(optionnel)",
    placeholder_email: "vous@exemple.fr",
    placeholder_tel: "06 12 34 56 78",
    placeholder_projet: "Un appartement vous intéresse ? Souhaitez-vous être rappelé à un moment particulier ?",
    type_indiff: "— Indifférent / non décidé —",
    tel_help: "Pour qu'un conseiller vous recontacte rapidement.",
    consent_sms:
      "J'accepte de recevoir des communications par SMS de la part de CD LINK Promotion concernant le programme Stay'n.",
    consent_rgpd_prefix: "J’accepte d’être recontacté au sujet de Stay’n. ",
    consent_rgpd_link: "Politique de confidentialité",
    consent_rgpd_suffix: ".",
    submit: "Recevoir les plans et l’offre",
    submitting: "Envoi en cours…",
    rgpd_note_prefix:
      "Vos données sont conservées 18 mois et ne sont jamais cédées. Droits d'accès et de suppression : ",
    rgpd_note_email: "contact@ozimmo.fr",
    rgpd_note_suffix: ".",
    err_prenom: "Veuillez renseigner votre prénom.",
    err_nom: "Veuillez renseigner votre nom.",
    err_email: "Adresse email invalide.",
    err_tel: "Numéro de téléphone invalide.",
    err_consent: "Merci d’accepter le traitement de vos données pour répondre à votre demande.",
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
    lead_strong_24h: "les plans, les prix et les disponibilités",
    lead_body: "Un conseiller Stay’n vous recontactera avec {x} et les conditions de l’offre d’automne. Votre demande est sans engagement et ne vaut pas réservation.",
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
    title_home: "Stay’n in Stains — Autumn offer: €2,000 off per room",
    desc_home: "New T2–T5 apartments in Stains. Reserve before 31 December 2026: €2,000 off per room plus notary fees covered, for the first 5 buyers to reserve. Request floor plans and availability.",
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
    docu_btn: "Get floor plans",
    call_aria: "Call — +33 7 63 27 78 78",
  },
  urgency: {
    region_label: "Autumn offer",
    tag: "Autumn offer",
    remise_label: "€2,000 off per room + notary fees covered",
    text_prefix: "For the",
    text_count_part: (n) => `first ${n} buyers to reserve · before 31 Dec 2026`,
    cd_prefix: "Only",
    cta: "Get the offer",
    close_aria: "Close the banner",
  },
  hero: {
    eyebrow: "New development · Stains 93240",
    works: "Construction underway",
    h1_line1: "This autumn, make room",
    h1_line2: "for your next chapter.",
    lead_strong: "€2,000 off per room + notary fees covered.",
    lead_body: " Reserve before 31 December 2026. Offer limited to the first 5 buyers to reserve. Discover Stay’n’s new T2–T5 apartments in Stains.",
    cta_offer: "Get floor plans and the offer",
    cta_program: "Explore the offer",
    bullet_re2020: "RE 2020 standard",
    bullet_tva: "5.5% VAT, subject to eligibility",
    bullet_ptz: "PTZ, subject to eligibility",
  },
  offer: {
    section_label: "Autumn offer",
    tag: "Autumn offer · Stay’n in Stains",
    amount: "€2,000",
    per_room: "off per room",
    notary: "+ notary fees covered",
    lead: "A concrete saving on your new apartment, from T2 to T5.",
    limit: "Limited to the first 5 buyers to reserve",
    deadline: "For reservations made before 31 December 2026",
    cta: "Check availability",
    note: "Requesting information is free of commitment and does not reserve an apartment.",
    steps_title: "Your next steps",
    step1: "Choose the apartment type you are interested in.",
    step2: "Receive floor plans, prices and the offer terms.",
    step3: "Talk to an adviser to prepare your reservation.",
    fine_prefix: "See the ",
    fine_link: "offer terms",
    fine_suffix: ". Subject to availability and the offer being allocated to the first 5 buyers to reserve.",
    expired: "This offer has ended. Contact us for current availability.",
  },
  programme: {
    eyebrow: "Why Stay'n?",
    h2: "A residence designed for real life.",
    f1_h: "Brand-new, modern",
    f1_p:
      "Inner garden, secure parking, balcony or terrace for every apartment. Open-plan kitchen, careful finishes, fibre internet.",
    f2_h: "RE 2020 standard",
    f2_p:
      "Latest environmental standards, reinforced insulation, energy-efficient equipment. New-build comfort: warm in winter, cool in summer — with lower bills year-round.",
    f3_h: "5.5% VAT + PTZ",
    f3_p:
      "Reduced 5.5% VAT instead of 20%, subject to income criteria. PTZ-eligible (zero-rate state loan) to round out your financing.",
  },
  interior: {
    eyebrow: "The apartments",
    h2: "A place to picture your next chapter.",
    lead_strong: "From 1- to 4-bedroom.",
    lead_body:
      " Open-plan kitchen, optimal layout, balcony or terrace, security and energy savings. Spaces designed for real life.",
    cta: "Get the brochure and floor plans",
    img_alt: "Interior view of a Stay'n apartment — bright living room and open kitchen",
  },
  apparts: {
    eyebrow: "Find your apartment",
    h2: "From T2 to T5, find your space.",
    lead: "Choose an apartment type to receive floor plans, current prices and availability from an adviser.",
    from_label: "starting from",
    receive_plan: "Get the floor plan",
    legal_note_prefix: "Floor plans, prices and availability must be confirmed with the sales team. See the ",
    legal_link: "full conditions",
    surface_t2: "from 41 sqm",
    surface_t3: "from 60 sqm",
    surface_t4: "from 78 sqm",
    surface_t5: "from 96 sqm",
    hors_parking: "excl. parking",
    type_t2: "T2 · 2 rooms",
    type_t3: "T3 · 3 rooms",
    type_t4: "T4 · 4 rooms",
    type_t5: "T5 · 5 rooms",
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
    eyebrow: "Floor plans · Prices · Autumn offer",
    h2: "Get floor plans and your personalised offer.",
    lead_strong: "No commitment.",
    lead_body: "Tell us about your project. An adviser will share floor plans, availability and the offer. ",
    address_h: "Sales office",
    tel_h: "Phone",
    email_h: "Email",
  },
  form: {
    project_question: "What is your project?",
    project_options: ["Buying my first home", "Moving to a new main home", "Buying to let", "Just exploring"],
    step_project: "1 / 2 · Your project",
    step_contact: "2 / 2 · Your contact details",
    contact_question: "How can we contact you?",
    back: "Change my project",
    reassurance: "No commitment. An adviser will help you.",
    field_prenom: "First name",
    field_nom: "Last name",
    field_email: "Email",
    field_tel: "Phone",
    field_type: "Apartment type",
    field_projet: "Tell us what you need",
    optional: "(optional)",
    placeholder_email: "you@example.com",
    placeholder_tel: "+33 6 12 34 56 78",
    placeholder_projet: "Interested in a particular apartment? Let us know a convenient time to call.",
    type_indiff: "— No preference / undecided —",
    tel_help: "So a consultant can call you back quickly.",
    consent_sms:
      "I agree to receive SMS communications from CD LINK Promotion regarding the Stay'n project.",
    consent_rgpd_prefix: "I agree to be contacted about Stay’n. ",
    consent_rgpd_link: "Privacy policy",
    consent_rgpd_suffix: ".",
    submit: "Get floor plans and the offer",
    submitting: "Sending…",
    rgpd_note_prefix:
      "Your data is kept for 18 months max and never sold. Access and deletion rights: ",
    rgpd_note_email: "contact@ozimmo.fr",
    rgpd_note_suffix: ".",
    err_prenom: "Please enter your first name.",
    err_nom: "Please enter your last name.",
    err_email: "Invalid email address.",
    err_tel: "Invalid phone number.",
    err_consent: "Please agree to the processing of your data so we can respond to your enquiry.",
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
    lead_strong_24h: "floor plans, prices and availability",
    lead_body: "A Stay’n adviser will contact you with {x} and the autumn offer terms. Your enquiry is free of commitment and does not constitute a reservation.",
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
      "The full legal notice is available in French. The offer terms are summarised above.",
  },
};

const ar: Strings = {
  meta: {
    title_home: "Stay’n في ستان — عرض الخريف: خصم 2,000 يورو عن كل غرفة",
    desc_home: "شقق جديدة من T2 إلى T5 في ستان. للحجز قبل 31 ديسمبر 2026: خصم 2,000 يورو عن كل غرفة مع تحمّل رسوم الموثّق، لأول خمسة حاجزين. اطلبوا المخططات والتوافر.",
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
    docu_btn: "اطلبوا المخططات",
    call_aria: "اتصلوا — 78 78 27 63 7 33+",
  },
  urgency: {
    region_label: "عرض الخريف",
    tag: "عرض الخريف",
    remise_label: "خصم 2,000 يورو عن كل غرفة + رسوم الموثّق علينا",
    text_prefix: "",
    text_count_part: (n) => `لأول ${n} حاجزين · قبل 31 ديسمبر 2026`,
    cd_prefix: "تبقّى",
    cta: "اطلبوا العرض",
    close_aria: "إغلاق الشريط",
  },
  hero: {
    eyebrow: "مشروع جديد · ستان 93240",
    works: "بدء أعمال البناء",
    h1_line1: "هذا الخريف، اقتربوا",
    h1_line2: "من منزل أحلامكم.",
    lead_strong: "خصم 2,000 يورو عن كل غرفة مع تحمّل رسوم الموثّق.",
    lead_body: " لكل حجز قبل 31 ديسمبر 2026، لأول خمسة حاجزين فقط. اكتشفوا شقق Stay’n الجديدة من T2 إلى T5 في ستان.",
    cta_offer: "اطلبوا المخططات والعرض",
    cta_program: "اكتشفوا العرض",
    bullet_re2020: "معيار RE 2020",
    bullet_tva: "ضريبة 5.5٪ وفق الشروط",
    bullet_ptz: "قرض PTZ وفق الشروط",
  },
  offer: {
    section_label: "عرض الخريف",
    tag: "عرض الخريف · Stay’n في ستان",
    amount: "2,000 يورو",
    per_room: "خصم عن كل غرفة",
    notary: "+ رسوم الموثّق علينا",
    lead: "ميزة ملموسة لشقتكم الجديدة، من T2 إلى T5.",
    limit: "العرض مخصّص لأول خمسة حاجزين",
    deadline: "لكل حجز قبل 31 ديسمبر 2026",
    cta: "تحقّقوا من الشقق المتاحة",
    note: "طلب المعلومات دون أي التزام، ولا يُعدّ حجزاً لشقة.",
    steps_title: "خطواتكم نحو المنزل الجديد",
    step1: "اختاروا نوع الشقة الذي يهمّكم.",
    step2: "احصلوا على المخططات والأسعار وشروط العرض.",
    step3: "تحدّثوا مع مستشار للتحضير لحجزكم.",
    fine_prefix: "اطّلعوا على ",
    fine_link: "شروط العرض",
    fine_suffix: ". بحسب التوافر وتخصيص العرض لأول خمسة حاجزين.",
    expired: "انتهى هذا العرض. تواصلوا معنا لمعرفة الشقق المتاحة حالياً.",
  },
  programme: {
    eyebrow: "لماذا Stay'n؟",
    h2: "إقامة مصمَّمة لحياة حقيقية.",
    f1_h: "إقامة جديدة وعصريّة",
    f1_p:
      "حديقة داخلية، موقف سيّارات آمن، شرفة أو تراس لكل شقّة. مطبخ مفتوح، تشطيبات راقية، ألياف بصرية.",
    f2_h: "معيار RE 2020",
    f2_p:
      "أحدث المعايير البيئيّة، عزل مُعزَّز ومعدّات موفّرة للطاقة. راحة السكن الجديد: دفء في الشتاء وانتعاش في الصيف — وفواتير أخفض على مدار السنة.",
    f3_h: "ضريبة 5.5٪ + قرض PTZ",
    f3_p:
      "ضريبة قيمة مضافة 5.5٪ بدلاً من 20٪، رهناً بشروط الدخل. مؤهَّل لقرض PTZ بدون فائدة لاستكمال تمويلكم.",
  },
  interior: {
    eyebrow: "الشقق",
    h2: "شقة تتخيّلون فيها حياتكم المقبلة.",
    lead_strong: "من غرفتين إلى خمس غرف.",
    lead_body:
      " مطبخ مفتوح على الصالة، توزيع أمثل، شرفة أو تراس، أمن واقتصاد في الطاقة. مساحات مصمَّمة للحياة الواقعية.",
    cta: "اطلبوا الكتيّب والمخططات",
    img_alt: "منظر داخلي لشقّة Stay'n — صالة مضيئة ومطبخ مفتوح",
  },
  apparts: {
    eyebrow: "أي شقة تناسب مشروعكم؟",
    h2: "من T2 إلى T5، اختاروا مساحتكم.",
    lead: "اختاروا نوع الشقة ليزوّدكم مستشار بالمخططات والأسعار والتوافر الحالي.",
    from_label: "ابتداءً من",
    receive_plan: "استلام المخطّط",
    legal_note_prefix: "يُرجى تأكيد المخططات والأسعار والتوافر مع فريق المبيعات. اطّلعوا على ",
    legal_link: "الشروط الكاملة",
    surface_t2: "من 41 م²",
    surface_t3: "من 60 م²",
    surface_t4: "من 78 م²",
    surface_t5: "من 96 م²",
    hors_parking: "بدون موقف",
    type_t2: "T2 · غرفتان",
    type_t3: "T3 · 3 غرف",
    type_t4: "T4 · 4 غرف",
    type_t5: "T5 · 5 غرف",
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
    eyebrow: "مخططات · أسعار · عرض الخريف",
    h2: "احصلوا على المخططات والعرض الخاص بكم.",
    lead_strong: "دون أي التزام.",
    lead_body: "حدّثونا عن مشروعكم. سيعرض عليكم مستشار المخططات والتوافر والعرض. ",
    address_h: "مكتب المبيعات",
    tel_h: "الهاتف",
    email_h: "البريد الإلكتروني",
  },
  form: {
    project_question: "ما هو مشروعكم؟",
    project_options: ["شراء مسكني الأول", "الانتقال إلى مسكن رئيسي جديد", "الشراء بهدف التأجير", "أستكشف الخيارات"],
    step_project: "١ / ٢ · مشروعكم",
    step_contact: "٢ / ٢ · بيانات التواصل",
    contact_question: "كيف يمكننا التواصل معكم؟",
    back: "تعديل مشروعي",
    reassurance: "دون التزام. مستشار يرافقكم في مشروعكم.",
    field_prenom: "الاسم الشخصي",
    field_nom: "اسم العائلة",
    field_email: "البريد الإلكتروني",
    field_tel: "الهاتف",
    field_type: "نوع السكن المطلوب",
    field_projet: "أخبرونا بما تحتاجون إليه",
    optional: "(اختياري)",
    placeholder_email: "exemple@vous.fr",
    placeholder_tel: "+33 6 12 34 56 78",
    placeholder_projet: "هل تهمّكم شقة معيّنة؟ حدّدوا الوقت المناسب للتواصل معكم.",
    type_indiff: "— لا تفضيل / لم أحدِّد —",
    tel_help: "ليتواصل معكم مستشار بسرعة.",
    consent_sms:
      "أوافق على تلقّي رسائل SMS من CD LINK Promotion بشأن مشروع Stay'n.",
    consent_rgpd_prefix: "أوافق على التواصل معي بخصوص Stay’n. ",
    consent_rgpd_link: "سياسة الخصوصية",
    consent_rgpd_suffix: ".",
    submit: "اطلبوا المخططات والعرض",
    submitting: "جاري الإرسال…",
    rgpd_note_prefix:
      "تُحفظ بياناتكم 18 شهراً كحدّ أقصى ولا تُباع أبداً. حقّ الوصول والحذف: ",
    rgpd_note_email: "contact@ozimmo.fr",
    rgpd_note_suffix: ".",
    err_prenom: "يرجى إدخال اسمكم الشخصي.",
    err_nom: "يرجى إدخال اسم العائلة.",
    err_email: "بريد إلكتروني غير صحيح.",
    err_tel: "رقم هاتف غير صحيح.",
    err_consent: "يرجى الموافقة على معالجة بياناتكم للردّ على طلبكم.",
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
    lead_strong_24h: "المخططات والأسعار والتوافر",
    lead_body: "سيتواصل معكم مستشار Stay’n لتزويدكم بـ{x} وشروط عرض الخريف. طلبكم دون أي التزام ولا يُعدّ حجزاً.",
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
      "يتوفّر الإشعار القانوني الكامل باللغة الفرنسيّة. تجدون أعلاه ملخّصاً لشروط العرض.",
  },
};

export const strings: Record<Locale, Strings> = { fr, en, ar };

export function t(lang: Locale): Strings {
  return strings[lang] || strings.fr;
}
