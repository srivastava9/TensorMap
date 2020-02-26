import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import * as React from "react";
import styles from "./ViewData.styles";
import Table from "./assets/Table";
import { baseURL } from "../../config";

class ViewData extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    var self = this;
    fetch(`${baseURL}viewData`)
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => {
        console.log(error);
        alert("There was some error pulling data");
      });
    // var Httpreq = new XMLHttpRequest();
    // var self = this;
    // Httpreq.onload = function(e) {
    //   self.setState({
    //     data: JSON.parse(Httpreq.responseText)
    //   });
    // };
    // Httpreq.open("GET", "http://localhost:5000/viewData", true);
    // Httpreq.send(null);
  }

  render() {
    console.log(this.state.data, "adithhya");
    const { classes } = this.props;

    return <Table data={this.state.data} />;
  }
}

ViewData.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ViewData);
