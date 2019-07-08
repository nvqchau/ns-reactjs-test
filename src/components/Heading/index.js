import React from 'react';
import { Button } from 'react-bootstrap';

class HeadingComponent extends React.Component {
  handleBack = () => {
    console.log(this.props);
    this.props.history.push('/');
  }

  renderBackButton = () => {
    return (
      <Button onClick={this.handleBack} variant="link" className="Back-button">
        &lt;
      </Button>
    );
  };
  render() {
    const { title, location } = this.props;
    let button;
    if (location.pathname === '/') {
      button = '';
    } else {
      button = this.renderBackButton();
    }
    return (
      <div className="App-header">
        {button}
        <span>{title}</span>
      </div>
    );
  }
}

export { HeadingComponent };
