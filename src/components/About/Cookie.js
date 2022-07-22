import React from "react";
import cookie from "../../Assets/fortune_cookie.svg";
import {Button, Modal} from "react-bootstrap";
import $ from 'jquery';


var array = 
[
"'Lee' means plum in Chinese", 
"I have a shih tzu named Bao",
"My sister is a nurse",
"I was born in NY Long Island",
"My mom is an engineer",
"My dad is a network engineer",
"Follow my dogs insta, @BaoInBrooklyn",

]

const getRandomFact = () => {
    return array[Math.floor(Math.random() * array.length)];
  };

class Cookie extends React.Component {
    constructor(){
        super();
        this.state = {
            show:false
        }
    }
    handleModal(){
        this.setState({show:!this.state.show});
    }
    

    render() {
        const randomFact = getRandomFact();
        return (
        <div id="fortune-cookie">   
            <h2 class="subtopic">Open this fortune cookie to learn more!</h2>            
            <Button onClick= {()=>{this.handleModal()}}><img src={cookie} className="fortune_cookie" alt="avatar" width="300" height="300"/></Button>
            <Modal show ={this.state.show}>
                <Modal.Header>Modal Header</Modal.Header>
                <Modal.Body>
                    {randomFact}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{this.handleModal()}}>Close Modal</Button>
                </Modal.Footer>
            </Modal>
        </div>
        )
    }
}

export default Cookie;
