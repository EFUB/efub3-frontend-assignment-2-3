function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
  return a + b;
}

function add(a: number): number;
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b?: number, c?: number): number {
  return a + (b ?? 0) + (c ?? 0);
}

function printConsole(a: number): void;
function printConsole(a: string): void;
function printConsole(a: number, b: string): void;
function printConsole(a: string, b: number): void;

function printConsole(a: any, b?: any): void {
  console.log(a, b ?? "");
}
