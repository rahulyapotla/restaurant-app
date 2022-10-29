import React from "react";
import Modal from "../../atoms/Modal/Modal";
import ModalData from "../../atoms/Modal/ModalData";

const ModalMolecule = (props) => {
  return (
    <Modal {...props.popup}>
      <ModalData {...props.popupData} />
    </Modal>
  );
};

export default ModalMolecule;
