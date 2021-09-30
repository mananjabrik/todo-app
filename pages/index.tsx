import type { NextPage } from 'next';
import { Container, GridItem, Grid, Button } from '@chakra-ui/react';
import { Todo } from '../components/Todo';
import { TakeData } from '../state/TakeData';

const Home: NextPage = () => {
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
					<Todo headTitle="Todo" data={TakeData()} />
				</GridItem>
				<GridItem colSpan={6}>
					<Todo headTitle="Done" data={TakeData()} status="done" />
				</GridItem>
			</Grid>
		</Container>
	);
};

export default Home;
