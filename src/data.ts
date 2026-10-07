export type Activity = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  detail: string;
  icon: string;
  featured?: boolean;
};

export const images = {
  hero: 'https://images.pexels.com/photos/39523815/pexels-photo-39523815.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  children: 'https://images.pexels.com/photos/11045177/pexels-photo-11045177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  workshop: 'https://images.pexels.com/photos/32702849/pexels-photo-32702849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  community: 'https://images.pexels.com/photos/25457343/pexels-photo-25457343.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export const activities: Activity[] = [
  {
    id: 'english-clubs',
    title: 'Revealed English Clubs',
    eyebrow: 'Programme phare',
    description: 'Des espaces réguliers où les enfants et les jeunes apprennent, pratiquent et progressent en anglais.',
    detail: 'Des rencontres principalement organisées deux samedis par mois, pendant environ 1 h 30, dans une approche ludique, participative et adaptée aux participants.',
    icon: 'book',
    featured: true,
  },
  {
    id: 'prayer-movement',
    title: 'Mouvement de prière',
    eyebrow: 'Foi & engagement',
    description: 'Un espace pour faire grandir une génération ancrée dans la foi et attentive aux autres.',
    detail: 'Les informations détaillées sur ce mouvement seront précisées prochainement.',
    icon: 'sparkles',
  },
  {
    id: 'youth-prayer-meet-up',
    title: 'Youth Prayer Meet Up',
    eyebrow: 'Rassemblement annuel',
    description: 'Un rendez-vous pour réunir la jeunesse autour de la prière et de la communion.',
    detail: 'Les prochaines informations pratiques seront communiquées ultérieurement.',
    icon: 'users',
  },
  {
    id: 'english-support',
    title: 'Accompagnement en anglais',
    eyebrow: 'Soutien scolaire',
    description: 'Un accompagnement attentif pour les élèves qui rencontrent des difficultés en anglais.',
    detail: 'Une attention particulière est prévue pour les élèves préparant le BEPC et le baccalauréat.',
    icon: 'compass',
  },
  {
    id: 'revealed-challenge',
    title: 'The Revealed Challenge',
    eyebrow: 'À venir',
    description: 'Un concours annuel inter-églises pour valoriser les acquis et révéler les talents.',
    detail: 'Le format, les catégories et les modalités seront définis avant la première édition.',
    icon: 'trophy',
  },
];

export const news = [
  { tag: 'Projet', title: 'Les Revealed English Clubs arrivent à Lomé', excerpt: 'Un projet éducatif pour accompagner les enfants et les jeunes dans leur recherche d’excellence.', date: 'Septembre 2026' },
  { tag: 'Vision', title: 'Une génération en action', excerpt: 'Revealed Generation porte une vision qui relie foi, compétences, service et impact.', date: 'À venir' },
  { tag: 'Communauté', title: 'Construire avec les églises partenaires', excerpt: 'Le mouvement avance par la collaboration, l’écoute et une mobilisation progressive.', date: 'À venir' },
];

export const resources = [
  { title: 'Présentation du mouvement', type: 'Document de présentation', status: 'Bientôt disponible' },
  { title: 'Revealed English Clubs', type: 'Fiche programme', status: 'Bientôt disponible' },
  { title: 'Devenir église partenaire', type: 'Informations pratiques', status: 'Bientôt disponible' },
];
