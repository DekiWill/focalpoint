"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function todoListCompleted() {
  const todos = await prisma.task.findMany({
    where: {
      completed: true,
    },
  });
  revalidatePath("/");
  return todos;
}

export async function todoList() {
  const todos = await prisma.task.findMany({
    where: {
      completed: false,
    },
  });
  revalidatePath("/");
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
  revalidatePath("/");
}
export async function DELETE(id: string) {
  await prisma.task.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
}

export async function CREATE(task: string) {
  await prisma.task.create({
    data: {
      task: task,
    },
  });
  revalidatePath("/");
}
