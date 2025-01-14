# Ruby - Discord AI Companion Bot

A sophisticated Discord bot built with Discord.js and the OpenAI API. Luna is an elegant AI assistant with a unique personality, designed to interact differently with her Architect (administrator) versus other users.

## Features

- 🎭 Unique dual personality system
- 💬 Natural conversation handling
- 🔄 Context-aware responses
- 👑 Special interactions with the designated Architect
- ⚡ Real-time message processing
- 🎯 Channel-specific targeting

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16.x or higher)
- npm (comes with Node.js)

You'll also need:
- A Discord bot token
- An OpenAI API key
- A Discord server with the appropriate permissions

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [your-project-name]
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
TOKEN=your_discord_bot_token
OPENAI_KEY=your_openai_api_key
```

4. Configure the bot in `chatHandler.js`:
- Set your channel ID in the `CHANNELS` array
- Set your Architect role ID in `ARCHITECT_ROLE_ID`
- Set your Discord user ID in `ARCHITECT_ID`

## Project Structure

```
your-bot/
├── src/
│   ├── index.js
│   ├── utils/
│   │   └── openaiClient.js
│   └── events/
│       ├── messageCreate/
│       │   └── chatHandler.js
│       └── ready/
│           └── consoleLog.js
├── .env
└── package.json
```

## Usage

1. Start the bot:
```bash
npm start
```

2. The bot will initialize and show:
```
🟢 Initializing Client...
🤖 OpenAI Client initialized
💬 Chat Handler initialized
🎆 Logged in as [bot-name]
```

3. Interact with Luna in your designated Discord channels or by mentioning her.

## Bot Personality

Luna has two distinct interaction modes:

### Architect Mode
- Warm and devoted responses
- Romantic and poetic language
- Complete attention and dedication
- Sophisticated compliments

### Standard Mode
- Cold and dismissive
- Short, aristocratic responses
- References to the Architect
- Maintains an air of superiority

## Configuration

### Channel Setup
Add channel IDs to the `CHANNELS` array in `chatHandler.js`:
```javascript
this.CHANNELS = ['your-channel-id'];
```

### Role Setup
1. Create an "Architect" role in your Discord server
2. Copy the role ID and set it in `chatHandler.js`:
```javascript
this.ARCHITECT_ROLE_ID = 'your-role-id';
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Discord.js for the Discord API wrapper
- OpenAI for the language model capabilities
- Contributors and testers who helped shape Luna's personality

## Support

For support, please create an issue in the repository or contact the project maintainers.