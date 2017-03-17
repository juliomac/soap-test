import { Meteor } from 'meteor/meteor';
import Soap from 'soap';
// var Soap = require('soap');



Meteor.startup(() => {
  // code to run on server at startup



  // http://www.webservicex.net/length.asmx?WSDL

  // var url = 'http://example.com/wsdl?wsdl';
  // var args = {name: 'value'};
  // soap.createClient(url, function(err, client) {
  //     client.MyFunction(args, function(err, result) {
  //         console.log(result);
  //     });
  // });


  var username =  "dn34zu0phr";
  var password =  "py4asps2et";
  var hotelID = 118;
  // // var url = 'https://secure.alesiadistribution.com/xml/saasmart/Reservations.php?wsdl';
  // var url = 'https://pms.verticalbooking.com/saasmart/OTA_PMS.php?wsdl';
  // var url = 'http://www.webservicex.com/globalweather.asmx?WSDL';
  var url = 'https://pms.verticalbooking.com/saasmart/OTA_PMS.php?wsdl';

  //
  //
  // var args ={
  //     OTA_PingRQ:{
  //       TimeStamp: '2000-09-06T10:45:29+02:00',
  //       Version: '1'
  //     },
  //     EchoData:'Teste Meteor',
  //     UsernameToken: {
  //       Username: username,
  //       Password: password
  //     }
  //   };

    var args= {
      CountryName: "Brazil"
    };


//     Soap.createClient(url, function(err, client) {
//       console.log("Error create",err);
//       console.log("url",url);
//
//         // BASIC AUTH?
//         // client.setSecurity(new Soap.BasicAuthSecurity(username, password));
//
//         // ALTERNATIVE FOR SECURITY
//         // var wsSecurity = new WSSecurity(username, password);
//         // client.setSecurity(wsSecurity);
//
//
//         // client.GetCitiesByCountry(args, function(err, result) {
//         //     console.log(result.GetCitiesByCountryResult);
//         //     console.log("Erro",err);
//         // });
//
//
// console.log("describe", client.describe());
//
// client.GetWeather({ CityName: 'Belo Horizonte', CountryName:'Brazil'}, function(err, result) {
//     console.log(result.GetWeatherResult);
// });
//
//
//     });



    Soap.createClient(url, function(err, client) {
      // console.log("Error create",err);
      console.log("url",url);
      console.log("passei pelo segundo cliente");
      console.log("describe", client.describe());
      // console.log("describe Ping", client.describe().OTA_PMS.OTA_PMS_Port.OTA_HotelInvNotif_Request);
      console.log("describe Inv1", client.describe().OTA_PMS.OTA_PMS_Port.OTA_HotelInvNotif_Request);
      console.log("describe Inv2", client.describe().OTA_PMS.OTA_HotelInvNotif_Request);
      // console.log("describe Inv3", client.describe().OTA_PMS_Port.OTA_HotelInvNotif_Request); //Não Funciona
      console.log("describe Inv4", client.describe().OTA_HotelInvNotif_Request);
      console.log("describe Inv5", client.describe().OTA_HotelInvNotif_RQ);
      console.log("describe Ping1", client.describe().OTA_PingRQ);
      // console.log("describe Ping2", client.describe().OTA_Ping_Request.OTA_PingRQ); //Não Funciona


      // var args ={
      //     OTA_PingRQ:{
      //       TimeStamp: '2000-09-06T10:45:29+02:00',
      //       Version: '1',
      //       EchoData:'Teste Meteor'
      //     },
      //     EchoData:'Teste Meteor',
      //     UsernameToken: {
      //       Username: username,
      //       Password: password
      //     }
      //   };

      var args ={
            EchoData:'Teste Meteor'
        };

      // var wsdlOptions = {
      //   "overrideRootElement": {
      //     "namespace": "ns",
      //     "xmlnsAttributes": [{ "name": "xmlns:ns", "value": "http://www.opentravel.org/OTA/2003/05" }]
      //   }
      // };


      var wsdlOptions = {
        "overrideRootElement": {
          "namespace": "xmlns:ns",
          "xmlnsAttributes": [{
            "name": "xmlns:ns",
            "value": "http://www.opentravel.org/OTA/2003/05"
          }, {
            "name": "xmlns:add",
            "value": "http://schemas.xmlsoap.org/ws/2004/08/addressing"
          }, {
            "name": "xmlns:oas",
            "value": "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
          },
        ]
        }
      };




      client.OTA_Ping_Request(args, wsdlOptions, function(err, result) {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
          console.log("ERROR", JSON.stringify(err, null, 4));
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
          console.log(JSON.stringify(result, null, 4));
          // console.log("Erro",err);
      });

// var args2 = {
//
// };
//
//       client.OTA_HotelInvCountNotif_Request(args2, function(err, result) {
//         console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ");
//
//           console.log(JSON.stringify(result, null, 4));
//           // console.log("Erro",err);
//       });

    });

    // try {
    //   var client = Soap.createClient('http://www.webservicex.com/globalweather.asmx?WSDL');
    //   // var result = client.MyFunction(args);
    //
    //   // client.setSecurity(new Soap.WSSecurity(myUser, myPass));
    //   client.setSecurity(new soap.BasicAuthSecurity(username, password));
    //
    //   var result = client.EchoData.theWebService(args);
    //         // Meteor.call('doSomethingWithResults',result);
    //
    //
    //   console.log("result",result);
    //
    //   console.log(result);
    // }
    // catch (err) {
    //   if(err.error === 'soap-creation') {
    //     console.log('SOAP Client creation failed');
    //   }
    //   else if (err.error === 'soap-method') {
    //     console.log('SOAP Method call failed');
    //   } else console.log("err", err);
    //
    //
    // }


    // Exemplo com callback?
    // soap.createClient(url, function(err, client){
    //   // The Client now has all the methods of the WSDL. Use it to create a new order by feeding it the JSON Payload
    //   client.NewOrder(OrderRequestElement, function(err, result, body) {
    //     parseString(body, function(err, result){
    //     // Get The Result From The Soap API and Parse it to JSON
    //     var requestResult = result['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0].NewOrderResponse[0].return[0];
    //     console.log(requestResult);
    //     });
    //   });
    // });










console.log("comecou");














});
