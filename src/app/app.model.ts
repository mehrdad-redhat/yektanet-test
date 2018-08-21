export class Product {
  _id:number;
  title:string;
  link:string;
  image:string;
  description:string;
  tags:Tag[]
}

class Tag {
  key:string;
  value:string;
}
