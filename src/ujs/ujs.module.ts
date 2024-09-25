import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UjsController } from './ujs.controller';
import { UjsService } from './ujs.service';
import { UsersEntity } from './Entity/UJSUsersEntity';



import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UJSStoreEntity } from './Entity/UJSStoreEntity';

@Module({
  imports: [ServeStaticModule.forRoot(),
    TypeOrmModule.forFeature([UsersEntity,UJSStoreEntity])],
  controllers: [UjsController],
  providers: [UjsService, Logger]
})
export class CmsModule {}
