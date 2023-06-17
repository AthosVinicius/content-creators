export function processYoutubeInput(input: string): string {
    if (input === "") {
        return "";
    }

    const isUsernameValid = (username: string): boolean => {
        const youtubeUsernamePattern = /^[a-zA-Z0-9._]+$/;
        return youtubeUsernamePattern.test(username);
    };

    const buildYoutubeUrl = (username: string): string => {
        return `https://www.youtube.com/@${username}`;
    };

    const isUrlValid = (url: string): boolean => {
        const youtubeUrlPattern = /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:youtube\.com)\/(channel)\/([a-zA-Z0-9._]+)?\/?$/;
        return youtubeUrlPattern.test(url);
    };

    if (isUsernameValid(input)) {
        return buildYoutubeUrl(input);
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

        return buildYoutubeUrl(username);
    }
}
