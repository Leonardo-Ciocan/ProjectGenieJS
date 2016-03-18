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
    username:string
};

var i = 0
function generateID(){ return String(i++); }

var State: IState = {
    username: "leonardo",
    name:"Leonardo Ciocan",
    currentThread: "1",
    threads: [
        { id: "0" },
        { id: "1" }
    ],
    messages: [
        { id: "0", type: 0, body: "Your weekly spending is $55", threadID: "0" , authorID: "0" },
        { id: "1", type: 0, body: "@azure What about monthly?", threadID: "0" , authorID: "" },
        { id: "2", type: 0, body: "@leonardo That would be $200", threadID: "0" , authorID: "0" },
    ],
    services: [
        { id: "0", name: "Azure", color: "dodgerblue" }
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

function getMessages(threadID: string): Array<Message> {
    return State.messages.filter((message) => message.threadID == threadID);
}