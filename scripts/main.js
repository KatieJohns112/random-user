console.log("You look marvelous!")

import { getUser } from "./DataManager.js"
import { userList } from "./userlist.js";

const showUserList = () => {
    const userElement = document.querySelector(".userList");
    getUser().then((allUsers) => {
        userElement.innerHTML = userList(allUsers.results);
    })
};

showUserList();

