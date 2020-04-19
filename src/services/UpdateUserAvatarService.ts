import fs from 'fs';
import { join } from 'path';
import { getRepository } from 'typeorm';

import uploadConfig from '../config/upload';
import AppError from '../errors/AppError';
import User from '../models/User';

interface Request {
  user_id: string;
  filename: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, filename }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avagar', 401);
    }

    if (user.avatar) {
      const userAvatarFilePath = join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);
      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = filename;
    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
