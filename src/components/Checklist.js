import React, { useState } from "react";
import ChecklistItem from "./ChecklistItem";
import styles from './Checklist.module.css';

function Checklist() {

    const checklist = [
        { id: 1, text: 'В лесах вылезли первые грибы, и это мы не про второй сезон «Одних из нас». Белорусские грибники хоть и жалуются на сухую погоду, но все равно умудряются набирать полные корзины строчков и то и дело хвастаются сморчковым уловом. Смотрим, у кого там что, и сами точим ножи, пока не вернулись морозы.', edit: false, done: false },
    ];

    const [checklistState, setChecklistState] = useState(checklist);
    const [addToggleMode, setAddToggleMode] = useState(false);
    const [inputValue, setInputValue] = useState(null);
    const [inputPlaceholder, setInputPlaceholder] = useState('Введите текст заметки...');

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
        let obj;
        if (checklistState.length) {
            obj = {
                id: checklistState[checklistState.length - 1].id + 1,
                text: inputText,
                edit: false,
                done: false,
            }
        } else {
            obj = {
                id: 1,
                text: inputText,
                edit: false,
                done: false,
            }
        }
        copy.push(obj);
        setChecklistState(copy);
        setInputValue('');
        setAddToggleMode(false);
        setInputPlaceholder('Введите текст заметки...');
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

    return <>
        <ul className={styles.list}>
            {result}
        </ul>
        {addToggleMode
            ? <><input className={styles.input} placeholder={inputPlaceholder} value={inputValue} onChange={(event) => { setInputValue(event.target.value) }} />
                <button className={styles.btn} onClick={() => { inputValue ? addChecklistElem(inputValue) : setInputPlaceholder('Нужно ввести минимум один символ...') }}>Добавить</button></>
            : <button className={styles.btn} onClick={() => setAddToggleMode(!addToggleMode)}>Добавить</button>}
    </>

}

export default Checklist;