var Service = (function () {
    function Service(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
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
var State = {
    messages: [
        new Message("1", "3 people posted on your timeline", false),
        new Message("2", "Like that", true),
        new Message("3", "Any notifications?", true),
        new Message("4", "Not right now", false),
        new Message("5", "I'll remind you in 10 minutes", false),
    ]
};
