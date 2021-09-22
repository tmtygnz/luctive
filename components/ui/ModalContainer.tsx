import React from "react";
import Modal from "react-modal";

export type ModalProps = Modal["props"];

export const ModalContainer: React.FC<ModalProps> = ({children,...props}) => {
  return (
		<div>
			<Modal {...props}>
				{children}
			</Modal>
		</div>
	);
};
