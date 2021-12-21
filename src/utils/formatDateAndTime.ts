import moment from 'moment';


const formatDate = (dateStr: string) => {
    if (dateStr === undefined) return '';
    return moment(dateStr).locale('pt-br').format('DD/MM/YYYY');
  };
  
  const formatTime = (dateTimeStr: string) => {
    if (dateTimeStr === undefined) return '';
    return moment(dateTimeStr).locale('pt-br').format('HH:mm');
  };

  export { formatDate, formatTime };