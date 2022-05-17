import { atom, useRecoilValue } from "recoil";


const todoListState = atom({
    key: 'todoListState',
    default: [
        {
            id: 0,
            title: 'メール送信',
            isComplete: false,
        },
    ],
});

export const TodoList = () => {
    const todoList = useRecoilValue(todoListState)
    console.log(todoList)
    return (
        <>
            <h1>RecoilによるTodoアプリ</h1>
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
