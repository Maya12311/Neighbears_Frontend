export class Neighbear
{public id: number;
  public name: string;
  public avatar?: {
    storageKey?: string | "";
    contentType?: string | "";
    avatar?: any[] | [];
  }

  constructor(name?: string, id?: number) {
    this.name= name || "";
    this.id = id || 0;
  }

}
