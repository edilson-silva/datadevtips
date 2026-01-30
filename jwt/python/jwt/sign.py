from typing import Any, Dict

from pydantic import BaseModel
from util.date import get_days_in_miliseconds, now
from util.parser import generate_hmac_signature, get_base64_str


class Options(BaseModel):
    data: Dict[str, Any]
    exp_days: int
    secret: str


def sign(options: Options) -> str:
    n = now()
    header = {
        "alg": "HS256",
        "typ": "JWT",
    }
    payload = {
        **options.data,
        "iat": n,
        "exp": n + get_days_in_miliseconds(options.exp_days),
    }

    base64_header = get_base64_str(header)
    base64_payload = get_base64_str(payload)

    signature = generate_hmac_signature(
        secret=options.secret, header=base64_header, payload=base64_payload
    )

    return f"{base64_header}.{base64_payload}.{signature}"
