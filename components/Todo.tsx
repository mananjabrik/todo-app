import React, { useState } from 'react';

import {
	Stack,
	Text,
	Icon,
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	ButtonGroup,
	IconButton,
} from '@chakra-ui/react';

import { TodoApiProps } from '../interface';
import { FilterTodo, TodoModal } from '.';
import { FaClipboardList, FaCheck, FaArrowRight } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { todoApi } from '../state';

interface TodoProps {
	data: TodoApiProps[];
	headTitle: string;
	status?: 'done' | 'ongoing';
}
export const Todo: React.FC<TodoProps> = (props) => {
	const [todoData, setTodoData] = useRecoilState(todoApi);
	const [take, setTake] = useState<TodoApiProps>();
	const [typing, setTyping] = useState();
	const [done, setDone] = useState(false);
	const onTyping = (e: any) => {
		setTyping(e.target.value);
	};
	const onDone = () => {
		setDone(true);
	};

	const addEntryClick = () => {
		const updatedTodo = todoData.map((todo) => {
			if (todo.id == take?.id) {
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
		setTake(undefined);
	};
	return (
		<Box>
			<Box
				bg={props.headTitle == 'Done' ? 'red.400' : 'green.400'}
				p="1"
				rounded="md"
				color="white"
			>
				<Heading size="md">{props.headTitle}</Heading>
			</Box>
			{FilterTodo(
				props.data ?? [],
				props?.status === 'done' ? '1' : '0'
			).map((todo) => {
				return (
					<Stack
						mt="1"
						key={todo.id}
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						p="1"
						_hover={{ bg: 'gray.100' }}
						cursor="pointer"
						spacing="1"
						rounded="md"
						onClick={() => {
							setTake(todo);
						}}
					>
						<Text>{todo.title}</Text>
						<Icon
							as={
								props.headTitle == 'Done'
									? FaCheck
									: FaClipboardList
							}
							color={
								props.headTitle == 'Done'
									? 'green.400'
									: 'red.400'
							}
						/>
					</Stack>
				);
			})}
			<TodoModal
				isOpen={take ? true : false}
				onClose={() => setTake(undefined)}
				headTitle="Update Todo"
				save={addEntryClick}
			>
				<FormControl>
					<FormLabel>Todo</FormLabel>
					<Input
						placeholder="Create Todo"
						type="text"
						defaultValue={take?.title}
						onChange={onTyping}
					></Input>

					<Button mt="2" colorScheme="orange" onClick={onDone}>
						click to done <Icon as={FaArrowRight}></Icon>
					</Button>
				</FormControl>
			</TodoModal>
		</Box>
	);
};
