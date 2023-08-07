## Introduction

AlgoBuddy is a Telegram bot designed to help programmers quickly access code samples for various algorithms.

## Features

- Provides code snippets for algorithms on request.
- Supports a variety of algorithms including Binary Search, Depth-First Search, Dijkstra's algorithm, and more.
- Code snippets are fetched from a GitHub repository's raw URLs.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Anonymous-21-commits/AlgoBuddy.git
   ```

2. Navigate to the project directory:
   ```bash
   cd AlgoBuddy
   ```
3. Install dependencies:
   ```bash
    npm install
   ```
4. Rename .env.example to .env and replace YOUR_BOT_TOKEN_HERE with your actual Telegram bot token.

5. Start the bot:
   ```bash
   npm start
   ```
   ## USAGE:
   . Start a chat with the AlgoBuddy bot on Telegram.
   . Use the available commands to request code snippets for specific algorithms.
   . The bot will reply with formatted code snippets fetched from the GitHub repository.
   ## COMMANDS:
   . /bfs: Get a code snippet for Breadth-First Search algorithm.
   . /dfs: Get a code snippet for Depth-First Search algorithm.
   . /dijkstra: Get a code snippet for Dijkstra's algorithm.
   . /gcd: Get a code snippet for calculating the Greatest Common Divisor.
   . /seive: Get a code snippet for the Sieve of Eratosthenes algorithm.
   . /sliding: Get a code snippet for sliding window algorithms.
   . /dj: Get a code snippet for Djikstra's algorithm.
   . /dnf: Get a code snippet for the Dutch National Flag algorithm.

## Dependencies

.Telegraf: Telegram bot framework.
. Axios: HTTP client for fetching code snippets.
. Nodemon: Utility for automatically restarting the application during development.

## Contributing

Contributions are welcome! If you find a bug or want to add new algorithms, feel free to submit an issue or a pull request.

## License

This project is licensed under the ISC License.
