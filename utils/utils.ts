export const isEmptyOrSpaces = (text:string) => {
	return text === null || text.match("/^\s*$/") !== null
}