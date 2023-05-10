// Dependencies
import {
    Api,
    EMethod,
    Route
} from "https://deno.land/x/deno_api_server@v0.6.2/mod.ts";

// Initialising API
const API = new Api({
    port: 443
})

// Adding routes
API.addRoute(
    new Route(["OPTIONS", EMethod.GET], "/solution")
        .addPipe( ({response, request}) => {
            // Check
            response.headers.set("Access-Control-Allow-Origin", "https://www.savemyexams.co.uk")
            response.headers.set("Access-Control-Allow-Methods", "GET,OPTIONS")
            if (request.method == "OPTIONS") {
                return response
            }

            // Tada
            response.body = {
                success: true,
                message: "SMA CRACK",
                content: [
                    {
                        "body": `<p>lolez</p>`,
                        "type": "html"
                    }
                ]
            }
        })
)

// Start the API
console.log(`Start server localhost:${API.serverConfig.port}`);
await API.listen()