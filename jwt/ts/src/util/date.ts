const DAY_IN_HOURS = 24;
const HOUR_IN_MINUTES = 60;
const MINUTE_IN_SECONDS = 60;
const SECOND_IN_MILISECONDS = 1000;

const getDaysInMiliseconds = (days: number): number => {
	return (
		days *
		DAY_IN_HOURS *
		HOUR_IN_MINUTES *
		MINUTE_IN_SECONDS *
		SECOND_IN_MILISECONDS
	);
};

export { getDaysInMiliseconds };
