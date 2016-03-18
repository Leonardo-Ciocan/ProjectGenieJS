var MessageType;
(function (MessageType) {
    MessageType[MessageType["text"] = 0] = "text";
    MessageType[MessageType["image"] = 1] = "image";
    MessageType[MessageType["chart"] = 2] = "chart";
    MessageType[MessageType["URL"] = 3] = "URL";
})(MessageType || (MessageType = {}));
var Thread = (function () {
    function Thread() {
    }
    return Thread;
}());
;
var i = 0;
function generateID() { return String(i++); }
var State = {
    color: "#00cc66",
    username: "leonardo",
    name: "Leonardo Ciocan",
    currentThread: "1",
    threads: [
        { id: "0" },
        { id: "1" }
    ],
    messages: [
        { id: "0", type: 0, body: "Your weekly spending is $55", threadID: "0", authorID: "0" },
        { id: "1", type: 0, body: "@azure What about monthly?", threadID: "0", authorID: "" },
        { id: "2", type: 0, body: "@leonardo That would be $200", threadID: "0", authorID: "0" },
        { id: "3", type: 0, body: "@azure Remind me to do X and Y", threadID: "1", authorID: "" },
        { id: "4", type: 0, body: "@leonardo Cool , I'll remind you next week", threadID: "1", authorID: "0" },
    ],
    services: [
        { id: "0", name: "Azure", color: "#00C0F5" }
    ],
    getThread: function (id) {
        return this.threads.filter(function (thread) { return thread.id == id; })[0];
    },
    getColor: function () {
        return this.getThread(this.currentThread).services[0].color;
    },
    getService: function () {
        return this.getThread(this.currentThread).services[0].name;
    }
};
function getService(id) {
    return State.services.filter(function (service) { return service.id == id; })[0];
}
function getMessagesByThread(threadID) {
    var messages = State.messages;
    return messages.slice().filter(function (message) { return message.threadID == threadID; });
}
function getMessagesByService(serviceID) {
    var messages = State.messages;
    return messages.slice().filter(function (message) { return message.authorID == serviceID; });
}
