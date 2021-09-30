import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useTodoQuery } from '../pages/api/get-todo';
import { todoApi } from './todoApi';

export const StateData = () => {
	const { data } = useTodoQuery();
	const [todoData, setTodoData] = useRecoilState(todoApi);
	useEffect(() => {
		if (data) {
			setTodoData(data);
		}
	}, [data, setTodoData]);
	return todoData;
};
