/// <reference path="../typings/react-global.d.ts"/>
/// <reference path="./MessagingUI.tsx"/>
/// <reference path="./Models.tsx"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainPage = (function (_super) {
    __extends(MainPage, _super);
    function MainPage(props) {
        _super.call(this, props);
        this.lid = 155;
        this.state = {
            messages: State.messages
        };
    }
    MainPage.prototype.render = function () {
        var inputStyle = {
            position: "absolute",
            left: "5px",
            bottom: "0", right: "0px",
            padding: "10px",
            border: "none",
            borderTop: "1px solid lightgray",
            width: "100%"
        };
        var messages = this.state.messages.map(function (message) {
            return React.createElement(MessageComponent, {key: message.id, message: message});
        });
        return React.createElement("div", null, React.createElement("div", {style: {
            height: "100%",
            position: "absolute",
            top: "0", bottom: "0", left: this.props.collapsed ? "0px" : "200px", right: "0"
        }}, messages, React.createElement("input", {style: inputStyle, placeholder: "Enter message", defaultValue: "supper", type: "text", onKeyPress: this.textKeyDown.bind(this), className: "win-textbox"})), React.createElement("div", {style: {
            width: this.props.collapsed ? "0px" : "200px",
            height: "100%",
            borderRight: "1px solid lightgray",
            position: "absolute",
            top: "0", bottom: "0", left: "0",
            background: "#fafafa",
            overflow: "hidden"
        }}, React.createElement("h1", {style: { width: "100%", textAlign: "center" }}, "Threads")));
    };
    MainPage.prototype.textKeyDown = function (e) {
        if (e.key === 'Enter') {
            this.lid++;
            State.messages.push(new Message(String(this.lid), e.target.value, true));
            console.log(this.lid);
            this.setState({
                messages: State.messages
            });
            e.target.value = "";
        }
    };
    return MainPage;
}(React.Component));
function startUI(collapsed) {
    console.log(collapsed);
    ReactDOM.render(React.createElement(MainPage, {collapsed: collapsed}), document.getElementById("root"));
}
