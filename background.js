// Register so the script runs on the page
chrome.scripting.registerContentScripts([{
    matches: ["https://*.savemyexams.com/*"],
    js: ["content.js"],
    id: "sma-content",
    runAt: "document_end",
    world: "MAIN"
}])