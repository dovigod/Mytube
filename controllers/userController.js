
import routes from "../routes";


export const getJoin = (req , res) => {
    res.render("join", {
        pageTitle : "Join",

    
})}

export const postJoin = (req , res) => {

    const {name,email,password} = req.body;

    if( password[0] !== password[1]){
        res.status(400);
        res.render("join",{ pageTitle: "join"});
        //if wrong with verification,, make status code 400 bad request
    }
    else{
        // to do :: register user
        //to dp :: log user in
        res.redirect(routes.home);
    }

    res.render("join", {
        pageTitle : "Join",
        name,
        password1: password[0],
        email,
        password2: password[1],
        
    })

}





export const getLogin = (req , res) => {

    res.render("login" , { 
    pageTitle : "Log In",
}
)
}


export const postLogin = (req, res) => {

    const { body :{ email , password}} = req;
// will compare with DB
    

    res.redirect(routes.home);
}

export const logout = (req , res) => res.redirect(routes.home);

export const changePassword = (req, res) => res.render("changePassword");

export const editProfile = (req, res) => {
    res.render("editProfile", {
        pageTitle : "Edit Profile"
    });
}
export const userDetail = (req, res) => res.render("userDetail");

