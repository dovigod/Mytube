import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: false
	},
	email: String,
	avatarUrl: {
		type: String,
		unique: false
	},
	githubId: Number,
	facebookId: Number
});

UserSchema.plugin(passportLocalMongoose, {
	usernameField: 'email'
});

const model = mongoose.model('User', UserSchema);

export default model;
