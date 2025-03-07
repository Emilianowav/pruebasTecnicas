"use client"
import { useState } from "react";
import styles from "./ClientGetUsers.module.css"

interface Address {
    street : string;
    suite: string;
    city: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    address: Address;
    phone: number;
}   

export const ClientGetUsers = () =>{
    const [users, setUsers] = useState<User[]>([]);

    const handleLoadUsers = async () =>{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!res.ok){
            throw new Error("Error al obtener usuarios:" + res.statusText)
        }
        const users: User[] = await res.json()
        setUsers(users);
    }
     if(users.length === 0){
         return(
             <div className={styles.container}>
                 <h3 className={styles.title}>Usuarios Client-Side</h3>
                 <button className={styles.button} onClick={handleLoadUsers}>Cargar Usuarios</button>
             </div>
         )
    }
    const handleClearUsers = () => {
        if(users.length > 0){
            setUsers([])
        }
    }
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Usuarios Client-Side</h3>
            <ul className={styles.ul}>
                {users.map((user) => (
                    <li className={styles.li} key={user.id}>
                  <strong>{user.name}</strong>
                  <div>📍 <span className={styles.label}>Ciudad:</span> {user.address.city}</div>
                  <div>✉️ <span className={styles.label}>Email:</span> {user.email}</div>
                  <div>📞 <span className={styles.label}>Teléfono:</span> {user.phone}</div>
                </li>
                ))}
            </ul>
                <button className={styles.button} onClick={handleClearUsers}>Limpiar Usuarios</button>
        </div>
    )
}