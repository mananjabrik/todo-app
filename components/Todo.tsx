import React from 'react';
import { Stack, Text, Icon, Box, Heading } from '@chakra-ui/react';
import { TodoApiProps } from '../interface';
import { FaTimes, FaClipboardList } from 'react-icons/fa';
import { FilterTodo } from '.';
interface TodoProps {
	datas: TodoApiProps[];
	headTitle: string;
	status: 'done' | 'ongoing';
}
export const Todo: React.FC<TodoProps> = (props) => {
	return (
		<Box>
			<Box bg="green.200" p="1" rounded="md">
				<Heading size="md">{props.headTitle}</Heading>
			</Box>
			{FilterTodo(
				props.datas ?? [],
				props?.status === 'done' ? '1' : '0'
			).map((todo) => {
				return (
					<Stack
						key={todo.id}
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						p="1"
					>
						<Text>{todo.title}</Text>
						<Icon as={FaClipboardList} />
					</Stack>
				);
			})}
		</Box>
	);
};
