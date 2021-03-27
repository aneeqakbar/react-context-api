import React from 'react';

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IhR4lMZqoK02sUVE7sPOKgHaHa%26pid%3DApi&f=1" style={{ position: 'absolute', left: mouse.x, top: mouse.y, width:'50px', }} />
        );
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };                          //<----------
        // state in react constructor is used to initialize some state  //|
    }                                                                   //|
                                                                        //|
    handleMouseMove(event) {                                            //|
        this.setState({                                                 //|
            x: event.clientX,                                           //|
            y: event.clientY                                            //|
        });                                                             //|
        // here we are updating the state of react constructor defined up there
    }

    render() {
        return (
            <div style={{ height: '100vh',border:'2px solid red' }} onMouseMove={this.handleMouseMove}>

                {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
                {this.props.render(this.state)}
                {/* {console.log(this.state)} */}
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )} />
                {/* cat here is given to mouse as an argument named "render" which is a function which returns Cat component with the given args and mouse is accessing it using {this.props} */}
            </div>
        );
    }
}

export default MouseTracker