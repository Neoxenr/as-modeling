export function getPropValues(obj: any, ...keys: any): any {
  return keys.reduce((p: any, c: any) => {
    return p[c];
  }, obj);
}

export function copyObjectToKeys(keys: string[], obj: any): any {
  return keys.reduce(
    (currentObj, key) => ({
      ...currentObj,
      [key]: { ...obj }
    }),
    {}
  );
}

export function convertArrayToObject(arr: any[]): any {
  return arr.reduce(
    (currentObj, value, index) => ({
      ...currentObj,
      [value]: index
    }),
    {}
  );
}

export function convertDateToString(date: Date): string {
  return `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString(
    'ru-RU',
    {
      hour: '2-digit',
      minute: '2-digit'
    }
  )}`;
}

export function convertPeriodToString(
  firstDate: Date,
  secondDate: Date
): string {
  return `${convertDateToString(firstDate)} - ${convertDateToString(
    secondDate
  )}`;
}
