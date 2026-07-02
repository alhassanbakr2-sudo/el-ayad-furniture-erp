export type Section = 'dashboard'|'products'|'inventory'|'customers'|'suppliers'|'payroll'|'manufacturing'|'purchases'|'sales'|'purchaseInvoices'|'waste'|'surplus'|'journal'|'reports';
export type Row = Record<string, string | number | boolean | undefined> & { id: string };
export type Column = { key:string; label:string; type?:'text'|'number'|'date'|'select'|'status'|'readonly'; options?:string[]; width?:number; calc?:(row:Row)=>string|number };
