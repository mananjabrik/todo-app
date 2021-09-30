import { atom } from 'recoil';
import { TodoApiProps } from '../interface';

export const todoApi = atom<TodoApiProps[]>({
	key: 'todo', // unique ID (with respect to other atoms/selectors)
	default: [], // default value (aka initial value)
});
