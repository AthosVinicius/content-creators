import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

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
