
  import routes from "../routes";
  import Video from "../models/Videos";

///async == something that waits for me

  
  export const  home = async(req,res) => {

    try{
      const videos = await Video.find({});
      res.render("home", {
        pageTitle : "Home",
        videos
        }
      );
    } catch(error){
      console.log(error);
      res.render("home", {
        pageTitle : "Home",
        videos: []
      });
    };
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



  export const videoDetail = async(req, res) => {

    //console.log(req.params); // id is a varable as we see
    //:potato ==> variable infos..
    console.log(req.url);
    const {
      params: {id}
    } = req;


    console.log(id);

    try{
      const video = await Video.findById(id);
      res.render("videoDetail" , {
        video,
        pageTitle : "Video Detail"
      })
    } catch(error){
      console.log(error);
      res.redirect(routes.home);

    }
    //console.log(video);
    // find on mongoose documentation
}


  export const getUpload = (req, res) => {

    console.log(req.url);
    res.render("upload", { pageTitle : "Upload"});
  }

  export const postUpload = async(req, res) => {
    const {
      body:{ title, description},
      file: { path }
    } = req;


    const newVideo = await Video.create({
      fileUrl : path,
      title,
      description
    });

    console.log(newVideo);

   
  
    res.redirect(routes.videoDetail(newVideo.id));
  }
 