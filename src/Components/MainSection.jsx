import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";
import { removePost } from "../redux/actions";
import Single from "./Single";

class MainSection extends Component {
  constructor() {
    super();
  }

  render() {
    // console.log(this.props)
    return (
      <>
      
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Title title={"Photowall"} onNavigate={this.navigate} />
              <Photowall {...this.props} />
            </>
          )}
        />

        <Route
          exact
          path="/addPhoto"
          render={({ history }) => (
            <AddPhoto {...this.props} history={history} />
          )}
        />

        <Route 
        exact 
        path={'/singlePhoto/:id'}
        render={(params)=>(
          <Single
          {...this.props}
          {...params}/>
        )}
        />
      </>
    );
  }
}

export default MainSection;
