import mongoose from 'mongoose';

/// must Make Model (data)  Schema ( shape, format)

const VideoSchema = new mongoose.Schema({
	fileUrl: {
		type: String,
		required: 'File URL is required'
	},
	title: {
		type: String,
		required: 'title is required'
	},
	description: String,

	views: {
		type: Number,
		default: 0
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment'
		}
	],
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
	//put all comments ID in array
});

const model = mongoose.model('Video', VideoSchema);

export default model;
