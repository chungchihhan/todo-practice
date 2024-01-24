import { NextRequest, NextResponse } from "next/server";

import { db } from "@/db";
import { todosTable } from "@/db/schema";

export async function POST(res: NextResponse) {
  try {
    const newTodo = {
      // Define the properties of the new todo
      title: "New Todo",
      description: "This is a new todo",
      // Add other properties as needed
    };
    await db.insert(todosTable).values(newTodo);
    return NextResponse.json({ error: "success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
