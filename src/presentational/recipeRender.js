import React from 'react';
import {useSelector} from "react-redux";
import {Card} from "react-bootstrap";
import Book from "../images/recipebook.png";

const RecipeRender = ()=>{

    const card ={
      borderRadius: "15px",
    };


    const data = useSelector(state=>state.initialDataLoadReducer.data);
    const handleClick=()=>{
        console.log("clicked");
        
    }
    return(
        <div >
        <div className={"row pt-5 ml-5 text-warning"}>
            <p className={"mb-0 pTag"}>The famous</p>
        </div>
        <div className={"row "}>
            <div className={"col-5 col-md-2 ml-5  justify-content-center"}>
                <h1 >Recipes</h1>
            </div>

            <div className={"col-md-2 col-5 justify-content-center"}>
                <img src={Book} className={"img-fluid pt-2"} alt={"book"} />
            </div>

        </div>
        <div className={"row justify-content-center pt-5 pb-5 pl-5 pr-5"} >
            {
                data.map((item)=>(
                    <div className={"  col-md-3"}  key={item.id}>
                        <Card style={card} className={"w-75 h-75 pb-3 pb-md-0  shadow "} onClick={handleClick}>
                            <Card.Img src={item.image} style={{borderTopRightRadius: "15px",borderTopLeftRadius:"15px"}} variant={"top"} className={"h-50"} alt={"book"} />
                                <h6 className={"font-weight-bold text-center mt-4"}>
                                    {item.name}
                                </h6>
                                <h5 className={"font-weight-bold text-center text-warning "}>
                                    ${item.price}
                                </h5>

                        </Card>
                    </div>
                ))
            }
        </div>
       </div>
    );
};
export default RecipeRender;