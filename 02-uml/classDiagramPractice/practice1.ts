// 演習１

class Emproyee {
  private id: number;
  private name: string;
  private salary: number;

  work(): void {
    console.log("働く");
  }

  protected getSalary(): number {
    return this.salary;
  }

  protected setSalary(salary: number): void {
    this.salary = salary;
  }
}
