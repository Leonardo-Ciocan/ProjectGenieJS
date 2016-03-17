/// <reference path="../typings/react-global.d.ts"/>
/// <reference path="./MessagingUI.tsx"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root;
(function (root) {
    var SomeComponent = (function (_super) {
        __extends(SomeComponent, _super);
        function SomeComponent() {
            _super.apply(this, arguments);
        }
        SomeComponent.prototype.render = function () {
            var inputStyle = {
                position: "absolute",
                left: "5px",
                bottom: "0", right: "0px",
                padding: "10px",
                border: "none",
                borderTop: "1px solid lightgray",
                width: "100%"
            };
            return React.createElement("div", null, React.createElement("div", {style: {
                height: "100%",
                position: "absolute",
                top: "0", bottom: "0", left: this.props.collapsed ? "0px" : "200px", right: "0"
            }}, React.createElement(MessageComponent, null), React.createElement("input", {style: inputStyle, placeholder: "Enter message", defaultValue: "supper", type: "text", className: "win-textbox"})), React.createElement("div", {style: {
                width: this.props.collapsed ? "0px" : "200px",
                height: "100%",
                borderRight: "1px solid lightgray",
                position: "absolute",
                top: "0", bottom: "0", left: "0",
                background: "#fafafa",
                overflow: "hidden"
            }}, React.createElement("h1", {style: { width: "100%", textAlign: "center" }}, "Threads")));
        };
        return SomeComponent;
    }(React.Component));
    function startUI(collapsed) {
        console.log(collapsed);
        ReactDOM.render(React.createElement(SomeComponent, {collapsed: collapsed}), document.getElementById("root"));
    }
    root.startUI = startUI;
})(root || (root = {}));
