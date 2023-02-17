import React from "react";
import { Chart, registerables } from "chart.js";
import colors from "tailwindcss/colors";
import { AppContext } from "../../Context/provider"
Chart.register(...registerables);

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const date_to_month: any = {
    '01': "Jan",
    '02': "Feb",
    '03': "Mar",
    '04': "Apr",
    '05': "May",
    '06': "June",
    '07': "July",
    '08': "Aug",
    '09': "Sept",
    '10': "Oct",
    '11': "Nov",
    '12': "Dec",
}

export class StackedBArChart extends React.Component<{}, { name: string; data: any }> {
    static contextType = AppContext;
    chartReference: any;
    private chart: any;
    private stackedBArChart: any;
    constructor(props: any) {
        super(props);
        this.chartReference = React.createRef();
        setTimeout(() => {
            const context: any = this.context;
            const [expenses] = context.expenseList;
            if (expenses.length) {
                this.loadChart();
            }
        }, 2000);
    }

    loadChart = () => {
        const colorsDataset = [colors.blue[900], colors.blue[700], colors.blue[500], colors.blue[300], colors.blue[100], colors.green[900], colors.green[700], colors.green[500], colors.green[300], colors.green[100]]
        const date = new Date();
        const month = date.getMonth() + 1;
        let labels = [...months.slice(month - 6, month), ...months.slice(months.length - (6 - month), months.length)]
        this.chart = this.chartReference.current.getContext("2d");
        const context: any = this.context;
        const [expenses] = context.expenseList;
        let category: String[] = [];
        let amounts: number[] = [];
        let datasets = [];
        let colorCount = 0;
        for (let i = 0; i < expenses.length; i++) {
            const monthindex = labels.indexOf(String(expenses[i].date).slice(4, 8).trim());
            const datasetIndex = datasets.findIndex((dataset: any) => { return dataset.label === expenses[i].category })
            if (monthindex >= 0 && datasetIndex >= 0) {
                datasets[datasetIndex].data[monthindex] += expenses[i].amount;
            }
            else if (monthindex >= 0 && datasetIndex == -1) {
                const data = [0, 0, 0, 0, 0, 0];
                data[monthindex] = expenses[i].amount
                datasets.push({
                    label: expenses[i].category,
                    data: data,
                    backgroundColor: colorsDataset[colorCount],
                    color: "white",
                })
                colorCount += 1;
            }
        }
        console.log("datasets ::", datasets)
        const data = {
            labels: labels,
            datasets: datasets
        }

        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: "white",
                        font: {
                            size: 14,
                        },
                    },
                },
                title: {
                    display: true,
                    text: "Chart.js Bar Chart - Stacked",
                    color: "white",
                },
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: "white",
                    },
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: "white",
                    },
                },
            },
        };

        this.stackedBArChart = new Chart(this.chart, {
            type: "bar",
            data: data,
            options: options,
        });
    }

    updateChart = () => {
        const colorsDataset = [colors.blue[900], colors.blue[700], colors.blue[500], colors.blue[300], colors.blue[100], colors.green[900], colors.green[700], colors.green[500], colors.green[300], colors.green[100]]
        const date = new Date();
        const month = date.getMonth() + 1;
        let labels: any[] = [...months.slice(month - 6, month), ...months.slice(months.length - (6 - month), months.length)]
        //const colorsDataset = [colors.blue[900],]
        this.chart = this.chartReference.current.getContext("2d");
        const context: any = this.context;
        const [expenses] = context.expenseList;
        console.log("StackedBArChart :: componentDidUpdate :: expenses ::", expenses)
        let datasets = [];
        let colorCount = 0;
        for (let i = 0; i < expenses.length; i++) {
            const monthValue: any = String(expenses[i].date).slice(5, 7).trim()
            const monthindex = labels.indexOf(date_to_month[monthValue]);
            console.log("monthIndex ::", monthindex)
            const datasetIndex = datasets.findIndex((dataset: any) => { return dataset.label === expenses[i].category })
            console.log("datasetIndex ::", datasetIndex)
            if (monthindex >= 0 && datasetIndex >= 0) {
                datasets[datasetIndex].data[monthindex] += expenses[i].amount;
            }
            else if (monthindex >= 0 && datasetIndex == -1) {
                const data = [0, 0, 0, 0, 0, 0];
                data[monthindex] = expenses[i].amount
                datasets.push({
                    label: expenses[i].category,
                    data: data,
                    backgroundColor: colorsDataset[colorCount],
                    color: "white",
                })
                colorCount += 1;
            }
        }
        this.stackedBArChart.data.datasets = datasets;
        this.stackedBArChart.update();
    }

    componentDidUpdate() {
        const context: any = this.context;
        const [expenses] = context.expenseList;
        if (expenses.length && !this.stackedBArChart) {
            this.loadChart();
        }
        else if (expenses.length && this.stackedBArChart) {
            this.updateChart();
        }
    }

    render() {
        const context: any = this.context;
        const [expenses] = context.expenseList;
        if (expenses.length) {
            return (
                <div className="w-full md:w-1/2 text-slate-50">
                    <canvas ref={this.chartReference} />
                </div>
            );
        }
    }
}

export class DoughNutChart extends React.Component<{}, { name: string; data: any }> {
    static contextType = AppContext;
    chartReference: any;
    private chart: any;
    private doughNutChart: any;
    constructor(props: any) {
        super(props);
        this.chartReference = React.createRef();
        setTimeout(() => {
            const context: any = this.context;
            const [expenses] = context.expenseList;
            if (expenses.length) {
                this.loadChart();
            }
        }, 2000);
    }

    loadChart = () => {
        this.chart = this.chartReference.current.getContext("2d");
        const context: any = this.context;
        const [expenses] = context.expenseList;
        let labels: String[] = [];
        let amounts: number[] = [];
        for (let i = 0; i < expenses.length; i++) {
            if (!labels.includes(expenses[i].category)) {
                labels.push(expenses[i].category)
                amounts.push(expenses[i].amount)
            }
            else {
                const index = labels.indexOf(expenses[i].category);
                amounts[index] += expenses[i].amount
            }
        }
        const data = {
            labels: labels,
            datasets: [
                {
                    label: "Dataset 1",
                    data: amounts,
                    color: "white",
                    backgroundColor: [
                        colors.blue[900],
                        colors.blue[800],
                        colors.blue[700],
                        colors.blue[600],
                        colors.blue[500],
                        colors.blue[400],
                    ],
                    borderWidth: 0,
                },
            ],
        };

        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: "white",
                        font: {
                            size: 14,
                        },
                    },
                },
                title: {
                    display: true,
                    text: "Chart.js Bar Chart - Stacked",
                    color: "white",
                },
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: "white",
                    },
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: "white",
                    },
                },
            },
        };

        this.doughNutChart = new Chart(this.chart, {
            type: "doughnut",
            data: data,
            options: options,
        });
        //chart.update();
    }

    updateChart = () => {
        const context: any = this.context;
        const [expenses] = context.expenseList;
        let labels: String[] = [];
        let amounts: number[] = [];
        for (let i = 0; i < expenses.length; i++) {
            if (!labels.includes(expenses[i].category)) {
                labels.push(expenses[i].category)
                amounts.push(expenses[i].amount)
            }
            else {
                const index = labels.indexOf(expenses[i].category);
                amounts[index] += expenses[i].amount
            }
        }
        this.doughNutChart.data.labels = labels;
        this.doughNutChart.data.datasets[0].data = amounts;

        this.doughNutChart.update()
    }

    componentDidUpdate() {
        const context: any = this.context;
        const [expenses] = context.expenseList;
        if (expenses.length && !this.doughNutChart) {
            this.loadChart();
        }
        else if (expenses.length && this.doughNutChart) {
            this.updateChart();
        }
    }

    render() {
        const context: any = this.context;
        const [expenses] = context.expenseList;
        if (expenses.length) {
            return (
                <div className="w-full md:w-1/2 text-slate-50">
                    <canvas ref={this.chartReference} />
                </div>
            );
        }
    }
}