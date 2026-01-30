import base64
import hashlib
import hmac
from json import dumps
from typing import Any, Dict


def get_base64_str(obj: Dict[str, Any]) -> str:
    obj_bytes = dumps(obj).encode()
    encoded_bytes = base64.urlsafe_b64encode(obj_bytes)
    encoded_str = encoded_bytes.rstrip(b"=").decode()

    return encoded_str


def generate_hmac_signature(secret: str, header: str, payload: str) -> str:
    digest = hmac.new(
        key=secret.encode(),
        msg=f"{header}.{payload}".encode(),
        digestmod=hashlib.sha256,
    ).digest()
    signature = base64.urlsafe_b64encode(digest).rstrip(b"=").decode()

    return signature
