function generateData(count) {
   var fiftyP = [];
   var ninetyP = [];
   var avg=[];
   for(i = 0; i < count; i++) {
     fiftyP[i] = Math.floor(Math.random()*400 + 500);
     ninetyP[i] = Math.floor(Math.random()*300 + 400);
     avg[i] = Math.floor(Math.random()*150 +  450);
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
  series: generateData(10)
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
  series: generateData(10)
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
  series: generateData(10)
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
  series: generateData(10)
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
  series: generateData(10)
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
  series: generateData(10)
});
}
