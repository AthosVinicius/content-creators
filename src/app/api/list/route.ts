import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const revalidate = 0;

export async function GET(request: Request) {
    try {
        const creators = await prisma.creator.findMany({});

        return NextResponse.json({ creators: creators }, { headers: { "Cache-Control": "max-age=0" }, status: 200 });
    } catch (error) {
        console.log("ERROr: ", error);
        return NextResponse.json({ error: "Ocorreu um erro ao tentar listar os tech creators." }, { status: 500 });
    }
}
