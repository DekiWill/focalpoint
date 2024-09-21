"use server";

import prisma from "@/lib/db";

export async function todoListCompleted() {
  const todos = await prisma.task.findMany({
    where: {
      completed: true,
    },
  });
  return todos;
}

export async function todoList() {
  const todos = await prisma.task.findMany({
    where: {
      completed: false,
    },
  });

  return todos;
}
