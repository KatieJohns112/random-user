// needed to add api after "/" in order for info to show in dev tools
export const getUser = () => {
    return fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(parsedResponse => {
            console.log(parsedResponse)
            return parsedResponse
        })
}
// parsed response is filtering data to display in js correctly