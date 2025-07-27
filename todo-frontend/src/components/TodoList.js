import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newText, setNewText] = useState('');
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:5000/items');
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!newText.trim()) return;
    await axios.post('http://localhost:5000/items', { text: newText });
    setNewText('');
    fetchTodos();
  };

  const updateTodo = async (id) => {
    await axios.put(`http://localhost:5000/items/${id}`, { text: editText });
    setEditing(null);
    setEditText('');
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/items/${id}`);
    fetchTodos();
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h2>Todo List</h2>
      <input
        name="newTodo"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        placeholder="New task"
      />
      <button className="add" onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editing === todo.id ? (
              <>
                <input
                  name="editTodo"
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                />
                <button className="save" onClick={() => updateTodo(todo.id)}>Save</button>
              </>
            ) : (
              <>
                {todo.text}
                <button className="edit" onClick={() => { setEditing(todo.id); setEditText(todo.text); }}>Edit</button>
                <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

