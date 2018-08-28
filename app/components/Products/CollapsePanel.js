import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

class CollapsePanel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          Ajouter un produit
        </Button>
        <br />
        <Panel bsStyle="success" id="collapsible-panel-example-1" expanded={this.state.open}>
          <Panel.Collapse>
            <Panel.Body>
			{this.props.children}
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

      </div>
    );
  }
}

export default CollapsePanel;