import { useState } from "react";
import styles from "./TodoList.module.css"
interface Task {
    name: string;
    description: string;
}
export default function TodoList() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = () => {

        // Obtener las referencias 
        const nameRef = document.querySelector("input[name=name]") as HTMLInputElement;
        const descriptionRef = document.querySelector("textarea[name=descripcion]") as HTMLTextAreaElement;

        // Obtener los datos
        const name = nameRef.value.trim();
        const description = descriptionRef.value.trim();

        // Validar los datos
        if (name == "" || description == ""){
            alert("Faltan campos por completar");
            return;
        }

        // Creamos la nueva tarea
        const newTask = {name, description};

        // Guardamos el nuevo elemento en el array de estado
        setTasks([...tasks, newTask]);

        // Limpiamos los campos
        nameRef.value = "";
        descriptionRef.value= "";
    }
    return(
        <div className={styles.page}>
            
            <div className={styles.card1}>

                <h1 className={styles.title}>Agregar Tarea</h1>
                <div className={styles.container}>
                    
                    <div className={styles.name}>
                        <input type="text" name="name" placeholder="Nombre de la tarea" />
                    </div>
                    <div className={styles.descripcion}>
                        <textarea name="descripcion" id="" placeholder="Describe la tarea"></textarea>
                    </div>
                    <button onClick={addTask} className={styles.button}>Guardar</button>
                    <p className={styles.modulo}>Este componente ListaTareas.tsx permite al usuario agregar tareas a una lista. Utiliza useState para manejar el estado de las tareas, que se almacenan como objetos con propiedades de nombre y descripción. Los usuarios pueden ingresar una tarea mediante un formulario, y las tareas se validan para asegurar que ambos campos no estén vacíos antes de ser añadidas a la lista. Una vez que se agrega una tarea, se actualiza el estado y la tarea se muestra en la interfaz.</p>
                </div>

            </div>

            <label className={styles.tooltipButton}>
            <input type="checkbox" className={styles.tooltipToggle} hidden />
                ℹ️
            </label>


            <div className={styles.card2}>
                {tasks.map((task,index)=>(
                    <ul key={index}>
                        <li>
                            <h4>{task.name}</h4>
                            <p>{task.description}</p>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}