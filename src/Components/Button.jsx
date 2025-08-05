export default function Button({children , styles , label}){
    return(
        <button className={styles} aria-label={label}>{children}</button>
    )
}