import React from "react";
import '../App.css'
import { useRecoilValue } from "recoil";
import { todoListState } from '../recoil/Atom'
import { TodoListStats } from './TodoListStats'
import { TodoItemCreator } from "./TodoItemCreator";
import { TotoItem } from './TotoItem'

export const TodoList = () => {
    const todoList = useRecoilValue(todoListState)
    return (
        <>
            <h1>Recoilによるtodoリスト</h1>
            <TodoListStats />
            <TodoItemCreator />

            {todoList.map((item) => (
                <React.Fragment key={item.id}>
                    <TotoItem item={item} />
                </React.Fragment>
            ))}
        </>
    );
}


// useRecoilValue : recoilにセットした値を呼び出すだけ。(読み取り専用)
// useRecoilState : 
//   useStateと似ている、stateの取得・更新を行う。useStateと似ている
//   const [value , setValue] = userecioiState(any)
//   useStateとの違い。useStateは生の情報をそのまま扱う。useRecoilStateはAtomというデータストアを通してstateを扱うする。
// useSetRecoilState : recoilに値をセットするだけ。レンダリングは行われない。
// selector : Atomで管理されているstateを加工し、返すための存在。
