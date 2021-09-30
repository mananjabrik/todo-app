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
	Switch,
} from '@chakra-ui/react';
import { TodoApiProps } from '../interface';
import { FilterTodo, TodoModal } from '.';
import { FaClipboardList, FaCheck } from 'react-icons/fa';

interface TodoProps {
	data: TodoApiProps[];
	headTitle: string;
	status?: 'done' | 'ongoing';
}
export const Todo: React.FC<TodoProps> = (props) => {
	const [take, setTake] = useState<TodoApiProps>();
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
				// save={addEntryClick}
			>
				<FormControl>
					<FormLabel>Todo</FormLabel>
					<Input
						placeholder="Create Todo"
						type="text"
						defaultValue={take?.title}
					></Input>
				</FormControl>
			</TodoModal>
		</Box>
	);
};
