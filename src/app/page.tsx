"use client"
import styles from "./page.module.css";
import TodoList from "./components/TodoList";
import SumaResta from "./components/SumaResta";
import { UsersGo } from "./components/UsersGo";
import { ThemeProvider } from "./context/ThemeContext";
import { ThemeButton } from "./components/ThemeButton";

export default function Home() {

  return (
    <ThemeProvider>
      <div >
        <div className={styles.container}>
          <ThemeButton/>
          <SumaResta />
          <TodoList />
          <UsersGo/>
        </div>
      </div>
    </ThemeProvider>
  );
}
