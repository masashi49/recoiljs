import { useRecoilValue } from "recoil";
import { todoListState } from '../recoil/Atom'
import { TodoListStats } from './TodoListStats'
import { TodoItemCreator } from "./TodoItemCreator";
import { TotoItem } from './TotoItem'

export const TodoList = () => {
    const todoList = useRecoilValue(todoListState)

    return (
        <>
            <h1>RecoilによるTodoアプリんん</h1>
            <TodoListStats />
            <TodoItemCreator />

            {todoList.map((item) => (
                <TotoItem id={item.id} title={item.title} />
            ))}
            <div>
                <p>学習中</p>
                <a href="https://reffect.co.jp/react/react-recoil">https://reffect.co.jp/react/react-recoil</a>
                <p>次は : selectorの利用</p>
            </div>
        </>
    );
}

// 役割と使い方を復習する
// useRecoilValue : recoilにセットした値を呼び出すだけ。(読み取り専用)
// useRecoilState : 
// useStateと似ている、stateの取得・更新を行う。useStateと似ている
// const [value , setValue] = userecioiState(any)
// useStateとの違い。useStateは生の情報をそのまま扱う。useRecoilStateはAtomというデータストアを通してstateを扱うする。
// useSetRecoilState : recoilに値をセットするだけ。レンダリングは行われない。
// selector : Atomで管理されているstateを加工し、返す。
