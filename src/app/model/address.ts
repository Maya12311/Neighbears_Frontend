export class Address
{
  public id: number;
  public street: string;
  public houseNumber: string;
  public zipCode: string;
  public city: string;

constructor(id?: number, street?: string, houseNumber?: string, zipCode?: string, city?: string){
  this.id = id  ?? 0;
  this.street = street || "";
  this.houseNumber = houseNumber ?? "";

  this.zipCode = zipCode ?? "";
  this.city = city || "";
}

}
