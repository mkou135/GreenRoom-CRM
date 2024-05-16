import { useState } from 'react';
import { List, ListItem, Input, Button, IconButton } from '@material-tailwind/react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editTodo, setEditTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditTodo(todos[index]);
  };

  const handleUpdateTodo = () => {
    if (editTodo.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = editTodo;
      setTodos(updatedTodos);
      setEditIndex(-1);
      setEditTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="w-96 m-3">
      <div className="flex mb-4">
        <Input
          label="New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-grow mr-2"
        />
        <Button onClick={handleAddTodo}>Add</Button>
      </div>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index}>
            {editIndex === index ? (
              <div className="flex items-center justify-between">
                <Input
                  label="Edit Todo"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                  className="flex-grow mr-2"
                />
                <Button onClick={handleUpdateTodo}>Update</Button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span >{todo}</span>
                <div>
                  <IconButton
                  className='m-2'
                    size="sm"
                    color="blue"
                    onClick={() => handleEditTodo(index)}
                  >
                    <PencilIcon className="h-4 w-4" />
                  </IconButton>
                  <IconButton
                    size="sm"
                    color="red"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </IconButton>
                </div>
              </div>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
}