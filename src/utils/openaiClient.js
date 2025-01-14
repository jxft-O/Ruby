const { OpenAI } = require('openai');

class OpenAIClient {
    constructor(apiKey) {
        this.openai = new OpenAI({
            apiKey: apiKey,
        });
        console.log("🤖 OpenAI Client initialized");
    }

    async generateResponse(conversation) {
        try {
            const response = await this.openai.chat.completions.create({
                model: 'o1-mini',
                messages: conversation,
            });
            return response.choices[0].message.content;
        } catch (error) {
            console.error('🔴 OpenAI Error:\n', error);
            return null;
        }
    }
}

module.exports = OpenAIClient;