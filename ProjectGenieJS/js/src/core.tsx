/// <reference path="../typings/react-global.d.ts"/>
/// <reference path="./MessagingUI.tsx"/>
/// <reference path="./Models.tsx"/>

interface MainPageState {
    messages? : Array<Message>
    threads?: Array<Thread>
    selectedIndex? : number
}
class MainPage extends React.Component<{ collapsed: boolean }, MainPageState>{
    constructor(props) {
        super(props);
        this.state = {
            messages: State.messages[State.currentThread],
            threads: State.threads,
            selectedIndex : 0
        };
    }

    messagesContainer: any
    inputBox: any

    render() {
        var inputStyle = {
            background: "white",
            marginBottom: "0px",
            height: "45px",
            lineHeight: "45px",
            verticalAlign: "middle",
            border: "none",
            position: "absolute",
            left: "10px",
            top: "0", bottom: "0", right: "50px",
            width: "50%",
            margin:"0px"
        };

        var inputParentStyle = {
            position: "absolute",
            left: "1px",
            bottom: "0", right: "0px",
            borderTop: "1px solid lightgray",
            background: "white",
            height: "45px"
        };

        var messages = this.state.messages.map((message) => {
            if (message.type == MessageType.text) {
                return <MessageComponent key= { message.id } message= { message } />
            }
            else if (message.type == MessageType.image) {
                return <ImageMessage key= { message.id } message= { message } />
            }
            else if (message.type == MessageType.chart) {
                return <ChartMessage key= { message.id } message= { message } />
            }
            else if (message.type == MessageType.URL) {
                return <URLMessage key= { message.id } message= { message } />
            }
        });

        var threads = this.state.threads.map((thread, index) => {
            return <ThreadComponent selected={index == this.state.selectedIndex} index={index} onClick={this.threadClicked} key={thread.id} thread={thread} />
        });

        return <div>
        <div style={{
            width: "300px",
            height: "100%",
            position: "absolute",
            top: "0", bottom: "0", left: "0",
            background: "#fafafa",
            overflow: "hidden"
        }}>

                    <h1 style={{ fontWeight: "200", margin: "10px", width: "100%", textAlign: "left" }}>
                        {this.props.collapsed ? "" : "Threads"}
                        </h1>

                        {threads}

            </div>
             <div style={{
                background:"white",
                 height: "100%",
                 position: "absolute",
                 overflow :"hidden",
                 top: "0", bottom: "0", left: this.props.collapsed ? "100px" : "300px", right: "0",
                             borderLeft: "1px solid lightgray",

            }}>
                <div
                    ref={(ref) => this.messagesContainer = ref}
                    style={{
                    marginTop:"50px",
                    overflowX: "hidden", overflowY: "scroll",
                    position: "absolute", top: "0", left: "0", bottom: "50px", right: "0",
                    paddingBottom:"25px"
                    }}
                    >
                                {messages}
                </div>

                <h1 style={{ 
                    color: State.getColor(),
                    fontWeight: "200",
                    margin: "10px", width: "100%", marginLeft:"20px",
                    textAlign: "left"
                }}>
                    {State.getService() }
                    </h1>


                     <div style={inputParentStyle} >
                         <a
                        href="#"
                        onClick={this.doneClicked}

                        style={{
                            textDecoration: "none",
                            color: State.getColor(),
                            position: "absolute",
                            lineHeight: "45px",
                            verticalAlign: "middle",
                            right: "10px", top: "0px", bottom: "0px"
                        }}
                        >Send</a>
                         <input
                            ref={(ref) => this.inputBox = ref}
                            style={inputStyle}
                             placeholder="Enter message"
                             type="text"
                             onKeyPress={this.textKeyDown.bind(this) }
                         className="win-textbox"/>
                     </div>
                 </div>

                  
            </div>
    }

    threadClicked = (index) => {
        State.currentThread = State.threads[index].id;
        this.setState({
            messages: State.messages[State.currentThread],
            selectedIndex : index
        });
    }

    doneClicked = () => {
        this.addItem(this.inputBox.value);
        //this.inputBox.blur();
        this.inputBox.value = "";
    }

    lid : number = 155
    textKeyDown(e) {
        if (e.charCode === 13) {
            this.addItem(e.target.value);
            //e.target.blur();
            e.target.value = "";
        }
    }

    addItem(txt) {
        this.lid++;
        State.messages[State.currentThread].push({ id: generateID(), data: txt, type: MessageType.text, sendFromUser:true });
        this.setState({
            messages: State.messages[State.currentThread]
        });
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
            console.log(this.messagesContainer.scrollTop);
        }, 100);
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
            console.log(this.messagesContainer.scrollTop);
        }, 100);
    }

}

function startUI(collapsed) {
    console.log(collapsed);
    ReactDOM.render(<MainPage collapsed={collapsed} />, document.getElementById("root"));
}
