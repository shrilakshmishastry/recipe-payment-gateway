import React from "react";
import {Route, Switch} from "react-router-dom";
import Cart from "../components/cart";
import PaymentSuccessfull from "../components/paymentSuccess";
import DetailPage from "../components/detailPage";
import CardDetail from "../components/cardDetail";
import Index from "../components";
import {useDispatch} from "react-redux";
import initialDataLoadAction from "../redux/actions/intitalDataLoadAction";
import axios from "axios";


const Main = ()=>{
    const dispatch = useDispatch();
    React.useEffect(()=>{
        axios.get('http://starlord.hackerearth.com/recipe').then(res=>{
            dispatch(initialDataLoadAction(res.data));
        })
            .catch(err=>{
                console.log(err);
                dispatch(initialDataLoadAction([]));
            })

    },[])
    return(
        <>
            <Switch>
                <Route path={"/cart"} component={Cart} exact/>
                <Route path={"/paymentSuccess"} component={PaymentSuccessfull} exact/>
                <Route path={"/detail"} component={DetailPage} exact/>
                <Route path={"/card"} component={CardDetail} exact />
                <Route path={"/"} component={Index}/>
            </Switch>
        </>
    );
};
export default Main;