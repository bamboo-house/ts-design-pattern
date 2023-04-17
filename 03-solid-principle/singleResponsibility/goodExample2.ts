class EmployeeData2 {
  constructor(public name: string, public department: string) {}
}

class PayCalculator2 {
  private getRegularHours() {
    console.log("給与計算用の労働時間計算ロジック");
  }

  calculatePay(employeeData: EmployeeData2) {
    this.getRegularHours();
    console.log(`${employeeData.name}の給与を計算しました`);
  }
}

class HoursReporter2 {
  private getRegularHours() {
    console.log("労働時間レポート用の労働時間計算ロジック");
  }

  reportHours(employeeData: EmployeeData2) {
    this.getRegularHours();
    console.log(`${employeeData.name}の労働時間をレポートしました`);
  }
}

class EmployeeRepository2 {
  save(employeeData: EmployeeData2) {
    console.log(`${employeeData.name}を保存しました`);
  }
}

function run() {
  const employeeData = new EmployeeData2("山田", "開発");
  const payCalculator = new PayCalculator2();
  const hoursReporter = new HoursReporter2();

  payCalculator.calculatePay(employeeData);
}
