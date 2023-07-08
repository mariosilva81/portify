import { RefObject, useEffect } from "react";
import { useOutsideClick } from "../../../../../hooks/useOutsideClick";
import CloseButtonBlack from "../../../../../assets/icons/close-black.png";
import { StyledModal } from "../../../../../styles/modalStyles";

interface EditProjectModalProps {
  setOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditProjectModal = ({
  setOpenEditModal
}: EditProjectModalProps) => {
  const modalRef: RefObject<HTMLDivElement> = useOutsideClick({
    callback: () => {
      setOpenEditModal(false);
    },
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenEditModal(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setOpenEditModal]);

  // return (
  //   <StyledModal role="dialog">
  //     <div ref={modalRef}>
  //       <div className="title-container">
  //         <h1>Editar Projeto</h1>
  //         <img src={CloseButtonBlack} onClick={() => setOpenEditModal(false)} />
  //       </div>
  //       <EditForm
  //         isPortfolioId={isPortfolioId}
  //         setOpenEditModal={setOpenEditModal}
  //       />
  //     </div>
  //   </StyledModal>
  // );
};
