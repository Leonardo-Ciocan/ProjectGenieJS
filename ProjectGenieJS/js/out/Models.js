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
    ],
    services: [
        { id: "0", name: "Azure", color: "dodgerblue" }
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
function getMessages(threadID) {
    return State.messages.filter(function (message) { return message.threadID == threadID; });
}
