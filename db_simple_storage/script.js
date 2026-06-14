// ==========================================
// 1. DOM ELEMENT SELECTORS
// ==========================================
const submitBtn = document.getElementById('submit_btn');
const toggleTableBtn = document.getElementById('toggle_table_btn');
const databaseSection = document.getElementById('database_section');
const firstNameInput = document.getElementById('input_first_name');
const ageInput = document.getElementById('input_age');
const recordsContainer = document.getElementById('records_container');

// ==========================================
// 2. CORE FUNCTIONS
// ==========================================

// Function to fetch all rows from SQLite and display them on screen
async function loadAndDisplayTable() {
    try {
        const response = await fetch('http://127.0.0.1:3000/api/users');
        const usersTableData = await response.json();
        
        // Clear previous entries to avoid stacking duplicate lists
        recordsContainer.innerHTML = ''; 

        if (usersTableData.length === 0) {
            recordsContainer.innerHTML = '<p style="text-align:center; font-size:0.7rem; color:#777; margin-top:1rem;">No records found inside DB.</p>';
            return;
        }

        // Loop through each database row item and build cards
        usersTableData.forEach(user => {
            const card = document.createElement('div');
            card.className = 'user_record_card'; 
            
            // Injects columns from your SQLite schema dynamically
            card.innerHTML = `
                <span>ID: ${user.id}</span>
                <span>NAME: ${user.first_name}</span>
                <span>AGE: ${user.age}</span>
            `;
            
            recordsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching table content from server:', error);
    }
}

// ==========================================
// 3. INTERACTIVE EVENT LISTENERS
// ==========================================

// Handle Submitting New Data
submitBtn.addEventListener('click', async () => {
    const nameValue = firstNameInput.value.trim();
    const ageValue = ageInput.value.trim();

    if (!nameValue || !ageValue) {
        alert("Please fill in both the First Name and Age fields!");
        return;
    }

    const userData = {
        first_name: nameValue,
        age: parseInt(ageValue)
    };

    try {
        const response = await fetch('http://127.0.0.1:3000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Successfully saved to DB! Record ID:', data.insertedId);
            
            firstNameInput.value = '';
            ageInput.value = '';

            // Auto-refresh the visible cards if the table is currently shown
            if (!databaseSection.classList.contains('hidden')) {
                loadAndDisplayTable();
            }
        } else {
            console.error('Server response failed:', response.statusText);
        }
    } catch (error) {
        console.error('Network execution failure:', error);
    }
});

// Handle Showing/Hiding the Table Layout
toggleTableBtn.addEventListener('click', () => {
    const isCurrentlyHidden = databaseSection.classList.contains('hidden');
    
    if (isCurrentlyHidden) {
        // Run the function to fetch data right as it opens up
        loadAndDisplayTable();
        
        databaseSection.classList.remove('hidden');
        toggleTableBtn.textContent = 'Hide Saved Table';
        toggleTableBtn.style.backgroundColor = '#575757'; 
    } else {
        databaseSection.classList.add('hidden');
        toggleTableBtn.textContent = 'Show Saved Table';
        toggleTableBtn.style.backgroundColor = '#2c6efc'; 
    }
});