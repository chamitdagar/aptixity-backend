const sequelize = require('./config/db');
const Project = require('./models/Project');
const Template = require('./models/Template');

const seed = async () => {
  await sequelize.sync({ force: true });

  await Project.bulkCreate([
    {
      title: 'Aptixity Premium Portfolio',
      description: 'A cinematic, high-performance portfolio template with glassmorphism and code-scroll animations.',
      techStack: ['React', 'Vite', 'Lucide React', 'Vanilla CSS'],
      price: 0,
      githubUrl: 'https://github.com/aptixity/portfolio',
      demoUrl: 'https://aptixity.com'
    },
    {
      title: 'Standalone Auth Engine',
      description: 'Ready-to-deploy Node.js backend with JWT, email verification, and SQLite database.',
      techStack: ['Node.js', 'Express', 'Sequelize', 'SQLite'],
      price: 49,
      githubUrl: 'https://github.com/aptixity/auth-engine',
      demoUrl: 'https://auth.aptixity.com'
    },
    {
      title: 'AI Prompt Manager',
      description: 'A full-stack application to manage and share engineering prompts for LLMs.',
      techStack: ['React', 'Node.js', 'SQLite'],
      price: 29,
      githubUrl: 'https://github.com/aptixity/prompt-manager',
      demoUrl: 'https://ai.aptixity.com'
    }
  ]);

  await Template.bulkCreate([
    {
      name: 'System Architecture Engineer',
      category: 'System Design',
      content: 'Act as a Senior System Architect. Design a high-scale architecture for [PROJECT_DESCRIPTION]. Focus on: Standalone VPS readiness, SQLite/PostgreSQL trade-offs, and Nginx reverse proxy configurations.',
      usageCount: 154
    },
    {
      name: 'React 18 Component Engineer',
      category: 'Frontend',
      content: 'Rewrite the following React component using React 18 patterns, ensuring strict typing, Vanilla CSS modularity, and optimized re-renders for cinematic UI performance.',
      usageCount: 89
    },
    {
      name: 'Database Schema Optimizer',
      category: 'Backend',
      content: 'Analyze the following Sequelize models and optimize them for SQLite standalone deployment. Suggest indexes, UUID strategies, and relationship mappings for maximum throughput.',
      usageCount: 212
    }
  ]);

  console.log('Database seeded with cinematic artifacts.');
  process.exit();
};

seed();
