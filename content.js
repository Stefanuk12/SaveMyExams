(async() => {
    // Allow things to load in
    while (window.Sme.helpers === undefined) {
        await new Promise(resolve => setTimeout(resolve, 1))
    }

    // Reset our note reviews
    window.Sme.helpers.ls.removeItem("SME.revision-note-views")

    // Disable tracking
    window.Sme.track.sendGAEvent = function() { return }
    window.Sme.track.event = function() { return }
    window.Sme.track.eventOnReady = function() { return }

    // Log loaded in console
    console.log("%c" + "Loaded SME crack!", "color: #ff9696; font-size: 50px; font-weight: bold;");
})();