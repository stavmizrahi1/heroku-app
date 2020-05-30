import { API } from './api.model';

export class AppConfig {
    static readonly api: API = {
        login: '/login',
        loginAsGuest: '/guest',
        registerNew: '/register',
        getUsers: '/GetUsers',
        getUserById: '/GetUserById/',
        getUserByName: '/GetUserByName/',
        getNations: '/GetNations',
        createReligion: '/nation/CreateReligion/',
        createKnowledgeItem: '/nation/CreateKnowledgeItem/',
        createNation: '/nation/CreateNation',
        createQuestion: '/nation/CreateQuestion/',
        removeReligion: '/nation/RemoveReligion',
        removeNation: '/nation/RemoveNation',
        sendMessage: '/SendMessage',
        getMessages: '/GetMessage',
        removeQuestion: '/nation/RemoveQuestion',
        removeGoodToKnowItem: '/nation/RemoveGoodToKnow'
    };
}
