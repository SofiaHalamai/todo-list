import { ITodo } from "../types/TodoType"
import { TodoItem } from "./TodoItem"

export interface ITodoListProps {
    items: ITodo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
} 

export const TodoList: React.FC<ITodoListProps> = ({items, toggleTodo, deleteTodo}) => {
    return (
        <div>
            {
                items.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        {...todo}
                    />
                ))
            }
        </div>
    )
}