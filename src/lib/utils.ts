import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function generateRandomArray(length = 10, maxValue = 200) {
  return Array.from({ length }, () => Math.floor(Math.random() * maxValue));
}

export function delay(time = 500) {
  return new Promise((res) => setTimeout(res, time));
}
