import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailsPage from "../pages/RecipeDetailsPage/RecipeDetailsPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import SingUpPage from "../pages/SingUpPage/SingUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Header from "../components/Header/Header";

const Router = () => {

    return (
        <BrowserRouter> 
        <Header />
            <Switch>
                <Route exact path = "/login">
                    <LoginPage />
                </Route>

                <Route exact path = "/cadastro">
                    <SingUpPage />
                </Route>

                <Route exact path = "/">
                    <RecipesListPage />
                </Route>

                <Route exact path = "/adicionar-receita">
                    <AddRecipesPage />
                </Route>

                <Route>
                    <RecipeDetailsPage exact path = "/detalhes/:id" />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>               
            </Switch>
        </BrowserRouter>
    )
};

export default Router;


