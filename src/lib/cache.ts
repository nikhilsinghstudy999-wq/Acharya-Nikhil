const store = new Map<string,{value:any;expires:number}>();
let kv: any = null;
try { kv = require('@vercel/kv'); } catch {}

export async function getCache(key:string): Promise<any|null> {
  if(kv) { try { return await kv.get(key); } catch {} }
  const entry = store.get(key);
  if(entry && entry.expires>Date.now()) return entry.value;
  store.delete(key); return null;
}
export async function setCache(key:string, value:any, ttlSeconds=3600): Promise<void> {
  if(kv) { try { await kv.set(key,value,{ex:ttlSeconds}); return; } catch {} }
  store.set(key, {value, expires: Date.now()+ttlSeconds*1000});
}
