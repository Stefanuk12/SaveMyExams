// Dependencies
use rocket::{get, launch, routes, serde::{Serialize, json::Json}, fairing::{Fairing, Info, Kind}, Request, Response, http::{Header, Status}, options};

/// Used in [`SolutionGetResponse`].
#[derive(Clone, Serialize)]
#[serde(crate="rocket::serde")]
pub struct SolutionGetContent<'a> {
    pub body: &'a str,
    #[serde(rename = "type")]
    pub type_field: &'a str,
}

/// The response sent by the /solution API endpoint
#[derive(Clone, Serialize)]
#[serde(crate="rocket::serde")]
pub struct SolutionGetResponse<'a> {
    pub success: bool,
    pub message: &'a str,
    pub content: [SolutionGetContent<'a>; 1],
}

/// Default response sent when trying to "get the solution".
static SOLUTION_GET_RESP: SolutionGetResponse = SolutionGetResponse {
    success: true,
    message: "SaveMyExams - Crack",
    content: [SolutionGetContent {
        body: "<p>lolez</p>",
        type_field: "html"
    }]
};

/// The main endpoint. 
/// Tricks SaveMyExams into thinking that we own it.
#[get("/solution")]
fn solution_get() -> Json<SolutionGetResponse<'static>> {
    Json(SOLUTION_GET_RESP.clone())
}

/// So the OPTIONS method does not return 404.
/// [`CORS`] handles the rest.
#[options("/solution")]
fn solution_options() -> Status {
    Status::Ok
}

/// Sends over the options so the browser does not complain.
pub struct CORS;
#[rocket::async_trait]
impl Fairing for CORS {
    fn info(&self) -> Info {
        Info {
            name: "Add CORS headers to responses",
            kind: Kind::Response
        }
    }

    async fn on_response<'r>(&self, _request: &'r Request<'_>, response: &mut Response<'r>) {
        response.set_header(Header::new("Access-Control-Allow-Origin", "*"));
        response.set_header(Header::new("Access-Control-Allow-Methods", "POST, GET, PATCH, OPTIONS"));
        response.set_header(Header::new("Access-Control-Allow-Headers", "*"));
        response.set_header(Header::new("Access-Control-Allow-Credentials", "true"));
    }
}

/// Entrypoint, starts the server.
#[launch]
fn rocket() -> _ {
    // Define custom behavior
    let figment = rocket::Config::figment()
        .merge(("port", 8080));

    // Build and start the server
    rocket::custom(figment)
        .mount("/", routes![
            solution_get, solution_options
        ])
        .attach(CORS)
}