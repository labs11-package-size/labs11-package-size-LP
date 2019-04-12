import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Scanner from "@material-ui/icons/Scanner";
import AddBox from "@material-ui/icons/AddBox";
import LocalShipping from "@material-ui/icons/LocalShipping";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>What is ScannAR?</h2>
            <h5 className={classes.description}>
            ScannAR is a web and mobile app that uses augmented reality to track and right-size your shipping, helping you get more shipping done for less. ScannAR users can catalog the products and packages they ship and track how long different packages take from drop-off to delivery. ScannAR will even give users recommendations on how to pack boxes for a given product or set of products.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Scan"
                description="Using your iPhone, scan any item with the ScannAR app.  The ScannAR app will tell you the object's exact dimensions. "
                icon={Scanner}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Package"
                description="Now that you have your product's dimensions, ScannAR can tell you the perfect box size for the item."
                icon={AddBox}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Ship"
                description="Once you have selected your packaging, you are ready to ship.  ScannAR will track you shipment for you."
                icon={LocalShipping}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
