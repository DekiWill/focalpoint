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
      <dialog className={styles.task__dialog} open={open}>
        <h2 className={styles.task__dialog__title}>Deletar tarefa</h2>
        <p className={styles.task__dialog__description}>
          Deseja realmente deletar a tarefa?
        </p>
        <button className={styles.task__dialog__cancel} onClick={handleClose}>
          Cancelar
        </button>
        <button className={styles.task__dialog__delete} onClick={handleDelete}>
          Deletar
        </button>
      </dialog>
    </li>
  );
}
