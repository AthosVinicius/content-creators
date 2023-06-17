export function processGithubInput(input: string): string {
    if (input === "") {
        return "";
    }

    const isUsernameValid = (username: string): boolean => {
        const githubUsernamePattern = /^[a-zA-Z0-9._]+$/;
        return githubUsernamePattern.test(username);
    };

    const buildGithubUrl = (username: string): string => {
        return `https://www.github.com/${username}`;
    };

    const isUrlValid = (url: string): boolean => {
        const githubUrlPattern = /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:github\.com)\/([a-zA-Z0-9._]+)?\/?$/;
        return githubUrlPattern.test(url);
    };

    if (isUsernameValid(input)) {
        return buildGithubUrl(input);
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

        return buildGithubUrl(username);
    }
}
