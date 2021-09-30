/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from 'react-query';
import axios from 'axios';
import { TodoApiProps } from '../../interface';
import { useRecoilState } from 'recoil';
import { todoApi } from '../../state/todoApi';
import { useEffect } from 'react';
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
