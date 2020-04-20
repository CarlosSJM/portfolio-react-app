import React, { Component } from 'react';
import '../Loader/style.css';
import { Redirect } from 'react-router-dom';
// import ReactGA from 'react-ga';
import {Helmet} from 'react-helmet';
import CircleLoader from "react-spinners/CircleLoader";

class Loader extends Component {

    state = {
        redirect: false
    }

    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 4000);
        // ReactGA.initialize("UA-154721739-1");
        // ReactGA.pageview('Loading Screen');
    }

    componentWillUnmount() {
        clearTimeout(this.id)
    }

    render() {
        return this.state.redirect
            ? <Redirect to="/home" />
            : <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Carlos San Juan Martin</title>
                    <link rel="canonical" href="http://google.com/" />
                    <meta name="description" content="Carlos San Juan Martin - FullStack Developer | | Software Engineer" />
                </Helmet>
                <div className="Loading-header">
                    <CircleLoader
                        margin={1}
                        size={100}
                        color={"#fff"}
                        loading={true}
                    />
                </div>
            </div>
    }
}

export default Loader;
