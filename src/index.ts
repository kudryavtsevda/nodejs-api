import * as dotenv from 'dotenv';
import app from './app';
import { openDatabaseConnection } from './db';

dotenv.config();
if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);
app.listen(PORT, async (): Promise<void> => {
  await openDatabaseConnection();
  (await import('debug')).debug('server:index')(`Server Running here 👉 http://localhost:${PORT}`);
});
