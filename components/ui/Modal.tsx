import React from "react";
import ReactModal from 'react-modal';

export type ModalCustomProps = ReactModal["props"] & {
	isOpen: boolean
}
export const Modal: React.FC<ModalCustomProps> = ({
	isOpen
}) => {
  return (
		<div>
			<Modal isOpen={isOpen}>
			</Modal>
		</div>
	);
};
