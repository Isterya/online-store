import { makeAutoObservable } from 'mobx';

interface IType {
  id: number;
  name: string;
}

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

export default class DeviceStore {
  private _types: IType[] = [
    { id: 1, name: 'Холодильники' },
    { id: 2, name: 'Смартфоны' },
    { id: 3, name: 'Ноутбуки' },
    { id: 4, name: 'Телевизоры' },
  ];
  private _brands: IType[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Samsung' },
    { id: 3, name: 'Xiaomi' },
    { id: 4, name: 'DragonX' },
    { id: 5, name: 'Honor' },
  ];
  private _devices: IDevice[] = [
    {
      id: 4,
      name: '12 pro',
      price: 1500,
      rating: 0,
      img: 'https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE=',
    },
    {
      id: 5,
      name: '15 max',
      price: 33300,
      rating: 0,
      img: 'https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE=',
    },
  ];
  private _selectedType: IType | null = null;
  private _selectedBrand: IType | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setTypes(types: IType[]) {
    this._types = types;
  }

  setBrands(brands: IType[]) {
    this._brands = brands;
  }

  setDevices(devices: IDevice[]) {
    this._devices = devices;
  }

  setSelectedType(type: IType) {
    this._selectedType = type;
  }

  setSelectedBrand(brand: IType) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
