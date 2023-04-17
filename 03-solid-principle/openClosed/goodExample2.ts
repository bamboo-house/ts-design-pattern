export {};
interface Employee {
  name: string;
  getBonus(base: number): number;
}

class JuniorEmployee implements Employee {
  constructor(public name: string) {}

  getBonus(base: number): number {
    return Math.floor(base * 1.1);
  }
}

class MiddleEmployee implements Employee {
  constructor(public name: string) {}

  getBonus(base: number): number {
    return Math.floor(base * 1.5);
  }
}

class SeniorEmployee implements Employee {
  constructor(public name: string) {}

  getBonus(base: number): number {
    return Math.floor(base * 2);
  }
}

function run() {
  const emp1 = new JuniorEmployee("Yamada");
  const emp2 = new MiddleEmployee("Suzuki");
  const emp3 = new SeniorEmployee("Tanaka");

  const base = 100;
  console.log(emp1.getBonus(base));
  console.log(emp2.getBonus(base));
  console.log(emp3.getBonus(base));
}

run();
