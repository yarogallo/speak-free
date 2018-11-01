import {
	CREATE_COMMENT,
	TOGGLE_COMMENT_LIKE
} from '../constants';
import {
	formattedDate,
	getCommentId
} from '../../helpers/utils';

export function createComment(comment) {
	return {
		type: CREATE_COMMENT,
		id: getCommentId,
		data: formattedDate,
		likes: 0,
		...comment,
	};
}

export function (commentId) {
	return {
		type: TOGGLE_COMMENT_LIKE,
		commentId,
	};
}