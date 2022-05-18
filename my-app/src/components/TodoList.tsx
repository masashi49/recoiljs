import { useRecoilValue } from "recoil";
import { todoListState } from '../recoil/Atom'
import { TodoListStats } from './TodoListStats'

export const TodoList = () => {
    const todoList = useRecoilValue(todoListState)

    return (
        <>
            <h1>RecoilによるTodoアプリんん</h1>
            <TodoListStats />
            {todoList.map((item) => (
                <div key={item.id}>
                    {item.title}
                </div>
            ))}
            <div>
                <p>学習中</p>
                <a href="https://reffect.co.jp/react/react-recoil">https://reffect.co.jp/react/react-recoil</a>
                <p>次は : selectorの利用</p>
            </div>
        </>
    );
}
