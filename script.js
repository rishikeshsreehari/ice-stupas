// Debug logs
console.log('Script starting...');

// Initialize map centered on Ladakh
const map = L.map('map').setView([34.1526, 77.5771], 8);
console.log('Map initialized:', map);

// Add custom tile layer
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

const customIcon = L.divIcon({
    className: 'marker',
    iconSize: [32, 32]
});

// Updated locations data with all information
const locations = [
    {
        position: [34.83568449, 77.47910294],
        title: "Ayee Village",
        description: "We have successfully installed our automation system in Ayee village, located in Nubra Valley. Three fountains are now spraying water, and with the recent cold temperatures, ice has finally started to form. Ayee has approximately 40 households that rely on spring water for their needs. For the past five winters, the village has been building ice reservoirs, led by the Youth Association. Last winter, we connected with the community and conducted a preliminary site survey. During our visit, we observed their ice structure and discussed the challenges they faced during the construction process and potential improvements. This year, the project is funded by @nabardonline, and our entire team traveled to Ayee to set up the system. We also conducted drone surveys, taught the villagers how to operate the system, and addressed any issues on-site.",
        stats: {
            households: "30+",
            distance: "149 kms",
            waterSources: "Chumik, Jal Jeevan, Chamak Karpo Chasma"
        },
        image: "images/ayee.jpg"
    },
    {
        position: [33.92229758, 77.88109547],
        title: "Igoo Village",
        description: "Our primary motive this winter was to implement a scalable and easy to maintain ice reservoir that can function autonomously in any remote environment. Contrary to expectations, this meant we had to pick our pilot sites so that they were representative of some of the hardest locations to build ice reservoirs worldwide. Igoo was one such location. More than 2 months have passed since our automation system began constructing Igoo's ice reservoir. Our expectation was that our automated ice reservoir will spray to freeze water only when weather conditions are ideal and would keep the pipeline free of water during the rest of the time. However, for only half this duration, the automated ice reservoir was operating as expected. The rest of the days it was either being manually operated or the fountain pipeline system was frozen.",
        stats: {
            households: "200+",
            distance: "49 kms",
            waterSources: "Chumik, Jal Jeevan"
        },
        image: "images/igoo.jpg"
    },
    {
        position: [34.22027778, 76.89722222],
        title: "Ursi Village",
        description: "Ursi is a small village located in the mountains between the Zanskar and Indus rivers. With around 20 households situated at an altitude of 3,700 meters, the village relies on spring water for sustenance. However, residents have been facing significant water shortages at the beginning of the agricultural season. Many locals have reported that these issues have developed over the past two decades, negatively impacting their livelihoods. To address these challenges, the community began constructing ice reservoirs a few years ago, achieving moderate success. This year, with funding from @mercycorps, we have installed our automated system in Ursi. The system is now operational and successfully constructing ice during the cold weather periods.",
        stats: {
            households: "19+",
            distance: "121 kms",
            waterSources: "Chumik"
        },
        image: "images/ursi.jpg"
    },
    {
        position: [33.7639167, 77.8610556],
        title: "Tunah Village",
        description: "Information about Tunah village's ice reservoir project coming soon.",
        stats: {
            households: "7+",
            distance: "56 kms",
            waterSources: "Chumik"
        },
        image: "images/tunah.jpg"
    },
    {
        position: [34.06350485, 77.82494797],
        title: "Sakti Village",
        description: "Sakti is a large village with approximately 800 households, spread across the valleys of Chang La and Wari La Passes. The residents have traditionally relied on ice terraces for their agricultural water needs, particularly from the Wari La side, which features several layers of stone walls built down the valley. This year, with the assistance of the Irrigation and Flood Control Department, we have established an automated ice reservoir system, which was inaugurated last week.",
        stats: {
            households: "800+",
            distance: "47 kms",
            waterSources: "Chumik"
        },
        image: "images/sakti.jpg"
    },
    {
        position: [34.12639019, 77.70943888],
        title: "Stakmo Village",
        description: "Details about Stakmo village's ice reservoir project coming soon.",
        stats: {
            households: "-",
            distance: "21 kms",
            waterSources: "Chumik"
        },
        image: "images/stakmo.jpg"
    },
    {
        position: [34.31777778, 77.23805556],
        title: "Likir Village",
        description: "Likir, a village of around 200 households located in Sham Valley, is known for its apricots. At the start of the agricultural season, the village faces a seasonal water shortage, which mainly affects agrarian productivity due to the unpredictability of winter precipitation. In a collaboration with Leh's Irrigation and Flood Control Department, we have successfully installed our automated ice reservoir system in Likir and will continue to monitor it over the next several months.",
        stats: {
            households: "200",
            distance: "49 kms",
            waterSources: "Chumik Setap, Chumik Stajurma, Jal Jeevan"
        },
        image: "images/likir.jpg"
    }
];

// Add markers
locations.forEach(location => {
    const marker = L.marker(location.position, {icon: customIcon}).addTo(map);
    
    // First click zooms in
    let isZoomed = false;
    
    marker.on('click', () => {
        if (!isZoomed) {
            // First click only zooms
            map.flyTo(location.position, 12, {
                duration: 2,
                easeLinearity: 0.25
            });
            isZoomed = true;
        } else {
            // Second click opens sidebar
            updateSidebar(location);
        }
    });
});

function updateSidebar(location) {
    const sidebarContent = document.querySelector('.sidebar-content');
    
    // Create HTML for the village image - only if image path exists
    let imageHTML = '';
    if (location.image) {
        imageHTML = `
            <div class="village-image">
                <img src="${location.image}" alt="${location.title}">
            </div>
        `;
    }
    
    // Create HTML for the village data points - only if stats exist
    let statsHTML = '';
    if (location.stats) {
        statsHTML = `
            <div class="village-stats">
                ${location.stats.households ? `
                <div class="stat-item">
                    <div class="stat-icon"><i class="fas fa-home"></i></div>
                    <div class="stat-content">
                        <div class="stat-label">Households</div>
                        <div class="stat-value">${location.stats.households}</div>
                    </div>
                </div>
                ` : ''}
                
                ${location.stats.distance ? `
                <div class="stat-item">
                    <div class="stat-icon"><i class="fas fa-route"></i></div>
                    <div class="stat-content">
                        <div class="stat-label">Distance from Leh</div>
                        <div class="stat-value">${location.stats.distance}</div>
                    </div>
                </div>
                ` : ''}
                
                ${location.stats.waterSources ? `
                <div class="stat-item">
                    <div class="stat-icon"><i class="fas fa-tint"></i></div>
                    <div class="stat-content">
                        <div class="stat-label">Water Sources</div>
                        <div class="stat-value">${location.stats.waterSources}</div>
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }
    
    sidebarContent.innerHTML = `
        <div class="location-info">
            <h2>${location.title}</h2>
            ${imageHTML}
            <p>${location.description || 'No description available'}</p>
            ${statsHTML}
        </div>
    `;
    
    document.querySelector('.sidebar').classList.add('active');
    // Hide left sidebar when marker is clicked
    leftSidebar.classList.remove('active');
}

// Close sidebar
document.querySelector('.close-sidebar').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.remove('active');
});

// Left sidebar toggle with button visibility
const leftSidebar = document.querySelector('.left-sidebar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
    leftSidebar.classList.toggle('active');
});

// Share functions
function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out this interactive map of ice reservoir projects in Ladakh villages!');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
}

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

// Add resize handler for map
window.addEventListener('resize', () => {
    map.invalidateSize();
});

// Force a map size recalculation after small delay
setTimeout(() => {
    map.invalidateSize();
    console.log('Map size recalculated');
}, 100);

// Show left sidebar on page load after a small delay
window.addEventListener('load', () => {
    setTimeout(() => {
        leftSidebar.classList.add('active');
    }, 500);
});