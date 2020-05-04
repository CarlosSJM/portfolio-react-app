import React from 'react'
import './style.css'
import TodoListFooter from '../../molecules/TodoListFooter'
import AddTodo from '../../redux/containers/AddTodo'
import VisibleTodoList from '../../redux/containers/VisibleTodoList'
import {Helmet} from "react-helmet";
import Animate from "react-smooth";
import Particles from "react-particles-js";
import {contactParticles} from "../../const/particle_desing";
import {Container, Row} from "react-bootstrap";
import Hamburger from "../../atoms/Hamburger";
import Footer from "../../molecules/Footer";

class TodoListScreen extends React.Component {
    componentDidMount() {
        // ReactGa.initialize("UA-154721739-1");
        // ReactGa.pageview('Contact Screen');
    }
    render() {
        return (
            <div >
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Contact | Carlos San Juan Martin</title>
                    <link rel="canonical" href="http://www.google.com"/>
                    <meta name="description"
                          content="Carlos San Juan Martin | TodoList - Full Stack | Software Engineer"/>
                </Helmet>
                <Animate to="1" from="0" attributeName="opacity">
                    {/*<Particles*/}
                    {/*    params={contactParticles}*/}
                    {/*    className="particle"*/}
                    {/*/>*/}
                    <Container className="todoList-header" fluid={true}>
                        <Row className="Hamburger-menu">
                            <Hamburger/>
                        </Row>
                        <Row className="todoList-main m-5 " >
                            <Container className="" fluid={true}>

                            <AddTodo/>
                            <VisibleTodoList/>
                            <TodoListFooter/>
                            </Container>
                        </Row>
                        <Row className="Contact-footer">
                            <Footer/>
                        </Row>
                    </Container>
                </Animate>
            </div>
        )
    }
}

export default TodoListScreen