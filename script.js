async function fetchFact() {
            const factElement = document.querySelector('.fact');
            factElement.textContent = "Loading..."; // Show loading state

            try {
                const response = await fetch('https://api.api-ninjas.com/v1/facts', {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': 'd7Jv3NZad9WH7mZITxkVJQ==aesPJsFKF0NsQIt4'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch facts');
                }

                const data = await response.json(); // Parse JSON response
                const factData = data[0]; // Get the first fact from the array
                factElement.textContent = `"${factData.fact}"`; // Update fact
            } catch (error) {
                factElement.textContent = "Sorry, we couldn't load a fact.";
                console.error(error);
            }
        }

// Fetch a new quote when the page loads
fetchFact();
// Add event listener to the quote container for single click
document.getElementById('loadquote').addEventListener('click', fetchFact);
