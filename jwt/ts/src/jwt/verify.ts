import { generateHmacSignature } from "../util/parser";

type Options = {
	token: string;
	secret: string;
};

const verify = ({ token, secret }: Options): Record<string, any> => {
	const [headerSent, payloadSent, signatureSent] = token.split(".");

	const verifySignature = generateHmacSignature({
		secret,
		header: headerSent!,
		payload: payloadSent!,
	});

	if (signatureSent !== verifySignature) throw new Error("Invalid JWT token");

	const decodedPayload = JSON.parse(
		Buffer.from(payloadSent!, "base64url").toString("utf-8"),
	);

	if (decodedPayload.exp < Date.now()) throw new Error("Expired JWT token");

	return decodedPayload;
};

export { verify };
