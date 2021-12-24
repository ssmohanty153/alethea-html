//  var a={"191": "5955", "195": "5975", "199": "5995", "203": "6015", "207": "6035", "211": "6055", "215": "6075","219": "6095", "223": "6115", "227": "6135", "231": "6155", "235": "6175", "239": "6195", "243": "6215","247": "6235", "251": "6255", "255": "6275", "259": "6295", "263": "6315", "267": "6335", "271": "6355","275": "6375", "279": "6395", "283": "6415", "287": "6435", "291": "6455", "295": "6475", "299": "6495","303": "6515", "307": "6535", "311": "6555", "315": "6575", "319": "6595", "323": "6615", "327":"6635","331":"6655", "335": "6675", "339": "6695", "343": "6715", "347": "6735", "351": "6755", "355": "6775","359": "6795", "363": "6815", "367": "6835", "371": "6855", "375": "6875", "379": "6895", "383": "6915","387": "6935", "391": "6955", "395": "6975", "399": "6995", "403": "7015", "407": "7035", "411": "7055","415": "7075", "419": "7095", "423": "7115"};
//  for(var x in a){
//     console.log(x);
//  }

var tableData = {
  product: "D2A_TG",
  TG: {
    Version: "6.5.4",
    Number: "2",
  },
  RH1: {
    Lina_IP: "192.168.101.40",
    Version: "3.6_RC1",
    Tg_IP: "192.168.101.1",
    Number: "502",
  },
  RH2: {
    Version: "6.5.4",
    Number: "229",
  },
  RH3: {
    Version: "6.5.4",
    Number: "228",
  },
  RH4: {
    Version: "6.5.4",
    Number: "227",
  },
  RH5: {
    Version: "4.8_RC3",
    Number: "171",
  },
  RH6: {
    Version: "6.5.4",
    Number: "226",
  },
  RH7: {
    Lina_IP: "192.168.107.177",
    Version: "3.6_RC1",
    Tg_IP: "192.168.107.1",
    Number: "503",
  },
  Endpoint: {
    version: "6.5.4",
    number: "74",
  },
};
function lower(tableData) {
   for (var prop in tableData) {
   if (typeof tableData[prop] === 'string') {
     tableData[prop] = tableData[prop].toLowerCase();
   }
   if (typeof tableData[prop] === 'object') {
     lower(tableData[prop]);
     }
   }
   return tableData;
 }
 console.log(tableData);