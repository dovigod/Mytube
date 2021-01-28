
  export const home =(req,res) => res.render("home", {pageTitle : "Home"} );
  // first argument ==  template, second argument == object of additional informatino to template
 

  export const search = (req, res) => res.render("search" ,{ pageTitle : "Search"});

  export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "Delete Video"});

  export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "Edit Video"});
  export const videoDetail = (req, res) => res.render("videoDetail" , { pageTitle : "Video Detail"});
  export const upload = (req, res) => res.render("upload", { pageTitle : "Upload"});
  export const videos = (req, res) => res.render("videos" , {pageTitle : "Videos"});
