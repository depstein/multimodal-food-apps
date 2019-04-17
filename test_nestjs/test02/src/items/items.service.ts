import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "14124124",
            name: "item 1",
            qty: 5
        },
        {
            id: "142131231",
            name: "item 2",
            qty: 5
        }
    ];

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find(item => item.id === id);
    }


}
