import passport from 'passport';
import User from './models/user';

passport.use(User.createStrategy());
// email 과 password를 쓰는 strategy를 쓸꺼임

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
