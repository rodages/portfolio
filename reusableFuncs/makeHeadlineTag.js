export default function(headline){
    return (
        <div className="flex justify-center text-3xl font-bold">
            <h1 className="text-2xl">
            <span> &lt; </span>
                {headline}
            <span> /&gt; </span>
            </h1>
        </div>
    )
}