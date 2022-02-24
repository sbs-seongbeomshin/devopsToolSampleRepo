import { Router, Request, Response, NextFunction } from 'express';

const route = Router();

export default (app: Router) => {
    app.use('/auth', route);

    route.get(
        '/signup',
        (req: Request, res: Response, next: NextFunction) => {
            return res.status(200).json({'res': 'success'});
            // try {
            //     return res.status(200).json({'res': 'success'});
            // } catch (e) {
            //     return next(e);
            // }
        }
    )
};
