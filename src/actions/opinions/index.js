import { 
	getOpinionId,
	formattedDate 
} from '../../helpers/utils';

export const CREATE_OPINION = 'CREATE_OPINION';
export const LIKE_OPINION = 'LIKE_OPINION';
export const EDIT_OPINION = 'EDIT_OPINION';


export function createOpinion(authorId, subject, body) {
	return {
		type: CREATE_OPINION,
		opinionId: getOpinionId(authorId),
		authorId,
		subject,
		body,
		date: formattedDate()
	};
}


export function likeOpinion(userId, opinionId) {
	return {
		type: LIKE_OPINION,
		userId,
		opinionId
	};
}

export function editOpinion(opinionId, body) {
	return {
		type: EDIT_OPINION,
		opinionId,
		body
	};
}