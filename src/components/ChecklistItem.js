import React from "react";
import DoneItem from "./DoneItem";
import EditItem from "./EditItem";

function ChecklistItem({
    id,
    text,
    edit,
    done,
    toggleModeChecklist,
    editChecklistElem,
    deliteChecklistElem,
    doneChecklistElem,
}) {

    let item;

    if (edit) {
        item = <EditItem
            id={id}
            text={text}
            toggleModeChecklist={toggleModeChecklist}
            editChecklistElem={editChecklistElem}
        />
        // <li key={id} id={id}>
        //     <input value={text} onChange={(event) => editChecklistElem(id, event)} />
        //     <button onClick={() => toggleModeChecklist(id)}>Сохранить</button>
        //     <button>Выполнено</button>
        //     <button>Удалить</button>
        // </li>
    } else if (done) {
        item = <DoneItem
            id={id}
            text={text}
            toggleModeChecklist={toggleModeChecklist}
            deliteChecklistElem={deliteChecklistElem}
            doneChecklistElem={doneChecklistElem}
        />
        // <li key={id} id={id}>
        //     <span style={{ textDecoration: 'line-through' }}>{text}</span>
        //     <button onClick={() => toggleModeChecklist(id)}>Редактировать</button>
        //     <button onClick={() => doneChecklistElem(id)}>Выполнено</button>
        //     <button onClick={() => deliteChecklistElem(id)}>Удалить</button>
        // </li>
    } else {
        item = <li key={id} id={id}>
            <span>{text}</span>
            <button onClick={() => toggleModeChecklist(id)}>Редактировать</button>
            <button onClick={() => doneChecklistElem(id)}>Выполнено</button>
            <button onClick={() => deliteChecklistElem(id)}>Удалить</button>
        </li>
    }

    return (
        <>
            {item}
        </>
    )

    // return (
    // <EditItem
    //     id={id}
    //     text={text}
    //     toggleModeChecklist={toggleModeChecklist}
    //     editChecklistElem={editChecklistElem}
    //     deliteChecklistElem={deliteChecklistElem}
    //     doneChecklistElem={doneChecklistElem}
    // />
    // <DoneItem
    //     id={id}
    //     text={text}
    //     toggleModeChecklist={toggleModeChecklist}
    //     deliteChecklistElem={deliteChecklistElem}
    //     doneChecklistElem={doneChecklistElem}
    // />
    // <li key={id} id={id}>
    //     <span>{text}</span>
    //     <button onClick={() => toggleModeChecklist(id)}>Редактировать</button>
    //     <button onClick={() => doneChecklistElem(id)}>Выполнено</button>
    //     <button onClick={() => deliteChecklistElem(id)}>Удалить</button>
    // </li>
    // )

}

export default ChecklistItem;