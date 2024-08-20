import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function getErrorMessage(error: unknown) {
	if (error instanceof Error) return error.message
	return String(error)
}

const baseUrl = 'http://localhost:3000/';

function parseTimestamp(timestamp: string) {
	const date = new Date(timestamp);
	const formattedDate = date.toISOString().split('T')[0];

	const formattedTime = date.toTimeString().split(' ')[0].substring(0, 5);

	return `${formattedDate} / ${formattedTime}`;
}

export {baseUrl, parseTimestamp}

export default getErrorMessage