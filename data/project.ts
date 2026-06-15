import { createOpaqueFallbackRouteParams } from "next/dist/server/request/fallback-params";

export const projects=[
    {
        id: 1,
        title: "APM Site",
        description: 
        "A Professional Portfolio built using Next.js, TypeScript, Tailwind CSS, and Shadcn UI.",
        image: "images/projects/arnold.png",
        technologies:[
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
        ],
        github: "https://github.com/ArnoldPeterMukasa/portfolio-v2",
        live: "#",
        status: "In Progress",
        collaborators: [],
    },
    {
        id: 2,
        title: "Network Infrastructure Project",
        description:
        "Designed and implemented a secure network infrastructure for a Makerere University Business School-(MUBS) and also for amedium-sized enterprise, incorporating firewalls, VPNs, and intrusion detection systems to protect sensitive data and ensure reliable connectivity.",
        image: "images/projects/net.png",
        technologies:[
            "Networking Security",
            "Ethical Hacking",
            "Vlan",
            "Cisco",
        ],
        github: "#",
        live: "#",
        status: "Completed",
        collaborators: [],
    },
];