"use client";
import { useEffect, useState } from "react";
import styles from "./task.module.scss";
import { DELETE, UPDATE } from "../actions/actions";

type TaskProps = {
  task: string;
  id: string;
  completed: boolean;
  onDelete?: (id: string) => void;
};

export function Task({
  task,
  id,
  completed: inicialCompleted,
  onDelete,
}: TaskProps) {
  const [open, setOpen] = useState(false);
  const [completed, setCompleted] = useState<boolean>(inicialCompleted);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    if (onDelete) onDelete(id);
    DELETE(id);
    handleClose();
  };

  const handleCheckboxUpdate = async (
    ev: React.ChangeEvent<HTMLInputElement>
  ) => {
    ev.preventDefault();
    const newCompletedStatus = !completed;
    setCompleted(newCompletedStatus);
    await UPDATE(id, newCompletedStatus);
  };
  return (
    <li id={id} className={styles.task}>
      <input
        id={`checkbox-${id}`}
        className={styles.task__checkbox}
        type="checkbox"
        name="task"
        onChange={handleCheckboxUpdate}
        checked={completed}
      />
      <label className={styles.task__title} htmlFor={`checkbox-${id}`}>
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
