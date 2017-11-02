import React from 'react';
import {
    Alert, Modal, ModalBody, ModalFooter,
    Container, Row, Col,
    Card, CardHeader, CardTitle, CardSubtitle, CardBody
} from 'reactstrap';

import Button from 'elements/CustomButton/CustomButton.jsx';

class Notifications extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            modal: false
        };
        this.onDismiss = this.onDismiss.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    onDismiss() {
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render(){
        return (
            <Container fluid>
                <Card>
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                        <CardSubtitle>Handcrafted by our friend </CardSubtitle>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={6} xs={12}>
                                <h5>
                                    <small>Notifications Style</small>
                                </h5>
                                <Alert color="info"><span>This is a plain notification</span></Alert>
                                <Alert color="info" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                                    <span>This is a notification with close button.</span>
                                </Alert>
                                <Alert color="info" className="alert-with-icon" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                                    <span data-notify="icon" className="now-ui-icons ui-1_bell-53"></span>
                                    <span data-notify="message">This is a notification with close button and icon.</span>
                                </Alert>
                                <Alert color="info" className="alert-with-icon" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                                    <span data-notify="icon" className="now-ui-icons ui-1_bell-53"></span>
                                    <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                                </Alert>
                            </Col>
                            <Col md={6} xs={12}>
                                <h5>
                                    <small>Notifications States</small>
                                </h5>
                                <Alert color="primary" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                                    <span><b> Primary - </b> This is a regular notification made with <code>color="primary"</code></span>
                                </Alert>
                                <Alert color="secondary" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                                    <span><b> Secondary - </b> This is a regular notification made with <code>color="secondary"</code></span>
                                </Alert>
                                <Alert color="success" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                                    <span><b> Success - </b> This is a regular notification made with <code>color="success"</code></span>
                                </Alert>
                                <Alert color="danger" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                                    <span><b> Danger - </b> This is a regular notification made with <code>color="danger"</code></span>
                                </Alert>
                                <Alert color="warning" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                                    <span><b> Warning - </b> This is a regular notification made with <code>color="warning"</code></span>
                                </Alert>
                                <Alert color="info" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                                    <span><b> Info - </b> This is a regular notification made with <code>color="info"</code></span>
                                </Alert>
                                <Alert color="light" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                                    <span><b> Light - </b> This is a regular notification made with <code>color="light"</code></span>
                                </Alert>
                                <Alert color="dark" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                                    <span><b> Dark - </b> This is a regular notification made with <code>color="dark"</code></span>
                                </Alert>
                            </Col>
                        </Row>
                        <br />
                        <br/>
                        <div className="places-button">
                            <Row>
                                <Col md={{ size: 6, offset: 3 }} className="text-center">
                                    <h5>
                                        Notifications places-button
                                        <p className="category">
                                            <small>Click to view notifications</small>
                                        </p>
                                    </h5>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col md={3} lg={3}>
                                    <Button block>
                                        Top Left
                                    </Button>
                                </Col>
                                <Col md={3} lg={3}>
                                    <Button block>
                                        Top Center
                                    </Button>
                                </Col>
                                <Col md={3} lg={3}>
                                    <Button block>
                                        Top Right
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col md={3} lg={3}>
                                    <Button block>
                                        Bottom Left
                                    </Button>
                                </Col>
                                <Col md={3} lg={3}>
                                    <Button block>
                                        Bottom Center
                                    </Button>
                                </Col>
                                <Col md={3} lg={3}>
                                    <Button block>
                                        Bottom Right
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col md={12} className="text-center">
                                <h4>Modal</h4>
                                <Button color="primary" onClick={this.toggle}>Launch Modal Mini</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} size="mini" className="modal-primary">
                                    <div className="modal-header justify-content-center">
                                        <div className="modal-profile">
                                            <i className="now-ui-icons users_circle-08"></i>
                                        </div>
                                    </div>
                                    <ModalBody>
                                        <p>Always have an access to your profile</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="link" disabled neutral>Back</Button>{' '}
                                        <Button color="link" neutral onClick={this.toggle}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}

export default Notifications;
