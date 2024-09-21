import { Task } from "./Task";
import styles from "./todos.module.scss";
import { todoList, todoListCompleted } from "../actions/actions";

export default async function Todos() {
  const completedTodos = await todoListCompleted();
  const todos = await todoList();
  return (
    <>
      <main className={styles.todos}>
        <ul className={styles.todos__list}>
          <li className={styles.todos__list__title}>Suas Tarefas de hoje</li>
          {todos.map((todo) => (
            <Task
              completed={todo.completed}
              task={todo.task}
              id={todo.id}
              key={todo.id}
            />
          ))}
        </ul>
        <ul className={styles.todos__list}>
          <li className={styles.todos__list__title}>Tarefas finalizadas</li>
          {completedTodos.map((todo) => (
            <Task
              completed={todo.completed}
              task={todo.task}
              id={todo.id}
              key={todo.id}
            />
          ))}
        </ul>
      </main>
    </>
  );
}
