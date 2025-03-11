import { FC, ReactNode } from "react"

export const NewCategoryModal: FC<{ id: string, title: string,  children: ReactNode }> = ({ id, title, children }) => {
  return (
    <>
      <button className="btn btn-primary" onClick={() => (document.getElementById(id) as HTMLDialogElement)?.showModal()}>
        <span className="text-4xl mb-2">+</span>{title}
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          {children}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}