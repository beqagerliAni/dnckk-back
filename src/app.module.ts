import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistsModule } from './artists/artists.module';
import { MusicksModule } from './musicks/musicks.module';
import { AlbomsModule } from './alboms/alboms.module';
import { PlaylistModule } from './playlist/playlist.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Newpassword123!',
    database: 'dnckk-back',
    synchronize: true,
    autoLoadEntities:true
  }), ArtistsModule, MusicksModule, AlbomsModule, PlaylistModule, UsersModule, AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
