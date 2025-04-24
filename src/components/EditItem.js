import React from "react";
import styles from './Edititem.module.css'

function EditItem({
    id,
    text,
    toggleModeChecklist,
    editChecklistElem,
}) {
    return (
        <li className={styles.item} key={id} id={id}>
            <input className={styles.input} value={text} onChange={(event) => editChecklistElem(id, event)} />
            <button className={styles.btn} onClick={() => toggleModeChecklist(id)}>Сохранить</button>
        </li>
    )
}

export default EditItem;