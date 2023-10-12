// Register so the script runs on the page
chrome.scripting
    .registerContentScripts([{
        matches: ["https://*.savemyexams.com/*"],
        js: ["content.js"],
        id: "sma-crack-content",
        runAt: "document_end",
        world: "MAIN"
    }])
    .then(() => console.log("content script loaded"))