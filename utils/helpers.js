
  module.exports = { 
    alcohol_emoji: () => {
        const randomNum = Math.random();
        let book = "📗";
    
        if (randomNum > 0.7) {
          book = "📘";
        } else if (randomNum > 0.4) {
          book = "📙";
        }
    
        return `<span for="img" aria-label="alcohol">${book}</span>`;
      },

};

module.exports = { 
    nuts_emoji: () => {
        const randomNum = Math.random();
        let book = "📗";
    
        if (randomNum > 0.7) {
          book = "📘";
        } else if (randomNum > 0.4) {
          book = "📙";
        }
    
        return `<span for="img" aria-label="nuts">${book}</span>`;
      },

};


//  use this for the form to get the date formatted correctly
module.exports = {
    // the helper method 'format_time' will take in a timestamp and return a string with only the time
    format_time: (date) => {
      // We use the 'toLocaleTimeString()' method to format the time as H:MM:SS AM/PM
      return date.toLocaleTimeString();
    },
  };
  