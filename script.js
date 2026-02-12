
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let totalAmount = 0;

// Function to display expenses
function displayExpenses() {
    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";
    totalAmount = 0;

    expenses.forEach((expense, index) => {
        totalAmount += expense.amount;

        const li = document.createElement("li");
        li.innerHTML = `
            ${expense.description} - ₹${expense.amount}
            <button onclick="deleteExpense(${index})">X</button>
        `;

        expenseList.appendChild(li);
    });

    document.getElementById("total").innerText = totalAmount;
}

// Function to add expense
function addExpense() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (description === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter valid details");
        return;
    }

    const newExpense = { description, amount };
    expenses.push(newExpense);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";

    displayExpenses();
}

// Function to delete expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
}

// Load expenses when page opens
displayExpenses();
