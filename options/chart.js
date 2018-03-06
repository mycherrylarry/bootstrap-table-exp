function generateData(count) {
   var fiftyP = [];
   var max=[];
   for(i = 0; i < count; i++) {
     	if(i == 6)
     	{
     		fiftyP[i] = Math.floor(Math.random()*Math.random()*100 + 1500);
     		max[i] = fiftyP[i]*2 + Math.floor(Math.random()*50 +  750);
     	} else 
	{
     		fiftyP[i] = Math.floor(Math.random()*Math.random()*100 + 500);
     		max[i] = fiftyP[i]*2 + Math.floor(Math.random()*50 +  450);
	}
   }

   return [
   {
	name: '50 Percentile',
	data: fiftyP
   },
   {
	name: 'Maximum',
	data: max
   }
   ];
}

function drawCharts() {
   var sample = 10;
   
   
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
       data: [5,3,4,7,2,7,3,2,1,2]
     }, 
      {
       name: '90 Percentile',
       data: [7,3,7,8,2,9,9,7,2,5]
     },
   ]
   });
   
   // Memory Free Space
   Highcharts.chart('Memory', {
     title: {
       text: 'Memory Usage (%)'
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
           return this.value / 100 + "%";
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
   
   
   // Ldap new connections
   Highcharts.chart('LdapNewConnections', {
     title: {
       text: 'LDAP New Connections / second'
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

   Highcharts.chart('LdapSearches', {
     title: {
       text: 'LDAP Searches / second'
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
   
   Highcharts.chart('LdapWrites', {
     title: {
       text: 'LDAP Writes / second'
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

   Highcharts.chart('DsSearch', {
     title: {
       text: 'DS Search sub-operations / second'
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

   Highcharts.chart('NetworkCurrentBandwidth', {
     title: {
       text: 'Network Current Bandwidth'
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
   
   Highcharts.chart('AtqOutstandingQueuedRequests', {
     title: {
       text: 'ATQ Outstanding Queued Requests'
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
   
   Highcharts.chart('DiskFreeSpace', {
     title: {
       text: 'Maximum Disk Free Space'
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
       name: 'C:',
       data: [5,3,4,7,2,7,3,2,1,2]
     }, 
      {
       name: 'D:',
       data: [7,3,7,8,2,9,9,7,2,5]
     },
   ]
   });
   
   Highcharts.chart('DiskReads', {
     title: {
       text: 'Maximum Disk Reads / Second'
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
       name: 'C:',
       data: [5,3,4,7,2,7,3,2,1,2]
     }, 
      {
       name: 'D:',
       data: [7,3,7,8,2,9,9,7,2,5]
     },
   ]
   });

   Highcharts.chart('DiskWrites', {
     title: {
       text: 'Maximum Disk Writes / Second'
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
       name: 'C:',
       data: [5,3,4,7,2,7,3,2,1,2]
     }, 
      {
       name: 'D:',
       data: [7,3,7,8,2,9,9,7,2,5]
     },
   ]
   });

   Highcharts.chart('InboundReplicate', {
     title: {
       text: 'Inbound Replication Latency in Senconds'
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
       name: 'Config Naming Context',
       data: [5,3,4,7,2,7,3,2,1,2]
     }, 
      {
       name: 'Domain Naming Context',
       data: [7,3,7,8,2,9,9,7,2,5]
     },
   ]
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

// Build the chart
Highcharts.chart('sku', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Total SKU Types Overview'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
	        enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Count',
        colorByPoint: true,
        data: [{
            name: 'SKU-Type-1',
            y: 10,
            drilldown: 'skutype1'
        }, {
            name: 'SKU-Type-2',
            drilldown: 'SKU-Type-2',
            y: 125
        }, {
            name: 'SKU-Type-3',
            drilldown: 'SKU-Type-3',
            y: 50
        }]
    }],
    drilldown: {
        series: [{
            name: 'SKU-Type-1',
            id: 'skutype1',
            data: [
                ['namprd00', 24.13],
                ['namprd01', 17.2],
                ['namprd09', 8.11],
                ['namprd08', 5.33],
                ['namprd10', 1.06],
                ['namprd17', 0.5]
            ]
        }, {
            name: 'SKU-Type-2',
            id: 'SKU-Type-2',
            data: [
                ['namprd21', 5],
                ['namprd01', 4.32],
                ['namprd07', 3.68],
                ['namprd08', 2.96],
                ['namprd11', 2.53],
                ['namprd27', 1.45],
                ['namprd28', 1.24],
                ['namprd91', 0.85],
                ['namprd81', 0.6],
                ['namprd71', 0.55],
                ['namprd51', 0.38],
                ['namprd92', 0.19],
                ['namprd09', 0.14],
                ['namprd31', 0.14]
            ]
        }, {
            name: 'SKU-Type-3',
            id: 'SKU-Type-3',
            data: [
                ['namprd01', 0.34],
                ['namprd02', 0.24],
                ['namprd03', 0.17],
                ['namprd04', 0.16]
            ]
        }]
    }
});
}
