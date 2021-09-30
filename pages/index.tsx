import type { NextPage } from 'next';
import { Container, Text, Stack } from '@chakra-ui/react';

import { useRecoilState } from 'recoil';
import { todoApi } from '../state/todoApi';
import { useTodoQuery } from './api/get-todo';
import { useEffect } from 'react';

const Home: NextPage = () => {
	const { data } = useTodoQuery();

	return (
		<Container>
			<Stack></Stack>
		</Container>
	);
};

export default Home;
