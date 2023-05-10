// Vars
const BaseURL = "https://sma-crack.deno.dev"
const SiteRE = /https:\/\/www\.savemyexams\.co\.uk\/api\/v0\/posts\/([\w\_-~]+)\/topic-questions\/parts\/([\w-~\_]+)\/solution/
const Proxy = {
    solution: `${BaseURL}/solution`
}

// See whenever we visit a site
chrome.webRequest.onBeforeRequest.addListener(
    // Modifier
    function(details) {
        // Make sure is a request for a solution
        const URLMatch = SiteRE.exec(details.url)
        if (!URLMatch) {
            return
        }

        // Return our modified request (redirect)
        const modifiedRequest = {
            redirectUrl: Proxy.solution
        }
        return modifiedRequest
    },

    // Filter
    {
        urls: [
            "https://www.savemyexams.co.uk/*"
        ]
    },
    [
        "blocking"
    ]
)