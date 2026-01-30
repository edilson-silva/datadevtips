import { getDaysInMiliseconds } from "../util/date";
import { generateHmacSignature, getBase64String } from "../util/parser";

type Options = {
	data: Record<string, any>;
	expDays: number;
	secret: string;
};

const sign = ({ data, expDays, secret }: Options): string => {
	const now = Date.now();

	const header = {
		alg: "HS256",
		typ: "JWT",
	};

	const payload = {
		...data,
		iat: now,
		exp: now + getDaysInMiliseconds(expDays),
	};

	const base64Header = getBase64String(header);
	const base64Payload = getBase64String(payload);

	const signature = generateHmacSignature({
		secret: secret,
		header: base64Header,
		payload: base64Payload,
	});

	return `${base64Header}.${base64Payload}.${signature}`;
};

export { sign };
