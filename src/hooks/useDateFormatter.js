import { formatInTimeZone } from 'date-fns-tz';

function useDateFormatter(startDate, endDate, startTime, endTime, timeZone) {
  const formatDate = (date, time, timeZone) => {
    try {
      const dateTime = `${date}T${time}`;
      const dateObject = new Date(dateTime);
      if (isNaN(dateObject.getTime())) {
        throw new Error('Invalid date or time value');
      }
      return formatInTimeZone(dateTime, timeZone, 'MMM d, yyyy h:mm a');
    } catch (error) {
      console.error('Date formatting error:', error);
      return 'Invalid date';
    }
  };

  const formattedStartDate = formatDate(startDate, startTime, timeZone);
  const formattedEndDate = formatDate(endDate, endTime, timeZone);

  return `${formattedStartDate} - ${formattedEndDate}`;
}

export default useDateFormatter;
