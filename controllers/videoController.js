
  import routes from "../routes";
  import Video from "../models/Videos";

///async == something that waits for me

  
  export const  home = async(req,res) => {

    try{
      const videos = await Video.find({});
      res.render("home", {
        pageTitle : "Home",
        video: videos
        }
      );
    } catch(error){
      console.log(error);
      res.render("home", {
        pageTitle : "Home",
        videos: []
      });
    };
    // wait until this process
    // but only waits untill finish, doesn't gurantee its sucessfully finished
    
  console.log(videos);
}
 
  export const search = (req, res) => {
    const {query: {term : searchingBy}} = req;

    
    res.render("search" ,{ 
      pageTitle : "Search",
      searchingBy : searchingBy,
      
  });
  }

  export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "Delete Video"});

  export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "Edit Video"});
  export const videoDetail = (req, res) => res.render("videoDetail" , { pageTitle : "Video Detail"});



  export const getUpload = (req, res) => res.render("upload", { pageTitle : "Upload"});

  export const postUpload = (req, res) => {

    console.log(111);
    const {
      body: {file , title , description}
    } = req;

    //upload and save it
    res.redirect(routes.videoDetail(12334));
  }
 