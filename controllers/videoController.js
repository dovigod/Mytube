
  import routes from "../routes";
  import videos from "../models/Videos";

///async == something that waits for me

  
  export const  home = async(req,res) => {

    try{
      const video = await videos.find({});
      res.render("home", {
        pageTitle : "Home",
        video,
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

  export const postUpload = async(req, res) => {

    const {
      body:{ title, description},
      file: { path }
    } = req;


    const newVideo = await videos.create({
      fileUrl : path,
      title,
      description
    });

    console.log(newVideo);

   
  
    res.redirect(routes.videoDetail(newVideo.id));
  }
 