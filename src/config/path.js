export default class path {

    // static environment = "dev";
    static environment = "prod";
    static baseUrl = path.environment === "dev" ? "" : "https://abc.com/";

    //authentication URL
    static SIGNUP = path.baseUrl + "api/user/signup";
    static LOGIN = path.baseUrl + "api/user/login";
    
}