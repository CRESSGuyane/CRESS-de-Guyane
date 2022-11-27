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

let data = [
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
]

const a = [{
    'type': 'FeatureCollection',
    'features': [{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [-77.10853099823, 38.880100922392]
        },
        'properties': {
            "id": 1,
            "sigle_structure": null,
            "nom_structure": "Herphie Service",
            "interlocuteur_structure": "Alexandre HERLOUNE",
            "poste_interlocuteur": "Responsable",
            "email_interlocuteur": "herlounealexandre746@gmail.com ",
            "adresse_siege": "Résidence Novapark 3 - Bât. J - 97300 Cayenne",
            "tel_interlocuteur": "0694917737",
            "website_structure": null,
            "social_media_structure": null,
            "statut_juridique_structure": 5,
            "effectif": 1,
            "description_structure": "<p>Service &agrave; la personne consistant &agrave; l'aide au quotidien de familles en situation de fragilit&eacute;</p>",
            "logo_structure": null,
            "membre_cress": true,
            "adherent_cress": true,
            "partner_cress": true,
            "domaine_activite_structure": [
                1,
                2
            ],
            "epci_structure": [
                1
            ],
            "volet_intervention_structure": [
                1
            ],
            "commune_intervention_structure": [
                1
            ]
        }
    }]
}];



// [
//     {
//         "id": 1,
//         "sigle_structure": null,
//         "nom_structure": "Herphie Service",
//         "interlocuteur_structure": "Alexandre HERLOUNE",
//         "poste_interlocuteur": "Responsable",
//         "email_interlocuteur": "herlounealexandre746@gmail.com ",
//         "adresse_siege": "Résidence Novapark 3 - Bât. J - 97300 Cayenne",
//         "tel_interlocuteur": "0694917737",
//         "website_structure": null,
//         "social_media_structure": null,
//         "statut_juridique_structure": 5,
//         "effectif": 1,
//         "description_structure": "<p>Service &agrave; la personne consistant &agrave; l'aide au quotidien de familles en situation de fragilit&eacute;</p>",
//         "logo_structure": null,
//         "membre_cress": true,
//         "adherent_cress": true,
//         "partner_cress": true,
//         "domaine_activite_structure": [
//             1,
//             2
//         ],
//         "epci_structure": [
//             1
//         ],
//         "volet_intervention_structure": [
//             1
//         ],
//         "commune_intervention_structure": [
//             1
//         ]
//     },
//     {
//         "id": 2,
//         "sigle_structure": null,
//         "nom_structure": "Coorace Guyane",
//         "interlocuteur_structure": "Frédérique MADELAINE",
//         "poste_interlocuteur": null,
//         "email_interlocuteur": null,
//         "adresse_siege": "1, rue du Docteur Barrat - 97300 Cayenne",
//         "tel_interlocuteur": "0694260284",
//         "website_structure": "insertion-guyane.com",
//         "social_media_structure": [
//             {}
//         ],
//         "statut_juridique_structure": 1,
//         "effectif": null,
//         "description_structure": "<p>Coorace Guyane a &eacute;t&eacute; cr&eacute;&eacute;e le mercredi 22 d&eacute;cembre dernier lors de son Assembl&eacute;e G&eacute;n&eacute;rale&nbsp;constitutive.</p>\n<p>Apr&egrave;s la cr&eacute;ation de Coorace Guadeloupe en mai dernier, cela marque le dynamisme du r&eacute;seau dans les Outre-Mer, fix&eacute; comme une priorit&eacute; par le Conseil d'administration du r&eacute;seau d&egrave;s&nbsp;2018.</p>\n<p>Coorace Guyane devient la 14&egrave;me d&eacute;l&eacute;gation r&eacute;gionale de la F&eacute;d&eacute;ration&nbsp;Coorace.</p>\n<p>Depuis 2018, Coorace a amorc&eacute; diff&eacute;rents travaux en Guyane. La r&eacute;alisation d&rsquo;un diagnostic du champ de l&rsquo;Insertion par l&rsquo;activit&eacute; &eacute;conomique (<span class=\"caps\">IAE</span>) sur le territoire (&eacute;tudes, interviews, &eacute;tats des lieux) a permis d&rsquo;amorcer un certain nombre d&rsquo;actions de professionnalisation. Ainsi, une offre de services sur-mesure pour r&eacute;pondre aux besoins des entreprises d&rsquo;utilit&eacute; sociale guyanaises a d&eacute;j&agrave; &eacute;t&eacute; mise en &oelig;uvre sur le territoire&nbsp;:</p>\n<p>✓ accompagnements divers &agrave; la professionnalisation et &agrave; la structuration, notamment &agrave; la structuration d&rsquo;un Groupe &eacute;conomique solidaire (<span class=\"caps\">GES</span>), aux th&eacute;matiques de la d&eacute;marche qualit&eacute;, aux m&eacute;thodologies d&rsquo;accompagnement&nbsp;socio-professionnel&hellip;</p>\n<p>✓ d&eacute;veloppement des comp&eacute;tences des&nbsp;<span class=\"caps\">SIAE</span>, avec la mise en &oelig;uvre de formations diverses destin&eacute;es aux salari&eacute;s permanents de l&rsquo;<span class=\"caps\">IAE</span>,</p>\n<p>✓ amor&ccedil;age d&rsquo;actions de mise en r&eacute;seau des&nbsp;acteurs,</p>\n<p>✓ communication g&eacute;n&eacute;rale des&nbsp;<span class=\"caps\">SIAE</span>&nbsp;via notamment l&rsquo;animation du portail de l&rsquo;insertion en Guyane :&nbsp;<a class=\"ext\" href=\"http://www.insertion-guyane.com/\" target=\"_blank\" rel=\"noopener\">http://www.insertion-guyane.com/</a></p>\n<p>La volont&eacute; du Conseil d&rsquo;administration et des acteurs a &eacute;t&eacute; de renforcer l&rsquo;ind&eacute;pendance de Coorace en Guyane en autonomisant ses&nbsp;actions.</p>\n<p>Ainsi, la cr&eacute;ation de Coorace Guyane permet de cr&eacute;er un r&eacute;el collectif, acteur et garant de la mise en &oelig;uvre des actions&nbsp;localement.</p>",
//         "logo_structure": null,
//         "membre_cress": null,
//         "adherent_cress": null,
//         "partner_cress": null,
//         "domaine_activite_structure": [
//             3
//         ],
//         "epci_structure": [
//             2
//         ],
//         "volet_intervention_structure": [
//             2,
//             3,
//             4
//         ],
//         "commune_intervention_structure": [
//             2
//         ]
//     },
//     {
//         "id": 3,
//         "sigle_structure": null,
//         "nom_structure": "Ne Plus Jeter",
//         "interlocuteur_structure": "Mme LAMBLIN",
//         "poste_interlocuteur": null,
//         "email_interlocuteur": "neplusjeter@gmail.com",
//         "adresse_siege": "8 av. de la Liberté - 97300 Cayenne",
//         "tel_interlocuteur": "0694421314",
//         "website_structure": "https://neplusjeter.com/",
//         "social_media_structure": null,
//         "statut_juridique_structure": 1,
//         "effectif": null,
//         "description_structure": "<p>Ne Plus Jeter est un acteur du recyclage, de l'&eacute;conomie circulaire et de l'&eacute;ducation populaire au d&eacute;veloppement durable et &agrave; l'environnement en Guyane. Gr&acirc;ce &agrave; son atelier chantier d'insertion elle propose dans sa boutique des biens issus de l'&eacute;conomie circulaire &agrave; prix social et sensibilise la population Guyanaise &agrave; moins jeter.</p>",
//         "logo_structure": null,
//         "membre_cress": null,
//         "adherent_cress": null,
//         "partner_cress": null,
//         "domaine_activite_structure": [
//             4,
//             5,
//             6
//         ],
//         "epci_structure": [
//             3,
//             4
//         ],
//         "volet_intervention_structure": [
//             5,
//             6,
//             7,
//             8,
//             9,
//             10,
//             11
//         ],
//         "commune_intervention_structure": [
//             3
//         ]
//     },

// ]


const map = L.mapbox
    .map('map')
    .setView([38.909671288923, -77.034084142948], 16)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v12'));

map.scrollWheelZoom.disable();

const listings = document.getElementById('listings');
const locations = L.mapbox.featureLayer().addTo(map);

locations.setGeoJSON(a);

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
    let popup = `<h3>Sweetgreen</h3><div>${prop.address}`;

    const listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';

    const link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';

    link.innerHTML = `${prop.address}`;
    if (prop.crossStreet) {
        link.innerHTML += `<br /><small class="quiet">${prop.crossStreet}</small>`;
        popup += `<br /><small class="quiet">${prop.crossStreet}</small>`;
    }

    const details = listing.appendChild(document.createElement('div'));
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