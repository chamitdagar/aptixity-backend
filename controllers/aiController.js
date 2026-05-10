
exports.generatePrompt = async (req, res) => {
  const { topic, context } = req.body;
  
  if (!process.env.OPENROUTER_API_KEY) {
    return res.status(400).json({ message: "OpenRouter API Key is missing. Please add it to your .env file." });
  }

  try {
    const prompt = `Act as a world-class Prompt Engineer for Google AI Studio. 
    Your task is to generate a highly optimized "System Instruction" or "Prompt Template" based on the user's topic and context.
    
    Topic: ${topic}
    Context: ${context || 'General purpose engineering'}
    
    PREMIUM ENGINEERING RULES:
    - FOCUS: High-end, production-ready web applications using Vite, React, and Node.js.
    - AESTHETICS: Always instruct the use of complex animations (Framer Motion), glassmorphism, and premium CSS.
    - QUALITY: The resulting instructions should lead to "the best-looking website ever" with state-of-the-art UI/UX.
    - NO MARKDOWN: In your response, do NOT use hashtags (#) or bold symbols (**). Use plain, professional text layouts.
    - STRUCTURE: Provide clear sections for Persona, Task, Constraints, and Output Format.
    
    Make the output sound like an advanced architectural blueprint. Only return the generated prompt text in plain text format.`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "google/gemini-2.0-flash-001",
        "messages": [
          { "role": "user", "content": prompt }
        ]
      })
    });

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message || "OpenRouter API Error");
    }

    const generatedPrompt = data.choices[0].message.content;
    
    res.json({ generatedPrompt });
  } catch (err) {
    console.error("OpenRouter Generation Error:", err);
    res.status(500).json({ 
      message: "Neural Engine failure. " + (err.message || "Check your API key or connection.")
    });
  }
};
