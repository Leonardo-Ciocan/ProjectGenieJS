/// <reference path="../typings/react-global.d.ts"/>
/// <reference path="../typings/chart.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MessageComponent = (function (_super) {
    __extends(MessageComponent, _super);
    function MessageComponent() {
        _super.apply(this, arguments);
    }
    MessageComponent.prototype.render = function () {
        var containerStyle = {
            maxWidth: "250px",
            background: this.props.message.sendFromUser ? "rgba(0,0,0,0.1)" : State.getThread(State.currentThread).services[0].color,
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
            display: "inline-block",
            cursor: "default",
            color: this.props.message.sendFromUser ? "black" : "white",
            marginLeft: "20px", marginRight: "20px",
            textAlign: "left"
        };
        return React.createElement("div", {style: { textAlign: this.props.message.sendFromUser ? "right" : "left" }}, React.createElement("div", {style: containerStyle}, this.props.message.data));
    };
    return MessageComponent;
}(React.Component));
var ImageMessage = (function (_super) {
    __extends(ImageMessage, _super);
    function ImageMessage() {
        _super.apply(this, arguments);
    }
    ImageMessage.prototype.render = function () {
        var containerStyle = {
            width: "250px",
            margin: "20px",
            borderRadius: "10px",
            overflow: "hidden",
            display: "block",
            cursor: "default",
            backgroundImage: "url(" + this.props.message.data.url + ")",
            backgroundSize: "cover",
            height: "250px",
            backgroundPosition: "center"
        };
        return React.createElement("div", {style: containerStyle});
    };
    return ImageMessage;
}(React.Component));
var URLMessage = (function (_super) {
    __extends(URLMessage, _super);
    function URLMessage() {
        _super.apply(this, arguments);
    }
    URLMessage.prototype.render = function () {
        var containerStyle = {
            maxWidth: "250px",
            margin: "20px",
            borderRadius: "10px",
            overflow: "hidden",
            display: "block",
            background: State.getColor(),
            color: "white",
            cursor: "pointer"
        };
        return React.createElement("div", {style: containerStyle}, React.createElement("a", {style: { display: "block", color: "white", margin: "10px" }, href: this.props.message.data.url}, this.props.message.data.url), React.createElement("div", {style: { background: "rgba(0,0,0,0.1)", padding: "10px" }}, this.props.message.data.text));
    };
    return URLMessage;
}(React.Component));
var ChartMessage = (function (_super) {
    __extends(ChartMessage, _super);
    function ChartMessage() {
        _super.apply(this, arguments);
    }
    ChartMessage.prototype.render = function () {
        var _this = this;
        var containerStyle = {
            padding: "20px",
            borderRadius: "10px",
            overflow: "hidden",
            display: "inline-block",
            cursor: "default",
            backgroundImage: "url(" + this.props.message.data.url + ")",
            backgroundSize: "cover",
            height: "250px",
            backgroundPosition: "center"
        };
        return React.createElement("div", {style: containerStyle}, React.createElement("canvas", {ref: function (ref) { return _this.chartDiv = ref; }, width: "310px", height: "210px"}));
    };
    ChartMessage.prototype.componentDidMount = function () {
        var data = {
            labels: this.props.message.data.labels,
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: State.getColor(),
                    strokeColor: "rgba(0,0,0,0.3)",
                    highlightFill: "rgba(220,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    data: this.props.message.data.data
                }
            ]
        };
        var myBarChart = new Chart(this.chartDiv.getContext("2d")).Bar(data, {
            animation: false,
            maintainAspectRatio: true,
            barStrokeWidth: 1
        });
    };
    return ChartMessage;
}(React.Component));
var ThreadComponent = (function (_super) {
    __extends(ThreadComponent, _super);
    function ThreadComponent() {
        var _this = this;
        _super.apply(this, arguments);
        this.divClicked = function () {
            _this.props.onClick(_this.props.index);
        };
    }
    ThreadComponent.prototype.render = function () {
        var containerStyle = {
            cursor: "pointer",
            paddingBottom: "10px",
            paddingLeft: "10px",
            borderTop: "1px solid transparent",
            borderBottom: "1px solid rgba(0,0,0,0.2)",
            color: this.props.selected ? State.getColor() : "black",
            height: "90px"
        };
        var circleStyle = {
            width: "70px", height: "70px",
            margin: "10px",
            borderRadius: "100%",
            border: "1px solid " + (this.props.selected ? State.getColor() : "lightgray"),
            position: "absolute",
            backgroundImage: "url(images/" + this.props.thread.services[0].name + ".png)",
            backgroundSize: "contain",
            backgroundPosition: "center"
        };
        return React.createElement("div", {onClick: this.divClicked, style: containerStyle}, React.createElement("div", {style: circleStyle}), React.createElement("h1", {style: { marginLeft: "90px", fontWeight: "200", fontSize: "15pt", marginBottom: "5px" }}, this.props.thread.services[0].name), React.createElement("h2", {style: { marginLeft: "90px", fontWeight: "200", fontSize: "13pt", marginTop: "0px" }}, "This is the last message"));
    };
    return ThreadComponent;
}(React.Component));
