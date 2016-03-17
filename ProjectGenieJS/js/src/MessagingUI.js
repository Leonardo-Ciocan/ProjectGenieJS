var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../typings/react-global.d.ts"/>
var MessageComponent = (function (_super) {
    __extends(MessageComponent, _super);
    function MessageComponent() {
        _super.apply(this, arguments);
    }
    MessageComponent.prototype.render = function () {
        var containerStyle = {
            height: "50px",
            maxWidth: "250px",
            background: "dodgerblue"
        };
        return React.createElement("div", null, React.createElement("div", {style: containerStyle}, "some text"));
    };
    return MessageComponent;
}(React.Component));
