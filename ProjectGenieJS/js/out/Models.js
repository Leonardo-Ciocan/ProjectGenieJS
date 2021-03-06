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
    color: "black",
    username: "leonardo",
    name: "Leonardo C",
    currentThread: "1",
    threads: [
        { id: "0" },
        { id: "1" },
        { id: "2" }
    ],
    messages: [
        { id: generateID(), type: 0, body: "Your weekly spending is $55", threadID: "0", authorID: "0" },
        { id: generateID(), type: 0, body: "@azure What about monthly?", threadID: "0", authorID: "" },
        { id: generateID(), type: 0, body: "@leonardo That would be $200", threadID: "0", authorID: "0" },
        { id: generateID(), type: 0, body: "@azure Remind me to do X and Y", threadID: "1", authorID: "" },
        { id: generateID(), type: 0, body: "@leonardo Cool , I'll remind you next week", threadID: "1", authorID: "0" },
        { id: generateID(), type: 0, body: "@amazon How much is a samsung cable?", threadID: "2", authorID: "" },
        { id: generateID(), type: 0, body: "@leonardo Cheapest is $15", threadID: "2", authorID: "1" },
    ],
    services: [
        { id: "0", description: "Azure is a cloud computing platform and infrastructure from microsoft", name: "Azure", color: "#00C0F5" },
        { id: "1", description: "An american electronic commerce and cloud computing company", name: "Amazon", color: "orange" },
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
function getFeed() {
    return State.threads.map(function (thread) {
        var msgs = getMessagesByThread(thread.id).slice().filter(function (msg) { return msg.authorID != ""; });
        return msgs[msgs.length - 1];
    });
}
