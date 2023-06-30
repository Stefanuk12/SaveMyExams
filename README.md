# SMA-Crack

This a crack for [SaveMyExams](https://www.savemyexams.co.uk/) that allows you to view the solutions for questions

# Installation

1. Clone the repo (or download as zip)
2. Enable [developer mode](https://youtu.be/sZeUZjhOfgM)
3. Extract the extension (skip if cloned)
4. Load unpacked extension (use extracted folder)

# Additional files

1. Run the script inside of [notes_bypass](./notes_bypass.js) to bypass the 10 daily note limit
2. Run the script inside of [disable_track](./disable_track.js) to disable any tracking functionality

# Hosting your own proxy / backend

1. Set the redirect url within [rules.json](./rules.json) to `http://localhost:8080`, if it isn't already
2. Download the release that matches your operating system within the [latest releases](https://github.com/Stefanuk12/SaveMyExams/releases/latest)
3. Run the executable

There is also a version to run on `deno.dev` under [this](https://github.com/Stefanuk12/SaveMyExams/tree/backend) branch.