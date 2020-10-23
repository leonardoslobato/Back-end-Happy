import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Orphanage from '../model/Orphanage';

export default {


  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    });

    await orphanagesRepository.save(orphanage);

    return response.json(orphanage);

  }
};