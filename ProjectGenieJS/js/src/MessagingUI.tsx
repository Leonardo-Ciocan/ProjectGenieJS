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
    selected : boolean
}
class ThreadComponent extends React.Component<ThreadComponentProps, {}>{
    render() {

        var containerStyle = {
            paddingBottom: "10px",
            paddingLeft: "10px",
            borderTop:"1px solid transparent",
            borderBottom: "1px solid rgba(0,0,0,0.2)",
            color: this.props.selected ? State.getColor() : "black",
            height:"90px"
        };
        var circleStyle = {
            width: "70px", height: "70px",
            margin: "10px",
            borderRadius: "100%",
            border: "1px solid " + this.props.thread.services[0].color,
            position:"absolute"
        };
        return <div onClick={this.divClicked} style={containerStyle} >
               <div style={circleStyle} ></div>
               <h1 style={{marginLeft:"90px", fontWeight: "200", fontSize: "15pt" }}>{this.props.thread.services[0].name}</h1>
               <h2 style={{ marginLeft: "90px", fontWeight: "200", fontSize: "13pt",maginTop:"5px" }}>This is the last message</h2>
            </div>
    }

    divClicked = () => {
        this.props.onClick(this.props.index);
    }
}