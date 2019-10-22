import React, { Component } from "react";
import { render } from "react-dom";
import Swipeable from "react-swipy";


class cardStream extends Component {
    state = {
      cards: ["First", "Second", "Third"]
    };
  
    remove = () =>
      this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));
  
    render() {
      const { cards } = this.state;
  
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
                  onAfterSwipe={this.remove}
                >
                  <Card>{cards[0]}</Card>
                </Swipeable>
                {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>}
              </div>
            )}
            {cards.length <= 1 && <Card zIndex={-2}>No more cards</Card>}
          </div>
        </div>
      );
    }
  }