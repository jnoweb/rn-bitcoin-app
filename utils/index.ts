import format from 'date-fns/format';


export const formatDateTime = (date: number | Date | string): string => {
    const formatStr = "MMM-dd-yyyy";
    return format(new Date(date), formatStr);
};