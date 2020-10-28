import "../scss/grouparoo.scss";
import "../components/icons"; // this is needed to load the library
import Layout from "../components/layouts/main";
import Router from "next/router";

export default function GrouparooWWW(props) {
  const { Component } = props;

  // always scroll back to the top of the page when using Router.push()
  Router.events.on("routeChangeComplete", () => {
    window.scrollTo(0, 0);
  });

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
}
