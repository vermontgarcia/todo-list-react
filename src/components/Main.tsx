import {
  useEffect,
  useState,
  type ChangeEventHandler,
  type KeyboardEventHandler,
  type MouseEventHandler,
} from 'react';
import Input from './Input';
import List from './List';
import IconButton from './IconButton';

export type Item = {
  id: string;
  description: string;
  isCompleted: boolean;
};

const getTodoList = () => {
  const todos = localStorage.getItem('todo-list');
  if (todos === null) return [];
  return JSON.parse(todos);
};

const setTodoList = (list: Item[]) => {
  localStorage.setItem('todo-list', JSON.stringify(list));
};

const Main = () => {
  const [list, setList] = useState<Item[]>(getTodoList());
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    setTodoList(list);
  }, [list]);

  const addTodo = () => {
    if (input) {
      const newTodo = {
        id: crypto.randomUUID(),
        description: input,
        isCompleted: false,
      };
      setList((currentList) => [...currentList, newTodo]);
      setInput('');
    }
  };

  const handleAddTodo: MouseEventHandler = (event) => {
    event.preventDefault();
    addTodo();
  };

  const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTodo();
    }
  };

  const toggleCompleted = (id: string, isCompleted: boolean) => {
    setList((currentList) =>
      currentList.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted };
        }
        return item;
      })
    );
  };

  const deleteItem = (id: string) => {
    setList((currentList) => currentList.filter((item) => item.id !== id));
  };

  return (
    <main>
      <div>
        <form>
          <Input
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
          />
          <IconButton icon="add" handleClick={handleAddTodo} />
        </form>
      </div>
      <div>
        <List
          list={list}
          toggleCompleted={toggleCompleted}
          deleteItem={deleteItem}
        />
      </div>
    </main>
  );
};

export default Main;
