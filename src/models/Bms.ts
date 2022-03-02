import mongoose from 'mongoose';
import { IBms } from '../interfaces/IBms';

const BmsSchema = new mongoose.Schema(
  {
    mcno: {
      type: Number,
      index: true
    },
  }
)

export default BmsSchema