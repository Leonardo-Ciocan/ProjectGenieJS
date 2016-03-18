/// <reference path="../typings/react-global.d.ts"/>
/// <reference path="./Models.tsx"/>
/// <reference path="../typings/react-router.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var IndexRoute = window.ReactRouter.IndexRoute;
var Link = window.ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;
var MessageControl = (function (_super) {
    __extends(MessageControl, _super);
    function MessageControl(props) {
        _super.call(this, props);
        this.state = {};
    }
    MessageControl.prototype.render = function () {
        var _this = this;
        var messageStyle = {
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "10px",
            marginTop: "10px",
            border: "1px solid lightgray",
            borderRadius: "0px",
            maxWidth: "500px", padding: "10px",
            background: "white",
            position: "relative",
            cursor: "pointer"
        };
        var nameStyle = {
            margin: "0px",
            fontFamily: "Segoe UI , Helvetica ,  serif",
            fontWeight: "200", display: "inline-block", fontSize: "13pt",
            lineHeight: "30px", verticalAlign: "middle",
            marginLeft: "70px"
        };
        var atStyle = {
            margin: "0px",
            fontFamily: "Segoe UI , Helvetica ,  serif",
            display: "inline-block", fontSize: "13pt",
            color: "gray",
            fontWeight: "200", marginLeft: "5px",
            lineHeight: "30px", verticalAlign: "middle"
        };
        var bodyStyle = {
            fontFamily: "Segoe UI , Helvetica ,  serif",
            padding: "0px", fontSize: "17pt", fontWeight: "200",
            marginLeft: "70px", marginTop: "0px"
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
        var reg = /\B@[a-z0-9_-]+/gi;
        var final_str = this.props.message.body.replace(reg, function (str) { return '<span style="color:' + (_this.props.service == undefined ? "black" : _this.props.service.color) + '">' + str + '</span>'; });
        console.log(final_str);
        return React.createElement("div", {onClick: function () { return _this.props.onClick(_this.props.message.id); }, style: messageStyle}, React.createElement("div", {style: circleStyle, onClick: function (event) { _this.props.onClickUser(_this.props.message.authorID); event.stopPropagation(); }}), React.createElement("h1", {style: nameStyle, onClick: function (event) { _this.props.onClickUser(_this.props.message.authorID); event.stopPropagation(); }}, (this.props.service != undefined ? this.props.service.name : State.name)), React.createElement("h1", {style: atStyle, onClick: function (event) { _this.props.onClickUser(_this.props.message.authorID); event.stopPropagation(); }}, "@" + (this.props.service != undefined ? this.props.service.name.toLowerCase() : State.username)), React.createElement("div", {style: bodyStyle, dangerouslySetInnerHTML: { __html: final_str }}));
    };
    return MessageControl;
}(React.Component));
var ThreadPage = (function (_super) {
    __extends(ThreadPage, _super);
    function ThreadPage(props) {
        var _this = this;
        _super.call(this, props);
        this.textKeyDown = function (e) {
            if (e.charCode === 13) {
                var message = { id: generateID() + 100, body: e.target.value, type: MessageType.text, threadID: _this.props.thread.id, authorID: "" };
                State.messages.push(message);
                e.target.value = "";
                _this.setState({});
            }
        };
        this.state = {};
    }
    ThreadPage.prototype.render = function () {
        var _this = this;
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
            width: "100%", height: "100%",
            overflow: "hidden"
        };
        var services = [];
        var messages = getMessagesByThread(this.props.thread.id).map(function (message) {
            if (services.indexOf(message.authorID) == -1 && message.authorID != "")
                services.push(message.authorID);
            return React.createElement(MessageControl, {onClickUser: function (id) { return _this.props.goto(Page.Profile, { id: id }); }, key: message.id, message: message, service: getService(message.authorID)});
        });
        return React.createElement("div", {style: containerStyle}, React.createElement("div", {style: { position: "absolute", left: "0", right: "0", bottom: "45px", top: "40px", overflowY: "scroll" }}, messages), React.createElement("div", {style: inputParentStyle}, React.createElement("a", {href: "#", style: {
            textDecoration: "none",
            color: "steel",
            position: "absolute",
            lineHeight: "45px",
            verticalAlign: "middle",
            right: "10px", top: "0px", bottom: "0px"
        }}, "Send"), React.createElement("input", {defaultValue: "@" + State.services.filter(function (s) { return s.id == services[0]; })[0].name, style: inputStyle, placeholder: "Enter message", type: "text", onKeyPress: this.textKeyDown, className: "win-textbox"})));
    };
    return ThreadPage;
}(React.Component));
var ProfilePage = (function (_super) {
    __extends(ProfilePage, _super);
    function ProfilePage(props) {
        var _this = this;
        _super.call(this, props);
        this.threadClicked = function (id) {
            _this.props.goto(Page.Thread, { id: id });
        };
        this.state = {};
    }
    ProfilePage.prototype.render = function () {
        var _this = this;
        var containerStyle = {
            width: "100%", height: "100%", background: "white",
            overflowY: "scroll",
            position: "relative"
        };
        var messages = getMessagesByService(this.props.service.id).map(function (message) {
            return React.createElement(MessageControl, {onClick: function () { return _this.threadClicked(message.threadID); }, key: message.id, message: message, service: getService(message.authorID)});
        });
        var header = {
            height: "150px",
            background: this.props.service.color,
            backgroundImage: "url(images/" + (this.props.service != undefined ? this.props.service.name.toLowerCase() + "-banner" : "me") + ".png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            bottomBorder: "1px solid lightgray"
        };
        var nameStyle = {
            margin: "0px",
            fontFamily: "Segoe UI , Helvetica ,  serif",
            fontWeight: "200", display: "block", fontSize: "20pt",
            lineHeight: "30px", verticalAlign: "middle", textAlign: "center",
            marginTop: "15px"
        };
        var atStyle = {
            margin: "0px",
            fontFamily: "Segoe UI , Helvetica ,  serif",
            display: "block", fontSize: "15pt",
            color: "gray",
            fontWeight: "200",
            verticalAlign: "middle", textAlign: "center",
            marginBottom: "15px"
        };
        var circleStyle = {
            width: "80px",
            height: "80px",
            borderRadius: "100%",
            left: "10px",
            top: "110px",
            position: "absolute",
            border: "1px solid lightgray",
            background: "white",
            backgroundImage: "url(images/" + (this.props.service != undefined ? this.props.service.name.toLowerCase() : "me") + ".png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        };
        var followButton = {
            background: this.props.service.color,
            color: "white",
            fontFamily: "Segoe UI , Helvetica ,  serif",
            border: "3px solid white",
            position: "absolute",
            right: "15px",
            top: "125px",
            lineHeight: "40px",
            verticalAlign: "middle",
            paddingLeft: "8px", paddingRight: "8px",
            borderRadius: "5px",
            cursor: "pointer"
        };
        var descriptionStyle = {
            fontFamily: "Segoe UI , Helvetica ,  serif",
            display: "block", fontSize: "15pt",
            color: "black",
            margin: "10px",
            fontWeight: "200",
            verticalAlign: "middle", textAlign: "center",
            marginBottom: "15px"
        };
        return React.createElement("div", {style: containerStyle}, React.createElement("div", {style: circleStyle}), React.createElement("div", {style: header}, " "), React.createElement("h1", {style: nameStyle}, (this.props.service != undefined ? this.props.service.name : State.name)), React.createElement("h1", {style: atStyle}, "@" + (this.props.service != undefined ? this.props.service.name.toLowerCase() : State.username)), React.createElement("div", null, React.createElement("h1", {style: descriptionStyle}, this.props.service.description)), React.createElement("div", {style: followButton}, "Follow"), messages);
    };
    return ProfilePage;
}(React.Component));
var Page;
(function (Page) {
    Page[Page["Profile"] = 0] = "Profile";
    Page[Page["Thread"] = 1] = "Thread";
    Page[Page["Feed"] = 2] = "Feed";
})(Page || (Page = {}));
var FeedPage = (function (_super) {
    __extends(FeedPage, _super);
    function FeedPage(props) {
        var _this = this;
        _super.call(this, props);
        this.threadClicked = function (id) {
            _this.props.goto(Page.Thread, { id: id });
        };
        this.gotoProfile = function (id) {
            _this.props.goto(Page.Profile, { id: id });
        };
        this.state = {};
    }
    FeedPage.prototype.render = function () {
        var _this = this;
        var containerStyle = {
            width: "100%", height: "100%", background: "white",
            overflowY: "scroll",
            position: "relative",
            paddingTop: "55px"
        };
        var messages = getFeed().map(function (message) {
            return React.createElement(MessageControl, {onClickUser: _this.gotoProfile, onClick: function () { return _this.threadClicked(message.threadID); }, key: message.id, message: message, service: getService(message.authorID)});
        });
        var bottomBar = {
            height: "50px",
            borderBottom: "1px solid lightgray",
            background: "rgba(0,0,0,0.1)",
            position: "absolute",
            left: "0px", top: "0px", right: "0px"
        };
        return React.createElement("div", {style: containerStyle}, messages, React.createElement("div", {style: bottomBar}));
    };
    return FeedPage;
}(React.Component));
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = this;
        _super.call(this, props);
        this.switchSection = function (index) {
            _this.setState({ selectedSection: index });
        };
        this.goto = function (page, data) {
            _this.state.pages.push({
                page: page, data: data
            });
            _this.setState({});
        };
        this.back = function () {
            _this.state.pages.pop();
            _this.setState({});
        };
        this.state = {
            pages: [{ page: Page.Feed, data: { id: "0" } }],
            selectedSection: 0
        };
    }
    App.prototype.render = function () {
        var _this = this;
        var content = React.createElement("div", null);
        if (this.state.pages[this.state.pages.length - 1].page == Page.Profile) {
            content = React.createElement(ProfilePage, {goto: this.goto, service: State.services[this.state.pages[this.state.pages.length - 1].data.id]});
        }
        else if (this.state.pages[this.state.pages.length - 1].page == Page.Thread) {
            content = React.createElement(ThreadPage, {goto: this.goto, thread: State.threads[this.state.pages[this.state.pages.length - 1].data.id]});
        }
        else if (this.state.pages[this.state.pages.length - 1].page == Page.Feed) {
            content = React.createElement(FeedPage, {goto: this.goto});
        }
        var barStyle = {
            background: "white",
            borderRight: "1px solid lightgray",
            width: "50px",
            position: "fixed",
            left: "0", bottom: "0", top: "0",
            textAlign: "Center"
        };
        var itemStyle = {};
        var icon = {
            width: "50px", height: "50px",
            lineHeight: "50px", verticalAlign: "middle", textAlign: "center",
            color: "white", fontSize: "20pt", background: "red"
        };
        var icons = [
            { icon: "fa fa-home" },
            { icon: "fa fa-user" }
        ].map(function (icon, index) {
            return React.createElement("i", {className: icon.icon, onClick: function () { return _this.switchSection(index); }, style: {
                borderRadius: "100%",
                width: "40px", height: "40px",
                lineHeight: "40px", verticalAlign: "middle", textAlign: "center",
                color: index == _this.state.selectedSection ? "white" : "black", fontSize: "20pt",
                background: index == _this.state.selectedSection ? State.color : "white"
            }});
        });
        return React.createElement("div", null, React.createElement("div", {style: { borderLeft: "1px solid lightgray", background: "white", zIndex: this.state.selectedSection == 0 ? "99" : "0", marginLeft: "50px", position: "absolute", left: "0", top: "0", bottom: "0", right: "0" }}, content), React.createElement("div", {style: { zIndex: this.state.selectedSection == 1 ? "99" : "0", background: "Red", marginLeft: "50px", position: "absolute", left: "0", top: "0", bottom: "0", right: "0" }}), React.createElement("div", {style: barStyle}, React.createElement("i", {onClick: this.back, className: "fa fa-arrow-left", style: {
            width: "50px", height: "50px", lineHeight: "50px", textAlign: "center", verticalAlign: "middle",
            background: "rgba(0,0,0,0.05)", fontSize: "20pt", color: State.color,
            visibility: this.state.pages.length == 1 ? "collapse" : "visible"
        }}), React.createElement("div", {style: { lineHeight: "50px", verticalAlign: "middle", display: "inline-block", marginLeft: "auto", marginRight: "auto" }}, icons)));
    };
    return App;
}(React.Component));
function initUI() {
    ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
}
