import { mockServer, syncSaveQueue } from "../../../../sync/sync";
import { Car } from "../../types";

test('conflict resolver returns conflict when server version higher', async () => {
  const car: Car = { id: 'conf1', name: 'A', brand: 'X', price: 1000, images: [] };
  mockServer.initialize([{ ...car, version: 5 }]);
  const res = await syncSaveQueue.enqueueSave({ ...car, name: 'tesla' }, 1);
  expect((res as string | any)?.conflict).toBeTruthy();
});