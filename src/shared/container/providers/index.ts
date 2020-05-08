import DiskStorageProvider from '@shared/container/providers/StorageProviders/implementations/DiskStorageProvider';
import IStorageProvider from '@shared/container/providers/StorageProviders/models/IStorageProvider';
import { container } from 'tsyringe';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
