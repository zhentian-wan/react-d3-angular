/** @jsx React.DOM */

var App = React.createClass({displayName: "App",
    getInitialState: function () {
        return {
            data: [
                {val: 5},
                {val: 4},
                {val: 7},
                {val: 6},
                {val: 8},
                {val: 1}
            ]
        }
    },
    componentWillReceiveProps: function (nextPrpp) {
        if(nextPrpp.data){
            this.renderChart(nextPrpp.data);
        }
    },
    renderChart: function (dataset) {

        d3.select("#chart")
            .selectAll('div')
            .data(dataset)
            .enter()
            .append('div')
            .attr('class', 'bar')
            .style('height', function (d) {
                console.log(d.val * 5 + 'px');
                return d.val * 5 + 'px';
            });
    },
    render: function () {
        return (
            React.createElement("div", {id: "chart"})
        )
    }
});