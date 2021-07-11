import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import Album from './album';
import AlbumArtist from './albumArtist';
import Artist from './artist';
import KeyExpression from './keyExpression';
import Mood from './mood';
import MySongs from './mySongs';
import MyVocab from './myVocab';
import Song from './song';
import SongArtist from './songArtist';
import SongMood from './songMood';
import User from './user';

dotenv.config();

const sequelize = new Sequelize({
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_DBNAME,
  dialect: 'mysql',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

sequelize.addModels([Album, AlbumArtist, Artist, KeyExpression, Mood, MySongs, MyVocab, Song, SongArtist, SongMood, User]);

export {Album, AlbumArtist, Artist, KeyExpression, Mood, MySongs, MyVocab, Song, SongArtist, SongMood, User};
export default sequelize;