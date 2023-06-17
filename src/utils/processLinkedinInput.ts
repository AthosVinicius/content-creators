export function processLinkedinInput(input: string): string {
    if (input === "") {
        return "";
    }

    const isUsernameValid = (username: string): boolean => {
        const linkedinUsernamePattern = /^[a-zA-Z0-9._]+$/;
        return linkedinUsernamePattern.test(username);
    };

    const buildLinkedinUrl = (username: string): string => {
        return `https://www.linkedin.com/in/${username}`;
    };

    const isUrlValid = (url: string): boolean => {
        const linkedinUrlPattern = /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:linkedin\.com)\/(in)\/([a-zA-Z0-9._]+)?\/?$/;
        return linkedinUrlPattern.test(url);
    };

    if (isUsernameValid(input)) {
        return buildLinkedinUrl(input);
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

        return buildLinkedinUrl(username);
    }
}
