import { sign } from "./jwt/sign";

const secret = "secret-xyz";

const token = sign({
	expDays: 1,
	data: {
		sub: "test@test.com",
	},
	secret,
});

console.log(`Token: ${token}`);
