// const inp1 = document.getElementById('inp1')
// const p2 = document.getElementById('p2')
// const p3 = document.getElementById('p3')
// const btn = document.getElementById("btn");

// products 
// Ən bahalı məhsul 
// Ortalama stok miqdarı
// “C” ilə başlayan məhsullar 


// fetch('https://northwind.vercel.app/api/products')
// .then(res => res.json())
// .then(data => {
//     data.forEach(item => {
//         p1.textContent = 'Top price: ' + `${Math.max(...data.map(item => item.unitPrice))}`

//         const stocks = data.map(item => item.unitsInStock);
//         const sum = stocks.reduce((total, stock) => total + stock, 0);
//         const qiymet = sum / stocks.length;   
//         p2.textContent = 'Ortalama stok: ' + qiymet  

//         const cstart = data.filter(item => item.name.charAt(0).toLowerCase() === 'c');
//         const names = cstart.map(item => item.name);
//         p3.textContent = ' Name with C: ' + names
//     })
// })



// customers 
// “London” şəhərindəki müştəriləri console a yaz 
// Region NULL olan nə qədər customer var?


// fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => {
//         const londonCustomers = data.filter(item => item.address.city === 'London');
//         console.log(londonCustomers);

//     })


// fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => {
//         const londonCustomers = data.filter(item => item.address.region === 'NULL');
//         p1.textContent = londonCustomers.length

//     })




// posts
// Id-si 1 olan userin nə qədər postu var?


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(data => {
//     const id = data.filter(item => item.id === 1)
//     p1.textContent = 'Number of posts with id 1----- ' + id.length;
// })




// albums
// 1 nömrəli albümdə nə qədər fotoqraf var?


// fetch('https://jsonplaceholder.typicode.com/albums')
// .then(res => res.json())
// .then(data => {
//     const Albums = data.filter(item => item.userId === 1)
//     p1.textContent = 'Number of photos in albums number 1----- ' + Albums.length;
// })































