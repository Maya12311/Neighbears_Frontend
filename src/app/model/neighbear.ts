import { Address } from './address';
import { SelfDescripton } from './selfDescription';
export class Neighbear
{public id: number;
  public name: string;
  public avatar?: {
    storageKey?: string | "";
    contentType?: string | "";
    avatar?: any[] | [];
  }
  public selfDescriptionDTO? :SelfDescripton
  public addressDTO?: Address; 

  constructor(name?: string, id?: number) {
    this.name= name || "";
    this.id = id || 0;
  }

}
