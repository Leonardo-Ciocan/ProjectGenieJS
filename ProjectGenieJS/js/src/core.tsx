/// <reference path="../typings/react-global.d.ts"/>
/// <reference path="./MessagingUI.tsx"/>
/// <reference path="./Models.tsx"/>

interface MainPageState {
    messages: Array<Message>
}
class MainPage extends React.Component<{ collapsed: boolean }, MainPageState>{
    constructor(props) {
        super(props);
        this.state = {
            messages: State.messages
        };
    }

    render() {
        var inputStyle = {
            position: "absolute",
            left: "5px",
            bottom: "0", right: "0px",
            padding: "10px",
            border: "none",
            borderTop: "1px solid lightgray",
            width: "100%"
        };

        var messages = this.state.messages.map((message) => {
            return <MessageComponent key={message.id} message={message} />
        });

        return <div>

             <div style={{
                 height: "100%",
                 position: "absolute",
                 top: "0", bottom: "0", left: this.props.collapsed ? "0px" : "200px", right: "0"

             }}>
                {messages}
                     <input style={inputStyle}
                         placeholder="Enter message"
                         defaultValue="supper"
                         type="text"
                         onKeyPress={this.textKeyDown.bind(this) }
                         className="win-textbox"/>
                 </div>

                  <div style={{
                      width: this.props.collapsed ? "0px" : "200px",
                      height: "100%",
                      borderRight: "1px solid lightgray",
                      position: "absolute",
                      top: "0", bottom: "0", left: "0",
                      background: "#fafafa",
                      overflow: "hidden"
                  }}>

                    <h1 style={{ width: "100%", textAlign: "center" }}>
                        Threads
                        </h1>

                      </div>
            </div>
    }

    lid : number = 155
    textKeyDown(e) {
        if (e.key === 'Enter') {
            this.lid++;
            State.messages.push(new Message(String(this.lid), e.target.value, true));
            console.log(this.lid);
            this.setState({
                messages: State.messages
            });
            e.target.value = "";
        }
    }

}

function startUI(collapsed) {
    console.log(collapsed);
    ReactDOM.render(<MainPage collapsed={collapsed} />, document.getElementById("root"));
}
