class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get password(){
        return this._password.toUpperCase()

    }
    set password(pass){
         this._password = pass;

    }
     get email(){
        return this._email.toUpperCase()

    }
    set email(val){
         this._email = val;

    }

}

const utk = new User("utkarsh@gmail.com", "Abs")
console.log(utk.password);
console.log(utk.email);