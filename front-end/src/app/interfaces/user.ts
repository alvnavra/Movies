export interface User{
    user:{
        id:number,
        name:string,
        email:string,
        password:string,
        createdAt:Date,
        updatedAt:Date
    },
    token:string
}

export interface BasicUser{
    name:string,
    email:string,
    password:string,

}