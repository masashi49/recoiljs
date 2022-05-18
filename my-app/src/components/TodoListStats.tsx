import { useRecoilValue } from "recoil";
import { todoListStatesState } from '../recoil/Selector'

export const  TodoListStats = () => {
    const { todoListLength
} = useRecoilValue(todoListStatesState);
    return (
        <p>予定のタスクは{todoListLength}個です</p>
    )
}
