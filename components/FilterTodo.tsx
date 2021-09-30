import { TodoApiProps } from '../interface';

export const FilterTodo = (arr: Array<TodoApiProps>, query?: string) => {
	return arr?.filter(
		(el) =>
			el?.status?.toFixed().indexOf(query?.toLowerCase() ?? '0') !== -1
	);
};
