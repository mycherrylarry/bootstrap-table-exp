function generateData(count) {
   var fiftyP = [];
   var ninetyP = [];
   var avg=[];
   for(i = 0; i < count; i++) {
     fiftyP[i] = Math.floor(Math.random()*Math.random()*100 + 500);
     ninetyP[i] = Math.floor(Math.random()*200 + 400);
     avg[i] = Math.floor(Math.random()*50 +  450);
   }

   return [
   {
	name: '50 Percentile',
	data: fiftyP
   },
   {
	name: '90 Percentile',
	data: ninetyP
   },
   {
	name: 'Average',
	data: avg
   }
   ];
}

function drawCharts() {
   var sample = 10;
   
   // DIT SIze
   Highcharts.chart('DitSize', {
     title: {
       text: 'DIT Size'
     },
     xAxis: {
       allowDecimals: false,
       type: 'datetime',
       labels: {
       }
     },
     yAxis: {
       min: 0,
       title: {
         text: 'MByte'
       },
       labels: {
         formatter: function() {
           return this.value * 1000;
         }
       }
     },
     tooltip: {
    	pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
           shared: true
     },
     plotOptions: {
       line: {
         pointInterval: 24*3600*1000,
         pointStart: Date.UTC(2015,4,31,0,0,0)
       }
     },
     series: [{
       name: '50 Percentile',
       data: [5,3,4,7,2]
     }, 
      {
       name: '90 Percentile',
       data: [7,3,7,8,2]
     },
      {
       name: 'Average',
       data: [2,2,3,2,1]
     },
   ]
   });
   
   
   // Provisioning
   
   Highcharts.chart('Provisioning', {
     title: {
       text: 'Provisioning Status'
     },
     xAxis: {
       allowDecimals: false,
       type: 'datetime',
       labels: {
       }
     },
     yAxis: {
       min: 0,
       title: {
         text: 'Percentage'
       },
       labels: {
         formatter: function() {
           return this.value  + ' %';
         }
       }
     },
     tooltip: {
    	pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
           shared: true
     },
     plotOptions: {
       column: {
         stacking: 'percent',
         pointInterval: 24*3600*1000,
         pointStart: Date.UTC(2015,4,31,0,0,0),
       },
       spline: {
         pointInterval: 24*3600*1000,
         pointStart: Date.UTC(2015,4,31,0,0,0),
       }
     },
     series: [{
       type: 'column',
       name: 'Provisioned',
       data: [5,3,4,7,2]
     }, 
      {
       type: 'column',
       name: 'In MM',
       data: [2,2,3,2,1]
     },
      {
       type: 'column',
       name: 'Down',
       data: [3,4,4,2,5]
     },
      {
       type: 'spline',
       name: 'Healthy Rate',
       data: [50,40,40,20,50],
       marker: {
         lineWidth: 2,
         lineColor: Highcharts.getOptions().colors[3],
         fillColor: 'white'
       }
     }
   ]
   });
   
   // HardWare SKU
   
   Highcharts.chart('SKU', {
     chart: {
       type: 'area'
     },
     title: {
       text: 'SKU'
     },
     xAxis: {
       allowDecimals: false,
       type: 'datetime',
       labels: {
       }
     },
     yAxis: {
       title: {
         text: 'Machine Count'
       },
       labels: {
         formatter: function() {
           return this.value / 1000 + 'k';
         }
       }
     },
     tooltip: {
        pointFormat: 'Machine count in {series.name}: <b>{point.y:,.0f}</b>'
     },
     plotOptions: {
       area: {
         pointInterval: 24*3600*1000,
         pointStart: Date.UTC(2015,4,31,0,0,0),
         marker: {
           enabled: false,
           symbol: 'circle',
           radius: 2,
           states: {
             hover: {
               enabled: true
             }
           }
         }
       }
     },
     series: [{
       name: 'SKU-1',
       data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
         1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
         27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
         26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
         24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
         22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
         10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104
       ]
     }, 
      {
       name: 'SKU-2',
       data: [null, null, null, null, null, null, null, null, null, null,
         5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
         4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
         15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
         33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
         35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
         21000, 20000, 19000, 18000, 18000, 17000, 16000
       ]
     },
      {
       name: 'SKU-3',
       data: [null, null, null, null, null, null, null, null, null, null,
         null, null, null, null, 17, 20, 26, 60, 69, 60, 605, 1471, 1322,
         1238, 2221, 3129, 5089, 5339, 5399, 5538, 6643, 7092, 7478,
         7915, 8385, 9055, 11205, 13044, 15393, 17935, 20062, 21049,
         22952, 34804, 35431, 38197, 55000, 43000, 41000, 39000, 37000,
         35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
         21000, 20000, 19000, 18000, 18000, 17000, 16000
       ]
     }
   ]
   });
   
   // Free Disk Space
   var ranges = [
           [1246406400000, 14.3, 89.7],
           [1246492800000, 24.5, 96.8],
           [1246579200000, 15.5, 79.6],
           [1246665600000, 16.7, 80.7],
           [1246752000000, 16.5, 75.0],
       ],
       nintyPer = [
           [1246406400000, 70.1],
           [1246492800000, 92.1],
           [1246579200000, 71.1],
           [1246665600000, 70.1],
           [1246752000000, 65.1],
       ],
       fiftyPer = [
           [1246406400000, 50.1],
           [1246492800000, 52.1],
           [1246579200000, 49.1],
           [1246665600000, 40.1],
           [1246752000000, 35.1],
       ];
   
   
   Highcharts.chart('DiskFreeC', {
       title: {
           text: 'Disk Free Space (C:)'
       },
   
       xAxis: {
           type: 'datetime'
       },
   
       yAxis: {
           title: {
               text: null
           }
       },
   
       tooltip: {
           crosshairs: true,
           shared: true,
           valueSuffix: '%'
       },
   
       legend: {
       },
   
       series: [{
           name: '90 Percentile',
           data: nintyPer,
           zIndex: 1,
           marker: {
               fillColor: 'white',
               lineWidth: 2,
               lineColor: Highcharts.getOptions().colors[0]
           }
       }, {
           name: '50 Percentile',
           data: fiftyPer,
           zIndex: 1,
           marker: {
               fillColor: 'white',
               lineWidth: 2,
               lineColor: Highcharts.getOptions().colors[0]
           }
       }, {
           name: '[Max, Min] Range',
           data: ranges,
           type: 'arearange',
           lineWidth: 0,
           linkedTo: ':previous',
           color: Highcharts.getOptions().colors[0],
           fillOpacity: 0.3,
           zIndex: 0,
           marker: {
               enabled: false
           }
       }]
   });
   
   Highcharts.chart('DiskFreeD', {
       title: {
           text: 'Disk Free Space (D:)'
       },
   
       xAxis: {
           type: 'datetime'
       },
   
       yAxis: {
           title: {
               text: null
           }
       },
   
       tooltip: {
           crosshairs: true,
           shared: true,
           valueSuffix: '%'
       },
   
       legend: {
       },
   
       series: [{
           name: '90 Percentile',
           data: nintyPer,
           zIndex: 1,
           marker: {
               fillColor: 'white',
               lineWidth: 2,
               lineColor: Highcharts.getOptions().colors[0]
           }
       }, {
           name: '50 Percentile',
           data: fiftyPer,
           zIndex: 1,
           marker: {
               fillColor: 'white',
               lineWidth: 2,
               lineColor: Highcharts.getOptions().colors[0]
           }
       }, {
           name: '[Max, Min] Range',
           data: ranges,
           type: 'arearange',
           lineWidth: 0,
           linkedTo: ':previous',
           color: Highcharts.getOptions().colors[0],
           fillOpacity: 0.3,
           zIndex: 0,
           marker: {
               enabled: false
           }
       }]
   });
   
   
   // CPU
   Highcharts.chart('CPU', {
     title: {
       text: 'CPU Usage'
     },
     xAxis: {
       allowDecimals: false,
       type: 'datetime',
       labels: {
       }
     },
     yAxis: {
       min: 0,
       title: {
         text: 'Percentage'
       },
       labels: {
         formatter: function() {
           return this.value * 10 + "%";
         }
       }
     },
     tooltip: {
    	pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
           shared: true
     },
     plotOptions: {
       line: {
         pointInterval: 24*3600*1000,
         pointStart: Date.UTC(2015,4,31,0,0,0)
       }
     },
     series: [{
       name: '50 Percentile',
       data: [5,3,4,7,2]
     }, 
      {
       name: '90 Percentile',
       data: [7,3,7,8,2]
     },
   ]
   });
   
   // Memory Free Space
   Highcharts.chart('MemorySpace', {
     title: {
       text: 'Memory Free Space (%)'
     },
     xAxis: {
       allowDecimals: false,
       type: 'datetime',
       labels: {
       }
     },
     yAxis: {
       min: 0,
       title: {
         text: 'Percentage'
       },
       labels: {
         formatter: function() {
           return this.value / 10 + "%";
         }
       }
     },
     tooltip: {
    	pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
           shared: true
     },
     plotOptions: {
       line: {
         pointInterval: 24*3600*1000,
         pointStart: Date.UTC(2015,4,31,0,0,0)
       }
     },
     series: generateData(sample)
   });
   
   // Memory Free Megabytes
   Highcharts.chart('MemoryMBytes', {
     title: {
       text: 'Memory Free MBytes (#)'
     },
     xAxis: {
       allowDecimals: false,
       type: 'datetime',
       labels: {
       }
     },
     yAxis: {
       min: 0,
       title: {
         text: 'MByte'
       },
       labels: {
         formatter: function() {
           return this.value;
         }
       }
     },
     tooltip: {
    	pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
           shared: true
     },
     plotOptions: {
       line: {
         pointInterval: 24*3600*1000,
         pointStart: Date.UTC(2015,4,31,0,0,0)
       }
     },
     series: generateData(sample)
   });
   
   // AD Connection
   Highcharts.chart('AdConnection', {
     title: {
       text: 'AD Connection Count (Per Hour)'
     },
     xAxis: {
       allowDecimals: false,
       type: 'datetime',
       labels: {
       }
     },
     yAxis: {
       min: 0,
       title: {
         text: 'Count'
       },
       labels: {
         formatter: function() {
           return this.value;
         }
       }
     },
     tooltip: {
    	pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
           shared: true
     },
     plotOptions: {
       line: {
         pointInterval: 24*3600*1000,
         pointStart: Date.UTC(2015,4,31,0,0,0)
       }
     },
     series: generateData(sample)
   });
   
   Highcharts.chart('NetworkOutputQ', {
     title: {
       text: 'Network Output Queue Length (Per Hour)'
     },
     xAxis: {
       allowDecimals: false,
       type: 'datetime',
       labels: {
       }
     },
     yAxis: {
       min: 0,
       title: {
         text: 'Count'
       },
       labels: {
         formatter: function() {
           return this.value;
         }
       }
     },
     tooltip: {
    	pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
           shared: true
     },
     plotOptions: {
       line: {
         pointInterval: 24*3600*1000,
         pointStart: Date.UTC(2015,4,31,0,0,0)
       }
     },
     series: generateData(sample)
   });
   
   Highcharts.chart('NetworkOutputB', {
     title: {
       text: 'Network Output Bytes Received (Per Hour)'
     },
     xAxis: {
       allowDecimals: false,
       type: 'datetime',
       labels: {
       }
     },
     yAxis: {
       min: 0,
       title: {
         text: 'Count'
       },
       labels: {
         formatter: function() {
           return this.value;
         }
       }
     },
     tooltip: {
    	pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
           shared: true
     },
     plotOptions: {
       line: {
         pointInterval: 24*3600*1000,
         pointStart: Date.UTC(2015,4,31,0,0,0)
       }
     },
     series: generateData(sample)
   });
   
   Highcharts.chart('ATQLength', {
     title: {
       text: 'ATQ Length (Per Hour)'
     },
     xAxis: {
       allowDecimals: false,
       type: 'datetime',
       labels: {
       }
     },
     yAxis: {
       min: 0,
       title: {
         text: 'Count'
       },
       labels: {
         formatter: function() {
           return this.value;
         }
       }
     },
     tooltip: {
    	pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
           shared: true
     },
     plotOptions: {
       line: {
         pointInterval: 24*3600*1000,
         pointStart: Date.UTC(2015,4,31,0,0,0)
       }
     },
     series: generateData(sample)
   });
}


function drawAllCharts() {
   Highcharts.chart('allHealthRate', {
     title: {
       text: 'Provisioning Status Overview'
     },
     xAxis: {
   	categories: ['Namprd10','Namprd11','Namprd12','Namprd13','Namprd14','Namprd15','Namprd16','Namprd17','Namprd18','Namprd19','Namprd20','Namprd21','Namprd22','Namprd23','Namprd24','Namprd25','Namprd26','Namprd27','Namprd28','Namprd29','Namprd30','Namprd31','Namprd32','Namprd33','Namprd34','Namprd35','Namprd36','Namprd37','Namprd38','Namprd39','Namprd40','Namprd41','Namprd42','Namprd43','Namprd44','Namprd45','Namprd46','Namprd47','Namprd48','Namprd49','Namprd50','Namprd51','Namprd52','Namprd53','Namprd54','Namprd55','Namprd56','Namprd57','Namprd58','Namprd59','Namprd60','Namprd61','Namprd62','Namprd63','Namprd64','Namprd65','Namprd66','Namprd67','Namprd68','Namprd69','Namprd70','Namprd71','Namprd72','Namprd73','Namprd74','Namprd75','Namprd76','Namprd77','Namprd78','Namprd79','Namprd80','Namprd81','Namprd82','Namprd83','Namprd84','Namprd85','Namprd86','Namprd87','Namprd88','Namprd89','Namprd90','Namprd91','Namprd92','Namprd93','Namprd94','Namprd95','Namprd96','Namprd97','Namprd98','Namprd99','Namprd100','Namprd101','Namprd102','Namprd103','Namprd104','Namprd105','Namprd106','Namprd107','Namprd108','Namprd109']
     },
     yAxis: {
       min: 0,
       title: {
         text: 'Percentage'
       },
       labels: {
         formatter: function() {
           return this.value  + ' %';
         }
       }
     },
     tooltip: {
    	pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
           shared: true
     },
     plotOptions: {
       column: {
         stacking: 'percent',
       },
       spline: {
       }
     },
     series: [{
       type: 'column',
       name: 'Provisioned',
       data: [468,444,437,473,402,420,478,432,409,456,427,444,414,423,413,400,432,470,463,482,451,454,497,482,469,455,432,424,475,480,499,456,449,453,489,454,431,431,418,421,465,439,418,485,456,497,418,477,400,416,476,458,466,466,417,489,431,486,452,481,421,410,475,484,445,420,431,444,435,463,426,498,411,401,451,453,415,497,457,424,460,485,458,425,480,426,412,467,433,461,460,452,495,499,481,456,404,415,481,487]
     }, 
      {
       type: 'column',
       name: 'In MM',
       data: [312,133,109,387,50,148,98,28,67,100,322,125,138,248,222,197,144,355,82,42,167,177,49,152,83,114,288,165,344,282,425,74,150,99,220,106,101,108,92,27,82,318,235,162,404,268,225,235,369,51,194,114,102,251,225,80,76,37,213,113,32,90,47,170,79,118,300,296,402,272,183,224,298,385,384,120,368,166,56,228,179,106,236,47,47,58,67,35,340,461,40,327,156,133,394,279,258,233,66,73]
     },
      {
       type: 'spline',
       name: 'Health Rate',
       data: [60,77,80,55,89,74,83,94,86,82,57,78,75,63,65,67,75,57,85,92,73,72,91,76,85,80,60,72,58,63,54,86,75,82,69,81,81,80,82,94,85,58,64,75,53,65,65,67,52,89,71,80,82,65,65,86,85,93,68,81,93,82,91,74,85,78,59,60,52,63,70,69,58,51,54,79,53,75,89,65,72,82,66,90,91,88,86,93,56,50,92,58,76,79,55,62,61,64,88,87],
       marker: {
         lineWidth: 2,
         lineColor: Highcharts.getOptions().colors[3],
         fillColor: 'white'
       }
     }
   ]
   });
}
