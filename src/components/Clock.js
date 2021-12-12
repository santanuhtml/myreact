/* eslint-disable react/destructuring-assignment */
import React from 'react';

// eslint-disable-next-line no-unused-vars
// function NameCall(props){
//   return(
//     <h1>
//       Hello {props.name}
//     </h1>
//   );
// }

// export default NameCall;


// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component{
  // eslint-disable-next-line constructor-super
  // eslint-disable-next-line no-useless-constructor
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     date: new Date(),
  //   }
  // }
  state = {date: new Date()};
  
  componentDidMount(){
    this.clockTime = setInterval(()=> 
    this.tick(),1000);
  }

  // eslint-disable-next-line react/sort-comp
  tick(){
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    clearInterval((this.clockTime))
  }

  render(){
    return(
      <p>{this.state.date.toLocaleTimeString(this.props.locale)}</p>
    )
  }
}
export default Clock;

