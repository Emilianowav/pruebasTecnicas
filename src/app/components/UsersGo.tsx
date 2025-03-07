import Link from "next/link"
import styles from "./UsersGo.module.css"
export const UsersGo = () =>{
    return(
        <div className={styles.container}>
            <Link href="/getUsers" className={styles.button}>
            <span>Ir a seccion Fetch</span>
            </Link>
        </div>
    )
}