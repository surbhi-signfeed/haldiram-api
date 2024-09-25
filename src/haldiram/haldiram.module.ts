import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { haldiramController } from './haldiram.controller';




import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { haldiramStoreEntity } from './Entity/haldiramStoreEntity';
import { haldiramUsersEntity } from './Entity/haldiramUsersEntity';
import { haldiramService } from './haldiram.service';
import { haldiramProductEntity } from './Entity/haldiramProductEntity';


@Module({
  imports: [ServeStaticModule.forRoot(),
    TypeOrmModule.forFeature([haldiramStoreEntity,haldiramUsersEntity,haldiramProductEntity])],
  controllers: [haldiramController],
  providers: [haldiramService, Logger]
})
export class CmsModule {}
