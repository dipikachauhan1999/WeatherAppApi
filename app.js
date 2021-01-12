const request = require('request')
const url='https://api.openweathermap.org/data/2.5/onecall?lat=28.7041&lon=77.1025&%20exclude=hourly,daily&appid=a9f08a6520735f19c13d1c100d319717';
request({url:url,json:true},(error,res)=>{
    // console.log(res);
    console.log(res.body.current);
    
    
    
})