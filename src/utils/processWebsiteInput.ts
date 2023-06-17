export function processWebsiteInput(input: string): string {
    if (input === "") {
        return "";
    }

    const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})+$/;
    const domainPattern =
        /^([a-z0-9]+(-[a-z0-9]+)*\.)+(com(\.br)?|app\.br|net|org|gov|edu|mil|int|eu|aero|biz|cat|coop|jobs|mobi|museum|name|pro|tel|travel|arpa)$/i;

    if (!urlPattern.test(input)) {
        return "";
    }

    if (!input.startsWith("http://") && !input.startsWith("https://")) {
        if (!input.startsWith("www.")) {
            return "http://www." + input;
        } else {
            if (!domainPattern.test(input)) {
                return "";
            }
        }

        return "http://" + input;
    } else {
        if (!input.startsWith("https://www.") && !input.startsWith("http://www.")) {
            return input.replace(/^(https?:\/\/)/, "$1www.");
        }
    }

    return input;
}
