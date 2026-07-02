import { useEffect, useState } from 'react';
export function useLocalState<T>(key:string, initial:T){
  const [value,setValue]=useState<T>(()=>{try{const x=localStorage.getItem(key);return x?JSON.parse(x):initial}catch{return initial}});
  useEffect(()=>{localStorage.setItem(key,JSON.stringify(value))},[key,value]);
  return [value,setValue] as const;
}
export const uid=()=>Math.random().toString(36).slice(2,9);
export const money=(n:number|string|undefined)=>new Intl.NumberFormat('ar-EG',{style:'currency',currency:'EGP',maximumFractionDigits:0}).format(Number(n)||0);
