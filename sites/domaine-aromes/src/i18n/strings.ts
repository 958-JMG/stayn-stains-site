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
    title_home: "Domaine Les Arômes — Le dernier appartement à Méré (78), aux portes de Montfort-l'Amaury",
    desc_home:
      "Dernier appartement disponible au Domaine Les Arômes à Méré (78). Programme neuf de 3 petits bâtiments en cœur de village, jardins paysagers et grandes terrasses. Dernière opportunité — remise immédiate.",
    title_merci: "Merci pour votre demande",
    desc_merci:
      "Votre demande de documentation a bien été enregistrée. Un conseiller vous recontacte sous 24 heures ouvrées.",
    title_404: "Page introuvable",
    desc_404: "La page que vous cherchez n'existe pas ou plus.",
  },
  nav: {
    programme: "Le programme",
    appartements: "Le dernier lot",
    localisation: "Localisation",
    contact: "Contact",
    legal: "Mentions légales",
    skip_to_main: "Aller au contenu",
    open_menu: "Ouvrir le menu",
    close_menu: "Fermer le menu",
    docu_btn: "Documentation",
    call_aria: "Appeler — 06 40 74 24 72",
  },
  urgency: {
    region_label: "Dernière opportunité",
    tag: "Dernier lot",
    remise_label: "Remise immédiate sur le tout dernier appartement",
    text_prefix: "Plus qu'",
    text_count_part: (n) => (n === 1 ? "1 appartement restant — c'est le dernier" : `${n} appartements restants`),
    cd_prefix: "Plus que",
    cta: "Je le réserve",
    close_aria: "Fermer le bandeau",
  },
  hero: {
    eyebrow: "Programme neuf · Méré (78) · Dernier lot",
    h1_line1: "Le dernier appartement",
    h1_line2: "au cœur d'un domaine d'exception.",
    lead_strong: "C'est votre dernière chance.",
    lead_body:
      " Trois petits bâtiments cernés de jardins paysagers, à deux pas du centre de Montfort-l'Amaury. Un seul appartement reste disponible — ne le laissez pas filer.",
    cta_offer: "Voir le dernier lot",
    cta_program: "Découvrir le domaine",
    bullet_re2020: "RE 2020",
    bullet_tva: "Grandes terrasses",
    bullet_ptz: "Gare Méré-Montfort à 5 min",
  },
  offer: {
    section_label: "Dernière opportunité",
    tag: "Dernier lot",
    title_prefix: "Une remise",
    title_or: "sur le tout dernier appartement",
    lead_strong_first: () => "",
    lead_body: "Un seul appartement reste à vendre au Domaine Les Arômes. Voici ses caractéristiques :",
    table_h: "Le dernier appartement disponible",
    table_lot: "Lot",
    table_before: "Prix initial",
    table_after: "Prix actuel",
    table_save: "Vous économisez",
    bonus_tag: "En cadeau",
    bonus_subtitle: "Pour le réservataire du dernier lot",
    bonus_title: "Cuisine équipée offerte",
    bonus_body: "Bon d'achat de 4 000 € à valoir sur votre cuisine équipée, en plus de la remise sur l'appartement.",
    bullet1: (date) =>
      `Signez le contrat de réservation avant le ${date} pour sécuriser le lot.`,
    bullet2: "La remise est appliquée au prix TTC de votre logement.",
    bullet3: "Visite possible sur rendez-vous au bureau de vente.",
    cta_lock: "Je sécurise le dernier lot",
    fine_prefix: "Voir les ",
    fine_link: "conditions complètes",
    fine_suffix: ". Offre valable sur le dernier lot du programme.",
    counter_label: "Fin de l'offre",
    cd_d: "jours",
    cd_h: "heures",
    cd_m: "minutes",
    cd_s: "secondes",
    stock_label: "appartement restant",
  },
  programme: {
    eyebrow: "Le Domaine Les Arômes",
    h2: "Un cadre rare, une vie qui respire.",
    f1_h: "Jardins paysagers & terrasses",
    f1_p:
      "Trois petits bâtiments à taille humaine, posés dans un écrin de verdure. Chaque appartement bénéficie de sa terrasse, baies vitrées sur le jardin et lumière toute la journée.",
    f2_h: "Aux portes de Montfort-l'Amaury",
    f2_p:
      "À 5 minutes à pied du centre-bourg de Montfort, commerces, écoles et services à portée de main. Gare Méré-Montfort (ligne N) directe vers Paris Montparnasse.",
    f3_h: "Finitions soignées, normes 2025",
    f3_p:
      "Prestations haut de gamme, isolation renforcée RE 2020, équipements économes. Confort en toute saison, charges maîtrisées toute l'année.",
  },
  interior: {
    eyebrow: "L'appartement",
    h2: "Lumineux, généreux, prêt à vivre.",
    lead_strong: "Pièces de vie traversantes.",
    lead_body:
      " Grandes baies vitrées dans le séjour, portes-fenêtres dans les chambres, terrasse plein ciel. Une luminosité incroyable qui profite de la nature alentour.",
    cta: "Télécharger la brochure",
    img_alt: "Vue intérieure d'un appartement Domaine Les Arômes — séjour lumineux ouvert sur terrasse",
  },
  apparts: {
    eyebrow: "Le dernier lot",
    h2: "Un appartement, une dernière chance.",
    lead: "Prix indicatif susceptible d'évoluer — à confirmer au bureau de vente.",
    from_label: "à partir de",
    receive_plan: "Recevoir le plan",
    legal_note_prefix:
      "* Prix indicatif non contractuel, à confirmer au bureau de vente — voir ",
    legal_link: "conditions complètes",
    surface_t2: "env. 42 m²",
    surface_t3: "env. 65 m²",
    surface_t4: "env. 82 m²",
    surface_t5: "env. 100 m²",
    hors_parking: "parking inclus",
    type_t2: "T2",
    type_t3: "T3",
    type_t4: "T4",
    type_t5: "T5",
  },
  localisation: {
    eyebrow: "Localisation",
    h2: "Méré, aux portes de Montfort-l'Amaury.",
    address_strong: "15 route de Galluis, 78490 Méré.",
    body: " Au calme, en pleine nature, à 5 minutes du centre-bourg médiéval de Montfort-l'Amaury et de toutes ses commodités.",
    paris_15: "Paris Montparnasse en train direct.",
    transports_h3: "Accès",
    rer_d: "Gare Méré-Montfort · Transilien ligne N",
    rer_b: "A12 / N12 · accès direct",
    metro_13: "A13 · vers Paris",
    tram_t11: "Saint-Quentin-en-Yvelines · 15 min en voiture",
    bus: "Centre-bourg Montfort · 5 min à pied",
    gpe: "Forêt de Rambouillet à proximité",
    map_region_aria: "Carte des points d'intérêt autour du Domaine Les Arômes",
    map_legend_aria: "Légende des points d'intérêt",
    section_practical: "Vie pratique",
    section_transit: "Transports & accès",
    section_education: "Éducation",
    section_worship: "Patrimoine & nature",
    section_sport: "Sport & loisirs",
    section_shops: "Commerces",
    walk_to: "à pied",
    directions: "Itinéraire",
    legend_sale: "Domaine Les Arômes",
    legend_practical: "Vie pratique",
    legend_transit: "Transports",
    legend_education: "Éducation",
    legend_worship: "Patrimoine & nature",
    legend_sport: "Sport",
    poi_sale: "Bureau de vente Domaine Les Arômes",
    poi_sale_sub: "15 route de Galluis, 78490 Méré",
    poi_mairie: "Mairie de Méré",
    poi_mairie_sub: "Centre-bourg",
    poi_marche: "Marché de Montfort-l'Amaury",
    poi_marche_sub: "Place du Marché — samedi matin",
    poi_poste: "Commerces de centre-bourg",
    poi_poste_sub: "Boulangerie, pharmacie, La Poste",
    poi_rerd: "Gare Méré-Montfort",
    poi_rerd_sub: "Transilien N · direct Paris Montparnasse",
    poi_rerb: "A12 — accès direct",
    poi_rerb_sub: "Vers Saint-Quentin-en-Yvelines",
    poi_m13: "A13 — vers Paris",
    poi_m13_sub: "Paris centre en ~45 min",
    poi_t11: "N12 — accès direct",
    poi_t11_sub: "Vers Dreux et la Normandie",
    poi_bus: "Centre-bourg Montfort-l'Amaury",
    poi_bus_sub: "À 5 min à pied",
    poi_school_primary: "École primaire de Méré",
    poi_school_primary_sub: "Groupe scolaire communal",
    poi_school_secondary: "Collège & lycée",
    poi_school_secondary_sub: "Établissements à Montfort-l'Amaury",
    poi_eglise: "Église Saint-Pierre Saint-Paul",
    poi_eglise_sub: "Collégiale de Montfort-l'Amaury (XVIᵉ s.)",
    poi_mosquee: "Forêt de Rambouillet",
    poi_mosquee_sub: "Massif forestier à proximité",
    poi_sport: "Golf, tennis, équitation",
    poi_sport_sub: "Équipements de Montfort-l'Amaury",
    poi_shops: "Centre-bourg de Montfort-l'Amaury",
    poi_shops_sub: "Boulangerie, brasseries, épiceries fines",
  },
  contact: {
    eyebrow: "Recevoir la documentation",
    h2: "Le dernier lot vous attend.",
    lead_strong: "24 h ouvrées.",
    lead_body:
      "Plan de l'appartement, prix détaillé, simulation de financement. Un conseiller vous recontacte sous ",
    address_h: "Bureau de vente",
    tel_h: "Téléphone",
    email_h: "Email",
  },
  form: {
    field_prenom: "Prénom",
    field_nom: "Nom",
    field_email: "Email",
    field_tel: "Téléphone",
    field_type: "Type de projet",
    field_projet: "Votre projet",
    optional: "(optionnel)",
    placeholder_email: "vous@exemple.fr",
    placeholder_tel: "06 12 34 56 78",
    placeholder_projet: "Résidence principale, secondaire, investissement…",
    type_indiff: "— Indifférent / non décidé —",
    tel_help: "Pour qu'un conseiller vous recontacte rapidement.",
    consent_sms:
      "J'accepte de recevoir des communications par SMS concernant le programme Domaine Les Arômes.",
    consent_rgpd_prefix: "J'ai pris connaissance des ",
    consent_rgpd_link: "mentions légales et de la politique de confidentialité",
    consent_rgpd_suffix: " et j'accepte le traitement de mes données pour répondre à ma demande.",
    submit: "Recevoir la documentation",
    submitting: "Envoi en cours…",
    rgpd_note_prefix:
      "Vos données sont conservées 18 mois et ne sont jamais cédées. Droits d'accès et de suppression : ",
    rgpd_note_email: "contact@domaine-les-aromes.fr",
    rgpd_note_suffix: ".",
    err_prenom: "Veuillez renseigner votre prénom.",
    err_nom: "Veuillez renseigner votre nom.",
    err_email: "Adresse email invalide.",
    err_tel: "Numéro de téléphone invalide.",
    err_consent: "Merci d'accepter les deux cases de consentement pour pouvoir vous recontacter.",
    err_required_check: "Merci de vérifier les champs en surbrillance.",
    err_generic: "L'envoi a échoué. Vous pouvez réessayer ou nous appeler au 06 40 74 24 72.",
    success: "Merci, votre demande a bien été enregistrée.",
  },
  footer: {
    tagline: "Domaine Les Arômes — programme neuf à Méré (78), aux portes de Montfort-l'Amaury.",
    sale_h: "Bureau de vente",
    promo_h: "Promoteur",
    legal_h: "Légal",
    legal_mentions: "Mentions légales",
    legal_cookies: "Cookies & traceurs",
    legal_data: "Données personnelles",
    copyright: (y) => `© ${y} SCCV 15 GALLUIS`,
    rights: "Tous droits réservés",
    powered_by: "Propulsé par",
  },
  merci: {
    eyebrow: "Demande enregistrée",
    h1: "Merci, votre demande est bien reçue.",
    lead_strong_24h: "24 heures ouvrées",
    lead_body:
      "Un conseiller Domaine Les Arômes vous recontacte sous {x} au numéro que vous avez indiqué. Il vous fera parvenir la brochure, le plan détaillé du lot et les conditions de l'offre.",
    block1_h: "Besoin de nous parler tout de suite ?",
    block1_p: "Le bureau de vente est ouvert lundi 14h-19h, jeudi-dimanche 10h30-12h30 / 14h-19h.",
    block2_h: "Préparer votre venue",
    block2_p: "Le bureau de vente est situé au 15 route de Galluis, 78490 Méré.",
    block2_link: "Itinéraire",
    back: "← Retour à l'accueil",
  },
  not_found: {
    eyebrow: "Erreur 404",
    h1: "Cette page s'est perdue.",
    lead: "Le contenu que vous cherchez n'existe pas ou a été déplacé. Revenez à l'accueil ou appelez le bureau de vente.",
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
    title_home: "Domaine Les Arômes — The last apartment in Méré (78), at the gates of Montfort-l'Amaury",
    desc_home:
      "The final apartment available at Domaine Les Arômes in Méré (78). New development of three small buildings in a village setting, landscaped gardens and large terraces. Last opportunity — instant discount.",
    title_merci: "Thank you for your enquiry",
    desc_merci:
      "Your documentation request has been received. A consultant will get back to you within 24 business hours.",
    title_404: "Page not found",
    desc_404: "The page you were looking for does not exist or has been moved.",
  },
  nav: {
    programme: "The development",
    appartements: "Last unit",
    localisation: "Location",
    contact: "Contact",
    legal: "Legal notice",
    skip_to_main: "Skip to content",
    open_menu: "Open menu",
    close_menu: "Close menu",
    docu_btn: "Brochure",
    call_aria: "Call — +33 6 40 74 24 72",
  },
  urgency: {
    region_label: "Last opportunity",
    tag: "Final unit",
    remise_label: "Instant discount on the very last apartment",
    text_prefix: "Only",
    text_count_part: (n) => (n === 1 ? "1 apartment left — the very last one" : `${n} apartments left`),
    cd_prefix: "Only",
    cta: "Claim it",
    close_aria: "Close the banner",
  },
  hero: {
    eyebrow: "New development · Méré (78) · Final unit",
    h1_line1: "The last apartment",
    h1_line2: "in an exceptional domain.",
    lead_strong: "This is your last chance.",
    lead_body:
      " Three small buildings surrounded by landscaped gardens, steps away from the town centre of Montfort-l'Amaury. Only one apartment is still available — don't let it slip.",
    cta_offer: "See the last unit",
    cta_program: "Discover the domain",
    bullet_re2020: "RE 2020 standard",
    bullet_tva: "Large terraces",
    bullet_ptz: "5 min from Méré-Montfort station",
  },
  offer: {
    section_label: "Last opportunity",
    tag: "Final unit",
    title_prefix: "A discount",
    title_or: "on the very last apartment",
    lead_strong_first: () => "",
    lead_body: "Only one apartment remains at Domaine Les Arômes. Here are its details:",
    table_h: "The last available apartment",
    table_lot: "Unit",
    table_before: "List price",
    table_after: "Current price",
    table_save: "You save",
    bonus_tag: "Bonus gift",
    bonus_subtitle: "For the buyer of the last unit",
    bonus_title: "Fitted kitchen included",
    bonus_body: "€4,000 voucher towards your fitted kitchen, on top of the apartment discount.",
    bullet1: (date) => `Sign the reservation contract before ${date} to secure the unit.`,
    bullet2: "The discount is applied to the inc. VAT price of your apartment.",
    bullet3: "Visit by appointment at the sales office.",
    cta_lock: "Secure the last unit",
    fine_prefix: "See the ",
    fine_link: "full conditions",
    fine_suffix: ". Offer valid on the last unit of the development.",
    counter_label: "Offer ends",
    cd_d: "days",
    cd_h: "hours",
    cd_m: "minutes",
    cd_s: "seconds",
    stock_label: "apartment left",
  },
  programme: {
    eyebrow: "Domaine Les Arômes",
    h2: "A rare setting, a life that breathes.",
    f1_h: "Landscaped gardens & terraces",
    f1_p:
      "Three small human-scale buildings nestled in greenery. Every apartment has its own terrace, bay windows opening onto the garden and natural light all day long.",
    f2_h: "At the gates of Montfort-l'Amaury",
    f2_p:
      "Five minutes' walk from the centre of Montfort, with shops, schools and services within reach. Méré-Montfort train station (Transilien line N) goes direct to Paris Montparnasse.",
    f3_h: "Careful finishes, 2025 standards",
    f3_p:
      "High-end amenities, reinforced RE 2020 insulation, energy-efficient equipment. Year-round comfort and controlled running costs.",
  },
  interior: {
    eyebrow: "The apartment",
    h2: "Bright, generous, ready to live in.",
    lead_strong: "Through-flow living spaces.",
    lead_body:
      " Large bay windows in the living room, French doors in the bedrooms, open terrace. Incredible natural light that takes full advantage of the surrounding nature.",
    cta: "Download the brochure",
    img_alt: "Interior view of a Domaine Les Arômes apartment — bright living room opening onto terrace",
  },
  apparts: {
    eyebrow: "The last unit",
    h2: "One apartment, one last chance.",
    lead: "Indicative price, subject to change — to be confirmed at the sales office.",
    from_label: "starting from",
    receive_plan: "Get the floor plan",
    legal_note_prefix:
      "* Indicative non-contractual price, to be confirmed at the sales office — see ",
    legal_link: "full conditions",
    surface_t2: "approx. 42 sqm",
    surface_t3: "approx. 65 sqm",
    surface_t4: "approx. 82 sqm",
    surface_t5: "approx. 100 sqm",
    hors_parking: "parking included",
    type_t2: "1-bdr",
    type_t3: "2-bdr",
    type_t4: "3-bdr",
    type_t5: "4-bdr",
  },
  localisation: {
    eyebrow: "Location",
    h2: "Méré, at the gates of Montfort-l'Amaury.",
    address_strong: "15 route de Galluis, 78490 Méré.",
    body: " A peaceful, green setting, 5 minutes from the medieval centre of Montfort-l'Amaury and all its amenities.",
    paris_15: "Paris Montparnasse by direct train.",
    transports_h3: "Access",
    rer_d: "Méré-Montfort station · Transilien line N",
    rer_b: "A12 / N12 · direct access",
    metro_13: "A13 · towards Paris",
    tram_t11: "Saint-Quentin-en-Yvelines · 15 min by car",
    bus: "Montfort centre · 5 min walk",
    gpe: "Rambouillet forest nearby",
    map_region_aria: "Map of points of interest around Domaine Les Arômes",
    map_legend_aria: "Legend of points of interest",
    section_practical: "Daily essentials",
    section_transit: "Transport & access",
    section_education: "Education",
    section_worship: "Heritage & nature",
    section_sport: "Sport & leisure",
    section_shops: "Shops",
    walk_to: "walk",
    directions: "Directions",
    legend_sale: "Domaine Les Arômes",
    legend_practical: "Daily essentials",
    legend_transit: "Transport",
    legend_education: "Education",
    legend_worship: "Heritage",
    legend_sport: "Sport",
    poi_sale: "Domaine Les Arômes sales office",
    poi_sale_sub: "15 route de Galluis, 78490 Méré",
    poi_mairie: "Méré town hall",
    poi_mairie_sub: "Village centre",
    poi_marche: "Montfort-l'Amaury market",
    poi_marche_sub: "Place du Marché — Saturday morning",
    poi_poste: "Village shops",
    poi_poste_sub: "Bakery, pharmacy, post office",
    poi_rerd: "Méré-Montfort station",
    poi_rerd_sub: "Transilien N · direct to Paris Montparnasse",
    poi_rerb: "A12 — direct access",
    poi_rerb_sub: "To Saint-Quentin-en-Yvelines",
    poi_m13: "A13 — towards Paris",
    poi_m13_sub: "Central Paris in ~45 min",
    poi_t11: "N12 — direct access",
    poi_t11_sub: "Towards Dreux and Normandy",
    poi_bus: "Montfort-l'Amaury centre",
    poi_bus_sub: "5 min walk",
    poi_school_primary: "Méré primary school",
    poi_school_primary_sub: "Local school group",
    poi_school_secondary: "Middle & high schools",
    poi_school_secondary_sub: "Schools in Montfort-l'Amaury",
    poi_eglise: "Saint-Pierre Saint-Paul collegiate church",
    poi_eglise_sub: "Montfort-l'Amaury (16th c.)",
    poi_mosquee: "Rambouillet forest",
    poi_mosquee_sub: "Forest massif nearby",
    poi_sport: "Golf, tennis, horse riding",
    poi_sport_sub: "Montfort-l'Amaury facilities",
    poi_shops: "Montfort-l'Amaury town centre",
    poi_shops_sub: "Bakery, brasseries, fine grocers",
  },
  contact: {
    eyebrow: "Get the brochure",
    h2: "The last unit is waiting for you.",
    lead_strong: "24 business hours.",
    lead_body:
      "Floor plan, detailed pricing, financing simulation. A consultant will get back to you within ",
    address_h: "Sales office",
    tel_h: "Phone",
    email_h: "Email",
  },
  form: {
    field_prenom: "First name",
    field_nom: "Last name",
    field_email: "Email",
    field_tel: "Phone",
    field_type: "Project type",
    field_projet: "Your project",
    optional: "(optional)",
    placeholder_email: "you@example.com",
    placeholder_tel: "+33 6 12 34 56 78",
    placeholder_projet: "Primary home, second home, investment…",
    type_indiff: "— No preference / undecided —",
    tel_help: "So a consultant can call you back quickly.",
    consent_sms:
      "I agree to receive SMS communications regarding the Domaine Les Arômes development.",
    consent_rgpd_prefix: "I have read the ",
    consent_rgpd_link: "legal notice and privacy policy",
    consent_rgpd_suffix: " and I consent to my data being processed to respond to my request.",
    submit: "Get the brochure",
    submitting: "Sending…",
    rgpd_note_prefix:
      "Your data is kept for 18 months max and never sold. Access and deletion rights: ",
    rgpd_note_email: "contact@domaine-les-aromes.fr",
    rgpd_note_suffix: ".",
    err_prenom: "Please enter your first name.",
    err_nom: "Please enter your last name.",
    err_email: "Invalid email address.",
    err_tel: "Invalid phone number.",
    err_consent: "Please accept both consent boxes so we can get back to you.",
    err_required_check: "Please check the highlighted fields.",
    err_generic:
      "Submission failed. Please try again or call us at +33 6 40 74 24 72.",
    success: "Thank you, your request has been received.",
  },
  footer: {
    tagline: "Domaine Les Arômes — new development in Méré (78), at the gates of Montfort-l'Amaury.",
    sale_h: "Sales office",
    promo_h: "Developer",
    legal_h: "Legal",
    legal_mentions: "Legal notice",
    legal_cookies: "Cookies & trackers",
    legal_data: "Personal data",
    copyright: (y) => `© ${y} SCCV 15 GALLUIS`,
    rights: "All rights reserved",
    powered_by: "Powered by",
  },
  merci: {
    eyebrow: "Request received",
    h1: "Thank you, your request is in.",
    lead_strong_24h: "24 business hours",
    lead_body:
      "A Domaine Les Arômes consultant will call you within {x} at the number you provided. They will send you the brochure, detailed floor plan and the conditions of the offer.",
    block1_h: "Need to talk right now?",
    block1_p: "The sales office is open Monday 2-7pm, Thursday-Sunday 10:30am-12:30pm / 2-7pm.",
    block2_h: "Plan your visit",
    block2_p: "Sales office: 15 route de Galluis, 78490 Méré.",
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

export const strings: Record<Locale, Strings> = { fr, en };

export function t(lang: Locale): Strings {
  return strings[lang] || strings.fr;
}
