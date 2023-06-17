export function processFacebookInput(input: string): string {
    if (input === "") {
        return "";
    }

    const isUsernameValid = (username: string): boolean => {
        const facebookUsernamePattern = /^[a-zA-Z0-9._]+$/;
        return facebookUsernamePattern.test(username);
    };

    const buildFacebookUrl = (username: string): string => {
        return `https://www.facebook.com/${username}`;
    };

    const isUrlValid = (url: string): boolean => {
        const facebookUrlPattern = /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:facebook\.com)\/([a-zA-Z0-9._]+)?\/?$/;
        return facebookUrlPattern.test(url);
    };

    if (isUsernameValid(input)) {
        return buildFacebookUrl(input);
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

        return buildFacebookUrl(username);
    }
}
