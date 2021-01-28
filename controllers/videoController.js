
  export const home =(req,res) => res.render("home");
  //it will automatically look for the file "home inside of view folder"

  export const search = (req, res) => res.render("search");

  export const deleteVideo = (req, res) => res.render("deleteVideo");

  export const editVideo = (req, res) => res.render("editVideo");
  export const videoDetail = (req, res) => res.render("videoDetail");
  export const upload = (req, res) => res.render("upload");
  export const videos = (req, res) => res.render("videos");
