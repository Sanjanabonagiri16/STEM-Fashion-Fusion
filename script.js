document.getElementById('design-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fabric = document.getElementById('fabric').value;
    const pattern = document.getElementById('pattern').value;
    const led = document.getElementById('led').checked;

    const data = {
        fabric: fabric,
        pattern: pattern,
        led: led
    };

    fetch('/save_design', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = data.message;
        fetchDesigns(); // Fetch and display updated designs
    })
    .catch(error => console.error('Error:', error));
});

function fetchDesigns() {
    fetch('/get_designs')
    .then(response => response.json())
    .then(data => {
        const designsList = document.getElementById('designs-list');
        designsList.innerHTML = ''; // Clear existing designs
        data.forEach(design => {
            const designItem = document.createElement('li');
            designItem.textContent = `Fabric: ${design.fabric}, Pattern: ${design.pattern}, LED: ${design.led}`;
            designsList.appendChild(designItem);
        });
    })
    .catch(error => console.error('Error:', error));
}

// Fetch designs on page load
document.addEventListener('DOMContentLoaded', fetchDesigns);