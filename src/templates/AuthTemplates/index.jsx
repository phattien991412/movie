import React from "react";
import { Route } from "react-router";

const AuthTemplate = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        // render sẽ trả về props.location, props.history, props.match
        return (
          <>
            <Component {...propsRoute} />
          </>
        );
      }}
    />
  );
};

export default AuthTemplate;
