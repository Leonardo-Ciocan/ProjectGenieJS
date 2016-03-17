var Service = (function () {
    function Service() {
    }
    return Service;
}());
var Message = (function () {
    function Message(id, body, sendFromUser) {
        this.id = id;
        this.body = body;
        this.sendFromUser = sendFromUser;
    }
    return Message;
}());
var Thread = (function () {
    function Thread(id, services) {
        this.id = id;
        this.services = services;
    }
    return Thread;
}());
;
var State = {
    currentThread: "0",
    messages: {
        "0": [
            new Message("1", "3 people posted on your timeline", false),
            new Message("2", "Like that", true),
            new Message("3", "Any notifications?", true),
            new Message("4", "Not right now", false),
            new Message("5", "I'll remind you in 10 minutes", false),
        ],
        "1": [
            new Message("1a", "Something here", false),
            new Message("2a", "Another line", true),
            new Message("3a", "And more", false),
        ],
        "2": [
            new Message("1b", "This is some very answer and abraham lincln is the answer to this question", false),
            new Message("2b", "Should be wrapping at X or Y", true),
            new Message("3b", "Another", true),
            new Message("4b", "And more stuff", false),
            new Message("5b", "I'll remind you in 10 minutes", false),
        ]
    },
    threads: [
        {
            id: "0",
            services: [{ name: "Facebook", description: "Social network", color: "dodgerblue" }]
        },
        {
            id: "1",
            services: [{ name: "Azure", description: "Social network", color: "red" }]
        },
        {
            id: "2",
            services: [{ name: "Blackrock", description: "Financial thingie", color: "green" }]
        },
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
