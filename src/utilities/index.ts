import { ChartNames } from '../types/chart/names';

export function getPropValues(obj: any, ...keys: any): any {
  return keys.reduce((p: any, c: any) => {
    return p[c];
  }, obj);
}

export function copyObjectToKeys(keys: string[], obj: any): any {
  return keys.reduce((currentObj, key) => ({ ...currentObj, [key]: obj }), {});
}
