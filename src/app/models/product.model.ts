export class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public imagePath: string,
    public price: number,
    public brandName?: string,
    public isAvailable: boolean = true
  ) {}
}
