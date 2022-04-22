import { AuthService } from './auth.service';
import { LoginService } from './login.service';
import { UserService } from './user.service';

export const services = [AuthService, UserService, LoginService];

export * from './auth.service';
export * from './user.service';
export * from './login.service'
