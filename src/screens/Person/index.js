import React, { Component } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { HeadingComponent } from '../../components/Heading';
import axios from 'axios';

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = { person: {} };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    axios
      .get(`https://api.github.com/users/${params.username}`, {
        headers: {
          'User-Agent': 'request'
        }
      })
      .then(({ data: person }) => {
        this.setState({ person });
      });
  }

  render() {
    const { title, location, history } = this.props;
    const { person } = this.state;
    return (
      <div>
        <HeadingComponent title={title} location={location} history={history} />
        <Card>
          <Card.Body>
            <Row>
              <Col xs="1">
                <Image width="80px" src={person.avatar_url} roundedCircle />
              </Col>
              <Col>
                <div>{person.name}</div>
                <div>{person.location}</div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Person;
