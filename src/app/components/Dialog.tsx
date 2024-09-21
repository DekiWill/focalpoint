"use client";

import { useState } from "react";
import styles from "./dialog.module.scss";
import { CREATE } from "../actions/actions";

export default function Dialog() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [task, setTask] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await CREATE(task);
    setTask("");
    handleClose();
  };
  return (
    <>
      <button className={styles.dialog__trigger} onClick={handleOpen}>
        Adicionar nova tarefa
      </button>
      <dialog className={styles.dialog__container} open={open}>
        <h2 className={styles.dialog__container__title}>Nova tarefa</h2>
        <form
          className={styles.dialog__container__form}
          onSubmit={handleSubmit}
        >
          <label
            className={styles.dialog__container__form__label}
            htmlFor="task"
          >
            Titulo
            <input
              required
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className={styles.dialog__container__form__label__input}
              type="text"
              name="task"
              placeholder="Digite"
            />
          </label>
          <button
            className={styles.dialog__container__form__cancel}
            onClick={handleClose}
          >
            Cancelar
          </button>
          <button className={styles.dialog__container__form__add} type="submit">
            Adicionar
          </button>
        </form>
      </dialog>
    </>
  );
}
