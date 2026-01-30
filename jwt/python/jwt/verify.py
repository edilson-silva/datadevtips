import base64
from json import loads
from typing import Any, Dict

from util.date import now
from util.parser import generate_hmac_signature


def verify(token: str, secret: str) -> Dict[str, Any]:
    header_sent, payload_sent, signature_sent = token.split(".")

    verify_signature = generate_hmac_signature(secret, header_sent, payload_sent)

    if signature_sent != verify_signature:
        raise Exception("Invalid JWT token")

    # Add padding to generate a valid base64 string (python need it)
    padding = "=" * abs(len(verify_signature) % 4)
    decoded_payload = loads(
        base64.urlsafe_b64decode(f"{payload_sent}{padding}").decode()
    )

    if decoded_payload.get("exp") < now():
        raise Exception("Expired JWT token")

    return decoded_payload
