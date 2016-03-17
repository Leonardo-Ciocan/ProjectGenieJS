var MessageType;
(function (MessageType) {
    MessageType[MessageType["text"] = 0] = "text";
    MessageType[MessageType["image"] = 1] = "image";
    MessageType[MessageType["chart"] = 2] = "chart";
    MessageType[MessageType["URL"] = 3] = "URL";
})(MessageType || (MessageType = {}));
var Service = (function () {
    function Service() {
    }
    return Service;
}());
var Thread = (function () {
    function Thread(id, services) {
        this.id = id;
        this.services = services;
    }
    return Thread;
}());
;
var i = 0;
function generateID() { return String(i++); }
var State = {
    currentThread: "1",
    messages: {
        "0": [
            { id: generateID(), type: MessageType.text, data: "This is a sample text message", sendFromUser: true },
            { id: generateID(), type: MessageType.text, data: "Yet another message", sendFromUser: false },
            { id: generateID(), type: MessageType.text, data: "And even more here", sendFromUser: false },
            { id: generateID(), type: MessageType.text, data: "Last message", sendFromUser: true },
            { id: generateID(), type: MessageType.image, data: { url: "http://images4.fanpop.com/image/photos/16000000/Beautiful-Cat-cats-16096437-1280-800.jpg" }, sendFromUser: false },
            {
                id: generateID(),
                type: MessageType.chart,
                data: {
                    data: [10, 20, 30, 40],
                    labels: ["First", "Second", "Third", "Fourth"]
                },
                sendFromUser: false
            },
        ],
        "1": [
            {
                id: generateID(),
                type: MessageType.URL,
                data: {
                    url: "http://www.theverge.com/2016/3/15/11240632/why-isnt-there-more-tablets-like-this",
                    thumb: "http://images4.fanpop.com/image/photos/16000000/Beautiful-Cat-cats-16096437-1280-800.jpg",
                    text: "Click here for candy"
                }
            },
            {
                id: generateID(),
                type: MessageType.chart,
                data: {
                    data: [22, 8, 155, 10, 101],
                    labels: ["Hello", "World", "And", "More"]
                },
                sendFromUser: false
            }
        ],
        "2": []
    },
    threads: [
        {
            id: "0",
            services: [{ name: "Facebook", description: "Social network", color: "#3b5998" }]
        },
        {
            id: "1",
            services: [{ name: "Amazon", description: "Social network", color: "orange" }]
        },
        {
            id: "2",
            services: [{ name: "Blackrock", description: "Financial thingie", color: "black" }]
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
