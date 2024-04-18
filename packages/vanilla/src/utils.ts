const kebabize = (string: string) : string => ('' + string).replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());

export {
	kebabize
};
