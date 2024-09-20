import { Task } from "./Task";
import styles from "./todos.module.scss";

export default function Todos() {
  const handleDialog = () => {};

  return (
    <>
      <main className={styles.todos}>
        <ul className={styles.todos__list}>
          <li className={styles.todos__list__title}>Suas Tarefas de hoje</li>
          <Task completed={true} key="1" id="id1" task="tarefa 1" />
          <Task completed key="2" id="id2" task="tarefa 2" />
          <Task completed key="3" id="id3" task="tarefa 3" />
        </ul>
        <ul className={styles.todos__list}>
          <li className={styles.todos__list__title}>Tarefas finalizadas</li>
        </ul>
      </main>
    </>
  );
}
