export class User {
    username?: string;
    password?: string;
    email?: string;
    tel?:number;

    constructor(username:string,  password?: string,  email?: string, tel?:number){
        this.username = username
        this.password = password
        this.email = email
        this.tel = tel
    }

}

