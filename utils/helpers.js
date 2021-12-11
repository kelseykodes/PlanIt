const moment = require('moment');
// This is the moment - for dates recieved during 

module.exports = {
    // taking in a date to render 
    format_date: function(date){
        return moment(date).format("MMM Do YYYY");  
    }, 
    // today's date
    get_date: function(){
        return moment().format("MMM Do YYYY");  
    }
};
