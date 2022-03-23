import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return(
      <>
          <h1>Links:</h1>
          <Link to="/hello">
              Hello
          </Link> |
          <Link to="/tuiter">
              Tuiter Home Page
          </Link> |
          <Link to="/tuiter/explore">
              Tuiter Explore Page
          </Link>
      </>
    )
};

export default Navigation;