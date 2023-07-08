import { useState, MutableRefObject, RefObject } from 'react';
import { IUseKeyDown, useKeyDown } from "../../../../../hooks/useKeyDown";
import { useOutsideClick } from "../../../../../hooks/useOutsideClick";
import CloseButtonBlack from "../../../../../assets/icons/close-black.png"
import { StyledModal } from '../AddProjectModal/styles';

interface EditProjectModalProps {
  setOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditProjectModal = ({ setOpenEditModal }: EditProjectModalProps) => {
  // const modalRef: RefObject<HTMLDivElement> = useOutsideClick({
  //   callback: () => {
  //     setOpenEditModal(false);
  //   },
  // });

  // const buttonRef: MutableRefObject<IUseKeyDown> = useKeyDown("Escape", () => {
  //   setOpenEditModal(false);
  // });


  return (
    <StyledModal role="dialog">
      <div>
        <h1>Modal de Editar Projeto</h1>
        <img
          src={CloseButtonBlack} 
          // ref={buttonRef} 
          onClick={() => setOpenEditModal(false)}
        />
      </div>
    </StyledModal>
  );
};
