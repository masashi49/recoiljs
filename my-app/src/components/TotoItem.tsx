import { useRecoilState } from 'recoil'
import { todoListState } from '../recoil/Atom'

type Props = {
    item: {
        id: number
        title: string
        isComplete: boolean
    }
}

export const TotoItem = ({ item }: Props) => {
    const [todoList, setTodoList] = useRecoilState(todoListState)

    const daleteItem = (): void => {
        const index = todoList.findIndex((listItem) => listItem.id === item.id)
        const newTodoList = [
            ...todoList.slice(0, index),
            ...todoList.slice(index + 1),
        ]
        setTodoList(newTodoList)
    }

    const toggleItemComplation = ():void => {
        const index = todoList.findIndex((listItem) =>
            listItem.id === item.id)
        const anewTodoList = [
            ...todoList.slice(0,index),
            { ...item, isComplete: !item.isComplete },
            ...todoList.slice(index + 1),
        ]
        setTodoList(anewTodoList)
    }

    return (
        <div className="taskList" key={item.id}>
            <button onClick={toggleItemComplation}>
                {item.isComplete ? '完' : '未'}
            </button>
            {item.id} : {item.title}
            <button type="button" onClick={daleteItem}>削除</button>
        </div>
    )
}
