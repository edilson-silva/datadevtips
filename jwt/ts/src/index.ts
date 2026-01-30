import { sign } from "./jwt/sign";
import { verify } from "./jwt/verify";

const secret = "secret-xyz";

const token = sign({
	expDays: 1,
	data: {
		sub: "test@test.com",
	},
	secret,
});

console.log(`Generated token: ${token}`);
console.log(`Decoded token data: ${JSON.stringify(verify({ secret, token }))}`);
