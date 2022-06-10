const data = [
    {Sports : `Morning workouts or pre-work runs with a goal of comfotably making 10k.
            Attending intermediate pick-up basketball games.
            Organising volleyball games with workmates in the summer and Archery sessions in cold seasons.
            `
        },
    {Travelling: "Have not travelled at all before coming to the UK. However, after graduating from university in 2016 have managed to visit 16 countries in 4 years. Currently, most trips have been to Europe. Before exploring other continents, I cannot wait to visit Iceland to see the Northern Lights and Nazare in Portugal to see their famous huge waves!"
        },
    {"Educational Content":`Following Coding / History / Geopolitical / Economics / Geographics channels on YouTube.`}
]



function Interests(){
    return <div style={{height:'50vh', border:'1px solid blue'}} className='container mx-auto interests'>
        <div className='inner-container'>
                <h1>Interests</h1>
                {data.map((activity,i)=>{
                    return(
                        <div>
                        <h2>{Object.keys(activity)}</h2>
                        <p>{Object.values(activity)}</p>
                        </div>

                    )
                })}
        </div>
    </div>
}

export default Interests