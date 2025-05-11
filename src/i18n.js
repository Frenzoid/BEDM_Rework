// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  // Navigation
  home: 'Home',
  about: 'About',
  registration: 'Registration',
  currentMarch: 'Current March',
  leaderboards: 'Leaderboards',
  statistics: 'Statistics',
  history: 'History',
  gallery: 'Gallery',
  contact: 'Contact',

  // Language
  language: 'Language',

  // Home Page
  tagline: 'Challenge yourself in the Swiss tradition',
  heroBannerTitle: 'Join the Bernese Distance March',
  heroBannerSubtitle: 'A unique marching experience in the lovely regions of the canton of Bern',
  scenicRoutes: 'Scenic Routes',
  customizeYourJourney: 'Customize Your Journey',
  registerNow: 'Register Now',

  // Features
  uniqueExperience: 'A Unique Experience',
  chooseYourRoute: 'Choose Your Route',
  chooseYourRouteDesc: 'Unlike other marches with fixed routes, you can freely choose between given checkpoints.',
  individualOrGroup: 'Individual or Group',
  individualOrGroupDesc: 'Participate as a single person or as a group and design the march individually.',
  annualEvent: 'Annual Event',
  annualEventDesc: 'For many years, people from all over the world have registered for this extraordinary event.',

  // Event Information
  nextEvent: 'Next Event',
  nextEventIntro: 'The 67th Bernese Distance March will take place on 6th December 2025.',
  date: 'Date',
  location: 'Location',
  cantonOfBern: 'Canton of Bern, Switzerland',
  participants: 'Participants',
  openToEveryone: 'Open to Everyone',
  learnMore: 'Learn More',

  // History
  richHistory: 'Rich History',
  historyIntro: 'The Bernese Distance March has a long and proud tradition dating back decades.',
  historyDetail: 'Since its inception, the march has evolved while preserving its core values and unique character.',
  years: 'Years',
  countries: 'Countries',
  exploreHistory: 'Explore History',

  // Testimonials
  participantExperiences: 'Participant Experiences',
  testimonial1: 'An incredible experience! The freedom to choose my own route made it truly unique. Beautiful scenery and excellent organization.',
  testimonial2: 'My third time participating and it keeps getting better. I love the camaraderie among participants and the challenge it provides.',
  testimonial3: 'As a first-time participant, I was impressed by how well organized everything was. Definitely coming back next year!',

  // Countdown
  joinUs: 'Join Us in',
  joinUsDesc: 'Don\'t miss this opportunity to be part of a historic Swiss tradition.',
  days: 'Days',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds',
  contactUs: 'Contact Us',

  // Quick Links
  registrationQuickDesc: 'Sign up for the next march',
  leaderboardsQuickDesc: 'View past results and rankings',
  currentMarchQuickDesc: 'Information about the upcoming march',

  // Footer
  footerDescription: 'The Bernese Distance March is a unique event that allows participants to freely choose their route between given posts in the lovely regions of the canton of Bern.',
  quickLinks: 'Quick Links',
  nextEvent: 'Next Event',
  registerNow: 'Register Now',
  allRightsReserved: 'All Rights Reserved',
  privacyPolicy: 'Privacy Policy',
  termsOfService: 'Terms of Service',
  imprint: 'Imprint',

  // Registration Page
  registerForMarch: 'Register for the 67th Bernese Distance March',
  participantType: 'Participant Type',
  personalInfo: 'Personal Info',
  confirmation: 'Confirmation',
  chooseParticipantType: 'Choose Participant Type',
  participantTypeDesc: 'Select whether you want to participate as an individual or as a group.',
  individual: 'Individual',
  individualDesc: 'Register as a single participant',
  group: 'Group',
  groupDesc: 'Register as a group of participants',
  selectCategory: 'Select Category',
  categoryDesc: 'Choose the category that best fits your participation.',
  categoryA: 'Category A',
  categoryADesc: 'Military/Uniformed personnel category',
  categoryB: 'Category B',
  categoryBDesc: 'Youth and Sport category (ages 15-20)',
  categoryC: 'Category C',
  categoryCDesc: 'Open category for all civilian participants',
  uniformed: 'Uniformed',
  categoryInfo: 'Your selected category will determine the scoring system and requirements for the march.',
  continue: 'Continue',

  // Personal Information
  personalInformation: 'Personal Information',
  personalInfoDesc: 'Please provide your personal details for registration.',
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  phone: 'Phone',
  dateOfBirth: 'Date of Birth',
  nationality: 'Nationality',
  idNumber: 'ID/Passport Number',
  groupName: 'Group Name',
  groupSize: 'Group Size',
  selectGroupSize: 'Select Group Size',
  people: 'People',
  participatingInUniform: 'I will be participating in uniform',
  emergencyContact: 'Emergency Contact',
  emergencyContactName: 'Emergency Contact Name',
  emergencyContactPhone: 'Emergency Contact Phone',
  back: 'Back',

  // Confirmation
  confirmRegistration: 'Confirm Registration',
  confirmRegistrationDesc: 'Please review your registration details below.',
  registrationSummary: 'Registration Summary',
  registrationType: 'Registration Type',
  category: 'Category',
  name: 'Name',
  termsAgreement: 'I agree to the',
  termsAndConditions: 'Terms and Conditions',
  registrationFeeInfo: 'The registration fee of CHF 50 for individuals or CHF 150 for groups will be payable after registration confirmation.',
  completeRegistration: 'Complete Registration',

  // Registration Success
  registrationComplete: 'Registration Complete',
  registrationSuccessMessage: 'Thank you for registering for the 67th Bernese Distance March.',
  checkEmailMessage: 'Please check your email for the confirmation and further instructions.',

  // Current March Page
  currentMarchSubtitle: 'Information about the upcoming 67th Bernese Distance March',
  nextMarchDate: 'Next March Date',
  markYourCalendar: 'Mark your calendar for the upcoming Bernese Distance March',

  // Tab Navigation
  overview: 'Overview',
  schedule: 'Schedule',
  routes: 'Routes',
  regulations: 'Regulations',

  // Overview Tab
  marchOverview: 'March Overview',
  marchOverviewDesc: 'Everything you need to know about the 67th Bernese Distance March',
  aboutTheMarch: 'About the March',
  aboutTheMarchDesc1: 'The Bernese Distance March is a unique event that allows participants to freely choose their route between given checkpoints in the lovely regions of the canton of Bern.',
  aboutTheMarchDesc2: 'This tradition has been going on for decades, attracting participants from all over the world who challenge themselves in this extraordinary march.',
  flexibleRoutes: 'Flexible Routes',
  flexibleRoutesDesc: 'Choose your own path between checkpoints, customizing the distance and difficulty.',
  participationOptions: 'Participation Options',
  participationOptionsDesc: 'Participate as an individual or as a group, in uniform or civilian clothes.',
  categorizationSystem: 'Categorization System',
  categorizationSystemDesc: 'Different categories for military personnel, youth, and civilian participants.',
  readyToJoin: 'Ready to Join?',
  readyToJoinDesc: 'Register now to secure your spot in this unique Swiss tradition.',

  // Schedule Tab
  marchSchedule: 'March Schedule',
  marchScheduleDesc: 'Timetable for the 67th Bernese Distance March on 6th December 2025',
  registration: 'Registration',
  registrationTimeDesc: 'Check-in and badge collection at the starting point.',
  officialStart: 'Official Start',
  officialStartDesc: 'Opening ceremony and start of the march.',
  marchTime: 'March Time',
  marchTimeDesc: 'Participants navigate between checkpoints at their own pace.',
  checkpointHours: 'Checkpoint Hours',
  checkpointHoursDesc: 'All checkpoints will be staffed and open during these hours.',
  marchClosure: 'March Closure',
  marchClosureDesc: 'All participants must reach the finish line by this time.',
  awardsCeremony: 'Awards Ceremony',
  awardsCeremonyDesc: 'Presentation of medals and certificates to all finishers.',
  scheduleNote1: 'Participants must check in at all designated checkpoints to qualify for completion.',
  scheduleNote2: 'The march will take place regardless of weather conditions. Please prepare accordingly.',

  // Routes Tab
  marchRoutes: 'March Routes',
  marchRoutesDesc: 'Information about the routes and checkpoints for the 67th Bernese Distance March',
  checkpoints: 'Checkpoints',
  checkpoint: 'Checkpoint',
  startPoint: 'Start Point',
  endPoint: 'End Point',
  distanceScheme: 'Distance Scheme',
  distanceSchemeDesc: 'Participants can choose between different route options based on their preference and category.',
  shortRoute: 'Short Route',
  shortRouteDesc: 'Suitable for beginners and youth participants.',
  mediumRoute: 'Medium Route',
  mediumRouteDesc: 'Balanced challenge for most participants.',
  longRoute: 'Long Route',
  longRouteDesc: 'Challenging option for experienced marchers.',
  downloadMap: 'Download Map PDF',

  // Regulations Tab
  marchRegulations: 'March Regulations',
  marchRegulationsDesc: 'Official rules and regulations for the 67th Bernese Distance March',
  generalRules: 'General Rules',
  regulation1: 'All participants must register and wear their official badge throughout the march.',
  regulation2: 'Participants must check in at all designated checkpoints to qualify for completion.',
  regulation3: 'The minimum age for participation is 15 years. Participants under 18 require parental consent.',
  regulation4: 'Appropriate footwear and clothing are required. Be prepared for changing weather conditions.',
  regulation5: 'Each participant is responsible for their own safety and well-being during the march.',
  categorySpecificRules: 'Category-Specific Rules',
  regulationA1: 'Military personnel must wear their service uniform.',
  regulationA2: 'Military backpacks must weigh at least 10kg throughout the march.',
  regulationA3: 'Military ID must be presented at registration.',
  regulationB1: 'Youth participants (15-20 years) must provide proof of age.',
  regulationB2: 'Youth groups must have an adult supervisor (21+ years) for every 10 participants.',
  regulationC1: 'Civilian participants may choose any appropriate attire for the march.',
  regulationC2: 'Walking poles are permitted but not required.',
  safety: 'Safety',
  safety1: 'In case of emergency, call the emergency number provided on your badge.',
  safety2: 'First aid stations will be available at each checkpoint.',
  safety3: 'The organization reserves the right to remove participants who are deemed unfit to continue.',
  safety4: 'Participants must follow all traffic rules when crossing public roads.',
  officialDocuments: 'Official Documents',
  marchingRegulations: 'Marching Regulations',
  shootingRegulations: 'Shooting Regulations',
  flyer2025: 'Flyer 2025',
};

// German translations
const deTranslations = {
  // Navigation
  home: 'Startseite',
  about: 'Über uns',
  registration: 'Anmeldung',
  currentMarch: 'Aktueller Marsch',
  leaderboards: 'Ranglisten',
  statistics: 'Statistiken',
  history: 'Geschichte',
  gallery: 'Galerie',
  contact: 'Kontakt',

  // Language
  language: 'Sprache',

  // Home Page
  tagline: 'Fordern Sie sich heraus in der Schweizer Tradition',
  heroBannerTitle: 'Nehmen Sie am Berner Distanzmarsch teil',
  heroBannerSubtitle: 'Eine einzigartige Marscherfahrung in den schönen Regionen des Kantons Bern',
  scenicRoutes: 'Malerische Routen',
  customizeYourJourney: 'Gestalten Sie Ihre Reise',
  registerNow: 'Jetzt Registrieren',

  // Features
  uniqueExperience: 'Eine einzigartige Erfahrung',
  chooseYourRoute: 'Wählen Sie Ihre Route',
  chooseYourRouteDesc: 'Im Gegensatz zu anderen Märschen mit festen Routen können Sie frei zwischen gegebenen Checkpoints wählen.',
  individualOrGroup: 'Einzeln oder Gruppe',
  individualOrGroupDesc: 'Nehmen Sie als Einzelperson oder als Gruppe teil und gestalten Sie den Marsch individuell.',
  annualEvent: 'Jährliche Veranstaltung',
  annualEventDesc: 'Seit vielen Jahren melden sich Menschen aus aller Welt für dieses außergewöhnliche Ereignis an.',

  // Event Information
  nextEvent: 'Nächste Veranstaltung',
  nextEventIntro: 'Der 67. Berner Distanzmarsch findet am 6. Dezember 2025 statt.',
  date: 'Datum',
  location: 'Ort',
  cantonOfBern: 'Kanton Bern, Schweiz',
  participants: 'Teilnehmer',
  openToEveryone: 'Offen für Jedermann',
  learnMore: 'Mehr Erfahren',

  // History
  richHistory: 'Reiche Geschichte',
  historyIntro: 'Der Berner Distanzmarsch hat eine lange und stolze Tradition, die Jahrzehnte zurückreicht.',
  historyDetail: 'Seit seiner Gründung hat sich der Marsch weiterentwickelt und dabei seine Grundwerte und seinen einzigartigen Charakter bewahrt.',
  years: 'Jahre',
  countries: 'Länder',
  exploreHistory: 'Geschichte Erkunden',

  // Testimonials
  participantExperiences: 'Teilnehmererfahrungen',
  testimonial1: 'Eine unglaubliche Erfahrung! Die Freiheit, meine eigene Route zu wählen, machte es wirklich einzigartig. Wunderschöne Landschaft und hervorragende Organisation.',
  testimonial2: 'Mein drittes Mal als Teilnehmer und es wird immer besser. Ich liebe die Kameradschaft unter den Teilnehmern und die Herausforderung.',
  testimonial3: 'Als Erstteilnehmer war ich beeindruckt von der guten Organisation. Komme definitiv nächstes Jahr wieder!',

  // Countdown
  joinUs: 'Nehmen Sie teil in',
  joinUsDesc: 'Verpassen Sie nicht die Gelegenheit, Teil einer historischen Schweizer Tradition zu sein.',
  days: 'Tage',
  hours: 'Stunden',
  minutes: 'Minuten',
  seconds: 'Sekunden',
  contactUs: 'Kontaktieren Sie uns',

  // Quick Links
  registrationQuickDesc: 'Melden Sie sich für den nächsten Marsch an',
  leaderboardsQuickDesc: 'Sehen Sie vergangene Resultate und Ranglisten',
  currentMarchQuickDesc: 'Informationen zum nächsten Marsch',

  // Footer
  footerDescription: 'Der Berner Distanzmarsch ist eine einzigartige Veranstaltung, bei der die Teilnehmer ihre Route zwischen gegebenen Posten in den schönen Regionen des Kantons Bern frei wählen können.',
  quickLinks: 'Schnellzugriff',
  nextEvent: 'Nächster Marsch',
  registerNow: 'Jetzt Anmelden',
  allRightsReserved: 'Alle Rechte vorbehalten',
  privacyPolicy: 'Datenschutz',
  termsOfService: 'Nutzungsbedingungen',
  imprint: 'Impressum',
};

// French translations
const frTranslations = {
  // Navigation
  home: 'Accueil',
  about: 'À propos',
  registration: 'Inscription',
  currentMarch: 'Marche Actuelle',
  leaderboards: 'Classements',
  statistics: 'Statistiques',
  history: 'Histoire',
  gallery: 'Galerie',
  contact: 'Contact',

  // Language
  language: 'Langue',

  // Home Page
  tagline: 'Défiez-vous dans la tradition suisse',
  heroBannerTitle: 'Rejoignez la Marche de Distance Bernoise',
  heroBannerSubtitle: 'Une expérience de marche unique dans les belles régions du canton de Berne',
  scenicRoutes: 'Routes Pittoresques',
  customizeYourJourney: 'Personnalisez Votre Parcours',
  registerNow: 'Inscrivez-vous Maintenant',

  // Features
  uniqueExperience: 'Une Expérience Unique',
  chooseYourRoute: 'Choisissez Votre Itinéraire',
  chooseYourRouteDesc: 'Contrairement aux autres marches avec des itinéraires fixes, vous pouvez choisir librement entre les points de contrôle donnés.',
  individualOrGroup: 'Individuel ou Groupe',
  individualOrGroupDesc: 'Participez en tant que personne seule ou en groupe et concevez la marche individuellement.',
  annualEvent: 'Événement Annuel',
  annualEventDesc: 'Depuis de nombreuses années, des personnes du monde entier s\'inscrivent à cet événement extraordinaire.',

  // Event Information
  nextEvent: 'Prochain Événement',
  nextEventIntro: 'La 67e Marche de Distance Bernoise aura lieu le 6 décembre 2025.',
  date: 'Date',
  location: 'Lieu',
  cantonOfBern: 'Canton de Berne, Suisse',
  participants: 'Participants',
  openToEveryone: 'Ouvert à Tous',
  learnMore: 'En Savoir Plus',

  // History
  richHistory: 'Riche Histoire',
  historyIntro: 'La Marche de Distance Bernoise a une longue et fière tradition qui remonte à des décennies.',
  historyDetail: 'Depuis sa création, la marche a évolué tout en préservant ses valeurs fondamentales et son caractère unique.',
  years: 'Années',
  countries: 'Pays',
  exploreHistory: 'Explorer l\'Histoire',

  // Testimonials
  participantExperiences: 'Expériences des Participants',
  testimonial1: 'Une expérience incroyable! La liberté de choisir mon propre itinéraire l\'a rendue vraiment unique. Beaux paysages et excellente organisation.',
  testimonial2: 'Ma troisième participation et cela continue de s\'améliorer. J\'adore la camaraderie entre les participants et le défi qu\'elle offre.',
  testimonial3: 'En tant que participant pour la première fois, j\'ai été impressionné par la bonne organisation. Je reviendrai certainement l\'année prochaine!',

  // Countdown
  joinUs: 'Rejoignez-nous en',
  joinUsDesc: 'Ne manquez pas cette occasion de faire partie d\'une tradition suisse historique.',
  days: 'Jours',
  hours: 'Heures',
  minutes: 'Minutes',
  seconds: 'Secondes',
  contactUs: 'Contactez-nous',

  // Quick Links
  registrationQuickDesc: 'Inscrivez-vous pour la prochaine marche',
  leaderboardsQuickDesc: 'Consultez les résultats et classements passés',
  currentMarchQuickDesc: 'Informations sur la prochaine marche',

  // Footer
  footerDescription: 'La Marche de Distance Bernoise est un événement unique qui permet aux participants de choisir librement leur itinéraire entre des postes donnés dans les belles régions du canton de Berne.',
  quickLinks: 'Liens Rapides',
  nextEvent: 'Prochain Événement',
  registerNow: 'Inscrivez-vous Maintenant',
  allRightsReserved: 'Tous Droits Réservés',
  privacyPolicy: 'Politique de Confidentialité',
  termsOfService: 'Conditions d\'Utilisation',
  imprint: 'Mentions Légales',
};

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      de: {
        translation: deTranslations
      },
      fr: {
        translation: frTranslations
      }
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;