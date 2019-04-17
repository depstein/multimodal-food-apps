nestjs Notes 
 > March 28, 2019


 > Yuqi Huai
---

#### Start Project
```
nest new [project_name]
```

#### Run Project
```
npm run start:dev
```

#### Generate Contoller
```
nest g controller items
```

#### Post Payload
> Use dto
```typescript
// src/items/dto/create-item.dto.ts
export class CreateItemDto {
    readonly name: string;
    readonly description: string;
    readonly qty: number;
}
```

##### Sample code
```typescript
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {

    // link/items
    @Get()
    findall(): string {
        return 'Get All Items';
    }

    // link/items/1000
    @Get(':id')
    findOne(@Param() param): string {
        return `Item ${param.id}`;
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

```

---
#### Generate new service
```
nest g service items
```

##### items/interfaces/item.interface.ts
```typscript
export interface Item {
    id?: string,
    name: string,
    description?: string,
    qty: number
}
```

##### items/items.module.ts
```typescript
import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
    imports: [],
    controllers: [ItemsController],
    providers: [ItemsService]
})

export class ItemsModule {}
```