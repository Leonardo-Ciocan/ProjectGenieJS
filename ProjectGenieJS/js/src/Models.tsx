interface Color {
    r: number
    g: number
    b: number
}

class Service {
        public name: string
        public description: string
        public color : Color   
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

