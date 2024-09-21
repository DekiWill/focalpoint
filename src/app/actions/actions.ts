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

export async function UPDATE(id: string, completed: boolean) {
  await prisma.task.updateMany({
    where: {
      id: id,
    },
    data: {
      completed: completed,
    },
  });
}
export async function DELETE(id: string) {
  await prisma.task.deleteMany({
    where: {
      id: id,
    },
  });
}
