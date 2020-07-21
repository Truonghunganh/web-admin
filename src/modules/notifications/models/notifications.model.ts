export class NotificationCustom {
  title: string;
  message: string;
  type: string;

  constructor(_title: string, _message: string, _type: string) {
    this.title = _title;
    this.message = _message;
    this.type = _type;
  }
}