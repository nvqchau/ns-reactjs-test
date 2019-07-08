import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { HeadingComponent } from '../../components/Heading';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { topFive: ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'] };
  }

  renderButtons = () => {
    return this.state.topFive.map((item, index) => (
      <Link to={`/person/${item}`} key={index}>
        <Button variant="primary">
          {item}
        </Button>
      </Link>
    ));
  };

  render() {
    const { title, location, history } = this.props;

    return (
      <div>
        <HeadingComponent title={title} location={location} history={history} />
        <h2>Top 5 GitHub Users</h2>
        <p>Tap the username to see more information</p>

        <ButtonToolbar>{this.renderButtons()}</ButtonToolbar>
      </div>
    );
  }
}

export default Home;
