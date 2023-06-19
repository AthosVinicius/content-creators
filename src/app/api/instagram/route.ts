import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { user } = await request.json();

    try {
        const response: any = await axios.get(`https://www.instagram.com/${user}/?__a=1`);

        console.log(response);
        return NextResponse.json({ usuario: user });
    } catch (error) {
        console.log("ERROR CATCH - INSTAGRAM: ", error);
    }
}
