import mongoose from 'mongoose';
import { IAms } from '../interfaces/IAms';

const AmsSchema = new mongoose.Schema(
  {
    mcno: {
      type: Number,
      index: true
    },
    psName: {
      type: String
    }
  }
)

export default mongoose.model<IAms & mongoose.Document>('Ams', AmsSchema)