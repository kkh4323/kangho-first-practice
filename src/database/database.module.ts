import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'floppy.db.elephantsql.com',
      port: 5432,
      username: 'ahcpkthv',
      password: 'iikosKhRiHD73xOAdaCaINGj-SozMZxJ',
      database: 'ahcpkthv',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
