let userRole = "admin";
let accessLevel;

let isLoggedIn = true;
let userMessage;

let userType = "subscriber";
let userCategory;

let isAunthenticated = true;
let authenticationStatus = isAunthenticated ? "Authenticated" :"Not aunthenticated";

if (userRole === "admin"){
    accessLevel = "Full access granted"
}else if (userRole === "manager"){
    accessLevel = "Limited access granted"
}else {
    accessLevel = "No access granted"
}

console.log("Access Level:", accessLevel);

if (isLoggedIn){
    if (userRole === "admin"){
        userMessage = "Welcome, Admin!";
    }else {
        userMessage = "Welcome, User!";
    }
}else {
    userMessage = "Pls log in to access";
}

console.log("User Message:", userMessage);

switch (userType){
    case "admin":
        userCategory = "Administrator";
        break;
    
    case "manager":
        userCategory = "Manager";
        break;
    
    case "subscriber":
        userCategory = "Subscriber";
        break;

    default:
        userCategory = "Uknown";

}

console.log ("User Category:", userCategory);
console.log("Authentication Status:", authenticationStatus);