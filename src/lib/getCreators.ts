import { randomOrder } from "@/utils/randomOrder";

export async function getCreators() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/list`, { cache: "no-store", next: { revalidate: 0 } });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const { creators } = await res.json();

    return randomOrder(creators);
}
