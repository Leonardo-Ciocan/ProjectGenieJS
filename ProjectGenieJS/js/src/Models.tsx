class Service {
    constructor(public id: string,
        public name: string,
        public description: string) { }
}

class Message {
    constructor(
        public id: string,
        public body: string,
        public sendFromUser : boolean    ) { }

}

var State = {
    messages: [
        new Message("1", "3 people posted on your timeline", false),
        new Message("2", "Like that", true),
        new Message("3", "Any notifications?", true),
        new Message("4", "Not right now", false),
        new Message("5", "I'll remind you in 10 minutes", false),
    ]
};

