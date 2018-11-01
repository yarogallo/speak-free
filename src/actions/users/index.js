import {
	CREATE_NEW_USER,
	GET_USER,
	LOG_USER_IN,
	FOLLOW_USER,
	UNFOLLOW_USER,
	EDIT_USER_PROFILE,
	GET_USER_OPINIONS,
	GET_USER_FOLLOWERS,
	GET_USER_FOLLOWING,
	GET_USER_LIKES,
} from '../constants';
import {
	createUserId,
	formattedDate
} from '../../helpers/utils';

export function createNewUser(user) {
	return {
		type: CREATE_NEW_USER,
		id: createUserId(name. lastname), 
		followers: 0,
		following: 0,
		opinions: 0,
		date: formattedDate(),
		...user,
	};
}

export function getUser(email, password) {
	return {
		type: LOG_IN,
		email,  
		password
	};
}

export function logUserIn(email, password) {
	return {
		type: LOG_USER_IN,
		email,  
		password
	};
}

export function followUser(userId) {
	return {
		type: FOLLOW_USER,
		userId,
	};
}

export function unfollowUser(userId) {
	return {
		type: UNFOLLOW_USER,
		userId,
	};
}
export function editUserProfile(user) {
	return {
		type: EDIT_USER_PROFILE,
		...user,
	};
}

export function getUserOpinions() {
	return {
		type: GET_USER_OPINIONS,
	};
}

export function getUserFollowers() {
	return {
		type: GET_USER_FOLLOWERS,
	};
}

export function getUserFollowing() {
	return {
		type: GET_USER_FOLLOWING,
	};
}

export function getUserLikes() {
	return {
		type: GET_USER_LIKES,
	};
}