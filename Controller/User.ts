export interface User {
    id: number,
    user: string,
    active: boolean
}

export interface NewUser {
    user: string, 
    active: boolean, 
    password: string
}
