interface Items {
    name: string,
    tech_stack:string[],
    status:string,
    about : string,
    image:string,
    link:string,
    repo:string,
}

const items: Items[] = [
    {
        name:"Blogosphere",
        tech_stack:[
            "logos/react-2.svg",
            "/logos/ts-logo-128.svg",
            "/logos/tailwind-css-2.svg",
            "/logos/hono-1.png",
            "/logos/postgreSQL.png",
            "/logos/prisma.png",
            "/logos/cloudflare-Workers.png"
        ],
        status:"Completed",
        about:"Create, manage, share content effortlessly with a responsive, user-friendly design.",
        image:"blogospheree.jpeg",
        link:"https://blogospheree.vercel.app/",
        repo:"https://github.com/Thanisha23/Blogosphere",
    },
    {
        name:"PayBuddy",
        tech_stack:[
            "logos/react-2.svg",
            "/logos/ts-logo-128.svg",
            "/logos/tailwind-css-2.svg",
            "/logos/mongodb.png",
            "/logos/express-1.png",
        ],
        status:"Completed",
        about:"A responsive banking application with seamless  UI and transaction capabilities, styled with Tailwind",
        image:"paybuddy-1.png",
        link:"https://pay-buddy-lilac.vercel.app/",
        repo:"https://github.com/Thanisha23/PayBuddy",
    },
    {
        name:"My Portfolio",
        tech_stack:[
            "/logos/next-js-white.svg",
            "/logos/ts-logo-128.svg",
            "/logos/tailwind-css-2.svg",
        ],
        status:"Completed",
        about:"The very place where your cursor is currently unwinding and your screen is doing its pixelated dance moves!",
        image:"portfolio.png",
        link:"https://thanisha23-portfolio.vercel.app/",
        repo:"https://github.com/Thanisha23/Portfolio",
    },
    {
        name:"Vawulens",
        tech_stack:[
            "/logos/react-2.svg",
            "/logos/logo-javascript.svg",
            "/logos/tailwind-css-2.svg",
        ],
        status:"Completed",
        about:"A Gym website crafted using Tailwind and JavaScript for a visually appealing web interface.",
        image:"vawulens.png",
        link:"https://vawulens-gym-website.netlify.app/",
        repo:"https://github.com/Thanisha23/Gym-Website",
    },
    
  
    {
    name:"AnyDo:>",
    tech_stack:[
        "logos/react-2.svg",
        "/logos/logo-javascript.svg",
        "/logos/tailwind-css-2.svg",
        "/logos/redux.png"
    ],
    status:"Completed",
    about:"Built a chic to-do app with React, JavaScript, and Tailwind CSS for visually pleasing task management.",
    image:"anydo.jpeg",
    link:"https://todo-quad-b.vercel.app/",
    repo:"https://github.com/Thanisha23/Todo-QuadB",
},

{
    name:"Connectify",
    tech_stack:[
        "/logos/react-2.svg",
        "/logos/logo-javascript.svg",
        "/logos/tailwind-css-2.svg",
    ],
    status:"Ongoing",
    about:"React and Tailwind crafted landing page for your social app with secure authentication.",
    image:"connectifyy.png",
    link:"",
    repo:"https://github.com/Thanisha23/Connectify",
},

{
    name:"Snake-Game",
    tech_stack:[
        "/logos/html-icon.png",
        "/logos/css-icon.png",
        "/logos/logo-javascript.svg",
        
    ],
    status:"Completed",
    about:"Built a Snake Game that deepened my understanding of javascript,Have fun playing!",
    image:"snakegame.jpeg",
    link:"https://snakerun-game.netlify.app/",
    repo:"https://github.com/Thanisha23/Snake-Game",
},
{
    name:"SimplyRecipes",
    tech_stack:[
        "/logos/html-icon.png",
        "/logos/css-icon.png",
        "/logos/logo-javascript.svg",
    ],
    status:"Completed",
    about:"Crafted a recipes site with HTML, CSS, and JS, offering diverse and delightful culinary ideas.",
    image:"recipes.png",
    link:"https://thanisha23.github.io/Recipes-Website/",
    repo:"https://github.com/Thanisha23/Recipes-Website"
}
]

export {items};