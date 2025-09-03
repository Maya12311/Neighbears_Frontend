export class User{
  public id : number;
  public name : string;
  public email: string;
  public mobileNumber: number;
  public pwd: string;
  public role: string;
  public authStatus: string;


  constructor(id?: number, name?: string, email?: string, mobileNumber? : number , pwd?: string, role?: string, authStatus?: string){
    this.id =id || 0;
    this.name = name || "";
    this.email = email || "";
    this.mobileNumber = mobileNumber || 0;
    this.pwd = pwd || "";
    this.role = role || "";
    this. authStatus = authStatus || "";
  }
}
