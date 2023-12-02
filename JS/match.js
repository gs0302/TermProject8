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
        label: "Dataset 1",
        data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
        borderColor: "rgba(2,117,216,1)",
        xAxisLabels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
        yAxisMax: 50000,
    },
    {
        label: "Dataset 2",
        data: [15000, 40162, 36263, 28394, 28287, 38682, 41274, 43259, 35849, 34159, 42651, 41984, 48451],
        borderColor: "rgba(255, 99, 132, 1)",
        xAxisLabels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
        yAxisMax: 60000,
    },
    {
        label: "Dataset 3",
        data: [12000, 35162, 32263, 24394, 24287, 34682, 37274, 39259, 31849, 30159, 38651, 37984, 44451],
        borderColor: "rgba(75, 192, 192, 1)",
        xAxisLabels: ["Jan 1", "Jan 2", "Jan 3", "Jan 4", "Jan 5", "Jan 6", "Jan 7", "Jan 8", "Jan 9", "Jan 10", "Jan 11", "Jan 12", "Jan 13"],
        yAxisMax: 45000,
    },
];

// Define bar chart data for each dataset
var barDatasets = [
    {
        label: "Dataset 1",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: [4215, 14984, 6251, 17841, 9821, 14984],
    },
    {
        label: "Dataset 2",
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderColor: "rgba(255, 99, 132, 1)",
        data: [2000, 3000, 4000, 5000, 6000, 7000],
    },
    {
        label: "Dataset 3",
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderColor: "rgba(75, 192, 192, 1)",
        data: [1000, 2000, 3000, 4000, 5000, 6000],
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
            labels: ["January", "February", "March", "April", "May", "June"],
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
    labels: ["Blue", "Red", "Yellow", "Green"],
    datasets: [{
      data: [12.21, 15.58, 11.25, 8.32],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
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