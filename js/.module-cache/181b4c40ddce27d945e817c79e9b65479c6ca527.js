/** @jsx React.DOM */

var App = React.createClass({displayName: "App",
    componentWillReceiveProps: function (nextProp) {
        if(nextProp.data){
            this.renderChart(nextProp.data);
        }
    },
    renderChart: function (dataset) {

        d3.select("#" + this.props.target)
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
        return React.DOM.div( {target: this.props.target})
    }
});