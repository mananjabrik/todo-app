import React from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
} from '@chakra-ui/react';
interface TodoModalProps {
	isOpen: boolean;
	onClose: () => void;
	headTitle: string;
	save?: () => void;
}
export const TodoModal: React.FC<TodoModalProps> = (props) => {
	return (
		<Modal isOpen={props.isOpen} onClose={props.onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{props.headTitle}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>{props.children}</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={props.onClose}>
						Close
					</Button>
					<Button colorScheme="green" onClick={props.save}>
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
