const { nanoid } = require("nanoid");

export const newTodo = (content) => ({
  done: false,
  id: nanoid(),
  content: (content || "").trim()
});

export const reducer = (state, action) => {
  // deleteTodo: (state, id) => state.filter((item) => item.id !== id),
  // addTodo: (state, content) => [newTodo(content), ...state],
  // setContent: (state, id, content) =>
  //   state.map((item) =>
  //     item.id === id ? { ...item, content: content } : item
  //   ),
  // toggleDone: (state, id) =>
  //   state.map((item) => (item.id === id ? { ...item, done: !item.done } : item))

  switch (action.type) {
    case "deleteTodo":
      return state.filter((i) => i.id !== action.id);

    case "addTodo":
      return [newTodo(action.content), ...state];

    default:
      throw new Error();
  }
};
