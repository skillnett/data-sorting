import dayjs from 'dayjs';

export const getFormattedDate = date => dayjs(date).format('YYYY MMMM DD');
