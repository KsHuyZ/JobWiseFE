import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.extend(duration);
export const validateEmail = (_: any, value: string) => {
  // Regular expression to validate an email address
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!value || emailRegex.test(value)) {
    return Promise.resolve();
  }

  throw new Error('Please enter a valid email address');
};

export const getCurrentDate = () => {
  return dayjs('11-9-2023').fromNow();
};
