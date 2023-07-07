import { useState, MutableRefObject, RefObject } from 'react';
import { IUseKeyDown, useKeyDown } from "../../../../../hooks/useKeyDown";
import { useOutsideClick } from "../../../../../hooks/useOutsideClick";
import CloseButtonBlack from "../../../../../assets/icons/close-black.png"
import CloseButtonWhite from "../../../../../assets/icons/close-white.png"

export const AddProjectModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const modalRef: RefObject<HTMLDivElement> = useOutsideClick({
  //   callback: () => {
  //     setIsOpen(false);
  //   },
  // });

  // const buttonRef: MutableRefObject<IUseKeyDown> = useKeyDown("Escape", (element: { click: () => void; }) => {
  //   element.click()
  // });

  return (
    <div role="dialog">
      <div ref={modalRef}>
        <h1>Modal de Criar Projeto</h1>
        <img
          src={CloseButtonBlack} 
          ref={buttonRef} 
          onClick={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};
