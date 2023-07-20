export interface IUser {
    id: number,
    first_name: null,
    last_name: null,
    surname: null,
    phone: null,
    birth_date: null,
    avatar: string,
    bio: string,
    banned: boolean,
    position: string,
    user: number,
  }
  
  export interface IGenericResponse {
    status: string;
    message: string;
  }
  
  