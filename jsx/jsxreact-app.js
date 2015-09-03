/**
 * Created by Answer1215 on 9/3/2015.
 */
var App = React.createClass({
    componentWillReceiveProps: function (nextProp) {
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
                return d * 5 + 'px';
            })
    },
    render: function () {
        return (
            <div id={this.props.target}></div>
        );
    }
});