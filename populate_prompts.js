const sequelize = require('./config/db');
const Template = require('./models/Template');

const promptThemes = [
  'Full-Stack Development', 'React Optimization', 'Node.js Security', 'Database Design', 
  'UI/UX Design Systems', 'System Architecture', 'DevOps & Deployment', 'API Documentation',
  'Code Refactoring', 'Unit Testing Patterns', 'Cloud Computing', 'Cybersecurity Protocols',
  'Microservices Orchestration', 'State Management', 'CSS Grid & Flexbox', 'Auth Workflows'
];

const promptTasks = [
  'Rewrite the following code for maximum efficiency.',
  'Analyze this architecture for potential security vulnerabilities.',
  'Generate a scalable schema for a [TOPIC] application.',
  'Draft a comprehensive technical specification for [TOPIC].',
  'Debug the following logic and explain the root cause of the race condition.',
  'Optimize this React component for zero unnecessary re-renders.',
  'Create a step-by-step migration plan from REST to GraphQL.',
  'Implement a robust JWT authentication flow for [TOPIC].',
  'Design a cinematic landing page layout using modern CSS principles.',
  'Document this API endpoint with clear examples and edge case handling.'
];

const populate = async () => {
  try {
    await sequelize.sync();
    
    // Clear existing AI Studio templates to avoid duplicates
    await Template.destroy({ where: { category: 'AI Studio' } });
    // Also clear the new themed ones if they exist
    await Template.destroy({ where: { category: promptThemes } });

    const templates = [];
    for (let i = 1; i <= 100; i++) {
      const theme = promptThemes[Math.floor(Math.random() * promptThemes.length)];
      const randomTask = promptTasks[Math.floor(Math.random() * promptTasks.length)];
      
      templates.push({
        name: `${theme} Specialist v${i}`,
        category: theme,
        content: `Act as an Elite ${theme} Engineer. Task: ${randomTask}\n\nContext: You are working on a high-stakes standalone VPS deployment. Ensure the solution is cinematic, performant, and adheres to the highest engineering standards.\n\nInput Code/Context:\n[INSERT_YOUR_CODE_OR_DESCRIPTION_HERE]`,
        usageCount: Math.floor(Math.random() * 500)
      });
    }

    await Template.bulkCreate(templates);
    console.log('Successfully injected 100 premium prompts into AI Studio category.');
    process.exit();
  } catch (err) {
    console.error('Error populating prompts:', err);
    process.exit(1);
  }
};

populate();
