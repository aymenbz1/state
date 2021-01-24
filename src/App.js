
import React, { useState } from "react";
import './App.css';
import Person from "./component/person"
import {Button} from 'react-bootstrap';
class App extends React.Component{
// const App =()=> {
  state={
    show:false,
    timer:0,
    intervalle:null,
  };
  // const [timer,setTimer]= useState(0);
  setShow = () =>
    this.setState({
      show: !this.state.show,
    });

  increment(){
  this.setState({intervalle:setInterval(()=>this.setState({timer:this.state.timer+1}),1000)})}
  
  

  render(){
    return (
      <div>
 <Button variant="primary" style={{margin:"40px 200px 0px 450px"}}
    onClick={()=>{if(this.state.show){
     this.setShow();
      clearInterval(this.state.intervalle);
      this.setState({timer:0});
    }else{
      this.setShow();
       this.increment();
    }
    }}
      >
     {this.state.show ? "Hide Counter" : "Show Counter"}
     </Button>{' '}
   
     {this.state.show ?(<> 
      <Person/>
     <span >{this.state.timer}</span>
     </> )
     : null}

      {/* <Person/> */}
      {/* <button>Incrementation</button> */}
     
      </div>
    )
  }
}

export default App;
