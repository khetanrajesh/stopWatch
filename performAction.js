function splitTime(hr, min, sec, ms) {

    this.hr = hr;
    this.min = min;
    this.sec = sec;
    this.ms = ms;

}

//perform tasks based on the action "start"/"stop"/"reset"/'split"
function perform(action, display, ele) {

    var _this = this;

    if (action == "start") {

        this.ms = this.ms + 1;

        if (this.ms == 1000) {
            this.ms = 0;
            this.sec = this.sec + 1;
        }

        if (this.sec == 60) {
            this.sec = 0;
            this.min = this.min + 1;
        }

        if (this.min == 60) {
            this.min = 0;
            this.hr = this.hr + 1;
        }

        display.innerHTML = this.hr + ":" + this.min + ":" + this.sec + ":" + this.ms;
        this.timeout = setTimeout(function() {
            _this.perform(action, display);
        }, 1);

    }

    if (action == "stop") {

        clearTimeout(this.timeout);

        display.nextElementSibling.lastElementChild.style.padding = "10px 15px";

        if (!this.lastSplitAdded) {

            this.history.push(new splitTime(this.hr, this.min, this.sec, this.ms));
            this.lastSplitAdded = 1;
        }

        var jsonString = JSON.stringify(this.history);
        obj = JSON.parse(jsonString);

        var summary = "";


        for (var time in obj) {

            summary = summary + obj[time].hr + ":" + obj[time].min + ":" + obj[time].sec + ":" + obj[time].ms + "<br>";

        }

        display.nextElementSibling.lastElementChild.innerHTML = summary;

    }

    if (action == "reset") {

        this.hr = 0;
        this.hr = 0;
        this.min = 0;
        this.sec = 0;
        this.ms = 0;
        clearTimeout(this.timeout);
        this.history.length = 0;
        this.lastSplitAdded = false;
        display.innerHTML = "00:00:00:00";
        this.summary = "";
        display.nextElementSibling.lastElementChild.innerHTML = "";
        display.nextElementSibling.lastElementChild.style.padding = "";
    }



    if (action == "split") {

        this.history.push(new splitTime(this.hr, this.min, this.sec, this.ms));

        this.summary = this.summary + this.hr + ":" + this.min + ":" + this.sec + ":" + this.ms + "<br>";

        display.nextElementSibling.lastElementChild.style.padding = "10px 15px";

        display.nextElementSibling.lastElementChild.innerHTML = this.summary;

    }

}