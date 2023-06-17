export function processTwitterInput(input: string): string {
    if (input === "") {
        return "";
    }

    const isUsernameValid = (username: string): boolean => {
        const twitterUsernamePattern = /^[a-zA-Z0-9._]+$/;
        return twitterUsernamePattern.test(username);
    };

    const buildTwitterUrl = (username: string): string => {
        return `https://www.twitter.com/${username}`;
    };

    const isUrlValid = (url: string): boolean => {
        const twitterUrlPattern = /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:twitter\.com)\/([a-zA-Z0-9._]+)?\/?$/;
        return twitterUrlPattern.test(url);
    };

    if (isUsernameValid(input)) {
        return buildTwitterUrl(input);
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

        return buildTwitterUrl(username);
    }
}
