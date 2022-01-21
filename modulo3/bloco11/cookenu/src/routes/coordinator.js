export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSingUp = (history) => {
    history.push("/cadastro")
}

export const goToAddRecipes = (history) => {
    history.push("/adicionar-receita")
}

export const goToRecipesDetails = (history, id) => {
    history.push(`/detalhes/${id}`)
}

export const goToRecipesList = (history) => {
    history.push("/")
}

