import styles from './styles'


export default function(headline){
    return (
        <div style={styles.header} className="flex justify-center font-bold text-3xl">
            <h1 className="">
            <span> &lt; </span>
                {headline}
            <span> /&gt; </span>
            </h1>
        </div>
    )
}