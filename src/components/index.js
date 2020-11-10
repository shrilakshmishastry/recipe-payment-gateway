import React from 'react';
import NavBarTop from "../presentational/navBar";
import RecipeRender from "../presentational/recipeRender";


const Index = ()=>{
    const navbar = {
        backgroundColor: "#dadde9",
    };

    return(
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div style={navbar}  className={"col-md-2"}>
                    <NavBarTop />
                </div>

                <div  className={"col-md-10 justify-content-left align-items-center "}>

                    <RecipeRender/>
                </div>

            </div>

        </div>
    );
}

export default Index;