import React from "react";
import { Route } from "react-router";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

export const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        // render sẽ trả về props.location, props.history, props.match
        return (
          <>
            <Header {...propsRoute} />
            
            <Component {...propsRoute} />

            <Footer />
          </>
        );
      }}
    />
  );
};
