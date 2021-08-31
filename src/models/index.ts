import { Sequelize } from 'sequelize-typescript';
import {DB_USERNAME, DB_HOST, DB_PASSWORD, DB_DBNAME } from "../common/env";
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


const sequelize = new Sequelize({
  host: DB_HOST || 'localhost',
  database: DB_DBNAME,
  dialect: 'mysql',
  username: DB_USERNAME,
  password: DB_PASSWORD,
  logging: false,
});

sequelize.addModels([
  Album,
  AlbumArtist,
  Artist,
  KeyExpression,
  Mood,
  MySongs,
  MyVocab,
  Song,
  SongArtist,
  SongMood,
  User,
]);

export { Album, AlbumArtist, Artist, KeyExpression, Mood, MySongs, MyVocab, Song, SongArtist, SongMood, User };
export default sequelize;
