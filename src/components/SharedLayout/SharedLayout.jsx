import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import  Container  from "../Container/Container";
import Header from "components/Header/Header";
import Loader from "components/Loader/Loader";


const SharedLayout = () => {
    return (
        <Container>
           <Header/>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </Container>
    );
}

export default SharedLayout;