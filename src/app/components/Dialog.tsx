import { useState } from "react";
import styles from "./dialog.module.scss";

export default function Dialog() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button className={styles.dialog__trigger} onClick={handleOpen}>
        Adicionar nova tarefa
      </button>
      <dialog className={styles.dialog__container} open={open}>
        <h2 className={styles.dialog__container__title}>Nova tarefa</h2>
        <form className={styles.dialog__container__form} action="">
          <label
            className={styles.dialog__container__form__label}
            htmlFor="task"
          >
            Titulo
            <input
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
          <button
            className={styles.dialog__container__form__add}
            onClick={handleClose}
          >
            Adicionar
          </button>
        </form>
      </dialog>
    </>
  );
}
