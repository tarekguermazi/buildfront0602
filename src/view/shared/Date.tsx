import moment from "moment";

class Date {
  static HourMinute(date) {
    return moment(date).format("DD-MM-YYYY HH:mm");
  }
}
export default Date;
