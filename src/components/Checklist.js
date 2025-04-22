import React, { useState } from "react";
import ChecklistItem from "./ChecklistItem";

function Checklist() {

    const checklist = [
        { id: 1, text: 'Текст задачи чеклиста - 1', edit: false, done: false },
        { id: 2, text: 'Текст задачи чеклиста - 2', edit: false, done: false },
        { id: 3, text: 'Текст задачи чеклиста - 3', edit: false, done: false },
        { id: 4, text: 'Текст задачи чеклиста - 4', edit: false, done: false },
        { id: 5, text: 'Текст задачи чеклиста - 5', edit: false, done: false },
        { id: 6, text: 'Текст задачи чеклиста - 6', edit: false, done: false },
        { id: 7, text: 'Текст задачи чеклиста - 7', edit: false, done: false },
        { id: 8, text: 'Текст задачи чеклиста - 8', edit: false, done: false },
    ];

    const [checklistState, setChecklistState] = useState(checklist);
    const [addToggleMode, setAddToggleMode] = useState(false);
    const [inputValue, setInputValue] = useState();

    function toggleModeChecklist(id) {
        setChecklistState(checklistState.map(elem => {
            if (elem.id === id) {
                elem.edit = !elem.edit;
            }
            return elem;
        }));
    };

    function editChecklistElem(id, event) {
        setChecklistState(checklistState.map(elem => {
            if (elem.id === id) {
                elem.text = event.target.value;
            }
            return elem;
        }))
    }

    function deliteChecklistElem(id) {
        let arr = [];
        checklistState.map(elem => {
            if (elem.id !== id) {
                arr.push(elem);
            }
        })
        setChecklistState(arr);
    }

    function doneChecklistElem(id) {
        setChecklistState(checklistState.map(elem => {
            if (elem.id === id) {
                elem.done = !elem.done;
            }
            return elem;
        }));
    };

    function addChecklistElem(inputText) {
        let copy = [...checklistState];
        let obj = {
            id: checklistState[checklistState.length - 1].id + 1,
            text: inputText,
            edit: false,
            done: false,
        }
        copy.push(obj);
        setChecklistState(copy);
        setInputValue('');
        setAddToggleMode(false);
    }

    const result = checklistState.map(item => {
        return <ChecklistItem
            key={item.id}
            id={item.id}
            text={item.text}
            edit={item.edit}
            done={item.done}
            toggleModeChecklist={toggleModeChecklist}
            editChecklistElem={editChecklistElem}
            deliteChecklistElem={deliteChecklistElem}
            doneChecklistElem={doneChecklistElem}
            checklistState={checklistState}
            setChecklistState={setChecklistState}
        />
    })

    // let result = checklistState.map(elem => {
    //     if (elem.edit === true) {
    //         return <li key={elem.id} id={elem.id}>
    //             <input value={elem.text} onChange={(event) => editChecklistElem(elem.id, event)} />
    //             <button onClick={() => toggleModeChecklist(elem.id)}>Сохранить</button>
    //         </li>
    //     } else if (elem.done === true) {
    //         return <li key={elem.id} id={elem.id}>
    //             <span style={{ textDecoration: 'line-through' }}>{elem.text}</span>
    //             <button onClick={() => toggleModeChecklist(elem.id)}>Редактировать</button>
    //             <button onClick={() => doneChecklistElem(elem.id)}>Выполнено</button>
    //             <button onClick={() => deliteChecklistElem(elem.id)}>Удалить</button>
    //         </li>
    //     } else {
    //         return <li key={elem.id} id={elem.id}>
    //             <span>{elem.text}</span>
    //             <button onClick={() => toggleModeChecklist(elem.id)}>Редактировать</button>
    //             <button onClick={() => doneChecklistElem(elem.id)}>Выполнено</button>
    //             <button onClick={() => deliteChecklistElem(elem.id)}>Удалить</button>
    //         </li>
    //     }
    // })

    return <>
        <ul>
            {result}
        </ul>
        {addToggleMode
            ? <><input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                <button onClick={() => addChecklistElem(inputValue)}>Добавить</button></>
            : <button onClick={() => setAddToggleMode(!addToggleMode)}>Добавить</button>}
    </>

}

export default Checklist;