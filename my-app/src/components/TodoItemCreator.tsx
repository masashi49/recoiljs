import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from '../recoil/Atom'


interface HandleNameChangeInterface {
    target: HTMLInputElement;
}

export const TodoItemCreator = () => {
    const [title, setTitle] = useState('');
    const [taskIndex, setTaskIndex] = useState(2);
    const setTodoList = useSetRecoilState(todoListState);

    const handleChange = (e: HandleNameChangeInterface) => {
        setTitle(e.target.value);
    };

    const addItem = () => {
        setTaskIndex(taskIndex + 1)
        setTodoList((oldTodoList) => {
            return [
                ...oldTodoList,
                {
                    id: taskIndex,
                    title: title,
                    isComplete: false,
                },
            ]
        });
        setTitle('');
    };

    return (
        <>
            <div className="addTackButton">
                <input type="text" value={title} onChange={handleChange} />
                <button onClick={addItem}>タスクの追加</button>
            </div>
        </>
    );
}
