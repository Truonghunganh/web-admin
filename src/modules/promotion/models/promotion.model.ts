export {};
export class Promotion{
    id?: number;
    name: string ;
    start_date: string;
    end_date: string;
    discount:number;
    users_count?:number;
    constructor(name:string, start_date:string, end_date:string, discount:number){
        this.name = name;
        this.start_date = start_date;
        this.end_date = end_date;
        this.discount = discount;

    }
}