export function formattedDate() {
	const arrDate = new Date().toDateString().split(" ");
	return {
		day: arrDate[2],
		month: arrDate[1],
		year: arrDate[3],
	};
}

export function createUserId (name, lastname) {
	return `${name.toLowerCase()}_${lastname.toLowerCase()}_${Date.now()}_${name.charAt(0).toLowerCase()}_${lastname.charAt(1).toLowerCase()}`;
}

export function getCommentId(authorId, opinionId) {
	const date = Date.now();
	return `comment${date}-${authorId}-${opinionId}`;
}

export function getOpinionId(authorId) {
	const date = Date.now();
	return `opinion${date}-${authorId}`;
}

export function getUserId(lastname) {
	const clean = lastname.trim().toLowerCase();
	const date = Date.now();
	return `user${date}-${clean}`
}