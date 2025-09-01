export class Address
{
  public id: number;
  public street: string;
  public houseNumber: number|null;
  public zipCode: number| null;
  public city: string;

constructor(id?: number, street?: string, houseNumber?: number, zipCode?: number, city?: string){
  this.id = id  ?? 0;
  this.street = street || "";
  this.houseNumber = houseNumber ?? null;

  this.zipCode = zipCode ?? null;
  this.city = city || "";
}

}
