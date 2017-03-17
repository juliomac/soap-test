import { Meteor } from 'meteor/meteor';
import Soap from 'soap';
// var Soap = require('soap');



Meteor.startup(() => {


  var url = 'https://pms.verticalbooking.com/saasmart/OTA_PMS.php?wsdl';



    Soap.createClient(url, function(err, client) {

      console.log("describe", client.describe());


      var args ={
            EchoData:'Test Meteor SOAP CALL'
        };


      client.OTA_Ping_Request(args, wsdlOptions, function(err, result) {
          console.log("ERROR", JSON.stringify(err, null, 4));
          console.log(JSON.stringify(result, null, 4));
          // console.log("Erro",err);
      });


    });


});
