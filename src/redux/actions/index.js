export const setUserData = (userData) => ({
    type: "SET_USER_DATA",
    payload: userData
});

export const clearUserData = () => ({
    type: "CLEAR_DATA"
});

export const setRepositoriesData = (repositoriesData) => ({
    type: "SET_REPOSITORIES_DATA",
    payload: repositoriesData
})