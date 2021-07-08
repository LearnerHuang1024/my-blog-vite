
export function isValidKey(key: string | number | symbol, object: object): key is keyof typeof object {
  return key in object;
}
export const filterGetters = (getters:any,name:string):object=>{
  const obj:any = {}
  Object.keys(getters).forEach((e)=>{
    const key:string = name+e
    obj[key]=getters[e]
  })
  return obj
}