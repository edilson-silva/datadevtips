from time import time

DAY_IN_HOURS = 24
HOUR_IN_MINUTES = 60
MINUTE_IN_SECONDS = 60
SECOND_IN_MILISECONDS = 1000


def get_days_in_miliseconds(days: int) -> int:
    return (
        days
        * DAY_IN_HOURS
        * HOUR_IN_MINUTES
        * MINUTE_IN_SECONDS
        * SECOND_IN_MILISECONDS
    )


def now() -> int:
    return int(time() * 1000)
