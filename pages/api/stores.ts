import { NextApiRequest, NextApiResponse } from 'next';
import { Stores, StoresType } from '../../models/Stores';

interface Request extends NextApiRequest {
  body: StoresType;
}

export default async function handler(req: Request, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    //* Getting all stores from the database
    case 'GET':
      try {
        const stores: StoresType[] = await Stores.find({});
        res.json({ success: true, stores });
      } catch (err: any) {
        res.status(500).json({ success: false, error: err.message });
      }
      break;

    //* Adding a new store to the database
    case 'POST':
      try {
        const store: StoresType = await Stores.create({
          name: req.body.name,
          address: req.body.address,
          timings: req.body.timings,
          distance: req.body.distance,
        });
        console.log(store);
        res.status(201).json({ success: true, store });
      } catch (err: any) {
        res.status(400).json({ success: false, error: err.message });
      }
      break;

    default:
      res.status(405).json({ success: false, error: 'Invalid Method' });
  }
}
