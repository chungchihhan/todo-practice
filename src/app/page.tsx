"use client";

import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState("123");
  const addTodo = async () => {
    try {
      const res = await fetch("/api/addTodo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTodos("a new todo was added");
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
      <h1>{todos}</h1>
    </main>
  );
}
