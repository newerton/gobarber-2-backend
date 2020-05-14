import RedisCacheProvider from '@shared/container/providers/CacheProvider/implementations/RedisCacheProvider';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { container } from 'tsyringe';

const providers = {
  redis: container.resolve(RedisCacheProvider),
};

container.registerInstance<ICacheProvider>('CacheProvider', providers.redis);
