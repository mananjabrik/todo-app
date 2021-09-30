import React, { useEffect, useState } from 'react';
import { TodoModal } from '.';
import {
	FormControl,
	FormLabel,
	Input,
	Button,
	Icon,
	useToast,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { todoApi } from '../state';
import { TodoApiProps } from '../interface';

interface UpdateTodoProps {
	fieldData?: TodoApiProps;
	isOpen: boolean;
	onClose: () => void;
}

export const UpdateTodo: React.FC<UpdateTodoProps> = (props) => {
	const toast = useToast();
	const [todoData, setTodoData] = useRecoilState(todoApi);
	const [typing, setTyping] = useState();
	const [done, setDone] = useState(false);
	const onTyping = (e: any) => {
		setTyping(e.target.value);
	};
	const onDone = () => {
		setDone(!done);
	};
	const addEntryClick = () => {
		const updatedTodo = todoData.map((todo) => {
			if (todo.id == props?.fieldData?.id) {
				return {
					...todo,
					title: typing ?? todo.title,
					status: done ? 1 : 0,
				};
			}
			return todo;
		});
		//@ts-ignore
		setTodoData(updatedTodo);
		toast({
			title: 'Todo Updated',
			description: 'success update your todo list',
			status: 'success',
			duration: 9000,
			isClosable: true,
		});
		setDone(false);
	};

	return (
		<TodoModal
			isOpen={props.isOpen}
			onClose={props.onClose}
			headTitle="Update Todo"
			save={addEntryClick}
		>
			<FormControl>
				<FormLabel>Todo</FormLabel>
				<Input
					placeholder="Create Todo"
					type="text"
					defaultValue={props?.fieldData?.title}
					onChange={onTyping}
				></Input>

				<Button
					mt="2"
					colorScheme={done ? 'green' : 'orange'}
					onClick={onDone}
				>
					Done Todo <Icon as={FaArrowRight}></Icon>
				</Button>
			</FormControl>
		</TodoModal>
	);
};
