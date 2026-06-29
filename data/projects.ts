export const projects = [
  {
    id: 1,

    title: {
      en: "APM Portfolio Website",
      fr: "Portfolio APM"
    },

    description: {
      en: "A professional portfolio built using Next.js, TypeScript, Tailwind CSS and shadcn/ui.",
      fr: "Un portfolio professionnel développé avec Next.js, TypeScript, Tailwind CSS et shadcn/ui."
    },

    image: "/images/projects/arnold.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI"
    ],

    github:
      "https://github.com/ArnoldPeterMukasa/portfolio-v2",

    live: "#",

    status: {
      en: "In Progress",
      fr: "En cours"
    },

    collaborators: []
  },

  {
    id: 2,

    title: {
      en: "Network Infrastructure Project",
      fr: "Projet d'Infrastructure Réseau"
    },

    description: {
      en: "Designed and implemented secure enterprise networking solutions including VLANs, firewalls and VPN technologies.",
      fr: "Conception et mise en œuvre d'une infrastructure réseau sécurisée comprenant des VLAN, des pare-feu et des technologies VPN."
    },

    image: "/images/projects/net.png",

    technologies: [
      "Networking",
      "Cisco",
      "VLAN",
      "Security"
    ],

    github: "#",

    live: "#",

    status: {
      en: "Completed",
      fr: "Terminé"
    },

    collaborators: []
  },

  {
    id: 3,

    title: {
      en: "Academic Issue Tracking System",
      fr: "Système de Suivi des Problèmes Académiques"
    },

    description: {
      en: "A collaborative university platform developed by Makerere University students to solve academic challenges digitally.",
      fr: "Une plateforme collaborative développée par des étudiants de l'Université Makerere afin de résoudre numériquement les problèmes académiques."
    },

    image: "/images/projects/net.png",

    technologies: [
      "React",
      "Python",
      "Django",
      "Postman"
    ],

    github: "#",

    live:
      "https://aits-group-g-gcyp.vercel.app/",

    status: {
      en: "Completed",
      fr: "Terminé"
    },

    collaborators: [1,2,3,4]
  },

  {
    id: 4,

    title: {
      en: "Reclaim Space",
      fr: "Reclaim Space"
    },

    description: {
      en: "A location-based system helping recover lost National IDs and locate missing people using GPS technologies.",
      fr: "Une solution basée sur la géolocalisation permettant de retrouver des cartes d'identité perdues et des personnes disparues grâce au GPS."
    },

    image: "/images/projects/net.png",

    technologies: [
      "Flutter",
      "Firebase",
      "Dart",
      "GPS"
    ],

    github: "#",

    live:
      "https://reclaim-space-df557.web.app/",

    status: {
      en: "Completed",
      fr: "Terminé"
    },

    collaborators: [1,2,3,5]
  }
];