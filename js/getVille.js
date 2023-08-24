const containerList2 = document.getElementById('container-2');

function MakeList(e, list) {
    let x = 1;
    list.forEach(element => {
        const ulList = document.createElement('ul');
        ulList.innerHTML = `
        <li>${element.city}</li>
        <li>${element.price}</li>
        <li>${element.deliveryTime}</li>
        `;
        ulList.classList = x % 2 === 0 ? 'body active' : 'body active2';
        e.append(ulList);
        x += 1;
    });
}

const searchInput = document.getElementById('search');

const Search = (e) => {
    const filter = e.target.value.toLowerCase();  // Convert search query to lowercase
    const filteredData = data2.filter(element => element.city.toLowerCase().includes(filter));
    
    // Clear existing content
    containerList2.innerHTML = '';

    // Add the header
    const header = document.createElement('ul');
    header.classList = 'head';
    header.innerHTML = `
        <li>City</li>
        <li>Price</li>
        <li>Delivery Time</li>
    `;
    containerList2.appendChild(header);

    // Add filtered items
    MakeList(containerList2, filteredData);
};


searchInput.addEventListener('keyup', Search);

// Fetch JSON data and update data2 array
fetch('https://redaezziani.github.io/Datav2/data.json')  // Replace with the actual path to your JSON file
    .then(response => response.json())
    .then(newData => {
        data2 = newData; 
        MakeList(containerList2, data2); 
    })
    .catch(error => {
        console.error('Error fetching data:', error);
});
