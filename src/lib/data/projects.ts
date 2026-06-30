import { type TechUnion } from './stack'

export type ProjectProps = {
    title: string;
    text: string;
    image_url: string;
    livedemo_url: string;
    github_url: string;
    technologies: TechUnion[]
};

export const projects: ProjectProps[] = [
    {
        title: "Bandmate",
        text: "A drum machine application I made for guitar practice. Has a number of built-in presets, and you can make and save your own.",
        image_url: "/bandmate.png",
        livedemo_url: "http://bandmate-drummer.vercel.app",
        github_url: "https://github.com/artzimov/bandmate",
        technologies: ["Next.js", "TypeScript", "React", "Tone.js"]
    },
    {
        title: "2048",
        text: "My version of a popular game.",
        image_url: "2048.png",
        livedemo_url: "https://2048-themoor.vercel.app",
        github_url: "https://github.com/artzimov/2048-svelte",
        technologies: ["Svelte", "TypeScript"]
    },
    {
        title: "DunKee",
        text: "A fan site dedicated to Dungeon Keeper. Not a serious portfolio project, but you might like my Room efficiency calculator, adapted from the game's source code.",
        image_url: "/dunkee.png",
        livedemo_url: "https://dunkee.vercel.app",
        github_url: "https://github.com/artzimov/dunkee",
        technologies: ["Next.js", "TypeScript", "React", "TailwindCSS"]
    }
]