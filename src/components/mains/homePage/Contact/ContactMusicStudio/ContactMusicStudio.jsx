import styles from './../contactCard.module.scss'



export const ContactMusicStudio = ({ name, email, tel, form}) => {
    return(
        <div className={styles.contactDiv}>
            <h3>{name}</h3>
            <ul>
                <li>Email: {email}</li>
                <li>Tel: {tel}</li>
                <li>{form}</li>
            </ul>
        </div>
    )
}