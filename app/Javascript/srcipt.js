google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Day');
  data.addColumn('number', 'WPPOOL');
  data.addColumn('number', 'Google');
  data.addColumn('number', 'Microsoft');
  data.addColumn('number', 'Twitter');

  data.addRows([
    [0, 0, -10, 5, 10], [1, 10, 5, 3, 7], [2, 23, 15, 13, 17], [3, 17, 9, 7, 11], [4, 18, 10, 8, 12], [5, 9, 5, 3, 7],
    [6, 11, 3, 5, 10], [7, 27, 19, 17, 11], [8, 33, 25, 23, 12], [9, 40, 32, 30, 14], [10, 32, 24, 22, 18], [11, 35, 27, 25, 20],
    [12, 10, 22, 10, 22], [13, 40, 32, 30, 25], [14, 42, 34, 32, 27], [15, 47, 39, 37, 30], [16, 44, 36, 34, 25], [17, 48, 40, 38, 22],
    [18, 52, 44, 42, 19], [19, 54, 46, 44, 15], [20, 42, 34, 32, 17], [21, 55, 47, 45, 20], [22, 56, 48, 46, 25], [23, 57, 49, 47, 30],
    [24, 60, 52, 50, 15], [25, 50, 20, 40, 25], [26, 52, 44, 42, 30], [27, 51, 43, 41, 32], [28, 49, 41, 39, 34], [29, 53, 45, 43, 40],
    [30, 55, 47, 45, 25], [31, 60, 52, 50, 28], [32, 61, 53, 51, 34], [33, 59, 51, 49, 38], [34, 62, 54, 52, 40], [35, 65, 57, 55, 45],
    [36, 62, 54, 52, 25], [37, 58, 50, 48, 28], [38, 55, 47, 45, 35], [39, 61, 53, 51, 36], [40, 64, 56, 54, 38], [41, 65, 57, 55, 46],
    [42, 63, 55, 53, 35], [43, 66, 58, 56, 30], [44, 67, 59, 57, 38], [45, 69, 61, 59, 44], [46, 69, 61, 59, 45], [47, 70, 62, 60, 50],
    [48, 72, 64, 62, 17], [49, 68, 60, 58, 32], [50, 66, 58, 56, 40], [51, 65, 57, 55, 45], [52, 67, 59, 57, 46], [53, 70, 62, 60, 55],
    [54, 71, 63, 61, 36], [55, 72, 64, 62, 35], [56, 73, 65, 63, 42], [57, 75, 67, 65, 46], [58, 70, 62, 60, 47], [59, 68, 60, 58, 60],
    [60, 64, 56, 54, 49], [61, 60, 52, 50, 37], [62, 65, 57, 55, 44], [63, 67, 59, 57, 48], [64, 68, 60, 58, 50], [65, 69, 61, 59, 65],
    [66, 70, 62, 60, 25], [67, 72, 64, 62, 40], [68, 75, 67, 65, 46], [69, 80, 72, 70, 50]
  ]);

  var options = {
    legend: { position: 'bottom' },
    hAxis: {
      ticks: [
        {v: 0, f: 'Jan'}, {v: 10, f: 'Feb'}, {v: 20, f: 'Mar'},
        {v: 30, f: 'Apr'}, {v: 40, f: 'May'}, {v: 50, f: 'Jun'}, {v: 60, f: 'Jul'}
      ]
    },
    vAxis: {
      ticks: [-10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    },
    series: {
      0: { color: '#FC714D'},
      1: { color: '#615DE3'},
      2: { color: '#AFCD80'},
      3: { color: '#6F34A1'}
    },
    chartArea: {
      width: '80%',
      height: '80%'
    },
    tooltip: { isHtml: true }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  google.visualization.events.addListener(chart, 'onmouseover', function (e) {
    var selectedItem = chart.getSelection()[0];
    if (selectedItem) {
      var value = data.getValue(selectedItem.row, selectedItem.column);
      var tooltipContent = '<div style="padding:10px;"><b>Day: ' + data.getValue(selectedItem.row, 0) + '</b><br>';
      for (var i = 1; i < data.getNumberOfColumns(); i++) {
        tooltipContent += data.getColumnLabel(i) + ': ' + data.getValue(selectedItem.row, i) + '<br>';
      }
      tooltipContent += '</div>';
      var tooltip = document.createElement('div');
      tooltip.innerHTML = tooltipContent;
      chart.container.appendChild(tooltip);
    }
  });
  // google.visualization.events.addListener(chart, 'onmouseout', function (e) {
  // 	var tooltip = chart.container.getElementsByTagName('div')[0];
  // 	if (tooltip) {
  // 		tooltip.parentNode.removeChild(tooltip);
  // 	}
  // });

  chart.draw(data, options);
}