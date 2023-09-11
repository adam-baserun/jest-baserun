import { Anthropic, HUMAN_PROMPT, AI_PROMPT } from "@anthropic-ai/sdk"
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

describe('Baserun end-to-end tests', () => {
  it('OpenAI - should suggest the Eiffel Tower', async () => {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      messages: [
        {
          role: "user",
          content: "What are three activities to do in Paris?",
        }
      ],
    });

    expect(chatCompletion.choices[0].message!.content!).toContain("Eiffel Tower");
  });

  it('Anthropic - should suggest the Eiffel Tower', async () => {
    const completion = await anthropic.completions.create({
      model: 'claude-2',
      max_tokens_to_sample: 500,
      prompt: `${HUMAN_PROMPT} What are three activities to do in Paris?${AI_PROMPT}`,
    });

    expect(completion.completion).toContain("Eiffel Tower");
  });
});
