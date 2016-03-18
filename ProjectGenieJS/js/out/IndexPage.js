/// <reference path="../typings/react-global.d.ts"/>
/// <reference path="./Models.tsx"/>
/// <reference path="../typings/react-router.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MessageControl = (function (_super) {
    __extends(MessageControl, _super);
    function MessageControl(props) {
        _super.call(this, props);
        this.state = {};
    }
    MessageControl.prototype.render = function () {
        var messageStyle = {
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "10px",
            marginTop: "10px",
            border: "1px solid lightgray",
            borderRadius: "5px",
            maxWidth: "500px", padding: "10px",
            background: "white",
            position: "relative"
        };
        var nameStyle = {
            margin: "0px",
            fontFamily: "Segoe UI , Helvetica ,  serif",
            fontWeight: "200", display: "inline-block", fontSize: "13pt",
            lineHeight: "40px", verticalAlign: "middle",
            marginLeft: "70px"
        };
        var atStyle = {
            margin: "0px",
            fontFamily: "Segoe UI , Helvetica ,  serif",
            display: "inline-block", fontSize: "13pt",
            color: "gray",
            fontWeight: "200", marginLeft: "5px",
            lineHeight: "40px", verticalAlign: "middle"
        };
        var bodyStyle = {
            fontFamily: "Segoe UI , Helvetica ,  serif",
            padding: "0px", fontSize: "26px", fontWeight: "200",
            marginLeft: "70px"
        };
        var circleStyle = {
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            left: "10px",
            top: "10px",
            position: "absolute",
            border: "1px solid lightgray",
            backgroundImage: "url(images/" + (this.props.service != undefined ? this.props.service.name.toLowerCase() : "me") + ".png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        };
        return React.createElement("div", {style: messageStyle}, React.createElement("div", {style: circleStyle}), React.createElement("h1", {style: nameStyle}, (this.props.service != undefined ? this.props.service.name : State.name)), React.createElement("h1", {style: atStyle}, "@" + (this.props.service != undefined ? this.props.service.name.toLowerCase() : State.username)), React.createElement("div", {style: bodyStyle}, this.props.message.body));
    };
    return MessageControl;
}(React.Component));
var ThreadPage = (function (_super) {
    __extends(ThreadPage, _super);
    function ThreadPage(props) {
        _super.call(this, props);
        this.state = {};
    }
    ThreadPage.prototype.render = function () {
        var inputStyle = {
            background: "white",
            marginBottom: "0px",
            height: "45px",
            lineHeight: "45px",
            verticalAlign: "middle",
            border: "none",
            position: "absolute",
            left: "10px",
            top: "0", bottom: "0", right: "50px",
            width: "50%",
            margin: "0px"
        };
        var inputParentStyle = {
            position: "absolute",
            left: "1px",
            bottom: "0", right: "0px",
            borderTop: "1px solid lightgray",
            background: "white",
            height: "45px"
        };
        var containerStyle = {
            width: "100%", height: "100%", background: "#F7F7F7",
            overflow: "hidden"
        };
        var messages = getMessages(this.props.thread.id).map(function (message) {
            return React.createElement(MessageControl, {key: message.id, message: message, service: getService(message.authorID)});
        });
        return React.createElement("div", {style: containerStyle}, React.createElement("div", {style: { position: "absolute", left: "0", right: "0", bottom: "45px", top: "0" }}, messages), React.createElement("div", {style: inputParentStyle}, React.createElement("a", {href: "#", style: {
            textDecoration: "none",
            color: "steel",
            position: "absolute",
            lineHeight: "45px",
            verticalAlign: "middle",
            right: "10px", top: "0px", bottom: "0px"
        }}, "Send"), React.createElement("input", {style: inputStyle, placeholder: "Enter message", type: "text", className: "win-textbox"})));
    };
    return ThreadPage;
}(React.Component));
function initUI() {
    ReactDOM.render((React.createElement(ThreadPage, {thread: State.threads[0]})), document.getElementById("root"));
}
