export function processDiscordInput(input: string): string {
    if (input === "") {
        return "";
    }

    const isUsernameValid = (username: string): boolean => {
        const discordUsernamePattern = /^[a-zA-Z0-9_]{2,32}$/;
        return discordUsernamePattern.test(username);
    };

    const buildDiscordUrl = (username: string): string => {
        return `https://discordapp.com/users/${username}`;
    };

    const isUrlValid = (url: string): boolean => {
        const discordUrlPattern =
            /^(?:https?:\/\/)?discord(?:app\.com\/users|\.gg(?:\/invite)?)\/([a-zA-Z0-9_]{2,32})\/?$/;
        return discordUrlPattern.test(url);
    };

    if (isUsernameValid(input)) {
        return buildDiscordUrl(input);
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

        return buildDiscordUrl(username);
    }
}
