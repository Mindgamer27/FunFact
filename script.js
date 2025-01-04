async function fetchFact() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/facts', {
            method: 'GET',
            headers: {
                'X-Api-Key': 'd7Jv3NZad9WH7mZITxkVJQ==aesPJsFKF0NsQIt4'
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch Facts');
        }
        const data = await response.json(); // Parse JSON response
        const quoteData = data[0]; // Get the first quote from the array
        document.querySelector('.fact').textContent = `"${quoteData.fact}"`; // Update fact
    } catch (error) {
        document.querySelector('.fact').textContent = "Sorry, we couldn't load a quote.";
        console.error(error);
    }
}

// Fetch a new quote when the page loads
fetchFact();