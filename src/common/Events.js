"use strict"; 

class Event {
    constructor (options){
      this.name = options.name || "anynomous"
      this.freq = options.freq || 1
      this.exec = options.exec || (() => console.log(''))
    }
  }

 module.exports = {
     Event
 } 