export function processTwitchInput(input: string): string {
    if (input === "") {
        return "";
    }

    const isUsernameValid = (username: string): boolean => {
        const twitchUsernamePattern = /^[a-zA-Z0-9._]+$/;
        return twitchUsernamePattern.test(username);
    };

    const buildTwitchUrl = (username: string): string => {
        return `https://www.twitch.tv/${username}`;
    };

    const isUrlValid = (url: string): boolean => {
        const twitchUrlPattern = /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:twitch\.tv)\/([a-zA-Z0-9._]+)?\/?$/;
        return twitchUrlPattern.test(url);
    };

    if (isUsernameValid(input)) {
        return buildTwitchUrl(input);
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

        return buildTwitchUrl(username);
    }
}
