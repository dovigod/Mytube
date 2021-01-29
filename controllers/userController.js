

export const join = (req , res) => res.render("join")
export const login = (req , res) => res.render("login" , { 
    pageTitle : "login",
})
export const logout = (req , res) => res.render("logout")


export const users = (req, res) => res.render("users");
export const changePassword = (req, res) => res.render("changePassword");
export const editProfile = (req, res) => {
    res.render("editProfile", {
        siteName : "Edit Profile"
    });
}
export const userDetail = (req, res) => res.render("userDetail");

