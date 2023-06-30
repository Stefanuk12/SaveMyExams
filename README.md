# Proxy

A Rust version of the proxy/backend that has sub 1ms response times.

## How it works

SaveMyExams sends a request to their servers asking for the answer of the page. The actual content that the response has does not matter, but it must be successful.

## Running

You can find a pre-built release within the [latest releases]().

Download the correct one for your operating system and run the executable.

## Manual compile

```rust
cargo run --release
```