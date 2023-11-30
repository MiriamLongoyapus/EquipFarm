import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// this handles merging of tailwind classes for dynamic classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
