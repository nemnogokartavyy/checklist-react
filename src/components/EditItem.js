import React from "react";

function EditItem({
    id,
    text,
    toggleModeChecklist,
    editChecklistElem,
}) {
    return (
        <li key={id} id={id}>
            <input value={text} onChange={(event) => editChecklistElem(id, event)} />
            <button onClick={() => toggleModeChecklist(id)}>Сохранить</button>
        </li>
    )
}

export default EditItem;