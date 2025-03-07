// src/app/getUsers/page.tsx
import styles from "./page.module.css"
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { ClientGetUsers } from "../components/ClientGetUsers";
interface Address {
    street: string;
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
  

  const UserServerSidePage = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.statusText}`);
      }
  
      const users: User[] = await res.json();
  
      return (
        <div className={styles.page}>
          <div className={styles.container}>
            <Link className={styles.arrow} href={"/"}><FaArrowLeft/></Link>
            <div className={styles.serverSideContainer}> 
              <h3 className={styles.title}>Usuarios Server-Side</h3>
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
            </div>
          </div>
          <ClientGetUsers/>
        </div>
      );
    } catch (error) {
      console.error("Error fetching users:", error);
      return <p>No users available</p>;
    }
  };
  
  export default UserServerSidePage;
  