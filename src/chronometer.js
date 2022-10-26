class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000);
  }

  getMinutes() {
    let currentMinutes = Math.floor(this.currentTime / 60)
    return currentMinutes
  }

  getSeconds() {
    let currentSeconds = this.currentTime % 60
    return currentSeconds
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length <= 1) {
      return `0${value}`
    } else {
      return value.toString()
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
