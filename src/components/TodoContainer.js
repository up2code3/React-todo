import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const TodoContainer = ({ REACT_APP_TABLE_NAME }) => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    const fetchDataAndSort = async () => {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        },
      };

      const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${REACT_APP_TABLE_NAME}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        data.records.sort((objectA, objectB) => {
          const titleA = objectA.fields.title.toUpperCase();
          const titleB = objectB.fields.title.toUpperCase();
          const comparison = isAscending ? 1 : -1;

          if (titleA < titleB) {
            return comparison;
          } else if (titleA > titleB) {
            return -comparison;
          } else {
            return 0;
          }
        });

        const todos = data.records.map((record) => ({
          title: record.fields.title,
          id: record.id,
        }));

        setTodoList(todos);
        setIsLoading(false);
      } catch (error) {
        console.error("Fetch Error", error.message);
      }
    };

    fetchDataAndSort();
  }, [REACT_APP_TABLE_NAME, isAscending]);

  const toggleSortingOrder = () => {
    setIsAscending((prevIsAscending) => !prevIsAscending);
  };

  const addTodo = async (todo, id) => {
    if (todo.title === "") {
      return;
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify({
        fields: {
          title: todo.title,
        },
      }),
    };

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${REACT_APP_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const newRecord = await response.json();
      console.log("new record fields:", newRecord.fields);
      setTodoList([...todoList, { id: newRecord.id, ...newRecord.fields }]);
    } catch (error) {
      console.error("Add Todo Error:", error.message);
    }
  };

  const removeTodo = async (id) => {
    const options = {
      method: "DELETE",
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
      await response.json();
      const updatedTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(updatedTodoList);
    } catch (error) {
      console.error("Remove Todo Error:", error.message);
    }
  };

  return (
    <div>
      <h1>{REACT_APP_TABLE_NAME}</h1>

      <AddTodoForm onAddTodo={addTodo} />

      <button onClick={toggleSortingOrder}>
        SORT {isAscending ? "A-Z" : "Z-A"}
      </button>
      <hr />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </div>
  );
};

TodoContainer.propTypes = {
  REACT_APP_TABLE_NAME: PropTypes.string.isRequired,
};

export default TodoContainer;
