import { Image } from '@modules/app-common/models';

export class Category {
  id?: number;
  name: string;
  description: string;
  image_id: number;

  constructor(_name: string,_description: string, _image_id: number) {
    this.name = _name;
    this.description = _description;
    this.image_id = _image_id;
  }
}

