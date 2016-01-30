
import React from 'react/addons';
import PokeMessage from './PokeMessage';

//All work
//const CSSTransitionGroup = React.addons.CSSTransitionGroup;
//const { CSSTransitionGroup } = React.addons;
//MAKING BEFORE "npm install --save react-addons-css-transition-group"
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class PokeChat extends React.Component {

  render() {
    return <ul className="pokechat">
    <CSSTransitionGroup transitionName="message-animation">
    {
      this.props.messages.map((message) => {
        return <PokeMessage key={message.id} message={message} />
      })
    }
    </CSSTransitionGroup>
    </ul>
  }
}

PokeChat.defaultProps = { messages: [] };