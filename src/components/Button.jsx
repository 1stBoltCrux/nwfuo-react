import React from 'react';
import './button.css';
import Dropdown from './Dropdown.jsx';



class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isDropdown: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      isDropdown: !prevState.isDropdown
    }));

  }
  render() {
    let list = null;
    if (this.state.isDropdown === true) {
      list = <Dropdown/>;
    } else {
      list = null;
    }
    return (
      <div className='button-wrapper'>
        <div className='button-content'data-menu>
          <p onClick={this.handleClick}>Sports</p>
        </div>
        <div className='dropdown'>
          {list}
        </div>
      </div>
    );
  }
}


export default Button;
