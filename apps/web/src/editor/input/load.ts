import { EditorStoreName } from "./input";

export const loadChangesFromIndexedDB = async (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const dbPromise = window.indexedDB.open(EditorStoreName.Database, 1);

    dbPromise.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
      db.createObjectStore(EditorStoreName.Object, { autoIncrement: true });
    };

    dbPromise.onsuccess = (event: Event) => {
      const db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
      const transaction: IDBTransaction = db.transaction(
        EditorStoreName.Object,
        "readonly"
      );
      const store: IDBObjectStore = transaction.objectStore(
        EditorStoreName.Object
      );

      const request = store.get(EditorStoreName.Key);

      request.onsuccess = () => {
        // only get the last changes
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    };

    dbPromise.onerror = (event: Event) => {
      reject((event.target as IDBOpenDBRequest).error);
    };
  });
};
