import mongoose from 'mongoose';
import config from '../config/index';
import BmsSchema from '../models/Bms';

const dbUrl = config.databaseURL?.concat('/bms')

const bmsDb = mongoose.createConnection(<string>dbUrl);

const readBms: any = async () => {
  const coll = bmsDb.model('bmsLog_2203', BmsSchema);
  const res = await coll.findOne({mcno:10001})
  console.log(res)
}

export default {
  readBms
}