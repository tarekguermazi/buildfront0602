import moment from "moment";

class Date {
  static HourMinute(date) {
    return moment(date).format("DD-MM-YYYY HH:mm");
  }

  static Day(date) {
    return moment(date).format("D");
  }

  static Month(date) {
    return moment(date).format("MMMM");
  }
}
export default Date;
