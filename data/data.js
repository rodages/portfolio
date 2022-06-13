const data = {
    githubUsername: 'rodages',
    name: 'Zan Makarov',
    title: 'Junior Full-Stack Software Engineer',
    email: 'zanasmakarov@gmail.com',
    location: 'London, SE16',
    about:{
        title:'Junior Software Engineer',
        description:'description',
        currentlyLearning: '',
        interests:[
            {Sports : `Morning workouts or pre-work runs with a goal of comfortably making 10k.
            Attending intermediate pick-up basketball games.
            Organising volleyball games with workmates in the summer and archery sessions in cold seasons.
            ` },
            {Travelling: "I had not travelled at all before coming to the UK. However, after graduating from university in 2016 I have managed to visit 16 countries in 4 years. Currently, most of the trips have been to Europe. Before exploring other continents, I cannot wait to visit Iceland to see the Northern Lights and Nazare in Portugal to see their famous huge waves!"},
            {"Educational Content":`Following Coding / History / Geopolitical / Economics / Geographics channels on YouTube.`},
        ],
        furtherLearning:[
            {TypeScript:'We have briefly covered introduction to TypeScript towards the end of the course. While writting code I am trying to think of edge case scenarios where code could break. TypeScript seems like a great tool and solution to tackle the unforseen bugs.'},
            {NextJS:'I have recently attended "Free Code Camp" networking event, where most people working in the field were advising me on learning more about Next now that I know React. I have built this portfolio with Next and can see that the site loading times are much faster compared to my previous projects and would like to understand the technology a bit better.'},
            {GraphQL:'While working with RESTful APIs I have noticed that sometimes you need to disregard most of the fetched data, which seems a bit wasteful. I would like to learn more about GraphQL as a query driven alternative to REST APIs.'}
        ]
    },
    skills:{
        frontend:['JavaScript', 'React', 'CSS3', 'HTML5', 'Bootstrap', 'Bulma', 'MaterialUI', 'Tailwind'],
        backend:['Node', 'Express', 'MongoDB', 'Python', 'Django', 'PostgreSQL'],
        tools:['GitHub', 'Git', 'VS Code', 'npm', 'Postman', 'Heroku', 'Trello', 'Slack'],
    },
    projects:[
        {
            key:'SEIProject4',
            name:'The Company Planner',
            technologies:['React', 'JavaScript', 'MaterialUI', 'CSS3', 'Django', 'Python', 'PostgreSQL', 'Postman', 'Heroku'],
            timeframe:'2 Weeks',
            description:"A solo project built over two weeks aimed at reducing paper wastage at the existing employment. I started off by building CMS-ish platform where all components could be customisable, but due to time constraints and certain bugs coming out - I had to change it towards a more tailored route. The backend is built with Django REST framework and PostgreSQL, while frontend is done with React and MaterialUI.",
            setup:'Solo',
            github:'https://bit.ly/3NBbZRg',
            deployedLink:'https://companyplanner.netlify.app/',
        },
        {
            key:'SEIProject3',
            name:'Find Me A Doc',
            technologies:['React', 'JavaScript', 'Bootstrap', 'CSS3', 'Node', 'Express', 'MongoDB', 'Postman', 'Git', 'Heroku', 'Trello' , 'Slack'],
            timeframe:'2 Weeks',
            description:"A MERN stack application built in a group of three over the period of two weeks aimed at creating a platform to connect doctors/ specialists to patients. I was responsible for building the doctor and patient CRUD routes on the backend and Navbar state, editing routes, working with MapboxAPI to get doctors' postcodes and 'writting reviews' functionality on the frontend.",
            setup:'Group',
            github:'https://bit.ly/3xxuwZ2',
            deployedLink:'https://bit.ly/3zrB7FF',
        },
        {
            key:'SEIProject2',
            name:'Whats My Footprint',
            technologies:['React', 'Bulma' , 'JavaScript', 'Postman' , 'Git', 'Slack' ],
            timeframe:'1 Week',
            description:'A pair programming project built over a week aimed at allowing users to check the carbon footprint of the products that they are interested in. The API has already changed the structure once and will be changing its API authentication method soon again - please let me know if the results are not showing to provide a further update. We have designed the app together, I was responsible for making List and Basket components and state management with the useContext hook to avoid prop drilling.',
            setup:'Pair',
            github:'https://bit.ly/3Mzw0pW',
            deployedLink:'https://bit.ly/3xAKMsu',
        },
        {
            key:'SEIProject1',
            name:'The Pandemic Game',
            technologies:['JavaScript', 'HTML5' , 'CSS3'],
            timeframe:'2 Weeks',
            description:'A solo game project built over two weeks inspired by COVID19 and reached the peak during the beginning of the coding bootcamp. I decided to make a custom game rather than selecting one of the suggested common projects like space invaders, Tetris and battleships. The game ended up having lots of state bringing together a handful of bugs. However, the project and the challenges helped me to realise that I definitely want to work in this field!',
            setup:'Solo',
            github:'https://bit.ly/3mBheEs',
            deployedLink:'https://bit.ly/3mu37AO',
        },
    ],
    experience:[
        {
            title:'Software Engineering Graduate',
            company:'General Assembly',
            year:'Nov 2021 - May 2022',
            // companyLink:'link',
            description:'A high-intensity 24-week part-time immersive course at General Assembly designed for people working full time to learn and practice necessary skills to change their career to tech as full-stack software engineers. The course involved daily stand-ups, online lessons, labs, pair-coding, whiteboarding and four individual/ group projects. The key takeaways from the course are improved technical communication, pair coding and whiteboarding, better time management while working on coding-related projects and understanding that I can quickly learn new libraries/frameworks required for the project.',
            image:'logoGA'
        },
        {
            title:'Functions Manager',
            company:'Hornblower - City Cruises UK',
            year:'Jan 2019 - Present',
            // companyLink:'link',
            description:'Responsible for managing the operations, logistics and administrating of the Food and Beverage department. The role allowed me to learn the importance of planning, prioritising, delegation, budgeting, communicating and collaborating with other departments. While learning to code I have also made a few scripts to optimize my work and save time.',
            image:'logoCC'
        },
        {
            title:'Functions Supervisor',
            company:'Hornblower - City Cruises UK',
            year:'May 2016 - Jan 2019',
            // companyLink:'link',
            description:'Responsible for running the events and managing a team of up to 14 Front of House staff. I was able able to get valuable customer service experience, complaint handling and team management to deliver great products and experience. Throughout my employment, I have been trusted with running the largest and most important events, mentored four team members to get promoted to supervisors and written documentation for the till use and running core product as an attempt to improve training needs within our department.',
            image:'logoCC'
        },
        {
            title:'Psychology Student',
            company:'Middlesex University',
            year:'Oct 2013 - May 2016',
            // companyLink:'link',
            description:'Graduated with a 2:1 in BSc Psychology. The course has emphasized Research Methods and Data Analysis throughout the whole degree and covered various different approaches to counselling. This helped me to improve my academic writing, working with big data sets and carry out research. In particular I was very interested in modules of Positive Psychology and Coaching that have helped me a lot whilst working in management roles later in my career.',
            image:'logoMiddlesex'
        },
    ],
    
}

export default data