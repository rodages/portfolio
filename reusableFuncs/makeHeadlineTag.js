import styles from './styles'


export default function(headline){
    return (
        <div style={styles.header} className="flex justify-center font-bold">
            <h1 className="text-2xl">
            <span> &lt; </span>
                {headline}
            <span> /&gt; </span>
            </h1>
        </div>
    )
}