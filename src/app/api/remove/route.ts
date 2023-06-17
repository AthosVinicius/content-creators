import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
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
    const { id } = await request.json();

    try {
        const deletedCreator = await prisma.creator.delete({
            where: {
                id: id,
            },
        });

        return NextResponse.json({ ...deletedCreator, delete: true }, { status: 200 });
    } catch (error) {
        console.log("ERROR: ", error);
        return NextResponse.json({ error: "Ocorreu um erro ao remover o creator." }, { status: 500 });
    }
}
