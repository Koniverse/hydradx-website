const $ = require('jquery');
const header = require('./modules/header');
const {Chart} = require("chart.js");

$(function () {
    header();
    var ctx = document.getElementById("chartPic");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["0", "5", "10", "15", "20"],
            datasets: [{
                label: 'Percentage',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {

                y: {
                    ticks: {
                        stepSize: 20,
                        callback: function (value) {
                            return value + "%"
                        }
                    },
                    min: 0,
                    max: 80,
                }
            },
            elements: {
                point:{
                    radius: 0
                }
            }
        }
    });
});
