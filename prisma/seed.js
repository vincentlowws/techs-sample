const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const techStacks = [
    { name: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', description: 'A JavaScript library for building user interfaces.', link: 'https://reactjs.org/' },
    { name: 'Vue.js', image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg', description: 'The Progressive JavaScript Framework.', link: 'https://vuejs.org/' },
    { name: 'Angular', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg', description: 'A platform for building mobile and desktop web applications.', link: 'https://angular.io/' },
    { name: 'Node.js', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', description: "JavaScript runtime built on Chrome's V8 engine.", link: 'https://nodejs.org/' },
    { name: 'Express.js', image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png', description: 'Fast, unopinionated, minimalist web framework for Node.js.', link: 'https://expressjs.com/' },
    { name: 'Django', image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg', description: 'High-level Python web framework for rapid development.', link: 'https://www.djangoproject.com/' },
    { name: 'Flask', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg', description: 'Lightweight WSGI web application framework in Python.', link: 'https://flask.palletsprojects.com/' },
    { name: 'Ruby on Rails', image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg', description: 'Server-side web application framework written in Ruby.', link: 'https://rubyonrails.org/' },
    { name: 'Spring', image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg', description: 'Java framework for building applications.', link: 'https://spring.io/' },
    { name: 'Kubernetes', image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg', description: 'Open-source platform for automating deployment, scaling, and operations of app containers.', link: 'https://kubernetes.io/' },
    // Add more tech stacks here
  ];

  await prisma.techStack.createMany({ data: techStacks });
  console.log('Tech stacks seeded!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });