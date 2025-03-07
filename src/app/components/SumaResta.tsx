import { useState } from "react";
import styles from "./SumaResta.module.css"

export default function SumaResta() {
    
  // estado sumar boton 
  const [count, setCount] = useState(0);

  // funcion sumar
  const suma = () => {
    setCount (count + 1)
  }
  //funcion restar
  const resta = ( ) => {
    setCount (count - 1)
    if(count <= 0){
      setCount(0)
    }
  }
  const reset = () => {
    setCount (0)
  }
  return (
    <div className={styles.page}>
      <div className={styles.card}>

        <h2 className={styles.title}>
          Componente de Contador
        </h2>
        <div className={styles.container}> 
            <div onClick={resta} className={styles.boxButton}>
              <div className={styles.button}><span className={styles.buttonSpan}>-</span></div>
            </div>
            <p className={styles.counter}>{count}</p>
          
            <div onClick={suma} className={styles.boxButton}>
              <div className={styles.button}><span className={styles.buttonSpan}>+</span></div>
            </div>
        </div>

        
        <div onClick={reset} className={styles.boxButton}>
              <div className={styles.button}><span className={styles.buttonSpanReset}>Reset</span></div>
            </div>
      </div>
        <p className={styles.descripcion}>Este es un contador interactivo que permite aumentar, disminuir o resetear el valor. El contador no permite valores negativos, asegurando que el valor mínimo siempre sea cero.</p>
    </div>
  )
}