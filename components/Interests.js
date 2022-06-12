



function Interests(){
    return <div style={{height:'50vh', border:'1px solid blue'}} className='container mx-auto interests'>
        <div className='inner-container'>
                <h1>Interests</h1>
                {data.map((activity,i)=>{
                    return(
                        <div key={i}>
                        <h2>{Object.keys(activity)}</h2>
                        <p>{Object.values(activity)}</p>
                        </div>

                    )
                })}
        </div>
    </div>
}

export default Interests