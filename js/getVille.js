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



var data2 = [
    {
      "city": "Casablanca",
      "price": "25 DH",
      "deliveryTime": "1 j"
    },
    {
      "city": "Ait Melloul",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Al Hoceima",
      "price": "40 dh",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Assilah",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Azemmour",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Azilal",
      "price": "40 dh",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Aaroui",
      "price": "45 dh",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Agadir",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Beni Chiker",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Beni Ensar",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Berkane",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Beni Mellal",
      "price": "40 dh",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Benslimane",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Berrechid",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "El Hajeb",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "El Jadida",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Errachidia",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Essaouira",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Fes",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Fkih Ben Saleh",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Casablanca",
      "price": "25 DH",
      "deliveryTime": "1 j"
    },
    {
      "city": "Ait Melloul",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Al Hoceima",
      "price": "40 dh",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Assilah",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Azemmour",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Azilal",
      "price": "40 dh",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Aaroui",
      "price": "45 dh",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Agadir",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Beni Chiker",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Beni Ensar",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Berkane",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Beni Mellal",
      "price": "40 dh",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Benslimane",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Berrechid",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "El Hajeb",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "El Jadida",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Errachidia",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Essaouira",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Fes",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Fkih Ben Saleh",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Fnideq",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Guelmim",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Inzegane",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Kelaat Esraghna",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Kenitra",
      "price": "40 DH",
      "deliveryTime": "1 j-2 j"
    },
    {
      "city": "Khemissat",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Khenifra",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Khouribga",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ksar El Kebir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Larache",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Marrakech",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Martil",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Mdiq",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Meknes",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Midelt",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Nador",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Ouarzazate",
      "price": "40 DH",
      "deliveryTime": "2 j- 4 j"
    },
    {
      "city": "Oujda",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Oulad Teima",
      "price": "45 DH",
      "deliveryTime": "3 j- 4 j"
    },
    {
      "city": "Rabat",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Fnideq",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Guelmim",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Inzegane",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Kelaat Esraghna",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Kenitra",
      "price": "40 DH",
      "deliveryTime": "1 j-2 j"
    },
    {
      "city": "Khemissat",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Khenifra",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Khouribga",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ksar El Kebir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Larache",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Marrakech",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Martil",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Mdiq",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Meknes",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Midelt",
      "price": "40 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Nador",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Ouarzazate",
      "price": "40 DH",
      "deliveryTime": "2 j- 4 j"
    },
    {
      "city": "Oujda",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Oulad Teima",
      "price": "45 DH",
      "deliveryTime": "3 j- 4 j"
    },
    {
      "city": "Rabat",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Ain harrouda",
      "price": "35 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Mohammedia",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Deroua",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Errahma",
      "price": "35 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Nouaceur",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Dcheira",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Bouznika",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Oualidia",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Youssoufia",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Echemmaia",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Jemaa Shaim",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Souk Sebt",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Kasba Tadla",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Sidi Rahal",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Had Soualem",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Tamesna",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Ain El Aouda",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Ain Attig",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Boufakrane - Meknes",
      "price": "45 DH",
      "deliveryTime": "1 j- 3 j"
    },
    {
      "city": "El Haj Kaddour - Meknes",
      "price": "45 DH",
      "deliveryTime": "1 j- 3 j"
    },
    {
      "city": "Ain harrouda",
      "price": "35 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Mohammedia",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Deroua",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Errahma",
      "price": "35 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Nouaceur",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Dcheira",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Bouznika",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Oualidia",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Youssoufia",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Echemmaia",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Jemaa Shaim",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Souk Sebt",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Kasba Tadla",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Sidi Rahal",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Had Soualem",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Tamesna",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Ain El Aouda",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Ain Attig",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Boufakrane - Meknes",
      "price": "45 DH",
      "deliveryTime": "1 j- 3 j"
    },
    {
      "city": "El Haj Kaddour - Meknes",
      "price": "45 DH",
      "deliveryTime": "1 j- 3 j"
    },
    {
      "city": "Ain harrouda",
      "price": "35 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Mohammedia",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Deroua",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Errahma",
      "price": "35 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Nouaceur",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Dcheira",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Bouznika",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Oualidia",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Youssoufia",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Echemmaia",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Jemaa Shaim",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Souk Sebt",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Kasba Tadla",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Sidi Rahal",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Had Soualem",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Tamesna",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Ain El Aouda",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Ain Attig",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Boufakrane - Meknes",
      "price": "45 DH",
      "deliveryTime": "1 j- 3 j"
    },
    {
      "city": "El Haj Kaddour - Meknes",
      "price": "45 DH",
      "deliveryTime": "1 j- 3 j"
    },
    {
      "city": "Ain harrouda",
      "price": "35 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Mohammedia",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Deroua",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Errahma",
      "price": "35 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Nouaceur",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Dcheira",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Bouznika",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Oualidia",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Youssoufia",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Echemmaia",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Jemaa Shaim",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Souk Sebt",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Kasba Tadla",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Sidi Rahal",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Had Soualem",
      "price": "40 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Tamesna",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Ain El Aouda",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Ain Attig",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Boufakrane - Meknes",
      "price": "45 DH",
      "deliveryTime": "1 j- 3 j"
    },
    {
      "city": "El Haj Kaddour - Meknes",
      "price": "45 DH",
      "deliveryTime": "1 j- 3 j"
    },
    {
      "city": "Moulay Yaacoub",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Allah - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Cheggag - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Chqef - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Beda - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Bir Jdid",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Tnine Chtouka",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Leqliaa",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Biougra",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Sidi-Bibi",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Temsia - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "El Ksiba",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ouled Moussa",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Zaouiat cheikh",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Harhoura",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Sala Al Jadida",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Aourir - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Massa - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Taghazout",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Tamri - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Moulay Yaacoub",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Allah - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Cheggag - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Chqef - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Beda - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Bir Jdid",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Tnine Chtouka",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Leqliaa",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Biougra",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Sidi-Bibi",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Temsia - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "El Ksiba",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ouled Moussa",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Zaouiat cheikh",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Harhoura",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Sala Al Jadida",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Aourir - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Massa - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Taghazout",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Tamri - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Moulay Yaacoub",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Allah - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Cheggag - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Chqef - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Beda - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Bir Jdid",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Tnine Chtouka",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Leqliaa",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Biougra",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Sidi-Bibi",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Temsia - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "El Ksiba",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ouled Moussa",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Zaouiat cheikh",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Harhoura",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Sala Al Jadida",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Aourir - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Massa - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Taghazout",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Tamri - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Moulay Yaacoub",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Allah - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Cheggag - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Chqef - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Beda - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Bir Jdid",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Tnine Chtouka",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Leqliaa",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Biougra",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Sidi-Bibi",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Temsia - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "El Ksiba",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ouled Moussa",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Zaouiat cheikh",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Harhoura",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Sala Al Jadida",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Aourir - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Massa - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Taghazout",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Tamri - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Moulay Yaacoub",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Allah - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Cheggag - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Chqef - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ain Beda - Fes",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Bir Jdid",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Tnine Chtouka",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Leqliaa",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Biougra",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Sidi-Bibi",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Temsia - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "El Ksiba",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Ouled Moussa",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Zaouiat cheikh",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Harhoura",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Sala Al Jadida",
      "price": "45 DH",
      "deliveryTime": "1 j- 2 j"
    },
    {
      "city": "Aourir - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Massa - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Taghazout",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Tamri - Agadir",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Tighssaline",
      "price": "45 DH",
      "deliveryTime": "2 j-4 j"
    },
    {
      "city": "Lahri",
      "price": "45 DH",
      "deliveryTime": "2 j-4 j"
    },
    {
      "city": "tantan",
      "price": "40 DH",
      "deliveryTime": "2 j-4 j"
    },
    {
      "city": "Khemis Zemamra",
      "price": "45 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Tarfaya",
      "price": "45 DH",
      "deliveryTime": "4 j- 5 j"
    },
    {
      "city": "Laayoune El Marsa",
      "price": "45 DH",
      "deliveryTime": "2 j-4 j"
    },
    {
      "city": "Moulay Bousselham",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Benguerir",
      "price": "45 DH",
      "deliveryTime": "1 j-3 j"
    },
    {
      "city": "Ait Aiaaza",
      "price": "45 DH",
      "deliveryTime": "3 j- 4 j"
    },
    {
      "city": "Ain el Mediour",
      "price": "45 DH",
      "deliveryTime": "3 j- 5 j"
    },
    {
      "city": "Sebt El Guerdane",
      "price": "45 DH",
      "deliveryTime": "2 j- 4 j"
    },
    {
      "city": "Ouled Berhil",
      "price": "45 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Oulad Aaissa",
      "price": "45 DH",
      "deliveryTime": "3 j- 5 j"
    },
    {
      "city": "Sidi Allal El Bahraoui",
      "price": "50 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Tafraoute",
      "price": "50",
      "deliveryTime": "4 j"
    },
    {
      "city": "Boulanouare",
      "price": "45 DH",
      "deliveryTime": "2 j-3 j"
    },
    {
      "city": "MHaya",
      "price": "50 DH",
      "deliveryTime": "4 j"
    },
    {
      "city": "Sidi Ali Ban Hamdouche",
      "price": "50 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Oulad Ghadbane",
      "price": "50 DH",
      "deliveryTime": "4 j"
    },
    {
      "city": "Sebt El Maarif",
      "price": "50 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Tighssaline",
      "price": "45 DH",
      "deliveryTime": "2 j-4 j"
    },
    {
      "city": "Lahri",
      "price": "45 DH",
      "deliveryTime": "2 j-4 j"
    },
    {
      "city": "tantan",
      "price": "40 DH",
      "deliveryTime": "2 j-4 j"
    },
    {
      "city": "Khemis Zemamra",
      "price": "45 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Tarfaya",
      "price": "45 DH",
      "deliveryTime": "4 j- 5 j"
    },
    {
      "city": "Laayoune El Marsa",
      "price": "45 DH",
      "deliveryTime": "2 j-4 j"
    },
    {
      "city": "Moulay Bousselham",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Benguerir",
      "price": "45 DH",
      "deliveryTime": "1 j-3 j"
    },
    {
      "city": "Ait Aiaaza",
      "price": "45 DH",
      "deliveryTime": "3 j- 4 j"
    },
    {
      "city": "Ain el Mediour",
      "price": "45 DH",
      "deliveryTime": "3 j- 5 j"
    },
    {
      "city": "Sebt El Guerdane",
      "price": "45 DH",
      "deliveryTime": "2 j- 4 j"
    },
    {
      "city": "Ouled Berhil",
      "price": "45 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Oulad Aaissa",
      "price": "45 DH",
      "deliveryTime": "3 j- 5 j"
    },
    {
      "city": "Sidi Allal El Bahraoui",
      "price": "50 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Tafraoute",
      "price": "50",
      "deliveryTime": "4 j"
    },
    {
      "city": "Boulanouare",
      "price": "45 DH",
      "deliveryTime": "2 j-3 j"
    },
    {
      "city": "MHaya",
      "price": "50 DH",
      "deliveryTime": "4 j"
    },
    {
      "city": "Sidi Ali Ban Hamdouche",
      "price": "50 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Oulad Ghadbane",
      "price": "50 DH",
      "deliveryTime": "4 j"
    },
    {
      "city": "Sebt El Maarif",
      "price": "50 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Tighssaline",
      "price": "45 DH",
      "deliveryTime": "2 j-4 j"
    },
    {
      "city": "Lahri",
      "price": "45 DH",
      "deliveryTime": "2 j-4 j"
    },
    {
      "city": "tantan",
      "price": "40 DH",
      "deliveryTime": "2 j-4 j"
    },
    {
      "city": "Khemis Zemamra",
      "price": "45 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Tarfaya",
      "price": "45 DH",
      "deliveryTime": "4 j- 5 j"
    },
    {
      "city": "Laayoune El Marsa",
      "price": "45 DH",
      "deliveryTime": "2 j-4 j"
    },
    {
      "city": "Moulay Bousselham",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Benguerir",
      "price": "45 DH",
      "deliveryTime": "1 j-3 j"
    },
    {
      "city": "Ait Aiaaza",
      "price": "45 DH",
      "deliveryTime": "3 j- 4 j"
    },
    {
      "city": "Ain el Mediour",
      "price": "45 DH",
      "deliveryTime": "3 j- 5 j"
    },
    {
      "city": "Sebt El Guerdane",
      "price": "45 DH",
      "deliveryTime": "2 j- 4 j"
    },
    {
      "city": "Ouled Berhil",
      "price": "45 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Oulad Aaissa",
      "price": "45 DH",
      "deliveryTime": "3 j- 5 j"
    },
    {
      "city": "Sidi Allal El Bahraoui",
      "price": "50 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Tafraoute",
      "price": "50",
      "deliveryTime": "4 j"
    },
    {
      "city": "Boulanouare",
      "price": "45 DH",
      "deliveryTime": "2 j-3 j"
    },
    {
      "city": "MHaya",
      "price": "50 DH",
      "deliveryTime": "4 j"
    },
    {
      "city": "Sidi Ali Ban Hamdouche",
      "price": "50 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Oulad Ghadbane",
      "price": "50 DH",
      "deliveryTime": "4 j"
    },
    {
      "city": "Sebt El Maarif",
      "price": "50 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Tighssaline",
      "price": "45 DH",
      "deliveryTime": "2 j-4 j"
    },
    {
      "city": "Lahri",
      "price": "45 DH",
      "deliveryTime": "2 j-4 j"
    },
    {
      "city": "tantan",
      "price": "40 DH",
      "deliveryTime": "2 j-4 j"
    },
    {
      "city": "Khemis Zemamra",
      "price": "45 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Tarfaya",
      "price": "45 DH",
      "deliveryTime": "4 j- 5 j"
    },
    {
      "city": "Laayoune El Marsa",
      "price": "45 DH",
      "deliveryTime": "2 j-4 j"
    },
    {
      "city": "Moulay Bousselham",
      "price": "45 DH",
      "deliveryTime": "2 j- 3 j"
    },
    {
      "city": "Benguerir",
      "price": "45 DH",
      "deliveryTime": "1 j-3 j"
    },
    {
      "city": "Ait Aiaaza",
      "price": "45 DH",
      "deliveryTime": "3 j- 4 j"
    },
    {
      "city": "Ain el Mediour",
      "price": "45 DH",
      "deliveryTime": "3 j- 5 j"
    },
    {
      "city": "Sebt El Guerdane",
      "price": "45 DH",
      "deliveryTime": "2 j- 4 j"
    },
    {
      "city": "Ouled Berhil",
      "price": "45 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Oulad Aaissa",
      "price": "45 DH",
      "deliveryTime": "3 j- 5 j"
    },
    {
      "city": "Sidi Allal El Bahraoui",
      "price": "50 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Tafraoute",
      "price": "50",
      "deliveryTime": "4 j"
    },
    {
      "city": "Boulanouare",
      "price": "45 DH",
      "deliveryTime": "2 j-3 j"
    },
    {
      "city": "MHaya",
      "price": "50 DH",
      "deliveryTime": "4 j"
    },
    {
      "city": "Sidi Ali Ban Hamdouche",
      "price": "50 DH",
      "deliveryTime": "3 j-4 j"
    },
    {
      "city": "Oulad Ghadbane",
      "price": "50 DH",
      "deliveryTime": "4 j"
    },
    {
      "city": "Sebt El Maarif",
      "price": "50 DH",
      "deliveryTime": "3 j-4 j"
    }
]
searchInput.addEventListener('keyup', Search);
MakeList(containerList2, data2);

