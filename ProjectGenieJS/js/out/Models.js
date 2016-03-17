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
var State = {
    messages: [
        new Message("1", "3 people posted on your timeline", false),
        new Message("2", "Like that", true),
        new Message("3", "Any notifications?", true),
        new Message("4", "Not right now", false),
        new Message("5", "I'll remind you in 10 minutes", false),
    ],
    threads: [
        {
            id: "0",
            services: [{ name: "Facebook", description: "Social network", color: { r: 0, g: 0, b: 255 } }]
        },
        {
            id: "1",
            services: [{ name: "Azure", description: "Social network", color: { r: 0, g: 255, b: 0 } }]
        },
    ]
};
