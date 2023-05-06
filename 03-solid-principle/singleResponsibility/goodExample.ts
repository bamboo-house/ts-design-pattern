// 単一責任の原則 => 「モジュールはたった一つのアクターに対して責任を負うべきである」
// モジュール：クラス、関数、メソッド、モジュール、パッケージ、ファイルなど
// アクター：変更を要求する人、組織、システムなど

class EmployeeData {
    constructor(
        public name: string,
        public department: string,
    ) {}
}

class PayCalculator {
    private getRegularHours() {
        console.log("給与計算用の労働時間計算ロジック");
    }

    calculatePay(employeeData: EmployeeData) {
        this.getRegularHours();
        console.log(`${employeeData.name}の給与を計算しました`);
    }
}

class HourReporter {
    private getRegularHours() {
        console.log("労働時間レポート専用の労働時間計算ロジック");
    }

    reportHours(employeeData: EmployeeData) {
        this.getRegularHours();
        console.log(`${employeeData.name}の労働時間をレポートしました`);
    }
}

class EmployeeRepository {
    save() {}
}

function run() {
    const employeeData = new EmployeeData("鈴木", "開発");
    const payCalculator = new PayCalculator();
    const hourReporter = new HourReporter();

    console.log("経理部門");
    payCalculator.calculatePay(employeeData);
    console.log("");
    console.log("人事部門");
    hourReporter.reportHours(employeeData);
}

run();