const layoutStyle = {
  margin: 40,
  padding: 40
};

const Layout = props => (
  <div className="container" style={layoutStyle}>
    {props.children}
  </div>
);

export default Layout;
