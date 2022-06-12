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
            {Sports : `Morning workouts or pre-work runs with a goal of comfotably making 10k.
            Attending intermediate pick-up basketball games.
            Organising volleyball games with workmates in the summer and Archery sessions in cold seasons.
            ` },
            {Travelling: "Have not travelled at all before coming to the UK. However, after graduating from university in 2016 have managed to visit 16 countries in 4 years. Currently, most trips have been to Europe. Before exploring other continents, I cannot wait to visit Iceland to see the Northern Lights and Nazare in Portugal to see their famous huge waves!"},
            {"Educational Content":`Following Coding / History / Geopolitical / Economics / Geographics channels on YouTube.`},
        ],
        furtherLearning:[
            {Typescript:'We have briefly covered introduction to Typescript towards the end of the course. While writting code I trying to think of edge case scenarios where code could break. Typescript seems like a great tool and solution to tackle the unforseen bugs.'},
            {NextJS:'I have recently attended "Free Code Camp" networking event, where most people working in the field were advising me on learning more about Next now that I know react. I have built this portfolio with Next and can see that the site loading times are much faster compared to my previous projects and would like to understand the technology a bit better'},
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
            description:'description',
            setup:'Solo',
            github:'https://bit.ly/3NBbZRg',
            deployedLink:'https://bit.ly/3zvNlNF',
        },
        {
            key:'SEIProject3',
            name:'Find Me A Doc',
            technologies:['React', 'JavaScript', 'Bootstrap', 'CSS3', 'Node', 'Express', 'MongoDB', 'Postman', 'Git', 'Heroku', 'Trello' , 'Slack'],
            timeframe:'2 Weeks',
            description:'description',
            setup:'Group',
            github:'https://bit.ly/3xxuwZ2',
            deployedLink:'https://bit.ly/3zrB7FF',
        },
        {
            key:'SEIProject2',
            name:'Whats My Footprint',
            technologies:['React', 'Bulma' , 'JavaScript', 'Postman' , 'Git', 'Slack' ],
            timeframe:'1 Week',
            description:'description',
            setup:'Pair',
            github:'https://bit.ly/3Mzw0pW',
            deployedLink:'https://bit.ly/3xAKMsu',
        },
        {
            key:'SEIProject1',
            name:'The Pandemic Game',
            technologies:['JavaScript', 'HTML5' , 'CSS3'],
            timeframe:'2 Weeks',
            description:'description',
            setup:'Solo',
            github:'https://bit.ly/3mBheEs',
            deployedLink:'https://bit.ly/3mu37AO',
        },
    ],
    experience:[
        {
            title:'Software Engineering Graduate',
            company:'General Assembly',
            year:'2021 November - 2022 May',
            // companyLink:'link',
            description:'description',
            image:'logoGA'
        },
        {
            title:'Functions Manager',
            company:'Hornblower - City Cruises UK',
            year:'Jan 2019 - Present',
            // companyLink:'link',
            description:'description',
            image:'logoCC'
        },
        {
            title:'Functions Supervisor',
            company:'Hornblower - City Cruises UK',
            year:'May 2016 - Jan 2019',
            // companyLink:'link',
            description:'description',
            image:'logoCC'
        },
        {
            title:'Psychology Student',
            company:'Middlesex University',
            year:'October 2013 - May 2016',
            // companyLink:'link',
            description:'description',
            image:'logoMiddlesex'
        },
    ],
    
}

export default data