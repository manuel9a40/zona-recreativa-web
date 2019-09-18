
// Layout general de las pantallas
const Layout = props => (
    <div className="mb-0" style={{background: "#00aeef99"}}>
        <div className="container justify-content-center pt-4 col-8 col-md-10 col-lg-11 col-xl-10 bg-light">
        {props.children}
        </div>
    </div>
);

export default Layout;
