export function getPropValues(obj: any, ...keys: any): any {
  return keys.reduce((p: any, c: any) => {
    return p[c];
  }, obj);
}
