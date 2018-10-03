import { 
	getUserId,
	formattedDate
 } from '../../helpers/utils';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';

export function createAccount(name, lastname, email, password, phone) {
	return {
		type: CREATE_ACCOUNT,
		userId: getUserId(lastname),
		name,
		lastname,
		email,
		password,
		phone,
		date: formattedDate(),
		followers: [],
		following: []
	};
}

export function followUser(userId, userToFollowId) {
	return {
		type: FOLLOW_USER,
		userId, 
		userToFollowId
	};
}

export function unfollowUser(userId, userToUnfollowId) {
	return {
		type: UNFOLLOW_USER,
		userId, 
		userToUnfollowId
	};
}

