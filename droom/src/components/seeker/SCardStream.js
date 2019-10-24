import React, { Component } from "react";
import { render } from "react-dom";
import {connect} from 'react-redux';

import Swipeable from "react-swipy";
import {getSeekerJobs} from "../../utils/actions/seeker";
import {matchApps} from "../../utils/actions/matchActions"
import { Card, Button } from '@material-ui/core';


const appStyles = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "100vh",
    overflow: "hidden"
  };
  
  const wrapperStyles = { position: "relative", width: "50%", height: "60%" };
  const actionsStyles = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 12
  };

class cardStream extends Component {
    state = null
    
    componentDidMount() {
        this.props.getSeekerJobs()
    }
    componentDidUpdate(){
        if (this.state) return;
        this.setState(
            {cards: this.props.cards}
        )
    }
    matchApps =(direction)=>{
    //     if (direction === "left" )return;
    //     else if (direction === "right"){ 
    //       this.props.match(this.props.jobseeker_id)
    //       this.props.jobs.selected === true
    //       }
    // console.log(direction);

    }
    remove = () =>
      this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));
  
    render() {

      const { cards } = this.state || {cards:[]};
      console.log(cards);
  
      return (
        <div style={appStyles}>
          <div style={wrapperStyles}>
            {cards.length > 0 && (
              <div style={wrapperStyles}>
                <Swipeable
                  buttons={({ right, left }) => (
                    <div style={actionsStyles}>
                      <Button onClick={left}>Reject</Button>
                      <Button onClick={right}>Accept</Button>
                    </div>
                  )}
                  onSwipe={this.match}
                  onAfterSwipe={this.remove}
                >
                  <Card>
              
                   <h3>{cards[0].position}</h3>
                    <h4>{cards[0].location}</h4>
                    <h5>salary {cards[0].pay_range}</h5>
                    <p>{cards[0].description}</p>
               
                  </Card>

                </Swipeable>
                {cards.length > 1 && <Card zIndex={-1}>{cards[1].description}</Card>}
              </div>
            )}
            {cards.length <= 1 && <Card zIndex={-2}>No more cards</Card>}
          </div>
        </div>
      );
    }
  }

  const mapStatetoProps = (state)=>{
      return(
          {
              cards: state.seekerReducer.jobs
          }
      )
  }

export default connect(mapStatetoProps,{getSeekerJobs, matchApps})(cardStream)