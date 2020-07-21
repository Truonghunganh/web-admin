export {};
export class Service{
    id?:number ;
    name:string ;
    description:string;
    price:number;
    image_id:number;
    category_ids?:any[]=[];
    constructor(
        name:string ,
        description:string,
        price:number,
        image_id:number,
        category_ids?:any[]  
    ){
        this.name=name;
        this.description=description;
        this.price=price;
        this.image_id=image_id;
        this.category_ids=category_ids;
    }
}
