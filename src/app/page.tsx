"use client";

import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";

export default function Home() {
  const [todos, setTodos] = useState<any>([]);
  const [reloadTodos, setReloadTodos] = useState<Boolean>(false);
  useEffect(() => {
    showTodos();
  }, [reloadTodos]);

  const showTodos = async () => {
    const res = await fetch("/api/getTodos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTodos(await res.json());
  };
  const addTodo = async () => {
    try {
      const res = await fetch("/api/addTodo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        setReloadTodos(!reloadTodos);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>todo list</h1>
      <button onClick={addTodo} className="rounded bg-blue-500 p-2 text-white">
        add a new todo
      </button>
      <ul>
        {todos.map(
          (
            todo: {
              title:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | PromiseLikeOfReactNode
                | null
                | undefined;
            },
            index: Key | null | undefined,
          ) => (
            <li key={index}>{todo.title}</li> // 假設每個待辦事項都有一個 'title' 屬性
          ),
        )}
      </ul>
    </main>
  );
}
