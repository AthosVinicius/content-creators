import axios from "axios";

export async function convertToBase64(imageObject: {
    name: string;
    size: number;
    type: string;
    preview: string;
}): Promise<string> {
    const { preview } = imageObject;
    const response = await axios.get(preview, { responseType: "arraybuffer" });
    const imageBuffer = Buffer.from(response.data, "binary").toString("base64");
    const mimeType = imageObject.type;
    return `data:${mimeType};base64,${imageBuffer}`;
}
