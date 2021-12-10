const moment = require('moment');

module.exports = {
    format_date: function(date){
        return moment(date).format("MM/DD/YY");  
    }, 
    get_date: function(){
        return moment().format("MMM Do YYYY");  
        // Dec 8th 2021
    }
};
