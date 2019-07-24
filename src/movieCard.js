import React, { Component } from 'react'
import Star from "./start";
import "./App.css"



export default class Movcard extends Component {

  constructor(props){
    super(props)
      this.state={
        moviesinformations:[]
       
      }
    }
    componentWillMount() {
      this.setState({moviesinformations:this.props.mov })}
   // onStarClick= (nextValue, i)=>{
      componentWillReceiveProps(nextProps) {
          if(this.props !== nextProps) {
            this.setState({
              moviesinformations: nextProps.mov
            });
          }
        }
  render() {
    return (
      <div>
        <div className="movie-card">
    <Star star={this.state.moviesinformations.rating}/>
 
<div
  className="movie-image"
  style={{
    backgroundImage:
     `url('${this.state.moviesinformations.image}')`
  }}
/>
<div className="movie-description">{this.state.moviesinformations.title}-{this.state.moviesinformations.year}</div>
</div>
      </div>
    )
  }
}


// function Movcard({mov})

// {
//     // const mov=props.mov
// return (<div className="movie-card">
//     <Star star={mov.rating}/>
 
// <div
//   className="movie-image"
//   style={{
//     backgroundImage:
//      `url('${mov.image}')`
//   }}
// />
// <div className="movie-description">{mov.title}-{mov.year}</div>
// </div>)
// }
// export default Movcard