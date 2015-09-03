/**
 * Created by Answer1215 on 9/3/2015.
 */
var App = React.createClass({displayName: "App",
    componentWillReceiveProps: function (nextProp) {
        console.log(nextProp);
        if (nextProp.data) {
            this.renderChart(nextProp.data);
        }
    },
    renderChart: function (dataset) {
        d3.select('#' + this.props.target)
            .selectAll('div')
            .data(dataset)
            .enter()
            .append('div')
            .attr('class', 'bar')
            .style('height', function (d) {
                return d.val * 5 + 'px';
            })
    },
    render: function () {
        return (
            React.createElement("div", {id: this.props.target})
        );
    }
});