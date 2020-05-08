import BCryptHashProvider from '@modules/users/providers/HashProviders/implementations/BCryptHashProvider';
import IHashProvider from '@modules/users/providers/HashProviders/models/IHashProvider';
import { container } from 'tsyringe';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
