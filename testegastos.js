class ExpenseTracker {
  constructor() {
    this.gastos = [
      { mes: "Janeiro", expenses: [] },
      { mes: "Fevereiro", expenses: [] },
      { mes: "Março", expenses: [] },
      { mes: "Abril", expenses: [] },
      { mes: "Maio", expenses: [] },
      { mes: "Junho", expenses: [] },
      { mes: "Julho", expenses: [] },
      { mes: "Agosto", expenses: [] },
      { mes: "Setembro", expenses: [] },
      { mes: "Outubro", expenses: [] },
      { mes: "Novembro", expenses: [] },
      { mes: "Dezembro", expenses: [] },
    ];
  }

  addExpense(month, expenseType, expenseValue) {
    const monthIndex = this.gastos.findIndex((item) => item.mes === month);
    if (monthIndex !== -1) {
      this.gastos[monthIndex].expenses.push({
        type: expenseType,
        value: expenseValue,
      });
    }
  }

  editExpense(month, expenseType, newExpenseValue) {
    const monthIndex = this.gastos.findIndex((item) => item.mes === month);
    if (monthIndex !== -1) {
      const expenseIndex = this.gastos[monthIndex].expenses.findIndex(
        (item) => item.type === expenseType
      );
      if (expenseIndex !== -1) {
        this.gastos[monthIndex].expenses[expenseIndex].value = newExpenseValue;
      }
    }
  }

  removeExpense(month, expenseType) {
    const monthIndex = this.gastos.findIndex((item) => item.mes === month);
    if (monthIndex !== -1) {
      const expenseIndex = this.gastos[monthIndex].expenses.findIndex(
        (item) => item.type === expenseType
      );
      if (expenseIndex !== -1) {
        this.gastos[monthIndex].expenses.splice(expenseIndex, 1);
      }
    }
  }

  listExpensesByMonth(month) {
    const monthIndex = this.gastos.findIndex((item) => item.mes === month);
    if (monthIndex !== -1) {
      const expenses = this.gastos[monthIndex].expenses;
      if (expenses.length > 0) {
        const expenseList = expenses.map(
          (expense) => `com ${expense.type} R$ ${expense.value}`
        );
        return `No mês de ${month} foi gasto ${expenseList.join(", ")}`;
      } else {
        return `No mês de ${month} não houve gastos.`;
      }
    }
    return `Mês inválido.`;
  }

  getTotalExpensesByMonth(month) {
    const monthIndex = this.gastos.findIndex((item) => item.mes === month);
    if (monthIndex !== -1) {
      const expenses = this.gastos[monthIndex].expenses;
      const total = expenses.reduce((acc, expense) => acc + expense.value, 0);
      return `No mês de ${month} foi gasto um total de R$ ${total.toFixed(2)}`;
    }
    return `Mês inválido.`;
  }

  getTotalExpensesByType() {
    const totals = {};
    this.gastos.forEach((month) => {
      month.expenses.forEach((expense) => {
        if (totals[expense.type]) {
          totals[expense.type] += expense.value;
        } else {
          totals[expense.type] = expense.value;
        }
      });
    });
    return totals;
  }

  getMonthlyExpenseStatus() {
    const monthlyStatus = [];
    this.gastos.forEach((month) => {
      const total = month.expenses.reduce(
        (acc, expense) => acc + expense.value,
        0
      );
      const status =
        total <= 8500 ? "dentro do orçamento" : "acima do orçamento";
      monthlyStatus.push(
        `No mês de ${month.mes} foi gasto um total de R$ ${total.toFixed(
          2
        )} (${status})`
      );
    });
    return monthlyStatus;
  }
}

// Usage example
const tracker = new ExpenseTracker();

tracker.addExpense("Janeiro", "Energia", 153.67);
tracker.addExpense("Janeiro", "Água", 29.99);
tracker.addExpense("Janeiro", "Aluguel", 1349.9);
tracker.addExpense("Janeiro", "Escola", 1209.78);
tracker.addExpense("Janeiro", "Supermercado", 560.98);

tracker.editExpense("Agosto", "Escola", 1500);

tracker.removeExpense("Dezembro", "Supermercado");

console.log(tracker.listExpensesByMonth("Janeiro"));
console.log(tracker.getTotalExpensesByMonth("Abril"));
console.log(tracker.getTotalExpensesByType());
console.log(tracker.getMonthlyExpenseStatus());
