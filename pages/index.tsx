import type { NextPage } from 'next';
import { Container, GridItem, Grid, Heading } from '@chakra-ui/react';
import { CreatorTodo, Todo } from '../components';
import { StateData } from '../state';

const Home: NextPage = () => {
	return (
		<Container py="5">
			<Heading textAlign="center" my="5" color="green">
				Todo Apps
			</Heading>
			<CreatorTodo />
			<Grid
				templateColumns="repeat(12, 1fr)"
				templateRows="repeat(2, 1fr)"
				gap={2}
				py="2"
			>
				<GridItem colSpan={6}>
					<Todo headTitle="Todo" data={StateData()} />
				</GridItem>
				<GridItem colSpan={6}>
					<Todo headTitle="Done" data={StateData()} status="done" />
				</GridItem>
			</Grid>
		</Container>
	);
};

export default Home;
