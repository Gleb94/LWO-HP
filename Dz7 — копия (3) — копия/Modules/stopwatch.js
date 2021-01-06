const htmlElements = {
    startBtn: document.querySelector(".container-stopWatch .buttons button.start"),
    stopBtn: document.querySelector(".container-stopWatch .buttons button.stop"),
    resetBtn: document.querySelector(".container-stopWatch .buttons button.reset"),
    watch: document.querySelector(".container-stopWatch .watch"),
    stopWatch: document.querySelector(".contener .links .stopwatch"),
};

export class StopWatchStart {
    constructor({ template }) {
        self = this;
        this.template = template;
    }

    self;
    hours = '00';
    minutes = '00';
    seconds = '00';
    timerId;
    render() {
        clearInterval(this.timerId);
        self.hours = '00';
        self.minutes = '00';
        self.seconds = '00';
        const output = this.template
            .replace('h', self.hours)
            .replace('m', self.minutes)
            .replace('s', self.seconds);
        this.output = output
        htmlElements.watch.innerHTML = output;
    }

    runStopWatch() {
        console.log(this, self)
        clearInterval(self.timerId);
        self.timerId = setInterval(self.updateStopWatch.bind(self), 1000);
        document.querySelector(".container-stopWatch .buttons button.stop").removeAttribute("disabled")
        document.querySelector(".container-stopWatch .buttons button.reset").removeAttribute("disabled")
    }

    stopStopWatch() {
        self.timerId = clearInterval(self.timerId);
        document.querySelector(".container-stopWatch .buttons button.start").removeAttribute("disabled")
    }

    resetStopWatch() {
        clearInterval(self.timerId);
        self.render()
        document.querySelector(".container-stopWatch .buttons button.start").removeAttribute("disabled")
        document.querySelector(".container-stopWatch .buttons button.reset").setAttribute("disabled", "disabled")
        document.querySelector(".container-stopWatch .buttons button.stop").setAttribute("disabled", "disabled")
    }

    updateStopWatch() {
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours++;
            }
            if (this.hours === 24) {
                this.hours = 0;
            }
        }
        if (this.hours < 10 && this.hours.length !== 2) this.hours = "0" + this.hours;
        if (this.minutes < 10 && this.minutes.length !== 2) this.minutes = "0" + this.minutes;
        if (this.seconds < 10 && this.seconds.length !== 2) this.seconds = "0" + this.seconds;
        const time = `${this.hours}:${this.minutes}:${this.seconds}`;
        htmlElements.watch.innerHTML = time;
    }

}