import { createHmac } from "node:crypto";

const getBase64String = (obj: Record<string, any>): string => {
	return Buffer.from(JSON.stringify(obj)).toString("base64url");
};

type GenerateHmacSignature = {
	secret: string;
	header: string;
	payload: string;
};

const generateHmacSignature = ({
	secret,
	header,
	payload,
}: GenerateHmacSignature): string => {
	const hmac = createHmac("sha256", secret);
	const signature = hmac.update(`${header}.${payload}`).digest("base64url");

	return signature;
};

export { generateHmacSignature, getBase64String };
