import React from "react";
import useProtectedPage from "../../hooks/useUnprotectedPage";

const AddRecipesPage = () =>{
    useProtectedPage()
    return (
        <div>
            <h1>AddRecipesPage</h1>
        </div>
    )
};

export default AddRecipesPage;

