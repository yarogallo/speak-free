import {
		CREATE_OPINION,
		TOGGLE_OPINION_LIKE,
		SHOW_OPINION_COMMENTS,
		EDIT_OPINION
} from '../constants';
import {
	formattedDate,
	getOpinionId
} from '../../helpers/utils';

export function createOpinion(opinion) {
	return {
		type: CREATE_OPINION,
		id: getOpinionId(authorId),
		date: formattedDate,
		comments: 0,
		likes: 0,
		...opinion,
	};
}

export function toggleOpinionLike(opinionId) {
	return {
		type: TOGGLE_OPINION_LIKE,
		opinionId,
	};
}

export function showOpinionComments(opinionId) {
	return {
		type: SHOW_OPINION_COMMENTS,
		opinionId,
	};
}

export function editOpinion(opinionId, body) {
	return {
		type: EDIT_OPINION,
		opinionId,
		body
	};
}



