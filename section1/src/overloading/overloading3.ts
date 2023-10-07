function printConsole(a: number): void;
function printConsole(a: string): void;
function printConsole(a: number, b: string): void;
function printConsole(a: string, b: number): void;

function printConsole(a: any, b?: any): void {
  console.log(a, b ?? "");
}

printConsole("1"); //1
printConsole("1", 2); //1 2
