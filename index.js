// Your code here

class CurrentDateTime {
  constructor() {
    this.date = new Date();
    this.hour24 = this.date.getHours();
    this.hour12 = this.hour24 >= 12 ? this.hour24 - 12 : this.hour24;
    this.min = this.date.getMinutes();
    this.sec = this.date.getSeconds();
    this.meridiem = this.hour24 >= 12 ? 'P.M.' : 'A.M';
  }

  dateString() {
    return this.date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  timeString() {
    const leading0 = function leading0(num) {
      return num >= 10 ? `${num}` : `0${num}`;
    };
    return `${leading0(this.hour12)}:${leading0(this.min)}:${leading0(
      this.sec
    )} ${this.meridiem}`;
  }

  static htmlClockDisplay(jquery_id = '#clock') {
    const date = new CurrentDateTime();
    console.log(date.dateString());
    console.log(date.timeString());
    const clock = $(jquery_id);
    clock.empty();
    clock.append('<section class="date">');
    clock.append(date.dateString());
    clock.append('<section class="time">');
    clock.append(date.timeString());
  }
}

$(document).ready(function() {
  window.setInterval(CurrentDateTime.htmlClockDisplay, 1000);
});

// let intervalID = window.setInterval(myCallback, 500);
