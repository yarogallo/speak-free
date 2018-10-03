import { 
	formattedDate,
	getCommentId,
 } from '../../helpers/utils';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const LIKE_COMMENT = 'LIKE_COMMENT';
export const DISLIKE_COMMENT = 'DISLIKE_COMMENT';



export function createComment(authorId, opinionId, body) {
	return {
		commetnId: getCommentId(authorId, opinionId),
		type: CREATE_COMMENT,
		authorId,
		opinionId,
		body,
		date: formattedDate()
	};
}

export function likeComment(userId, commentId) {
	return {
		type: LIKE_COMMENT,
		userId,
		commentId
	};
}

export function dislikeComment(userId, commentId) {
	return {
		type: DISLIKE_COMMENT,
		userId,
		commentId
	};
}