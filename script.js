// Debug logs
console.log('Script starting...');

// Initialize map centered on India
const map = L.map('map').setView([23.5937, 78.9629], 4);
console.log('Map initialized:', map);

// Add custom tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Custom icon
const customIcon = L.divIcon({
    className: 'marker',
    iconSize: [32, 32]
});

// Sample data with Ladakh locations
const locations = [
    {
        position: [34.1526, 77.5771],
        title: "Leh Ice Stupa",
        description: "The first Ice Stupa project in Leh, providing essential water to local farmers during the crucial spring season. This innovative structure has revolutionized water conservation in the region.",
        image: "1.jpg",
        stats: {
            height: "40 meters",
            capacity: "1,000,000 liters",
            beneficiaries: "200 households",
            yearEstablished: "2014"
        }
    },
    {
        position: [34.2859, 77.6057],
        title: "Phyang Ice Stupa",
        description: "Located near Phyang Monastery, this Ice Stupa supports both the monastery's needs and local agricultural activities. It has become a model for sustainable water management.",
        image: "1.jpg",
        stats: {
            height: "35 meters",
            capacity: "800,000 liters",
            beneficiaries: "150 households",
            yearEstablished: "2015"
        }
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
    sidebarContent.innerHTML = `
        <div class="location-info">
            <h2>${location.title}</h2>
            
            <img src="${location.image}" alt="${location.title}">
            <p>${location.description}</p>
            
            <div class="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/gvjJ39s53rk"
                    title="Ice Stupa Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            
            <div class="stats-box">
                <h3>Project Statistics</h3>
                <p><strong>Height:</strong> <span>${location.stats.height}</span></p>
                <p><strong>Water Capacity:</strong> <span>${location.stats.capacity}</span></p>
                <p><strong>Beneficiaries:</strong> <span>${location.stats.beneficiaries}</span></p>
                <p><strong>Established:</strong> <span>${location.stats.yearEstablished}</span></p>
            </div>
        </div>
    `;
    document.querySelector('.sidebar').classList.add('active');
}

// Close sidebar
document.querySelector('.close-sidebar').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.remove('active');
});

// Add resize handler for map
window.addEventListener('resize', () => {
    map.invalidateSize();
});

// Force a map size recalculation after small delay
setTimeout(() => {
    map.invalidateSize();
    console.log('Map size recalculated');
}, 100);