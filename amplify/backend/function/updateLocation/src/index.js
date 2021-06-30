var AWS = require('aws-sdk');

exports.handler = async (event) => {
    
    var location = new AWS.Location();
    console.log("update loc");
    
    var params = {
        TrackerName: event.arguments.trackerName, /* required */
        Updates: [ /* required */
          {
            DeviceId: `${event.arguments.deviceId}`, /* required */
            Position: [ /* required */
              parseFloat(event.arguments.Longitude),
              parseFloat(event.arguments.Latitude)
              /* more items */
            ],
            SampleTime: new Date || 123456789 /* required */
          },
          /* more items */
        ]
      };
    
      try{
        const data = await location.batchUpdateDevicePosition(params).promise(); 
        console.log(data);           // successful response
        console.log("update loc: success");
      } catch (err){
        console.log("update loc: error");
        console.log(err);
      }

    return params
};
