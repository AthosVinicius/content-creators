import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { processDiscordInput } from "@/utils/processDiscordInput";
import { processFacebookInput } from "@/utils/processFacebookInput";
import { processGithubInput } from "@/utils/processGithubInput";
import { processInstagramInput } from "@/utils/processInstagramInput";
import { processLinkedinInput } from "@/utils/processLinkedinInput";
import { processTikTokInput } from "@/utils/processTikTokInput";
import { processTwitchInput } from "@/utils/processTwitchInput";
import { processTwitterInput } from "@/utils/processTwitterInput";
import { processWebsiteInput } from "@/utils/processWebsiteInput";
import { processYoutubeInput } from "@/utils/processYoutubeInput";

export async function POST(request: Request) {
    const {
        avatar,
        name,
        default_user,
        career,
        tiktok,
        instagram,
        twitter,
        youtube,
        linkedin,
        github,
        facebook,
        twitch,
        discord,
        website,
    } = await request.json();

    try {
        const formatedTiktok = processTikTokInput(tiktok);
        const formatedInstagram = processInstagramInput(instagram);
        const formatedTwitter = processTwitterInput(twitter);
        const formatedYoutube = processYoutubeInput(youtube);
        const formatedLinkedin = processLinkedinInput(linkedin);
        const formatedGithub = processGithubInput(github);
        const formatedFacebook = processFacebookInput(facebook);
        const formatedTwitch = processTwitchInput(twitch);
        const formatedWebsite = processWebsiteInput(website);
        const formatedDiscord = processDiscordInput(discord);
        const formatedDefaultUser = default_user?.includes("@") ? default_user : `@${default_user}`;

        let formatedAvatar = "";

        if (avatar === "") {
            if (formatedGithub !== "") {
                formatedAvatar = formatedGithub + ".png";
            }
        } else {
            formatedAvatar = avatar;
        }

        const newCreator = await prisma.creator.create({
            data: {
                avatar: formatedAvatar,
                name,
                default_user: formatedDefaultUser,
                career,
                tiktok: formatedTiktok,
                instagram: formatedInstagram,
                twitter: formatedTwitter,
                youtube: formatedYoutube,
                linkedin: formatedLinkedin,
                github: formatedGithub,
                facebook: formatedFacebook,
                twitch: formatedTwitch,
                discord: formatedDiscord,
                website: formatedWebsite,
            },
        });

        console.log(
            "CREATE: ",
            {
                data: {
                    avatar: formatedAvatar,
                    name,
                    default_user: formatedDefaultUser,
                    career,
                    tiktok: formatedTiktok,
                    instagram: formatedInstagram,
                    twitter: formatedTwitter,
                    youtube: formatedYoutube,
                    linkedin: formatedLinkedin,
                    github: formatedGithub,
                    facebook: formatedFacebook,
                    twitch: formatedTwitch,
                    discord: formatedDiscord,
                    website: formatedWebsite,
                },
            },
            newCreator,
        );

        if (newCreator) {
            return NextResponse.json({ ...newCreator }, { status: 201 });
        } else {
            return NextResponse.json(
                {
                    error: `Ocorreu um erro ao tentar cadastrar o criador de conteúdo. Creator: ${JSON.stringify(
                        newCreator,
                    )}`,
                },
                { status: 500 },
            );
        }
    } catch (error) {
        console.log("ERROR CATCH - CREATOR: ", error);

        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                return NextResponse.json(
                    { error: "O criador de conteúdo informado já está cadastrado." },
                    { status: 500 },
                );
            } else {
                return NextResponse.json(
                    { error: `Ocorreu um erro ao tentar cadastrar o criador de conteúdo. Erro: ${error.message}` },
                    { status: 500 },
                );
            }
        } else {
            return NextResponse.json(
                { error: "Ocorreu um erro ao tentar cadastrar o criador de conteúdo.", errorMessage: error },
                { status: 500 },
            );
        }
    }
}
