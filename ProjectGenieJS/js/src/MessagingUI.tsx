/// <reference path="../typings/react-global.d.ts"/>

interface MessageComponentProps {
    message: Message
    key? : any
}
class MessageComponent extends React.Component<MessageComponentProps, {}>{
    render() {

        var containerStyle = {
            maxWidth: "250px",
            background: this.props.message.sendFromUser ? "gray" : State.getThread(State.currentThread).services[0].color,
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
            display: "inline-block",
            color: "white",
            marginLeft: "20px", marginRight: "20px",
            textAlign:"left"
        };
        return <div style={{ textAlign: this.props.message.sendFromUser ? "right":"left" }}>
                <div style={containerStyle} >
                    {this.props.message.body}
                </div>
             </div>
    }
}

interface ThreadComponentProps {
    thread: Thread
    onClick : Function
    index : number
    key?: any
}
class ThreadComponent extends React.Component<ThreadComponentProps, {}>{
    render() {

        var containerStyle = {
            paddingBottom: "10px",
            paddingLeft:"10px",
            borderBottom:"1px solid lightgray"
        };
        return <div onClick={this.divClicked} style={containerStyle} >
               <h1 style={{marginLeft:"50px", fontWeight: "200", fontSize: "15pt", color: "black" }}>{this.props.thread.services[0].name}</h1>
               <h2 style={{ marginLeft: "50px", fontWeight: "200", fontSize: "13pt", color: "gray",maginTop:"5px" }}>This is the last message</h2>
            </div>
    }

    divClicked = () => {
        this.props.onClick(this.props.index);
    }
}