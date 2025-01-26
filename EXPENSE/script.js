// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const expenseForm = document.getElementById('expense-form'); // Reference to the form
    const expensesTableBody = document.querySelector('#expenses-table tbody'); // Reference to the table body

    // Handle form submission
    expenseForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior (page reload)

        // Get the values from the form inputs
        const expenseName = document.getElementById('expense-name').value.trim();
        const expenseAmount = parseFloat(document.getElementById('expense-amount').value.trim());
        const expenseDate = document.getElementById('expense-date').value;

        // Validate the input values
        if (expenseName && !isNaN(expenseAmount) && expenseDate) {
            // Create a new row element
            const newRow = document.createElement('tr');

            // Create table cells for the expense details
            newRow.innerHTML = `
                <td>${expenseName}</td>
                <td>$${expenseAmount.toFixed(2)}</td>
                <td>${expenseDate}</td>
            `;

            // Append the new row to the table body
            expensesTableBody.appendChild(newRow);

            // Reset the form inputs
            expenseForm.reset();
        } else {
            // Show an alert if the inputs are invalid
            alert('Please fill out all fields correctly!');
        }
    });
});
