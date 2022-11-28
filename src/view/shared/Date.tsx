import moment from "moment";

class Date {
  static HourMinute(date) {
    return moment(date).format("HH:mm");
  }
}
export default Date;
