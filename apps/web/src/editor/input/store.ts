import { EditorStoreName } from "./input";

export const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return ((...args: Parameters<T>) => {
    if (timeoutId !== null) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn(...args);
      timeoutId = null;
    }, delay);
  }) as T;
};

export const saveChangesToIndexedDB = async (
  changes: string
): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const dbPromise = window.indexedDB.open(EditorStoreName.Database, 1);

    dbPromise.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
      db.createObjectStore(EditorStoreName.Object);
    };

    dbPromise.onsuccess = (event: Event) => {
      const db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
      const transaction: IDBTransaction = db.transaction(
        EditorStoreName.Object,
        "readwrite"
      );
      const store: IDBObjectStore = transaction.objectStore(
        EditorStoreName.Object
      );

      const request = store.put(changes, EditorStoreName.Key);

      request.onsuccess = () => {
        resolve();
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
