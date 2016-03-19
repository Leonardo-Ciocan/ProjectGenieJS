enum MessageType {
    text = 0,
    image = 1,
    chart = 2,
    URL = 3
}

interface Service {
         name: string
         description?: string
         color: string   
         id :string
}

class Thread {
    id : string
}

interface Message {
    id: string
    body:string
    data?: any
    sendFromUser?: boolean
    type: MessageType
    threadID : string
    authorID : string
}

interface IState {
    threads: Array<Thread>
    currentThread: string
    messages: Array<Message>
    services: Array<Service>
    getThread: Function
    getColor: Function
    getService: Function
    name: string
    username: string
    color:string
};

var i = 0
function generateID(){ return String(i++); }

var State: IState = {
    color: "black",
    username: "leonardo",
    name:"Leonardo C",
    currentThread: "1",
    threads: [
        { id: "0" },
        { id: "1" },
        { id: "2" }
    ],
    messages: [
        { id: generateID(), type: 0, body: "Your weekly spending is $55", threadID: "0", authorID: "0" },
        { id: generateID(), type: 0, body: "@azure What about monthly?", threadID: "0" , authorID: "" },
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

function getService(id: string) : Service {
    return State.services.filter((service) => service.id == id)[0] ;
}

function getMessagesByThread(threadID: string): Array<Message> {
    var messages = State.messages;
    return messages.slice().filter((message) => message.threadID == threadID);
}

function getMessagesByService(serviceID: string): Array<Message> {
    var messages = State.messages;
    return messages.slice().filter((message) => message.authorID == serviceID);
}

function getFeed(): Array<Message> {
    return State.threads.map((thread) => {
        var msgs = getMessagesByThread(thread.id).slice().filter((msg) => msg.authorID != "");
        return msgs[msgs.length - 1];
    });
}