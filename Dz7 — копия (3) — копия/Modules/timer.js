const htmlElements = {
    startBtn: document.querySelector(".container-timer .buttons button.start"),
    stopBtn: document.querySelector(".container-timer .buttons button.stop"),
    resetBtn: document.querySelector(".container-timer .buttons button.reset"),
    watch: document.querySelector(".container-timer .watch"),
    timer: document.querySelector("container .links .timer"),
    input: document.querySelector("div.container-timer input[id=newTime]"),
    changer: document.querySelector("div.container-timer changer[id=changer]"),
    ok: document.querySelector("div.container-timer ok[id=ok]"),
    cancel: document.querySelector("div.container-timer cancel[id=cancel]"),
};

export class Timer {
    constructor({ template }) {
        self = this
        this.template = template;
    }
    editables
    self;
    hours = '00';
    minutes = '05';
    seconds = '00';
    timerId;
    render() {
        clearInterval(this.timerId);
        self.hours = '00';
        self.minutes = '05';
        self.seconds = '00';
        const output = this.template
            .replace('h', self.hours)
            .replace('m', self.minutes)
            .replace('s', self.seconds);
        this.output = output
        htmlElements.watch.innerHTML = output;
    }

    runTimer() {
        clearInterval(self.timerId)
        self.timerId = setInterval(self.updateStopWatch2.bind(self), 1000);
        document.querySelector(".container-timer .buttons button.stop2").removeAttribute("disabled")
        document.querySelector(".container-timer .buttons button.reset2").removeAttribute("disabled")
    }

    stopTimer() {
        self.timerId = clearInterval(self.timerId);
        document.querySelector(".container-timer .buttons button.start2").removeAttribute("disabled")
    }

    resetTimer() {
        clearInterval(self.timerId);
        self.render();
        document.querySelector(".container-timer .buttons button.start2").removeAttribute("disabled")
        document.querySelector(".container-timer .buttons button.reset2").setAttribute("disabled", "disabled")
        document.querySelector(".container-timer .buttons button.stop2").setAttribute("disabled", "disabled")
    }

    updateStopWatch2(time) {
        this.seconds--;
        if (this.seconds <= 0) {
            this.seconds = 59;
            this.minutes--;
            if (this.minutes <= -1) {
                this.minutes = 59;
                this.hours--;
            }
            if (this.hours === 24) {
                this.hours = 0;
            }
        }
        if (this.hours < 10 && this.hours.length !== 2) this.hours = "0" + this.hours;
        if (this.minutes < 10 && this.minutes.length !== 2 ) this.minutes = "0" + this.minutes;
        if (this.seconds < 10 && this.seconds.length !== 2 ) this.seconds = "0" + this.seconds;
        time = `${self.hours}:${self.minutes}:${self.seconds}`;
        htmlElements.watch.innerHTML = time;
    }
    changer(time) {
        time = `${self.hours}:${self.minutes}:${self.seconds}`;
        htmlElements.input.value = time
    }
    save(carentTimerValue) {
        document.querySelector(".container-timer .watch").style.color = ""
        self.hours = carentTimerValue[0];
        self.minutes = carentTimerValue[1];
        self.seconds = carentTimerValue[2];
        htmlElements.watch.innerHTML = htmlElements.input.value;
    }

    isUnique() {
        const carentTimerValue = htmlElements.input.value.split(":")
        console.log(111)
        if (+carentTimerValue[0] < 24 && carentTimerValue[0] >= 0 && carentTimerValue[0] != "") {
            if (+carentTimerValue[1] && carentTimerValue[1] >= 0 && carentTimerValue[1] <= 60 && carentTimerValue[1] != "") {
                if (carentTimerValue[2] >= 0 && +carentTimerValue[2] <= 60 && carentTimerValue[2] != "") {
                    console.log(212)
                    self.save(carentTimerValue)
                    console.log(222)
                    htmlElements.input.style.backgroundColor = ""
                    console.log(221242)
                    htmlElements.input.setAttribute("hidden", "true")
                } else {
                    htmlElements.input.setAttribute("hidden", "true")
                    htmlElements.input.style.backgroundColor = "red"
                    document.querySelector(".container-timer .watch").style.color = "red"

                }
            } else {
                htmlElements.input.setAttribute("hidden", "true")
                htmlElements.input.style.backgroundColor = "red"
                document.querySelector(".container-timer .watch").style.color = "red"

            }
        } else {
            htmlElements.input.setAttribute("hidden", "true")
            htmlElements.input.style.backgroundColor = "red"
            document.querySelector(".container-timer .watch").style.color = "red"

        }
    }
}