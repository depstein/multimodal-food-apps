import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService){}
    // link/items
    @Get()
    findall(): Item[] {
        return this.itemsService.findAll();
    }

    // link/items/1000
    @Get(':id')
    findOne(@Param() param): Item {
        return this.itemsService.findOne(param.id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description} Qty: ${createItemDto.qty}`;
    }

    // link/items/1000
    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete Item ${id}`;
    }

    // link/items/1000
    @Put(':id')
    update(@Body() updateItemDto:CreateItemDto, @Param('id') id) {
        return `Update Item ${id} - Name: ${updateItemDto.name}`;
    }
}
