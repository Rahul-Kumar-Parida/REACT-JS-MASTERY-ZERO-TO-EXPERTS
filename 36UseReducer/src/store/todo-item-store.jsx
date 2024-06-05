import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { Name: action.payload.itemNames, DueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.Name !== action.payload.itemNames
    );
  }
  return newTodoItems;
};

const TodoItemContextProvider = ({ children }) => {
  const [todoitems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemNames, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemNames,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemNames: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoitems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
        // dispatchTodoItems
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemContextProvider;
