import moment from "moment";

class Date {
  static Hour(date) {
    return moment(date).format("hh:mm a");
  }
  static HourMinute(date) {
    return moment(date).format("DD-MM-YYYY HH:mm");
  }

  static fullDate(date) {
    return moment(date).format("DD-MM-YYYY");
  }
  static Day(date) {
    return moment(date).format("D");
  }

  static Month(date) {
    return moment(date).format("MMMM");
  }

  static Year(date) {
    return moment(date).format("y");
  }

  static date(date) {
    const day = this.Day(date);
    const month = this.Month(date);
    const year = this.Year(date);
    const full_date = `${day} ${month} ${year} `;

    return full_date;
  }

  static DetaillDate(date) {
    return moment(date).format("dddd, MMMM Do YYYY");
  }
}
export default Date;
