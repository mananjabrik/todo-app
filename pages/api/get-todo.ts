/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from 'react-query';
import axios from 'axios';
import { TodoApiProps } from '../../interface';

const httpCLient = axios.create({
	baseURL: 'https://virtserver.swaggerhub.com',
});

export const useTodoQuery = () =>
	useQuery('todo', async () => {
		const axiosResponse = await httpCLient.get<TodoApiProps[]>(
			'/hanabyan/todo/1.0.0/to-do-list'
		);
		return axiosResponse.data;
	});
