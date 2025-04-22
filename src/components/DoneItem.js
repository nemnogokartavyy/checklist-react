import React from "react";

function DoneItem({
    id,
    text,
    toggleModeChecklist,
    deliteChecklistElem,
    doneChecklistElem,
}) {
    return (
        <li key={id} id={id}>
            <span style={{ textDecoration: 'line-through' }}>{text}</span>
            <button onClick={() => toggleModeChecklist(id)}>Редактировать</button>
            <button onClick={() => doneChecklistElem(id)}>Выполнено</button>
            <button onClick={() => deliteChecklistElem(id)}>Удалить</button>
        </li>
    )
}

export default DoneItem;