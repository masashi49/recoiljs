import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from '../recoil/Atom'


interface HandleNameChangeInterface {
    target: HTMLInputElement;
}

export const TodoItemCreator = () => {
    const [title, setTitle] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const handleChange = (e: HandleNameChangeInterface) => {
        setTitle(e.target.value);
    };

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                title: title,
                isComplete: false,
            },
        ]);
        setTitle('');
    };

    return (
        <>
            <div>
                <input type="text" value={title} onChange={handleChange} />
                <button onClick={addItem}>タスクの追加</button>
            </div>
        </>
    );
}

let id = 1;
const getId = () => {
    return id++;
}
