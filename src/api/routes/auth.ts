import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { AmsService } from '../../services';
import { IAmsInputDTO } from '../../interfaces/IAms';

const route = Router();

export default (app: Router) => {
  app.use('/auth', route);

  route.get(
    '/signup',
    async (req: Request, res: Response, next: NextFunction) => {
      const data: IAmsInputDTO = {mcno:10332, psName: '소울'};
      const res2 = await AmsService.createAms(data)
      console.log(res2)

      const readRes = await AmsService.readAms(data)
      console.log(readRes)

      const updateRes = await AmsService.updateAms({mcno: 1234}, {psName: '희성'})
      console.log(updateRes)

      const deleteRes = await AmsService.deleteAms({mcno:10032})
      console.log(deleteRes)

      return res.status(200).json({'res': 'success'});
      // try {
      //     return res.status(200).json({'res': 'success'});
      // } catch (e) {
      //     return next(e);
      // }
    }
  )
};
