export function processInstagramInput(input: string): string {
    if (input === "") {
        return "";
    }

    const isUsernameValid = (username: string): boolean => {
        const instagramUsernamePattern = /^[a-zA-Z0-9._]+$/;
        return instagramUsernamePattern.test(username);
    };

    const buildInstagramUrl = (username: string): string => {
        return `https://www.instagram.com/${username}`;
    };

    const isUrlValid = (url: string): boolean => {
        const instagramUrlPattern = /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:instagram\.com)\/([a-zA-Z0-9._]+)?\/?$/;
        return instagramUrlPattern.test(url);
    };

    if (isUsernameValid(input)) {
        return buildInstagramUrl(input);
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

        return buildInstagramUrl(username);
    }
}
