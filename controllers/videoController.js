import routes from '../routes';
import Video from '../models/Videos';
import user from '../models/user';

export const home = async (req, res) => {
	try {
		const videos = await Video.find({}).sort({ _id: -1 });

		res.render('home', {
			pageTitle: 'Home',
			videos
		});
	} catch (error) {
		console.log(error);
		res.render('home', {
			pageTitle: 'Home',
			videos: []
		});
	}
};

export const search = async (req, res) => {
	const {
		query: { term: searchingBy }
	} = req;
	let videos = [];
	try {
		videos = await Video.find({
			title: {
				$regex: searchingBy,
				$options: 'i'
				// i = insensitive , can take upper,lower case
			}
		});
		//find everything that contains term
	} catch (error) {
		console.log(error);
	}

	res.render('search', {
		pageTitle: 'Search',
		searchingBy,
		videos
	});
};

export const deleteVideo = async (req, res) => {
	const {
		params: { id }
	} = req;

	try {
		const video = await Video.findById(id);
		const User = await user.findById(id);
		console.log(User);
		if (video.creator != req.user.id) {
			throw Error();
		} else {
			await Video.findOneAndRemove({ _id: id });
		}
	} catch (e) {
		console.log('error on delete-video controller');
	}
	res.redirect(routes.home);
};

export const editVideo = async (req, res) => {
	const {
		params: { id }
	} = req;

	try {
		const video = await Video.findById(id);

		if (video.creator != req.user.id) {
			console.log(video.creator);
			console.log(req.user.id);
			throw Error();
		} else {
			res.render('editVideo', { pageTitle: `Edit ${video.title}`, video });
		}
	} catch (e) {
		console.log(e);
		res.redirect(routes.home);
	}
};

export const postEditVideo = async (req, res) => {
	const {
		params: { id },
		body: { title, description }
	} = req;

	try {
		await Video.findOneAndUpdate({ _id: id }, { title, description });

		res.redirect(routes.videoDetail(id));
	} catch (e) {
		res.redirect(routes.home);
	}
};

export const videoDetail = async (req, res) => {
	//console.log(req.params); // id is a varable as we see
	//:potato ==> variable infos..
	console.log(req.url);
	const {
		params: { id }
	} = req;

	console.log(id);

	try {
		const video = await Video.findById(id).populate('creator');
		console.log(video);
		res.render('videoDetail', {
			video,
			pageTitle: video.title
		});
	} catch (error) {
		console.log(error);
		res.redirect(routes.home);
	}
};

export const getUpload = (req, res) => {
	console.log(req.url);
	res.render('upload', { pageTitle: 'Upload' });
};

export const postUpload = async (req, res) => {
	const {
		body: { title, description },
		file: { path }
	} = req;

	const newVideo = await Video.create({
		fileUrl: path,
		title,
		description,
		creator: req.user.id
	});
	req.user.videos.push(newVideo.id);
	req.user.save();
	console.log(newVideo);

	res.redirect(routes.videoDetail(newVideo.id));
};

export const postRegisterView = async (req, res) => {
	const {
		params: { id }
	} = req;
	try {
		const video = await Video.findById(id);
		video.views += 1;
		video.save();
		res.status(200);
	} catch (error) {
		res.status(400);
	} finally {
		res.end();
	}
};
