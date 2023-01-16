import { Checkbox } from "@mui/material";
import { ITodo } from "../types/TodoType";
import { StyledButtonDelete, ContentForItem } from "./TodoItem.styled";
import DeleteIcon from '@mui/icons-material/Delete';

export interface ITodoItem extends ITodo {
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export const TodoItem: React.FC<ITodoItem> = ({id, title, complete, toggleTodo, deleteTodo}) => {
    
    return (
        <ContentForItem>
            <div>
                <Checkbox checked={complete} onChange={() => toggleTodo(id)}/>
                {title}
            </div>
            <StyledButtonDelete 
                onClick={() => deleteTodo(id)}>  
                <DeleteIcon />
            </StyledButtonDelete>
        </ContentForItem>
    )
}