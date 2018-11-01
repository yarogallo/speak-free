import { createStore } from 'redux';
import { reducer } from '../reducers';
import { formattedDate } from '../helpers/utils';

const defaultStore = {
	user: {
		userId: 'yani123',
		firstName: 'yanisleidi',
		lastName: 'rodriguez',
		password: 'y@ni123*',
		email: 'yaroga88@yahoo.com',
		date: formattedDate(),
		followers: ['jose123', 'hendy123'],
		following: ['jose123', 'adriana123', 'zenia123'],
		phone: '786-254-5656',
		likes: ['opin1', 'opin2']
		
	}
};

export const store = createStore(reducer, defaultStore);