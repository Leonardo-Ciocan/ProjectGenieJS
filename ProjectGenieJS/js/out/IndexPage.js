/// <reference path="../typings/react-global.d.ts"/>
/// <reference path="./Models.tsx"/>
/// <reference path="../typings/react-router.d.ts"/>
/// <reference path="../typings/jquery.d.ts"/>
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
            marginBottom: "0px",
            marginTop: "0px",
            border: "1px solid lightgray",
            maxWidth: "500px", padding: "15px",
            background: "white",
            position: "relative",
            cursor: "pointer",
            borderRadius: "0px",
            boxShadow: " 0px 0px 5px 0px rgba(0,0,0,0.00)"
        };
        $.extend(messageStyle, this.props.style);
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
            padding: "0px", fontSize: "14pt", fontWeight: "200",
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
        var final_str = this.props.message.body.replace(reg, function (str) { return '<span style="color:' + (str == "@" + State.username ? "gray" : State.services.filter(function (s) { return "@" + s.name.toLowerCase() == str; })[0].color) + '">' + str + '</span>'; });
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
        this.services = [];
        this.textKeyDown = function (e) {
            if (e.charCode === 13) {
                var message = { id: generateID() + 100, body: e.target.value, type: MessageType.text, threadID: _this.props.thread.id, authorID: "" };
                State.messages.push(message);
                e.target.value = "@" + State.services.filter(function (s) { return s.id == _this.services[0]; })[0].name.toLowerCase() + " ";
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
        var msgs = getMessagesByThread(this.props.thread.id);
        var messages = msgs.map(function (message, index) {
            if (_this.services.indexOf(message.authorID) == -1 && message.authorID != "")
                _this.services.push(message.authorID);
            return React.createElement(MessageControl, {style: {
                borderTopWidth: index == 0 ? "1px" : "0px",
                borderTopLeftRadius: index == 0 ? "5px" : "0px",
                borderTopRightRadius: index == 0 ? "5px" : "0px",
                borderBottomLeftRadius: index == msgs.length - 1 ? "5px" : "0px",
                borderBottomRightRadius: index == msgs.length - 1 ? "5px" : "0px"
            }, onClickUser: function (id) { return _this.props.goto(Page.Profile, { id: id }); }, key: message.id, message: message, service: getService(message.authorID)});
        });
        var bottomBar = {
            height: "100px",
            position: "absolute",
            left: "0px", top: "0px", right: "0px", background: "white"
        };
        return React.createElement("div", {style: containerStyle}, React.createElement("div", {style: { position: "absolute", left: "0", right: "0", bottom: "45px", top: "125px", overflowY: "scroll" }}, messages), React.createElement("div", {style: inputParentStyle}, React.createElement("a", {href: "#", style: {
            textDecoration: "none",
            color: "steel",
            position: "absolute",
            lineHeight: "45px",
            verticalAlign: "middle",
            right: "10px", top: "0px", bottom: "0px"
        }}, "Send"), React.createElement("input", {defaultValue: "@" + State.services.filter(function (s) { return s.id == _this.services[0]; })[0].name.toLowerCase() + " ", style: inputStyle, placeholder: "Enter message", type: "text", onKeyPress: this.textKeyDown, className: "win-textbox"})), React.createElement("div", {style: bottomBar}, React.createElement("h1", {style: { fontWeight: "200", lineHeight: "100px", verticalAlign: "bottom", marginLeft: "15px" }}, "Thread with ", this.services.map(function (s) { return State.services.filter(function (s1) { return s1.id == s; })[0].name; }).join(","))));
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
            position: "relative",
            paddingBottom: "20px"
        };
        var feed = getMessagesByService(this.props.service.id);
        var messages = feed.map(function (message, index) {
            return React.createElement(MessageControl, {style: {
                borderTopWidth: index == 0 ? "1px" : "0px",
                borderTopLeftRadius: index == 0 ? "5px" : "0px",
                borderTopRightRadius: index == 0 ? "5px" : "0px",
                borderBottomLeftRadius: index == feed.length - 1 ? "5px" : "0px",
                borderBottomRightRadius: index == feed.length - 1 ? "5px" : "0px"
            }, onClick: function () { return _this.threadClicked(message.threadID); }, key: message.id, message: message, service: getService(message.authorID)});
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
            paddingTop: "115px"
        };
        var feed = getFeed();
        var messages = feed.map(function (message, index) {
            return React.createElement(MessageControl, {style: {
                borderTopWidth: index == 0 ? "1px" : "0px",
                borderTopLeftRadius: index == 0 ? "5px" : "0px",
                borderTopRightRadius: index == 0 ? "5px" : "0px",
                borderBottomLeftRadius: index == feed.length - 1 ? "5px" : "0px",
                borderBottomRightRadius: index == feed.length - 1 ? "5px" : "0px"
            }, onClickUser: _this.gotoProfile, onClick: function () { return _this.threadClicked(message.threadID); }, key: message.id, message: message, service: getService(message.authorID)});
        });
        var bottomBar = {
            height: "100px",
            position: "absolute",
            left: "0px", top: "0px", right: "0px"
        };
        return React.createElement("div", {style: containerStyle}, messages, React.createElement("div", {style: bottomBar}, React.createElement("h1", {style: { fontWeight: "200", lineHeight: "100px", verticalAlign: "bottom", marginLeft: "15px" }}, "Feed"), React.createElement("i", {className: "ion-compose", style: {
            width: "50px",
            height: "50px", lineHeight: "50px", verticalAlign: "middle", textAlign: "center",
            position: "absolute", right: "0", bottom: "0", fontSize: "20pt"
        }})));
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
            $(_this.rootContainer).animate({ opacity: "0", marginLeft: "-100px" }, 300, function () {
                _this.setState({});
                $(_this.rootContainer).css("margin-left", "0px");
                $(_this.rootContainer).css("margin-top", "100px");
                $(_this.rootContainer).animate({ opacity: "1", marginTop: "0px" }, 300);
            });
        };
        this.back = function () {
            _this.state.pages.pop();
            $(_this.rootContainer).animate({ opacity: "0", marginLeft: "100px" }, 150, function () {
                _this.setState({});
                $(_this.rootContainer).css("margin-left", "-100px");
                $(_this.rootContainer).animate({ opacity: "1", marginLeft: "0px" }, 150);
            });
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
            borderBottom: "1px solid lightgray",
            height: "50px",
            position: "fixed",
            left: "0", right: "0", top: "0",
            textAlign: "Center",
            zIndex: "9999"
        };
        var itemStyle = {};
        var icon = {
            width: "50px", height: "50px",
            lineHeight: "50px", verticalAlign: "middle", textAlign: "center",
            color: "white", fontSize: "20pt", background: "red"
        };
        var icons = [
            { icon: "ion-ios-home-outline", text: "Feed" },
            { icon: "ion-ios-person-outline", text: "Me" }
        ].map(function (icon, index) {
            return React.createElement("div", {onClick: function () { return _this.switchSection(index); }, style: {
                background: index == _this.state.selectedSection ? "rgba(0,0,0,0.05)" : "white",
                display: "inline-block",
                paddingRight: "10px",
                cursor: "pointer"
            }}, React.createElement("i", {className: icon.icon, style: {
                borderRadius: "0px",
                width: "50px", height: "50px",
                lineHeight: "50px", verticalAlign: "middle", textAlign: "center",
                fontSize: "20pt",
                paddingLeft: "10px", paddingRight: "10px",
                color: index == _this.state.selectedSection ? State.color : "lightgray"
            }}), React.createElement("span", {style: {
                color: index == _this.state.selectedSection ? State.color : "lightgray",
                lineHeight: "50px", verticalAlign: "middle"
            }}, icon.text));
        });
        return React.createElement("div", null, React.createElement("div", {ref: function (ref) { return _this.rootContainer = ref; }, style: {
            borderLeft: "0px solid lightgray", background: "white",
            zIndex: this.state.selectedSection == 0 ? "99" : "0",
            position: "absolute", left: "0", top: "15px", bottom: "0", right: "0px"
        }}, content), React.createElement("div", {style: {
            zIndex: this.state.selectedSection == 1 ? "99" : "0",
            background: "white", position: "absolute", left: "0", top: "0",
            bottom: "0", right: "0"
        }}), React.createElement("div", {style: barStyle}, React.createElement("i", {onClick: this.back, className: "ion-ios-arrow-back", style: {
            width: "50px", height: "50px", lineHeight: "50px", textAlign: "center", verticalAlign: "middle",
            background: "rgba(0,0,0,0.00)", fontSize: "20pt", color: "gray",
            position: "absolute", top: "0", left: "0",
            visibility: this.state.pages.length == 1 ? "collapse" : "visible"
        }}), React.createElement("div", {style: { verticalAlign: "middle", display: "inline-block", marginLeft: "auto", marginRight: "auto" }}, icons)));
    };
    return App;
}(React.Component));
function initUI() {
    ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
}
