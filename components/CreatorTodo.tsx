import React from 'react';
import {
	Button,
	Box,
	Input,
	useDisclosure,
	FormControl,
	FormLabel,
} from '@chakra-ui/react';
import { TodoModal } from '.';
export const CreatorTodo = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box>
			<Button onClick={onOpen} w="full" colorScheme="green">
				Create
			</Button>
			<TodoModal
				isOpen={isOpen}
				onClose={onClose}
				headTitle="Create Todo"
			>
				<FormControl>
					<FormLabel>Todo</FormLabel>
					<Input placeholder="Create Todo"></Input>
				</FormControl>
			</TodoModal>
		</Box>
	);
};
