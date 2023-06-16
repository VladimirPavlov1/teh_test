import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "App.styled";
import { Link,Header } from "./SharedLayout.styled";
import Loader from "Loader/Loader";

const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <Link to='/' end> Home</Link>
                    <Link to='/twets'>Tweets</Link>
                </nav>
            </Header>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </Container>
    );
}

export default SharedLayout;