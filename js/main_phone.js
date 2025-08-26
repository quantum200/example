function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
function toggleDropdown() {
    const content = document.getElementById('dropdown-content');
    content.classList.toggle('active');
}

function selectType(type) {
    const items = document.querySelectorAll('.switcher-item');
    items.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-type') === type) {
            item.classList.add('active');
        }
    });
}

function resetSelection() {
    const items = document.querySelectorAll('.switcher-item');
    items.forEach(item => item.classList.remove('active'));
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(button => button.classList.remove('active'));
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));
}

function showContent(filter) {
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-filter') === filter) {
            button.classList.add('active');
        }
    });

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(filter)) {
            content.classList.add('active');
        }
    });
}

function openRegionMenu() {
    const regionMenu = document.getElementById('region-menu');
    const dropdownContent = document.getElementById('dropdown-content');
    dropdownContent.classList.remove('active');
    regionMenu.classList.add('active');
}

function returnToDropdown() {
    const regionMenu = document.getElementById('region-menu');
    const dropdownContent = document.getElementById('dropdown-content');
    regionMenu.classList.remove('active');
    dropdownContent.classList.add('active');
}



const allBrands = [
    "BMW","Lada (BAЗ)","Toyota","Hyundai","Mercedes-Benz","Kia","Volkswagen","Ford","Nissan",
    "Honda","Chevrolet","Audi","Peugeot","Renault","Mazda","Mitsubishi","Subaru","Suzuki","Jeep",
    "Chery","Opel","Fiat","Skoda","Citroen","Dodge","Infiniti","Lexus","Cadillac","Porsche",
    "Jaguar","Land Rover","Mini","Tesla","Volvo","Acura","Buick","Chrysler","GMC","Lincoln",
    "Maserati","Bentley","Ferrari","Lamborghini","Rolls-Royce","Alfa Romeo","Seat","Saab","Haval","Great Wall",
    "Geely","Proton","Perodua","MG","Mahindra","Tata","Dacia","Foton","Hino","Iveco",
    "Isuzu","JAC","King Long","Lifan","Luxgen","Mitsubishi Fuso","Peugeot-Citroen","Rover","SsangYong","BYD",
    "BAIC","FAW","Changan","Dongfeng","Gonow","ZX Auto","Zotye","Baojun","Faw Jiefang","Haima",
    "Soueast","Koenigsegg","Pagani","Spyker","Rimac","Polestar","Lucid","VinFast","Rivian","Cupra",
    "Wiesmann","Morgan","Panoz","Caterham","Gumpert","DeLorean","Fisker","Hennessey","Ascari","Scuderia Cameron",
    "Vector","Cizeta","Trabant","Moskvitch","ZAZ","GAZ","UAZ","Volga","Mosler","Marussia",
    "Vauxhall","Daewoo","Holden","Pontiac","Saturn","Oldsmobile","Hummer","Skoda Superb","Toyota Prius","Honda Civic",
    "Mazda 6","Kia Rio","Hyundai Elantra","BMW 3 Series","Mercedes C-Class","Audi A4","Volkswagen Golf","Ford Focus","Nissan Altima","Chevrolet Malibu",
    "Lexus RX","Toyota Corolla","Honda Accord","Subaru Outback","Mitsubishi Lancer","Mazda CX-5","Hyundai Tucson","Kia Sportage","Renault Logan","Peugeot 308",
    "Citroen C4","Opel Astra","Fiat 500","Jaguar XF","Porsche Cayenne","Land Rover Discovery","Mini Cooper","Tesla Model 3","Volvo XC60","Acura MDX",
    "Buick Enclave","Chrysler 300","GMC Sierra","Lincoln Navigator","Maserati Ghibli","Bentley Continental","Ferrari Roma","Lamborghini Urus","Rolls-Royce Ghost","Alfa Romeo Giulia",
    "Seat Leon","Saab 9-3","Haval H6","Great Wall Wingle","Geely Atlas","Proton X70","Perodua Myvi","MG ZS","Mahindra XUV500","Tata Harrier",
    "Dacia Duster","Foton Tunland","Hino 300","Iveco Daily","Isuzu D-Max","JAC S3","King Long XMQ","Lifan X50","Luxgen U6","Mitsubishi Fuso Canter",
    "Peugeot Partner","Rover 75","SsangYong Tivoli","BYD Tang","BAIC BJ40","FAW Besturn","Changan CS35","Dongfeng Fengon","Gonow GX6","ZX Auto Grand Tiger","Zotye T600"
];
const initialCount = 4;
const leftCol = document.querySelector('.brands-left');
const rightCol = document.querySelector('.brands-right');
function renderBrands(showAll = false) {
    leftCol.innerHTML = '';
    rightCol.innerHTML = '';
    const count = showAll ? allBrands.length : initialCount * 2;
    for (let i = 0; i < count; i++) {
        const span = document.createElement('span');
        span.textContent = allBrands[i];
        if(i % 2 === 0) leftCol.appendChild(span);
        else rightCol.appendChild(span);
    }
    if(showAll) {
        const hideSpan = document.createElement('span');
        hideSpan.textContent = 'Скрыть';
        hideSpan.classList.add('hide-all');
        rightCol.appendChild(hideSpan);
        hideSpan.addEventListener('click', () => {
            renderBrands(false);
            document.querySelector('.show-all').style.display = 'inline-block';
        });
    }
}
renderBrands(false);
document.querySelector('.show-all').addEventListener('click', () => {
    renderBrands(true);
    document.querySelector('.show-all').style.display = 'none';
});



const showBtn = document.querySelector('.show-toggle');
const hideBtn = document.querySelector('.hide-toggle');
showBtn.addEventListener('click', () => {
    const block = showBtn.closest('.cities-block');
    block.querySelectorAll('.city.hidden').forEach(c => c.style.display = 'flex');
    showBtn.style.display = 'none';
    hideBtn.style.display = 'block';
});
hideBtn.addEventListener('click', () => {
    const block = hideBtn.closest('.cities-block');
    block.querySelectorAll('.city.hidden').forEach(c => c.style.display = 'none');
    hideBtn.style.display = 'none';
    showBtn.style.display = 'block';
});



function openSearchMenu() {
    const searchMenu = document.getElementById('search-menu');
    const menu = document.getElementById('menu');
    menu.classList.remove('active');
    searchMenu.classList.add('active');
}

function returnToMenu() {
    const searchMenu = document.getElementById('search-menu');
    const menu = document.getElementById('menu');
    searchMenu.classList.remove('active');
    menu.classList.add('active');
}