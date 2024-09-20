"use client";
import { useState } from "react";
import styles from "./task.module.scss";

type TaskProps = {
  task: string;
  id: string;
  completed: boolean;
  onDelete?: (id: string) => void;
};

export function Task({ task, id, completed = false, onDelete }: TaskProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    if (onDelete) onDelete(id);
    console.log(id);
    handleClose();
  };
  return (
    <li className={styles.task}>
      <input
        id={`checkbox-${id}`}
        className={styles.task__checkbox}
        type="checkbox"
        name="task"
      />
      <label id={id} className={styles.task__title} htmlFor={`checkbox-${id}`}>
        {task}
      </label>
      <button onClick={handleOpen}>
        <img
          className={styles.task__icon}
          src="images/trash.svg"
          alt="lixeira"
        />
      </button>
      <dialog open={open}>
        <h2>Deletar tarefa</h2>
        <p>Deseja realmente deletar a tarefa?</p>
        <button onClick={handleClose}>Cancelar</button>
        <button onClick={handleDelete}>Deletar</button>
      </dialog>
    </li>
  );
}
