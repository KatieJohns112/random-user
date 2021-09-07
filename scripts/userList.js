import { User } from "./user.js";

export const userList = (allusers) => {
	let userHTML = "";
		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
		for (const userObject of allusers ) {
			//what is a postObject?
			userHTML += User(userObject)
		}
		return userHTML;
	
}