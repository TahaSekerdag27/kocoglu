// Sample menu data
const menuData = {
    kahvalti: [
        { 
            name: 'Kahvaltı Tabağı', 
            price: '260 TL', 
            description: 'Peynir çeşitleri, zeytin, domates, salatalık',
            image: './images/tabak.jpg'
        },
        { 
            name: 'Serpme Kahvaltı', 
            price: '320 TL', 
            description: 'Zengin içerikli serpme kahvaltı tabağı',
            image: './images/serpme.jpg'
        },
        { 
            name: 'Omlet', 
            price: '100 TL', 
            description: 'Omlet',
            image: './images/omlet.jpg'
        },
        { 
            name: 'Sahanda Yumurta', 
            price: '100 TL', 
            description: 'Sahanda yumurta',
            image: './images/sahanda-yumurta.jpg'
        },
        { 
            name: 'Kavurmalı Yumurta', 
            price: '190 TL', 
            description: 'Kavurmalı yumurta',
            image: './images/kavurmali-yumurta.jpg'
        },
        { 
            name: 'Sucuklu Yumurta', 
            price: '290 TL', 
            description: 'Sucuklu yumurta',
            image: './images/sucuklu-yumurta.jpg'
        },
        
        { 
            name: 'Menemen', 
            price: '150 TL', 
            description: 'Menemen',
            image: './images/menemen.jpg'
        },
        { 
            name: 'Patila Çeşitleri', 
            price: '70-100 TL', 
            description: 'Patatesli Patila = 70 TL\nPeynirli Patila = 80 TL\nKaşarlı Patila = 85 TL\nKıymalı Patila = 100 TL',
            image: './images/patila.jpg'
        },
        
        { 
            name: 'Su Böreği', 
            price: '90 TL', 
            description: 'Su böreği',
            image: './images/su-boregi.jpg'
        },
        
        
        
        { 
            name: 'El Böreği', 
            price: '25 TL', 
            description: 'El böreği',
            image: './images/el-boregi.jpg'
        },
        { 
            name: 'Patates Cipsi', 
            price: '50 TL', 
            description: 'Patates cipsi',
            image: './images/patates-cips.jpg'
        },
        { 
            name: 'Bal Kaymak', 
            price: '110 TL', 
            description: 'Bal kaymak',
            image: './images/bal-kaymak.jpg'
        },
    ],
    corbalar: [
        { 
            name: 'Mercimek Çorbası', 
            price: '100 TL', 
            description: 'Geleneksel Türk mercimek çorbası',
            image: './images/mercimek-corbasi.jpg'
        },
        { 
            name: 'Ayranlı Çorba', 
            price: '100 TL', 
            description: 'Ayranlı çorba',
            image: './images/ayranli-corba.jpg'
        },
        
        { 
            name: 'Kelle Paça Çorbası', 
            price: '250 TL', 
            description: 'Geleneksel kelle paça çorbası',
            image: './images/kellepaca.jpg'
        },
        
    ],
    doner: [
        { 
            name: 'Döner Dürüm', 
            price: '220 TL', 
            description: 'Döner dürüm',
            image: './images/doner-durum.jpg'
        },
        { 
            name: 'Döner Servis', 
            price: '290 TL', 
            description: 'Döner servis',
            image: './images/doner.jpeg'
        },
        
        { 
            name: 'Pilav Üstü Döner', 
            price: '320 TL', 
            description: 'Pilav üstü döner',
            image: './images/pilavustu.jpg'
        },
        { 
            name: 'İskender',
            price: '360 TL', 
            description: 'İskender',
            image: './images/iskender.jpeg'
        },
        
        
        
    ],
    ızgaralar: [
        { 
            name: 'Adana', 
            price: '290 TL', 
            description: 'Adana',
            image: './images/adana.jpeg'
        },
        { 
            name: 'Urfa', 
            price: '290 TL', 
            description: 'Urfa',
            image: './images/urfaaa.webp'
        },
        { 
            name: 'Kuşbaşı', 
            price: '360 TL', 
            description: 'Kuşbaşı',
            image: './images/kusbasi.jpeg'
        },
        { 
            name: 'Et Biftek', 
            price: '540 TL', 
            description: 'Et biftek',
            image: './images/biftek.jpg'
        },
        { 
            name: 'Izgara Köfte', 
            price: '290 TL', 
            description: 'Izgara köfte',
            image: './images/izgara-kofte.jpg'
        },
        { 
            name: 'Koç Burger', 
            price: '290TL', 
            description: 'Koç Burger',
            image: './images/koc-burger.jpeg'
        },
        { 
            name: 'Tavuk Pirzola', 
            price: '290 TL', 
            description: 'Tavuk pirzola',
            image: './images/tavuk-pirzola.jpeg'
        },
        { 
            name: 'Tavuk Kanat', 
            price: '290 TL', 
            description: 'Tavuk kanat',
            image: './images/kanat.jpeg'
        },
        { 
            name: 'Tavuk Şiş', 
            price: '280 TL', 
            description: 'Tavuk şiş',
            image: './images/tavuk-sis.jpeg'
        },
        { 
            name: 'Karışık Izgara', 
            price: '580 TL', 
            description: 'Karışık Izgara',
            image: './images/karisik-izgara.jpeg'
        },
         { 
            name: 'Sarma Beyti', 
            price: '340 TL', 
            description: 'Sarma beyti',
            image: './images/sarma-beyti.jpg'
        } ,
        { 
            name: 'Beyti Kebap', 
            price: '320 TL', 
            description: 'Beyti kebap',
            image: './images/urfa.jpg'
        } ,
        { 
            name: 'Patlıcan Kebabı', 
            price: '480 TL', 
            description: 'Patlıcan kebabı',
            image: './images/patlican.jpg'
        },
         { 
            name: 'Domates Kebabı', 
            price: '480 TL', 
            description: 'Domates kebabı',
            image: './images/domates.jpg'
        },{ 
            name: 'Koçoglu Kebabı', 
            price: '580 TL', 
            description: 'Koçoglu kebabı',
            image: './images/kocoglu-kebabi.jpg'
        },
        { 
            name: 'Çaydaçıra Kebabı', 
            price: '600 TL', 
            description: 'Çaydaçıra kebabı',
            image: './images/caydacira.jpg'
        },
        { 
            name: 'Küşleme', 
            price: '560 TL', 
            description: 'Küşleme',
            image: './images/kusleme.jpeg'
        },
        { 
            name: 'Sac Tava', 
            price: '560 TL', 
            description: 'Sac tava',
            image: './images/sactava.jpg'
        },
        { 
            name: 'Ali Nazik', 
            price: '520 TL', 
            description: 'Ali nazik',
            image: './images/ali.jpg'
        },
    ],
    
    
    
    
    
    
    
    
    
    "ozel": [ 
        { 
            name: 'Kağıt Kebabı', 
            price: '750 TL', 
            description: 'Kağıt kebabı',
            image: './images/kagıt.jpg'
        } ,{ 
            name: 'Güveç', 
            price: '320 TL', 
            description: 'Güveç',
            image: './images/guvec.jpg'
        } ,{ 
            name: 'Tavuk/Hindi Dolma', 
            price: '600-1200 TL', 
            description: 'Tavuk dolma = 600 TL\nHindi dolma = 1200 TL',
            image: './images/hindidolma.webp'
        } ,{ 
            name: 'Kuzu Dolma', 
            price: '2500 TL', 
            description: 'Kuzu dolma',
            image: './images/kuzudolma.webp'
        } ,{ 
            name: 'Gömbe', 
            price: '650-750 TL', 
            description: 'Kıymalı Gömbe/ 1 KG',
            image: './images/gömbe.jpg'
        } ,{ 
            name: 'Biftek Sarma', 
            price: '700 TL', 
            description: 'Biftek sarma',
            image: './images/bsarma.jpg'
        } ,{ 
            name: 'İncik Tava', 
            price: '800 TL', 
            description: 'İncik tava',
            image: './images/incik.png'
        } ,{ 
            name: 'Palu Tava', 
            price: '700 TL', 
            description: 'Palu tava',
            image: './images/palu.jpg'
        } ,{ 
            name: 'Baskil Tava', 
            price: '700?? TL', 
            description: 'Baskil tava',
            image: './images/baskil.webp'
        } ,{ 
            name: 'Süslü Fidoş', 
            price: '700 TL', 
            description: 'Süslü Fidoş',
            image: './images/fidos.webp'
        } ,
        
        
    ],  
              
    "yoresel": [
        { 
            name: 'Kavurma', 
            price: '360 TL', 
            description: 'Kavurma',
            image: './images/kavurma.jpg'
        },
        { 
            name: 'İçli Köfte', 
            price: '300 TL', 
            description: 'İçli köfte',
            image: './images/icli.jpg'
        },
        { 
            name: 'Harput Köfte', 
            price: '270 TL', 
            description: 'Harput köfte',
            image: './images/harput-kofte.jpg'
        },
        { 
            name: 'Bumbar', 
            price: '300 TL', 
            description: 'Bumbar',
            image: './images/mumbarson.webp'
        },
        { 
            name: 'Mantı', 
            price: '280 TL', 
            description: 'Mantı',
            image: './images/manti.jpg'
        },
        { 
            name: 'Ahıska Mantısı', 
            price: '290 TL', 
            description: 'Ahıska mantısı',
            image: './images/ahiska.jpg'
        },
        { 
            name: 'Ayranlı Köfte', 
            price: '230 TL', 
            description: 'Ayranlı köfte',
            image: './images/ayranlikofte.jpg'
        },
        { 
            name: 'Yaprak Sarma', 
            price: '260 TL', 
            description: 'Zeytinyağlı Yaprak sarma',
            image: './images/sarma.jpg'
        },
            { 
                name: 'Sırın', 
                price: '100 TL', 
                description: 'Sırın',
                image: './images/sirin.jpg'
            },
            
            
        ],
    firin: [
        { 
            name: 'Lahmacun', 
            price: '95TL',
            description: 'Lahmacun',
            image: './images/lahmacun.jpg'
        },
        { 
            name: 'Peymacun',
            price: '105 TL', 
            description: 'Peynirli Lahmacun',
            image: './images/peymacun.jpg'
        },
        { 
            name: 'Fındık Lahmacun',
            price: '40 TL', 
            description: 'Fındık Lahmacun',
            image: './images/findiklahmacun.jpg'
        },
        { 
            name: 'Etli Ekmek', 
            price: '290 TL', 
            description: 'Etli Ekmek',
            image: './images/etliekmek.webp'
        },
        { 
            name: 'Karışık Pide', 
            price: '310 TL', 
            description: 'Kuşbaşı, kıyma, kaşar.',
            image: './images/karisik-pide.jpg'
        },
        { 
            name: 'Kuşbaşılı Pide', 
            price: '290 TL', 
            description: '*Kuşbaşılı Pide',
            image: './images/kusbasili.jpg'
        },
        { 
            name: 'Kuşbaşılı Kaşarlı Pide', 
            price: '310 TL', 
            description: 'Kuşbaşı Kaşarlı Pide',
            image: './images/kuskas.jpg'
        },
        { 
            name: 'Kıymalı Pide', 
            price: '290 TL', 
            description: 'Kıymalı Kaşarlı Pide =310 TL',
            image: './images/kiymalii.jpg'
        },
        { 
            name: 'Kavurmalı Pide', 
            price: '360 TL', 
            description: 'Kavurmalı Pide',
            image: './images/kavurmali-pide.jpg'
        },
        { 
            name: 'Dönerli Pide', 
            price: '290 TL', 
            description: 'Dönerli Pide',
            image: './images/donerli.jpg'
        },
        { 
            name: 'Sucuklu Pide', 
            price: '290 TL', 
            description: 'Sucuklu Pide',
            image: './images/sucuklu.jpg'
        },
        { 
            name: 'Kaşarlı Pide', 
            price: '290 TL', 
            description: 'Kaşarlı Pide',
            image: './images/kasarlı.jpg'
        }
    ],
    baliklar: [
        { 
            name: 'Alabalık Izgara', 
            price: '290 TL', 
            description: 'Alabalık izgara',
            image: './images/alabalıkızgara.jpg'
        },
        { 
            name: 'Alabalık Kızartma', 
            price: '290 TL', 
            description: 'Alabalık kızartma',
            image: './images/kızartma.jpg'
        },
        { 
            name: 'Kiremitte Kaşarlı Alabalık', 
            price: '320 TL', 
            description: 'Kiremitte kaşarlı alabalık',
            image: './images/kiremit.jpg'
        },
        
    ],
    mezeler: [
        { 
            name: 'Çiğköfte', 
            price: '120 TL', 
            description: 'Çiğköfte',
            image: './images/ckofte.jpg'
        },{ 
            name: 'Mevsim Salata', 
            price: '50 TL', 
            description: 'Mevsim salata',
            image: './images/mevsim.jpg'
        },{ 
            name: 'Çoban Salata', 
            price: '60 TL', 
            description: 'Çoban salata',
            image: './images/coban.jpg'
        },{ 
            name: 'Patlıcan Söğürtme', 
            price: '50 TL', 
            description: 'Patlıcan söğürtme',
            image: './images/sogurtme.jpg'
        },
        { 
            name: 'Acılı Ezme', 
            price: '45 TL', 
            description: 'Acılı ezme',
            image: './images/acili-ezme.jpg'
        },
        { 
            name: 'Şakşuka', 
            price: '45 TL', 
            description: 'Şakşuka',
            image: './images/saksuka.jpg'
        },
        { 
            name: 'Yoğurtlu Meze', 
            price: '45 TL', 
            description: 'Yoğurtlu meze',
            image: './images/yogurtlumeze.jpg'
        },
        
    ],
    tatlilar: [
        { 
            name: 'Gırh Gatlı Baklava', 
            price: '120 TL', 
            description: 'Gırh gatlı baklava',
            image: './images/girh.jpg'
        },
        { 
            name: 'Dolanger', 
            price: '100 TL', 
            description: 'Dolanger',
            image: './images/dolanger.jpg'
        },{ 
            name: 'Kadayıf', 
            price: '100 TL', 
            description: 'Cevizli Kadayıf',
            image: './images/kadayıf.jpg'
        },
        { 
            name: 'Baklava', 
            price: '120 TL', 
            description: 'Cevizli Baklava',
            image: './images/cbaklava.jpg'
        },
        { 
            name: 'Şöbiyet', 
            price: '100 TL', 
            description: 'Şöbiyet',
            image: './images/sobiyet.jpg'
        },
        { 
            name: 'Fıstıklı Baklava', 
            price: '140 TL', 
            description: 'Fıstıklı baklava',
            image: './images/fbaklava.jpg'
        },
        { 
            name: 'Fıstık Sarma', 
            price: '150 TL', 
            description: 'Fıstık sarma',
            image: './images/fsarma.jpg'
        },
        { 
            name: 'Taş Ekmeği', 
            price: '100 TL', 
            description: 'Taş ekmeği',
            image: './images/tas-ekmegi.jpg'
        },   
        { 
            name: 'Peynirli Ekmek', 
            price: '180 TL', 
            description: 'Peynirli ekmek',
            image: './images/peynirli.jpg'
        },
    ],

    icecekler: [
        { 
            name: 'Su', 
            price: '10 TL', 
            description: '*1.5 L Su = 30 TL',
            image: './images/su.webp'
        },
        { 
            name: 'Ayran', 
            price: '25 TL', 
            description: 'Ayran',
            image: './images/ayran.jpg'
        },
        { 
            name: 'Kola', 
            price: '45 TL', 
            description: 'Kola',
            image: './images/kola.jpg'
        },
        { 
            name: 'Fanta', 
            price: '45 TL', 
            description: 'Fanta',
            image: './images/FANTA.webp'
        },
        { 
            name: 'Sprite', 
            price: '45 TL', 
            description: 'Sprite',
            image: './images/sprite.jpg'
        },
        { 
            name: 'Şalgam', 
            price: '35 TL', 
            description: 'Acılı/Acısız Şalgam',
            image: './images/salgam.jpg'
        },
        { 
            name: 'Meyve Suyu', 
            price: '45 TL', 
            description: 'Karışık, Şeftali, Portakal, Vişne, Kayısı.',
            image: './images/meysu.jpg'
        },
        { 
            name: 'Soda', 
            price: '20 TL', 
            description: 'Sade/Meyveli',
            image: './images/soda.webp'
        },
        { 
            name: 'Türk Kahvesi', 
            price: '35 TL', 
            description: 'Geleneksel Türk kahvesi',
            image: './images/kahve.jpg'
        },
        
    ]
};

// Function to create menu items
function createMenuItem(item) {
    return `
        <div class="menu-item">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p class="description">${item.description}</p>
                <p class="price">${item.price}</p>
            </div>
        </div>
    `;
}

// Function to display menu items
function displayMenuItems(category = 'all') {
    const menuItemsContainer = document.querySelector('.menu-items');
    menuItemsContainer.innerHTML = '';

    if (category === 'all') {
        Object.values(menuData).flat().forEach(item => {
            menuItemsContainer.innerHTML += createMenuItem(item);
        });
    } else {
        menuData[category].forEach(item => {
            menuItemsContainer.innerHTML += createMenuItem(item);
        });
    }
}

// Event listeners for category buttons
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        // Remove active class from all buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        e.target.classList.add('active');
        
        // Display menu items for selected category
        const category = e.target.dataset.category;
        displayMenuItems(category);
    });
});

// Initialize with all menu items
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems();
});

// Smooth scroll for logo click
document.querySelector('.logo-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('click', function(e) {
    // Sadece yemek fotoğrafına tıklanırsa çalışsın
    if (e.target.closest('.menu-item-image img')) {
        const img = e.target;
        // Modalı oluştur
        const overlay = document.createElement('div');
        overlay.className = 'image-modal-overlay';
        overlay.innerHTML = `
            <div class="image-modal-content">
                <button class="image-modal-close" aria-label="Kapat">&times;</button>
                <img src="${img.src}" alt="${img.alt}">
            </div>
        `;
        document.body.appendChild(overlay);

        // Kapatma butonu ve arka plana tıklama ile modalı kapat
        overlay.querySelector('.image-modal-close').onclick = () => overlay.remove();
        overlay.onclick = (event) => {
            if (event.target === overlay) overlay.remove();
        };
    }
}); 