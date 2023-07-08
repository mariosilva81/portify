import { MutableRefObject, RefObject, useContext } from 'react';
import { IUseKeyDown, useKeyDown } from "../../../../../hooks/useKeyDown";
import { useOutsideClick } from "../../../../../hooks/useOutsideClick";
import CloseButtonBlack from "../../../../../assets/icons/close-black.png"
import { StyledModal } from '../ModalForm/styles';
import { ModalForm } from '../ModalForm';
import { StyledButton } from '../../../../../components/Button/styles';
import { ProjectsContext } from '../../../../../providers/ProjectsContext/ProjectsContext';

interface AddProjectModalProps {
  setOpenAddModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddProjectModal = ({ setOpenAddModal }: AddProjectModalProps) => {
  const { createProject } = useContext(ProjectsContext);

  const modalRef: RefObject<HTMLDivElement> = useOutsideClick({
    callback: () => {
      setOpenAddModal(false);
    },
  });

  const buttonRef: MutableRefObject<IUseKeyDown> = useKeyDown("Escape", () => {
    setOpenAddModal(false);
  });

  const handleCreateProject = () => {
    setOpenAddModal(false);
    createProject(formData, );
  };

  return (
    <StyledModal role="dialog">
      <div ref={modalRef}>
        <h1>Modal de Criar Projeto</h1>
        <img
          src={CloseButtonBlack} 
          ref={buttonRef} 
          onClick={() => setOpenAddModal(false)}
        />
        <ModalForm>
          <StyledButton 
            color="solid-green" 
            widthsize="large1" 
            onClick={() => handleCreateProject}>
              Criar Projeto
            </StyledButton> 
        </ModalForm>
      </div>
    </StyledModal>
  );
};
