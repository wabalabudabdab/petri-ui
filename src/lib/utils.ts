import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUserFio(
  name?: string,
  lastName?: string,
  middleName?: string,
) {
  if (!name || !lastName) {
    throw new Error('Имя и фамилия обязательны для форматирования');
  }
  const fio = lastName + ' ' + name + (middleName ? ` ${middleName}` : '');
  return fio;
}

export function generateRandomPassword(length: number = 12) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}
