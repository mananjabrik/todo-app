import React, { useEffect, useState } from 'react';
import {
	Button,
	Box,
	Input,
	useDisclosure,
	FormControl,
	FormLabel,
	Text,
} from '@chakra-ui/react';
import { TodoModal } from '.';
import { useRecoilState } from 'recoil';
import { todoApi } from '../state';
import { TodoApiProps } from '../interface';
export const CreatorTodo = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [todoData, setTodoData] = useRecoilState(todoApi);
	const [typing, setTyping] = useState();
	const onTyping = (e: any) => {
		setTyping(e.target.value);
	};
	const addEntryClick = () => {
		const currentTodo = todoData.slice(-1)[0].id;
		//@ts-ignore
		setTodoData((oldArray) => [
			...oldArray,
			{
				id: currentTodo + 1,
				status: 0,
				title: typing,
				description: '',
				createdAt: Date(),
			},
		]);
		onClose();
	};

	return (
		<Box>
			<Button onClick={onOpen} w="full" colorScheme="green">
				Create
			</Button>
			<TodoModal
				isOpen={isOpen}
				onClose={onClose}
				headTitle="Create Todo"
				save={addEntryClick}
			>
				<FormControl>
					<FormLabel>Todo</FormLabel>
					<Input
						placeholder="Create Todo"
						type="text"
						onChange={onTyping}
					></Input>
				</FormControl>
			</TodoModal>
		</Box>
	);
};
function getRandomNumber(): never {
	throw new Error('Function not implemented.');
}
