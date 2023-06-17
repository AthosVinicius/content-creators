export function processTikTokInput(input: string): string {
    if (input === "") {
        return "";
    }

    const isUsernameValid = (username: string): boolean => {
        const tiktokUsernamePattern = /^[a-zA-Z0-9._]+$/;
        return tiktokUsernamePattern.test(username);
    };

    const buildTikTokUrl = (username: string): string => {
        return `https://www.tiktok.com/@${username}`;
    };

    const isUrlValid = (url: string): boolean => {
        const tiktokUrlPattern =
            /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:tiktok\.com)\/@([a-zA-Z0-9._]+)(?:\/video\/[\d]+)?\/?$/;
        return tiktokUrlPattern.test(url);
    };

    if (isUsernameValid(input)) {
        return buildTikTokUrl(input);
    } else if (isUrlValid(input)) {
        return input;
    } else {
        let username = "";

        if (input.includes("@")) {
            username = input.split("@")[input.split("@").length - 1];
            username = username.split("/")[0].replace("/", "");
        } else {
            username = input.split("/")[input.split("/").length - 1].replace("/", "");

            if (username === "") {
                username = input.split("/")[input.split("/").length - 2].replace("/", "");
            }
        }

        return buildTikTokUrl(username);
    }
}
