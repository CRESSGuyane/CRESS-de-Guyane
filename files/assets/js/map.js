L.mapbox.accessToken = 'pk.eyJ1IjoiYXNndXlhbmUiLCJhIjoiY2tpbmIxdzl2MDc4NzJzb3k4a2lxY2M5NSJ9.02ewvf6xB29Rh4aaRm2ncw';
const geojson = [{
    'type': 'FeatureCollection',
    'features': [{
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.034084142948, 38.909671288923]
            },
            'properties': {
                'phoneFormatted': '(202) 234-7336',
                'phone': '2022347336',
                'address': '1471 P St NW',
                'city': 'Washington DC',
                'country': 'United States',
                'crossStreet': 'at 15th St NW',
                'postalCode': '20005',
                'tt': 'D.C.'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.049766, 38.900772]
            },
            'properties': {
                'phoneFormatted': '(202) 507-8357',
                'phone': '2025078357',
                'address': '2221 I St NW',
                'city': 'Washington DC',
                'country': 'United States',
                'crossStreet': 'at 22nd St NW',
                'postalCode': '20037',
                'tt': 'D.C.'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.043929, 38.910525]
            },
            'properties': {
                'phoneFormatted': '(202) 387-9338',
                'phone': '2023879338',
                'address': '1512 Connecticut Ave NW',
                'city': 'Washington DC',
                'country': 'United States',
                'crossStreet': 'at Dupont Circle',
                'postalCode': '20036',
                'tt': 'D.C.'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.0672, 38.90516896]
            },
            'properties': {
                'phoneFormatted': '(202) 337-9338',
                'phone': '2023379338',
                'address': '3333 M St NW',
                'city': 'Washington DC',
                'country': 'United States',
                'crossStreet': 'at 34th St NW',
                'postalCode': '20007',
                'tt': 'D.C.'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.002583742142, 38.887041080933]
            },
            'properties': {
                'phoneFormatted': '(202) 547-9338',
                'phone': '2025479338',
                'address': '221 Pennsylvania Ave SE',
                'city': 'Washington DC',
                'country': 'United States',
                'crossStreet': 'btwn 2nd & 3rd Sts. SE',
                'postalCode': '20003',
                'tt': 'D.C.'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-76.933492720127, 38.99225245786]
            },
            'properties': {
                'address': '8204 Baltimore Ave',
                'city': 'College Park',
                'country': 'United States',
                'postalCode': '20740',
                'tt': 'MD'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.097083330154, 38.980979]
            },
            'properties': {
                'phoneFormatted': '(301) 654-7336',
                'phone': '3016547336',
                'address': '4831 Bethesda Ave',
                'cc': 'US',
                'city': 'Bethesda',
                'country': 'United States',
                'postalCode': '20814',
                'tt': 'MD'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.359425054188, 38.958058116661]
            },
            'properties': {
                'phoneFormatted': '(571) 203-0082',
                'phone': '5712030082',
                'address': '11935 Democracy Dr',
                'city': 'Reston',
                'country': 'United States',
                'crossStreet': 'btw Explorer & Library',
                'postalCode': '20190',
                'tt': 'VA'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.10853099823, 38.880100922392]
            },
            'properties': {
                'phoneFormatted': '(703) 522-2016',
                'phone': '7035222016',
                'address': '4075 Wilson Blvd',
                'city': 'Arlington',
                'country': 'United States',
                'crossStreet': 'at N Randolph St.',
                'postalCode': '22203',
                'tt': 'VA'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.28784, 40.008008]
            },
            'properties': {
                'phoneFormatted': '(610) 642-9400',
                'phone': '6106429400',
                'address': '68 Coulter Ave',
                'city': 'Ardmore',
                'country': 'United States',
                'postalCode': '19003',
                'tt': 'PA'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.20121216774, 39.954030175164]
            },
            'properties': {
                'phoneFormatted': '(215) 386-1365',
                'phone': '2153861365',
                'address': '3925 Walnut St',
                'city': 'Philadelphia',
                'country': 'United States',
                'postalCode': '19104',
                'tt': 'PA'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.043959498405, 38.903883387232]
            },
            'properties': {
                'phoneFormatted': '(202) 331-3355',
                'phone': '2023313355',
                'address': '1901 L St. NW',
                'city': 'Washington DC',
                'country': 'United States',
                'crossStreet': 'at 19th St',
                'postalCode': '20036',
                'tt': 'D.C.'
            }
        }
    ]
}];


async function test() {
    let tt = await $.ajax({
        url: 'http://137.74.196.180:8055/items/fiches_entreprises/?fields=*,*.*.*&filter[coordonnees][_ncontains]=null',
        type: 'GET',
        success: function (data) {
            
        }
    }).then(function (data) {

        
        data = data.data
        // console.log(data)
        let data_maped = [{
            type: 'FeatureCollection',
            features: []
        }];

        
        for (const index in data) {
            // data[index].coordonnees = JSON.parse(data[index].coordonnees);
            if(data[index] == null){
                console.log('tay be izany le')
            }
            data_maped[0].features.push(
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: JSON.parse(data[index].coordonnees)
                    },
                    properties: data[index]
                }  
            )
        }

        return data_maped
    })

    console.log(tt)

    const map = L.mapbox
    .map('map')
    // lng":-52.323980689627035,"lat":4.938287272510209
    .setView([4.938287272510209, -52.323980689627035], 16)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v12'));

    map.scrollWheelZoom.disable();

    const listings = document.getElementById('listings');
    let locations = L.mapbox.featureLayer().addTo(map);

    locations.setGeoJSON(tt);

    function setActive(el) {
    const siblings = listings.getElementsByTagName('div');
    for (const sibling of siblings) {
        sibling.classList.remove('active');
    }

    el.classList.add('active');
    }

    locations.eachLayer((locale) => {
    // Shorten locale.feature.properties to just `prop` so we're not
    // writing this long form over and over again.
    const prop = locale.feature.properties;

    // Each marker on the map.
    let popup = `
    <h3>${prop.nom_structure}</h3>
    <div>${prop.adresse_siege}</div>`;

    const listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';

    const link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';

    link.innerHTML = `${prop.nom_structure}`;
    if (prop.sigle_structure) {
        link.innerHTML += `
        <br /><small class="badge badge-primary quiet">${prop.statut_juridique_structure.statut}</small>
        `;
        popup += `<br /><small class="quiet">${prop.nom_structure} dfgdf</small>`;
    }

    if (prop.sigle_structure) {
        // link.innerHTML += `
        // <br /><small class="badge badge-primary quiet">${prop.statut_juridique_structure.statut}</small>
        // `;
    }

    const details = listing.appendChild(document.createElement('div'));
    details.innerHTML = `${prop.city}`;
    if (prop.phone) {
        details.innerHTML += ` Site web: ${prop.website_structure}`;
    }

    details.innerHTML = `${prop.city}`;
    if (prop.phone) {
        details.innerHTML += ` &middot; sdfsd ${prop.phoneFormatted}`;
    }

    link.onclick = function() {
        setActive(listing);

        // When a menu item is clicked, animate the map to center
        // its associated locale and open its popup.
        map.setView(locale.getLatLng(), 16);
        locale.openPopup();
        return false;
    };

    // Marker interaction
    locale.on('click', () => {
        // 1. center the map on the selected marker.
        map.panTo(locale.getLatLng());

        // 2. Set active the markers associated listing.
        setActive(listing);
    });

    locale.bindPopup(popup);

    locale.setIcon(
        L.icon({
            iconUrl: 'assets/images/marker.png',
            iconSize: [30, 46],
            iconAnchor: [28, 28],
            popupAnchor: [0, -34]
        })
    );
    });

    map.on('idle',function(){
        map.resize()
    })
}

test()



function getValuse(data){
    a = data
    console.log(data)
}



