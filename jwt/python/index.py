from jwt.sign import Options, sign
from jwt.verify import verify

secret = "secret-xyz"

options = Options(exp_days=1, data={"sub": "test@test.com"}, secret=secret)

token = sign(options)
print(f"Generated token: {token}")
print(f"Decoded token data: {verify(token, secret)}")
