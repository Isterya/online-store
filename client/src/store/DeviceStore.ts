import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  private _types = [
    { id: 1, name: 'Холодильники' },
    { id: 2, name: 'Смартфоны' },
    { id: 3, name: 'Ноутбуки' },
    { id: 4, name: 'Телевизоры' },
  ];
  private _brands = [{ id: 1, name: 'Apple' }];
  private _devices = [
    {
      id: 4,
      name: '12 pro',
      price: 1500,
      rating: 0,
      img: 'fd15045e-72dd-479e-8d59-05cf6e9b6ede.jpg',
    },
    {
      id: 5,
      name: '15 max',
      price: 33300,
      rating: 0,
      img: '6ef02227-bb11-4bac-9f4b-9dc5f26b3433.jpg',
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setTypes(types: { id: number; name: string }[]) {
    this._types = types;
  }

  setBrands(brands: { id: number; name: string }[]) {
    this._brands = brands;
  }

  setDevices(
    devices: {
      id: number;
      name: string;
      price: number;
      rating: number;
      img: string;
    }[]
  ) {
    this._devices = devices;
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
}
