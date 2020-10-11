import moment from 'moment';

const DATE_WITH_TIME_FORMAT = 'MM/DD/YY hh:mm a';

export class Time {
    public static getDateWithTime(date: Date): string {
        return moment(date).format(DATE_WITH_TIME_FORMAT);
    }
}
