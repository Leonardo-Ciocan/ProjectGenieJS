/// <reference path="../typings/react-global.d.ts"/>
/// <reference path="./Models.tsx"/>
/// <reference path="../typings/react-router.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
console.log("HELLOX");
var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var IndexRoute = window.ReactRouter.IndexRoute;
var Link = window.ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        _super.call(this, props);
        this.state = {};
    }
    App.prototype.render = function () {
        var containerStyle = {
            width: "100%", height: "100%", background: "green", paddingTop: "30px"
        };
        return React.createElement("div", {style: containerStyle}, React.createElement("li", null, React.createElement(Link, {to: "/about"}, "About")), React.createElement("li", null, React.createElement(Link, {to: "/inbox"}, "Inbox")), this.props.children);
    };
    return App;
}(React.Component));
var IndexPage = (function (_super) {
    __extends(IndexPage, _super);
    function IndexPage(props) {
        _super.call(this, props);
        this.state = {};
    }
    IndexPage.prototype.render = function () {
        var containerStyle = {
            width: "300px", height: "300px", background: "red"
        };
        return React.createElement("div", {style: containerStyle});
    };
    return IndexPage;
}(React.Component));
function initUI() {
    ReactDOM.render((React.createElement(IndexPage, null)), document.getElementById("root"));
}
