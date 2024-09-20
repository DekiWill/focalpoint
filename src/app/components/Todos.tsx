import prisma from "@/lib/db";
import { Task } from "./Task";
import styles from "./todos.module.scss";

export default function Todos() {
  // const todoList = await prisma.task.findMany();

  return (
    <>
      <main className={styles.todos}>
        <ul className={styles.todos__list}>
          <li className={styles.todos__list__title}>Suas Tarefas de hoje</li>
          {/* {todoList.map((todo) => (
            <Task
              completed={todo.completed}
              task={todo.task}
              id={todo.id}
              key={todo.id}
            />
          ))} */}
        </ul>
        <ul className={styles.todos__list}>
          <li className={styles.todos__list__title}>Tarefas finalizadas</li>
        </ul>
      </main>
    </>
  );
}
