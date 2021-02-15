import passport from 'passport';
import user from './models/user';

passport.use(user.createStrategy());
// email 과 password를 쓰는 strategy를 쓸꺼임

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
