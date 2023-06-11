import base64 from "base-64";
import utf8 from "utf8";

let encoded: string;
export const encodeToBase64 = (email: string, password: string) => {
	let bytes = utf8.encode(email + ":" + password);
	encoded = base64.encode(bytes);
	return encoded;
};
