import React from "react";
import styles from './Doneitem.module.css';

function DoneItem({
    id,
    text,
    // toggleModeChecklist,
    deliteChecklistElem,
    doneChecklistElem,
}) {
    return (
        <li className={styles.item} key={id} id={id}>
            <span className={styles.text}>{text}</span>
            {/* <button className={styles.btn} onClick={() => toggleModeChecklist(id)}>Редактировать</button> */}
            <button className={styles.btn} onClick={() => doneChecklistElem(id)}>Отменить</button>
            <button className={styles.btn} onClick={() => deliteChecklistElem(id)}>Удалить</button>
        </li>
    )
}

export default DoneItem;