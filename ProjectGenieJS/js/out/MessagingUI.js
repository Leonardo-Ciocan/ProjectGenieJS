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
            background: "dodgerblue",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
            display: "inline-block",
            color: "white"
        };
        return React.createElement("div", {style: { textAlign: this.props.message.sendFromUser ? "right" : "left" }}, React.createElement("div", {style: containerStyle}, this.props.message.body));
    };
    return MessageComponent;
}(React.Component));
