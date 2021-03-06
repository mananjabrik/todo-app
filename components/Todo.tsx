import React, { useState } from 'react';

import {
	Stack,
	Text,
	Icon,
	Box,
	Heading,
	useToast,
	useDisclosure,
} from '@chakra-ui/react';

import { TodoApiProps } from '../interface';
import { FilterTodo, UpdateTodo } from '.';
import { FaClipboardList, FaCheck } from 'react-icons/fa';

interface TodoProps {
	data: TodoApiProps[];
	headTitle: string;
	status?: 'done' | 'ongoing';
}
export const Todo: React.FC<TodoProps> = (props) => {
	const toast = useToast();
	const [take, setTake] = useState<TodoApiProps>();
	const { isOpen, onClose, onOpen } = useDisclosure();
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
				props?.status == 'done' ? '1' : '0'
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
							props.status == 'done'
								? toast({
										title: "Can't be edited",
										description: 'Couse todo is done',
										status: 'error',
										duration: 3000,
										isClosable: true,
										position: 'top',
								  })
								: (setTake(todo), onOpen());
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
			<UpdateTodo fieldData={take} isOpen={isOpen} onClose={onClose} />
		</Box>
	);
};
