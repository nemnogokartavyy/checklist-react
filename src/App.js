import React from "react";
import Checklist from "./components/Checklist";
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Список дел</h2>
      <Checklist />
    </div>
  )
}

export default App;
