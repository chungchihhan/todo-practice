import { NextRequest, NextResponse } from "next/server";

import { db } from "@/db";
import { todosTable } from "@/db/schema";

export async function GET(res: NextResponse) {
  try {
    const todos = await db.select().from(todosTable);
    return NextResponse.json(todos);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
