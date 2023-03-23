import CLIENT  from './utils/client.js';
import { TOKEN } from './utils/constantes.js';
import eventLoader from './utils/loaders/eventLoader.js';
import commandLoader from './utils/loaders/commandLoader.js';
import buttonLoader from './utils/loaders/buttonLoader.js';

eventLoader(CLIENT);
commandLoader(CLIENT);
buttonLoader(CLIENT);

CLIENT.login(TOKEN);