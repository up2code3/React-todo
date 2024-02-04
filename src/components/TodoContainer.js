import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'

const TodoContainer = ({REACT_APP_TABLE_NAME }) => {
    const [todoList, setTodoList] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
                },
            };

            const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${REACT_APP_TABLE_NAME}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;
            
            try {
                const response = await fetch(url, options);

                if(!response.ok) {
                    throw new Error(`Error: ${response.status}`)
                }

                const data = await response.json();
                console.log('API response', data);

                const todos = data.records.map((record) => ({
                    title: record.fields.title,
                    id: record.id,
                }));

                console.log('Transformed Todos:', todos);

                
                setTodoList(todos);
                setIsLoading(false);
            } catch (error) {
                console.error('Fetch Error', error.message);
            }
        };
        fetchData();
    }, [REACT_APP_TABLE_NAME]);

    const addTodo = async (todo) => {
        const options = {
         method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:  `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
            },
            body: JSON.stringify({
                fields: {
                    title: todo.title,
                },
            }),
        };

        const url =  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${REACT_APP_TABLE_NAME}`;
        
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const newRecord = await response.json();

            setTodoList([...todoList, newRecord.fields]);
        } catch (error) {
            console.error('Add Todo Error:', error.message);
        }
    };

    const removeTodo = async (id) => {
        const options = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
            },
        };

        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${REACT_APP_TABLE_NAME}/${id}`;
        
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            //Parse the json
            await response.json();

            //set todoList state to new Array not containting removed record
            const updatedTodoList = todoList.filter((todo) => todo.id !== id);
            setTodoList(updatedTodoList);
        } catch (error) {
            console.error('Remove Todo Error:', error.message);
        }
    };

    return (
        <div>
            <h1>{REACT_APP_TABLE_NAME}</h1>
            <AddTodoForm onAddTodo={addTodo}/>
            {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
        </div>
    );
};

TodoContainer.propTypes = {
    REACT_APP_TABLE_NAME: PropTypes.string.isRequired,
};

export default TodoContainer;