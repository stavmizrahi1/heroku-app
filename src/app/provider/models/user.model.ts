import { Nation } from './nation.model';
import { Religion } from './religion.model';

export interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    posts: any[];
    notifications: any[];
    chatList: any[];
    nation: Nation;
    religion: Religion;
    userType: UserTypeEnum;
}

export enum UserTypeEnum {
    Registered = "registeredUser",
    Guest = "guest"
}