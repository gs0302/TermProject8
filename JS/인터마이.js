// Chart.js scripts
// -- Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
// -- Area Chart Example
var ctx = document.getElementById("myAreaChart");
// Line Chart
var myLineChart;

// Bar Chart
var myBarChart;

// Define line chart data for each dataset
var lineDatasets = [
    {
        label: "점유율(%)",
        data: [52, 46, 51, 61, 49, 59, 65, 63, 62, 57, 61, 68],
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderColor: "rgba(255, 99, 132, 1)",
        xAxisLabels: ["9/4", "9/10", "9/17", "9/21", "9/25", "9/28", "10/1", "10/5", "10/8", "10/19","10/22", "11/11"],
        yAxisMax: 100,
    },
    {
        label: "슈팅",
        data: [9, 10, 10, 13, 9, 11, 12, 10, 16, 16, 11, 18],
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        xAxisLabels: ["9/4", "9/10", "9/17", "9/21", "9/25", "9/28", "10/1", "10/5", "10/8", "10/19","10/22", "11/11"],
        yAxisMax: 20,
    },
    {
        label: "경고+퇴장",
        data: [3, 2, 2, 0, 5, 3, 6, 2, 0, 3, 2, 1],
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderColor: "rgba(75, 192, 192, 1)",
        xAxisLabels: ["9/4", "9/10", "9/17", "9/21", "9/25", "9/28", "10/1", "10/5", "10/8", "10/19","10/22", "11/11"],
        yAxisMax: 10,
    },
];

// Define bar chart data for each dataset
var barDatasets = [
    {
        label: "Dataset 1", // 스코어 3:1 이면 +2 , 이겼으면 
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: [2, 1, -3, 4, 0, -1, 0, -3, -1, 0, -1, -1],
        yAxisMax: 5,
    },
    {
        label: "(2x 승수 + 무승부 수)/ (2x 플레이한 총 게임 수) x 100", // 승률 
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderColor: "rgba(255, 99, 132, 1)",
        data: [69, 80, 78, 86, 68, 84, 76, 69, 66, 64, 67, 80],
        yAxisMax: 100,
    },
    {
        label: "Dataset 3", // 리그 순위 
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderColor: "rgba(75, 192, 192, 1)",
        data: [2, 1, 1, 1, 1, 1, 3, 13, 12, 13, 13, 14],
        yAxisMax: 20,
    },
];

// Initialize line chart with the first dataset
initializeLineChart(0);

// Initialize bar chart with the first dataset
initializeBarChart();

// Function to change line chart dataset
function changeLineChart(datasetIndex) {
    // Update the line chart dataset without destroying it
    myLineChart.data.labels = lineDatasets[datasetIndex].xAxisLabels;
    myLineChart.data.datasets = [lineDatasets[datasetIndex]];
    myLineChart.options.scales.y.ticks.max = lineDatasets[datasetIndex].yAxisMax;
    myLineChart.update();
}

// Function to change bar chart dataset
function changeBarChart(datasetIndex) {
    myBarChart.data.datasets = [barDatasets[datasetIndex]];
    myBarChart.update();
}

// Function to initialize line chart
function initializeLineChart(datasetIndex) {
    var ctx = document.getElementById('myAreaChart').getContext('2d');
    myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: lineDatasets[datasetIndex].xAxisLabels,
            datasets: [lineDatasets[datasetIndex]],
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    grid: {
                        display: false,
                    },
                    ticks: {
                        maxTicksLimit: 7,
                    },
                },
                y: {
                    ticks: {
                        min: 0,
                        max: lineDatasets[datasetIndex].yAxisMax,
                        maxTicksLimit: 5,
                    },
                    grid: {
                        color: "rgba(0, 0, 0, .125)",
                    },
                },
            },
            legend: {
                display: false,
            },
        },
    });
}

// Function to initialize bar chart
function initializeBarChart() {
    var ctx = document.getElementById("myBarChart").getContext('2d');
    myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["9/4", "9/10", "9/17", "9/21", "9/25", "9/28", "10/1", "10/5", "10/8", "10/19","10/22", "11/11"],
            datasets: [barDatasets[0]], // Initial dataset
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    grid: {
                        display: false,
                    },
                    ticks: {
                        maxTicksLimit: 6,
                    },
                },
                y: {
                    ticks: {
                        min: 0,
                        max: 15000,
                        maxTicksLimit: 5,
                    },
                    grid: {
                        display: true,
                    },
                },
            },
            legend: {
                display: false,
            },
        },
    });
}
// -- Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Fouls", "Yellow card","Offsides","Red cards"],
    datasets: [{
      data: [241,75,67, 3],
      backgroundColor: ['#007bff', '#ffc107', '#28a745','#dc3545'],
    }],
  },
});

$(document).ready(function() {
  $('#dataTable').DataTable();
});

(function($) {
  "use strict"; // Start of use strict
  // Configure tooltips for collapsed side navigation
  $('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
    template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip" style="pointer-events: none;"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  })
  // Toggle the side navigation
  $("#sidenavToggler").click(function(e) {
    e.preventDefault();
    $("body").toggleClass("sidenav-toggled");
    $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
    $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
  });
  // Force the toggled class to be removed when a collapsible nav link is clicked
  $(".navbar-sidenav .nav-link-collapse").click(function(e) {
    e.preventDefault();
    $("body").removeClass("sidenav-toggled");
  });
  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse').on('mousewheel DOMMouseScroll', function(e) {
    var e0 = e.originalEvent,
      delta = e0.wheelDelta || -e0.detail;
    this.scrollTop += (delta < 0 ? 1 : -1) * 30;
    e.preventDefault();
  });
  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });
  // Configure tooltips globally
  $('[data-toggle="tooltip"]').tooltip()
  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });
})(jQuery); // End of use strict