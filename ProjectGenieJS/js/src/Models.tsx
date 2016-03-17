interface Color {
    r: number
    g: number
    b: number
}

class Service {
        public name: string
        public description: string
        public color : string   
}

class Message {
    constructor(
        public id: string,
        public body: string,
        public sendFromUser : boolean    ) { }

}

class Thread {
    constructor(
        public id: string,
        public services: Array<Service>) { }
}

interface IState {
    threads: Array<Thread>
    currentThread: string
    messages: { [id: string]: Array<Message>; }
    getThread: Function
    getColor: Function
    getService: Function
};

var State: IState = {
    currentThread : "0",
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
        return this.threads.filter((thread) => thread.id == id)[0];
    },
    getColor: function () {
        return this.getThread(this.currentThread).services[0].color
    }
    ,
    getService: function () {
        return this.getThread(this.currentThread).services[0].name
    }
};

