import connection from './connection';
import debug from 'debug';

const log = debug('db:opendatabaseconnection');

async function openDatabaseConnection(): Promise<void> {
  const treshold = 3;
  const attempToOpenConnection = async (attempts: number): Promise<void> =>
    connection()
      .authenticate()
      .then(() => {
        attempts = 0;
      })
      .catch((err) =>
        attempts > treshold
          ? log(`DB CONNECTION IS FAILED AND CLOSED. Error: ${err}`)
          : attempToOpenConnection(attempts + 1),
      );
  await attempToOpenConnection(0);
}

export default openDatabaseConnection;
