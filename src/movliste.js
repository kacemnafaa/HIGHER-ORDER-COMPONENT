import React, { Component } from 'react';
import "./App.css";
import Movcard from "./movieCard";

// function Movliste(props)
 
// {
//     const movlist=props.movlist  
// return  <div className="movie-list">
//     {
//          movlist.map((el,i)=> <Movcard key={el.id} mov={el} />)
//     }
//         </div>
       
//         }
        
//         export default Movliste;
        export default class Movliste extends Component {

            constructor(props){
              super(props)
                this.state={
                  moviesinformations:[]
                 
                }
              }
              componentWillMount() {
                this.setState({moviesinformations:this.props.movlist })}
             // onStarClick= (nextValue, i)=>{
                componentWillReceiveProps(nextProps) {
                    if(this.props !== nextProps) {
                      this.setState({
                        moviesinformations: nextProps.movlist
                      });
                    }
                  }
            render() {
              return (
                <div>
                 <div className="movie-list">
    {
         this.state.moviesinformations.map((el,i)=> <Movcard key={el.id} mov={el} />)
    }
        </div>
                </div>
              )
            }
          }
          