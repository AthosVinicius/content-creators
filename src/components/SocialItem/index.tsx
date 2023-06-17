import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { Instagram, Tiktok, Twitter, Twitch, Linkedin, Youtube, Github, Facebook, Discord } from "@/icons";

type ISocialItem = {
    socialUrl?: string;
    social?: "Instagram" | "Tiktok" | "Twitter" | "Twitch" | "Linkedin" | "Youtube" | "Github" | "Facebook" | "Discord";
};

const colors = {
    Instagram: "hover:bg-[#fa523c]",
    Tiktok: "hover:bg-black",
    Twitter: "hover:bg-[#03A9F4]",
    Twitch: "hover:bg-[#8A42F2]",
    Linkedin: "hover:bg-[#007AB9]",
    Youtube: "hover:bg-[#B71C1C]",
    Github: "hover:bg-black",
    Facebook: "hover:bg-[#3B5998]",
    Discord: "hover:bg-[#5865F2]",
};

export const SocialItem = ({ socialUrl, social = "Instagram" }: ISocialItem) => {
    const components = {
        Instagram,
        Tiktok,
        Twitter,
        Twitch,
        Linkedin,
        Youtube,
        Github,
        Facebook,
        Discord,
    };

    const SocialIcon = components[social];

    return (
        <Link
            href={socialUrl ?? ""}
            target="_blank"
            className={twMerge(colors[social], `group p-4 flex flex-1 justify-center items-center`)}
        >
            <div className="hidden group-hover:block">
                <SocialIcon width={25} height={25} color="#FFF" />
            </div>
            <div className="block group-hover:hidden">
                <SocialIcon width={25} height={25} />
            </div>
        </Link>
    );
};
