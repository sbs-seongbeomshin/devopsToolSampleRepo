import Ams from '../models/Ams';
import { IAmsInputDTO } from '../interfaces/IAms';

const createAms = (data: IAmsInputDTO) => {
  const ams = new Ams(data);
  return ams.save();
}

const readAms = (data: IAmsInputDTO) => {
  const {mcno, psName} = data;
  return Ams.findOne({mcno, psName});  
}

const updateAms = (findQuery: any, updateQuery: any) => {
  return Ams.updateOne(findQuery, updateQuery)
}

const deleteAms = (deleteQuery: any) => {
  return Ams.deleteOne(deleteQuery)
}

export default {
  createAms,
  readAms,
  updateAms,
  deleteAms
}