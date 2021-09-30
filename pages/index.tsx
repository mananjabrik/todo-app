import type { NextPage } from 'next';
import {
	Container,
	Text,
	Stack,
	GridItem,
	Grid,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	Table,
	Th,
	Tr,
	Td,
	Thead,
	Tbody,
	Box,
	Icon,
} from '@chakra-ui/react';

import { useRecoilState } from 'recoil';
import { todoApi } from '../state/todoApi';
import { useTodoQuery } from './api/get-todo';
import { useEffect } from 'react';
import { TodoApiProps } from '../interface';
import * as F from 'react-icons/fa';
import { Todo } from '../components/Todo';
const Home: NextPage = () => {
	const { data } = useTodoQuery();

	// console.log(FilterItems(data ?? [], '1'));

	return (
		<Container py="5">
			<Button w="full" colorScheme="green">
				Create
			</Button>
			<Grid
				templateColumns="repeat(12, 1fr)"
				templateRows="repeat(2, 1fr)"
				gap={2}
				py="2"
			>
				<GridItem colSpan={6}>
					<Todo
						headTitle="Todo"
						datas={data ?? []}
						status="ongoing"
					/>
				</GridItem>
				<GridItem colSpan={6}>
					<Todo headTitle="Done" datas={data ?? []} status="done" />
				</GridItem>
			</Grid>
		</Container>
	);
};

export default Home;
