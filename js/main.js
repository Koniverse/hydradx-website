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
                datasets: [
                    {
                        label: 'KSM Airdrop',
                        data: [12, 32, 45, 56, 64],
                        backgroundColor: 'rgba(91, 30, 192, 1)',
                        borderColor: '#5B1EC0',
                        borderWidth: 3
                    },
                    {
                        label: 'Collators',
                        data: [12, 32, 45, 55, 63],
                        backgroundColor: 'rgba(32, 138, 215, 1)',
                        borderColor: '#208AD7',
                        borderWidth: 3
                    },
                    {
                        label: 'Liquidity Mining',
                        data: [12, 30, 42, 50, 59],
                        backgroundColor: 'rgba(72, 175, 182, 1)',
                        borderColor: '#48AFB6',
                        borderWidth: 3
                    },
                    {
                        label: 'Treasury',
                        data: [12, 24, 8, 42, 48],
                        backgroundColor: 'rgba(233, 136, 56, 1)',
                        borderColor: '#E98838',
                        borderWidth: 3
                    },
                    {
                        label: 'BSXLBP',
                        data: [3.6, 18, 25, 34, 38],
                        backgroundColor: 'rgba(100, 194, 111, 1)',
                        borderColor: '#64C26F',
                        borderWidth: 3
                    },
                    {
                        label: 'HDX Claimers',
                        data: [3.6, 13, 23, 27, 32],
                        backgroundColor: 'rgba(233, 195, 98, 1)',
                        borderColor: '#E9C362',
                        borderWidth: 3
                    },
                    {
                        label: 'Intergalactic',
                        data: [3.5, 11, 22, 25, 29],
                        backgroundColor: 'rgba(221, 66, 56, 1)',
                        borderColor: '#DD4238',
                        borderWidth: 3
                    },
                    {
                        label: 'BSX Crowdloan',
                        data: [3, 7, 18, 18, 18],
                        backgroundColor: 'rgba(21, 88, 229, 1)',
                        borderColor: '#1558E5',
                        borderWidth: 3
                    }
                ]
            },
            options: {
                responsive: false,
                scales: {
                    y: {
                        ticks: {
                            stepSize: 20,
                            color: 'rgba(255, 255, 255, 0.7)',
                            font: {
                                size: 14,
                                family: "'pexico', sans-serif"

                            },
                            callback: function (value) {
                                return value + "%"
                            }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)',
                            borderColor: 'rgba(255, 255, 255, 0.5)'
                        },
                        min: 0,
                        max: 80
                    },
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            font: {
                                size: 14,
                                family: "'pexico', sans-serif"
                            }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)',
                            borderColor: 'rgba(255, 255, 255, 0.5)'
                        }
                    }
                },
                elements: {
                    point: {
                        radius: 0
                    }
                },
                plugins: {
                    legend: {
                        position: 'right',
                        align: 'start',
                        labels: {
                            color: '#5EAFE1',
                            boxWidth: 16,
                            boxHeight: 16,
                            usePointStyle: true,
                            pointStyle: 'rectRounded',
                            font: {
                                size: 16,
                                family: "'pexico', sans-serif"
                            }
                        }
                    }
                }
            }
        });

    window.onload = function () {
        if (window.innerWidth < 992) {
            myChart.resize(700, 500);
            myChart.options.plugins.legend.labels.boxWidth = 14;
            myChart.options.plugins.legend.labels.boxHeight = 14;
            myChart.options.plugins.legend.labels.font.size = 14;
            myChart.update();
        }

        if (window.innerWidth < 768) {
            myChart.options.plugins.legend.position = 'bottom';
            myChart.resize(460, 500);
            myChart.update();
        }

        if (window.innerWidth < 500) {
            myChart.resize(400, 400);
        }

        if (window.innerWidth < 400) {
            myChart.resize(300, 300);
        }
    }

    window.onresize = function () {
        if (window.innerWidth < 992) {
            myChart.resize(700, 500);
            myChart.options.plugins.legend.labels.boxWidth = 14;
            myChart.options.plugins.legend.labels.boxHeight = 14;
            myChart.options.plugins.legend.labels.font.size = 14;
            myChart.update();
        } else {
            myChart.options.plugins.legend.position = 'right';
            myChart.resize(920, 440);
            myChart.update();
            myChart.options.plugins.legend.labels.boxWidth = 16;
            myChart.options.plugins.legend.labels.boxHeight = 16;
            myChart.options.plugins.legend.labels.font.size = 16;
        }

        if (window.innerWidth < 768) {
            myChart.options.plugins.legend.position = 'bottom';
            myChart.resize(460, 500);
            myChart.update();
        }

        if (window.innerWidth < 500) {
            myChart.resize(400, 400);
        }

        if (window.innerWidth < 400) {
            myChart.resize(300, 300);
        }
    }

    const body = document.body;
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    const headerHeight = document.querySelector('.header__placeholder').offsetHeight;
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            body.classList.remove(scrollUp);
            body.classList.remove('scroll');
            return;
        }

        if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
            // down
            body.classList.remove(scrollUp);
            body.classList.add(scrollDown);
            if (currentScroll > headerHeight) {
                body.classList.add('scroll');
            }
        } else if (
            currentScroll < lastScroll &&
            body.classList.contains(scrollDown)
        ) {
            // up
            body.classList.remove(scrollDown);
            body.classList.add(scrollUp);

        }
        lastScroll = currentScroll;
    });
});
