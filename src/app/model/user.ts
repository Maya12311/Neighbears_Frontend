export class User{
  public id : number;
  public name : string;
  public email: string;
  public mobileNumber: number;
  public password: string;
  public role: string;
  public authStatus: string;


  constructor(id?: number, name?: string, email?: string, mobileNumber? : number , password?: string, role?: string, authStatus?: string){
    this.id =id || 0;
    this.name = name || "";
    this.email = email || "";
    this.mobileNumber = mobileNumber || 0;
    this.password = password || "";
    this.role = role || "";
    this. authStatus = authStatus || "";
  }
}
