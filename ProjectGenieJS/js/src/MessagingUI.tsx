/// <reference path="../typings/react-global.d.ts"/>

interface MessageComponentProps {
    message: Message
    key? : any
}
class MessageComponent extends React.Component<MessageComponentProps, {}>{
    render() {

        var containerStyle = {
            maxWidth: "250px",
            background: "dodgerblue",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
            display: "inline-block",
            color:"white"
        };
        return <div style={{ textAlign: this.props.message.sendFromUser ? "right":"left" }}>
                <div style={containerStyle} >
                    {this.props.message.body}
                </div>
             </div>
    }
}
