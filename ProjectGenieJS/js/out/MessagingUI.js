/// <reference path="../typings/react-global.d.ts"/>
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
            borderRadius: "15px",
            display: "inline-block",
            cursor: "default",
            color: this.props.message.sendFromUser ? "black" : "white",
            marginLeft: "20px", marginRight: "20px",
            textAlign: "left"
        };
        return React.createElement("div", {style: { textAlign: this.props.message.sendFromUser ? "right" : "left" }}, React.createElement("div", {style: containerStyle}, this.props.message.body));
    };
    return MessageComponent;
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
            position: "absolute"
        };
        return React.createElement("div", {onClick: this.divClicked, style: containerStyle}, React.createElement("div", {style: circleStyle}), React.createElement("h1", {style: { marginLeft: "90px", fontWeight: "200", fontSize: "15pt", marginBottom: "5px" }}, this.props.thread.services[0].name), React.createElement("h2", {style: { marginLeft: "90px", fontWeight: "200", fontSize: "13pt", marginTop: "0px" }}, "This is the last message"));
    };
    return ThreadComponent;
}(React.Component));
