import { useEffect, useRef, useState } from "react";
import { ITodo } from "../types/TodoType";
import { TodoList } from "./TodoList";
import { StyledButtonAdd, StyledInput, TitleTodo, ContentForm } from "./TodoPage.styled";


export const TodoPage: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, []);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({target: {value}}) => {
        setValue(value);
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') addTodo();
    } 

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Math.floor(Math.random() * 10000),
                title: value, 
                complete: false
            }])
            setValue('');
        }
    }

    const deleteTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;

            return {
                ...todo,
                complete: !todo.complete
            }
        }));
    }

  return (
      <>
        <TitleTodo>To-Do List</TitleTodo>
        <ContentForm>
            <StyledInput 
                placeholder="Add a todo" 
                value={value} 
                onChange={handleChange} 
                onKeyDown={handleKeyDown} 
                ref={inputRef} 
            />
            <StyledButtonAdd 
                variant="contained" 
                onClick={addTodo}
                size="small"
                color="success">
                Add
            </StyledButtonAdd>
        </ContentForm>
        <TodoList items={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      </>
  )
}