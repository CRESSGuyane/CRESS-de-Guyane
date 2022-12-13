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
    ]
}];


async function test(data) {

    console.log("Data: ", data)
    // let tt = await $.ajax({
    //     url: url,
    //     type: 'GET',
    //     beforeSend: function (request) {
    //         request.withCredentials = false;
    //     },
    //     success: function (data) {
    //         console.log("toky right")
    //     }
    // }).then(function (data) {

        
    //     data = data.data
    //     // console.log(data)
    //     let data_maped = [{
    //         type: 'FeatureCollection',
    //         features: []
    //     }];

        
    //     for (const index in data) {
    //         // data[index].coordonnees = JSON.parse(data[index].coordonnees);
    //         if(data[index] == null){
    //             console.log('tay be izany le')
    //         }
    //         data_maped[0].features.push(
    //             {
    //                 type: 'Feature',
    //                 geometry: {
    //                     type: 'Point',
    //                     coordinates: JSON.parse(data[index].coordonnees)
    //                 },
    //                 properties: data[index]
    //             }  
    //         )
    //     }

    //     return data_maped
    // })

    // console.log(tt)

    // const map = L.mapbox
    // .map('map')
    // // lng":-52.323980689627035,"lat":4.938287272510209
    // .setView([4.938287272510209, -52.323980689627035], 16)
    // .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v12'));

    // map.scrollWheelZoom.disable();

    // const listings = document.getElementById('listings');
    // let locations = L.mapbox.featureLayer().addTo(map);

    // locations.setGeoJSON(tt);

    // function setActive(el) {
    //     const siblings = listings.getElementsByTagName('div');
    //     for (const sibling of siblings) {
    //         sibling.classList.remove('active');
    //     }

    //     el.classList.add('active');
    // }

    //     locations.eachLayer((locale) => {
    //     // Shorten locale.feature.properties to just `prop` so we're not
    //     // writing this long form over and over again.
    //     const prop = locale.feature.properties;

    //     // Each marker on the map.
    //     let popup = `
    //     <h3>${prop.nom_structure}</h3>
    //     <div>${prop.adresse_siege}</div>`;

    //     const listing = listings.appendChild(document.createElement('div'));
    //     listing.className = 'item';

    //     const link = listing.appendChild(document.createElement('a'));
    //     link.href = '#';
    //     link.className = 'title';

    //     link.innerHTML = `${prop.nom_structure}`;
        

        

    //     const details = listing.appendChild(document.createElement('div'));

    //     let element_annuaire_details = '<div>'

    //         element_annuaire_details = '<div class="border border-danger my-2">';
    //         if (prop.adresse_siege) {
    //             link.innerHTML += `
    //                 <br /><small class="quiet"><i class="fa fa-map-marker-alt"></i> ${prop.adresse_siege}</small>
    //             `;
    //         }
    //             if (prop.sigle_structure) {
    //                 link.innerHTML += `
    //                 <br /><small class="badge badge-primary quiet">${prop.statut_juridique_structure.statut}</small>
    //                 `;
    //                 popup += `<br /><small class="quiet">${prop.nom_structure}</small>`;
    //             }
    //         element_annuaire_details += '</div>';

    //         element_annuaire_details = '<div class="border border-light my-2 d-flex flex-row justify-content-between align-items-center">';
    //             if (prop.website_structure) {
    //                 element_annuaire_details += `
    //                     <a class="py-0 px-2 btn btn-sm btn-outline-secondary" href="${prop.website_structure}"><i class="fa fa-globe"></i> Site web</a>
    //                 `;
    //             }

    //             // if (prop.sigle_structure) {
    //             //     element_annuaire_details += `<small class="badge badge-danger quiet">${prop.effectif.effectif} employé(s)</small>
    //             //     `;
    //             // }
    //         element_annuaire_details += '</div>';
    //     element_annuaire_details += '</div>';


    //     details.innerHTML = element_annuaire_details

    //     // details.innerHTML = `${prop.city}`;
    //     // if (prop.phone) {
    //     //     details.innerHTML += ` &middot; sdfsd ${prop.phoneFormatted}`;
    //     // }

    //     link.onclick = function() {
    //         setActive(listing);

    //         // When a menu item is clicked, animate the map to center
    //         // its associated locale and open its popup.
    //         map.setView(locale.getLatLng(), 16);
    //         locale.openPopup();
    //         return false;
    //     };

    //     // Marker interaction
    //     locale.on('click', () => {
    //         // 1. center the map on the selected marker.
    //         map.panTo(locale.getLatLng());

    //         // 2. Set active the markers associated listing.
    //         setActive(listing);
    //     });

    //     locale.bindPopup(popup);

    //     locale.setIcon(
    //         L.icon({
    //             iconUrl: 'assets/images/marker.png',
    //             iconSize: [30, 46],
    //             iconAnchor: [28, 28],
    //             popupAnchor: [0, -34]
    //         })
    //     );
    // });

    // map.on('idle',function(){
    //     map.resize()
    // })
}

let is_load = true


test_2()
async function test_2() {

    const map_overlay_loading = $('#overlay')

    

    // let url = 'http://137.74.196.180:8055/items/fiches_entreprises?fields=*,*.*.*&filter[coordonnees][_ncontains]=null'
    map_overlay_loading.fadeIn('easyOut')
    let tt = await entreprise_request({
        statut: "",
        domaine: "",
        commune: "",
        query: "",
    })

    tt = JSON.parse(tt)

    const map = L.mapbox
    .map('map')
    // lng":-52.323980689627035,"lat":4.938287272510209
    .setView([4.938287272510209, -52.323980689627035], 16)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v12'));

    map.scrollWheelZoom.disable();

    const listings = document.getElementById('listings');
    let locations = L.mapbox.featureLayer().addTo(map);

    locations.setGeoJSON(tt);

    let prop = null;
    let popup = '';
    let listing = null;
    let link = null;
    let details = null;

    let element_annuaire_details = ''

    locations.eachLayer((locale) => {
        prop = locale.feature.properties;
    
        // Each marker on the map.
        popup = `
        <h3>${prop.nom_structure}</h3>
        <div>${prop.adresse_siege}</div>`;

        listing = listings.appendChild(document.createElement('div'));
        listing.className = 'item';

        link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';

        link.innerHTML = `${prop.nom_structure}`;
        

        

        details = listing.appendChild(document.createElement('div'));

        element_annuaire_details = '<div>'

            element_annuaire_details = '<div class="border border-danger my-2">';
            if (prop.adresse_siege) {
                link.innerHTML += `
                    <br /><small class="quiet"><i class="fa fa-map-marker-alt"></i> ${prop.adresse_siege}</small>
                `;
            }
                if (prop.statut_juridique_structure) {
                    link.innerHTML += `
                    <br /><small class="badge badge-primary quiet">${prop.statut_juridique_structure.statut}</small>
                    `;
                    popup += `<br /><small class="quiet">${prop.nom_structure}</small>`;
                }
            element_annuaire_details += '</div>';

            element_annuaire_details = '<div class="border border-light my-2 d-flex flex-row justify-content-between align-items-center">';
                if (prop.website_structure) {
                    element_annuaire_details += `
                        <a class="py-0 px-2 btn btn-sm btn-outline-secondary" href="${prop.website_structure}"><i class="fa fa-globe"></i> Site web</a>
                    `;
                }

                // if (prop.effectif) {
                //     element_annuaire_details += `<small class="badge badge-danger quiet">${prop.effectif.effectif} employé(s)</small>
                //     `;
                // }
            element_annuaire_details += '</div>';
        element_annuaire_details += '</div>';


        details.innerHTML = element_annuaire_details

        // details.innerHTML = `${prop.city}`;
        // if (prop.phone) {
        //     details.innerHTML += ` &middot; sdfsd ${prop.phoneFormatted}`;
        // }

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


    // -------------------------------------------------------------------------
    // Set data on click
    // -------------------------------------------------------------------------
    statut = $(`#statut`)
    domaine = $(`#domaine`)
    commune = $(`#commune`)
    query = $(`#query`)
    recherche_btn = $(`#recherche_btn`)

    

    recherche_btn.click(async function () {
        const filter_val = {
            statut: statut.val(),
            domaine: domaine.val(),
            commune: commune.val(),
            query: query.val(),
        }

        console.log(filter_val)
    
        // let sorted_filter = []
    
        // for (const key in filter_val) {
        //     if(filter_val[key] != ''){
        //         sorted_filter.push(filter[key])
        //     }
        // }

        // let _query = ''

        // for (let i = 0; i < sorted_filter.length; i++) {
        //     _query += '&'+sorted_filter[i]
        // }

        // console.log('http://137.74.196.180:8055/items/fiches_entreprises?fields=*,*.*.*&filter[coordonnees][_ncontains]=null' + _query)

        // test('http://137.74.196.180:8055/items/fiches_entreprises?fields=*,*.*.*&filter[coordonnees][_ncontains]=null' + _query)

        // url = 'http://137.74.196.180:8055/items/fiches_entreprises?fields=*,*.*.*&filter[coordonnees][_ncontains]=null' + _query

        map_overlay_loading.fadeIn('easyOut')
        $('html,body').animate({scrollTop: $("#section_map").offset().top-100}, 'slow');

        tt = await entreprise_request(filter_val)

        locations.setGeoJSON(JSON.parse(tt));

        listings.replaceChildren()
        locations.eachLayer((locale) => {
            // Shorten locale.feature.properties to just `prop` so we're not
            // writing this long form over and over again.
            console.log('Layer reloaded')
            prop = locale.feature.properties;
    
            // Each marker on the map.
            popup = `
            <h3>${prop.nom_structure}</h3>
            <div>${prop.adresse_siege}</div>`;


    
            listing = listings.appendChild(document.createElement('div'));
            listing.className = 'item';
    
            link = listing.appendChild(document.createElement('a'));
            link.href = '#';
            link.className = 'title';
    
            link.innerHTML = `${prop.nom_structure}`;
            
    
            
    
            details = listing.appendChild(document.createElement('div'));
    
            element_annuaire_details = '<div>'
    
                element_annuaire_details = '<div class="border border-danger my-2">';
                if (prop.adresse_siege) {
                    link.innerHTML += `
                        <br /><small class="quiet"><i class="fa fa-map-marker-alt"></i> ${prop.adresse_siege}</small>
                    `;
                }
                    if (prop.statut_juridique_structure) {
                        link.innerHTML += `
                        <br /><small class="badge badge-primary quiet">${prop.statut_juridique_structure.statut}</small>
                        `;
                        popup += `<br /><small class="quiet">${prop.nom_structure}</small>`;
                    }
                element_annuaire_details += '</div>';
    
                element_annuaire_details = '<div class="border border-light my-2 d-flex flex-row justify-content-between align-items-center">';
                    if (prop.website_structure) {
                        element_annuaire_details += `
                            <a class="py-0 px-2 btn btn-sm btn-outline-secondary" href="${prop.website_structure}"><i class="fa fa-globe"></i> Site web</a>
                        `;
                    }
    
                    // if (prop.sigle_structure) {
                    //     element_annuaire_details += `<small class="badge badge-danger quiet">${prop.effectif.effectif} employé(s)</small>
                    //     `;
                    // }
                element_annuaire_details += '</div>';
            element_annuaire_details += '</div>';
    
    
            details.innerHTML = element_annuaire_details
    
            // details.innerHTML = `${prop.city}`;
            // if (prop.phone) {
            //     details.innerHTML += ` &middot; sdfsd ${prop.phoneFormatted}`;
            // }
    
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
    })
    // =========================================================================
    // 
    // =========================================================================

    function setActive(el) {
        const siblings = listings.getElementsByTagName('div');
        for (const sibling of siblings) {
            sibling.classList.remove('active');
        }

        el.classList.add('active');
    }

    

    map.on('idle',function(){
        map.resize()
    })
}

/**
 * 
 * @param {Array} data 
 * @param {Object} filter 
 * 
 * @return {Array}
 */
async function entreprise_request(filter = {}){
    let data = [{
		"id": 450,
		"sigle_structure": "AGAPA",
		"nom_structure": "ASSOCIATION GUYANAISE D AIDE AUX PERSONNES AGEES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "15 RUE LÉON GONTRAN DAMAS\n97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": "https://annuaire.action-sociale.org/?c=ass-guyan--d-aide-aux-personnes-agees-970300968&details=caracteristiques",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.333171,4.93944]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 451,
		"sigle_structure": "CAUE",
		"nom_structure": "CONS ARCHIT URBANISM ENVIRONNEMENT GUYAN",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "13, avenue Léopold Héder\n97300 CAYENNE\n",
		"tel_interlocuteur": null,
		"website_structure": "http://www.caue973.fr",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.332643,4.941329]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 452,
		"sigle_structure": "AUDEG",
		"nom_structure": "AGENCE D URBANISME ET DE DEVELOPPEMENT DE LA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "1 impasse Touloulous Cayenne, 97300, Guyane française",
		"tel_interlocuteur": null,
		"website_structure": "https://www.audeg.fr",
		"social_media_structure": null,
		"description_structure": " Horaires : \nmercredi\t08:00–12:30\njeudi\t08:00–17:00\nvendredi\t08:00–12:30\nsamedi\tFermé\ndimanche\tFermé\nlundi\t08:00–17:00\nmardi\t08:00–17:00",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.326586,4.933845]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 453,
		"sigle_structure": null,
		"nom_structure": "CLUB HIPPIQUE DE KOUROU",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "4 Av. Rosilvine, Kourou 97373, Guyane française",
		"tel_interlocuteur": null,
		"website_structure": "https://chkourou.fr",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.652567,5.175607]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 454,
		"sigle_structure": null,
		"nom_structure": "CONGES BTP -CAISSE DES ANTILLES ET DE LA GUYANE FRANCAISES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Immeuble CRCPBTP\nRocade de Baduel – BP 90842\n97339 Cayenne CEDEX",
		"tel_interlocuteur": null,
		"website_structure": "https://congesbtp-ag.fr/contact-guyane/",
		"social_media_structure": null,
		"description_structure": " du lundi au vendredi : 8h00 – 12h00 (Tout public)\nmardi et jeudi : 14h30 – 15h30 (Salariés)",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.320538,4.926993]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 455,
		"sigle_structure": "AREF",
		"nom_structure": "CONSTRUCTYS OPCA DE LA CONSTRUCTION ANTILLES GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": "https://www.constructys.fr/constructys-antilles-guyane/contacts/",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 456,
		"sigle_structure": null,
		"nom_structure": "CONGRE SOEURS ST PAUL CHARTRES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": " 2068 rte La Madeleine 97300 CAYENNE ",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.321064,4.915059]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 457,
		"sigle_structure": null,
		"nom_structure": "CONGRE SOEURS ST PAUL CHARTRES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Cacao bourg Cacao Cacao 97352 Roura ",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.469992,4.572183]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 458,
		"sigle_structure": null,
		"nom_structure": "ASSOC GEST ANNE MARIE JAVOUHEY",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Cité des Manguiers, Cayenne 97328, Guyane française",
		"tel_interlocuteur": null,
		"website_structure": "https://www.groupe-scolaire-javouhey.org",
		"social_media_structure": null,
		"description_structure": " Horaires : \nmercredi\tFermé\njeudi\t07:30–16:00\nvendredi\t07:30–16:00\nsamedi\tFermé\ndimanche\tFermé\nlundi\t07:30–16:00\nmardi\t07:30–16:00",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.323182,4.933933]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 459,
		"sigle_structure": "ASS L'EBENE",
		"nom_structure": "ASS L'EBENE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "CENTRE D'AIDE PAR LE TRAVAIL, \n909 RTE DE TROU BIRAN 97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "<p>Aide par le travail (8810C)</p>",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.305299,4.921627]",
		"domaine_activite_structure": [{
				"id": 7,
				"fiches_entreprises_id": {
					"id": 459,
					"sigle_structure": "ASS L'EBENE",
					"nom_structure": "ASS L'EBENE",
					"interlocuteur_structure": null,
					"poste_interlocuteur": null,
					"email_interlocuteur": null,
					"adresse_siege": "CENTRE D'AIDE PAR LE TRAVAIL, \n909 RTE DE TROU BIRAN 97300 CAYENNE",
					"tel_interlocuteur": null,
					"website_structure": null,
					"social_media_structure": null,
					"statut_juridique_structure": 1,
					"effectif": 5,
					"description_structure": "<p>Aide par le travail (8810C)</p>",
					"logo_structure": null,
					"membre_cress": null,
					"adherent_cress": null,
					"partner_cress": null,
					"coordonnees": "[-52.305299,4.921627]",
					"domaine_activite_structure": [
						7,
						8
					],
					"epci_structure": [],
					"volet_intervention_structure": [],
					"commune_intervention_structure": []
				},
				"domaines_activites_id": {
					"id": 1,
					"domaine": "Action sociale"
				}
			},
			{
				"id": 8,
				"fiches_entreprises_id": {
					"id": 459,
					"sigle_structure": "ASS L'EBENE",
					"nom_structure": "ASS L'EBENE",
					"interlocuteur_structure": null,
					"poste_interlocuteur": null,
					"email_interlocuteur": null,
					"adresse_siege": "CENTRE D'AIDE PAR LE TRAVAIL, \n909 RTE DE TROU BIRAN 97300 CAYENNE",
					"tel_interlocuteur": null,
					"website_structure": null,
					"social_media_structure": null,
					"statut_juridique_structure": 1,
					"effectif": 5,
					"description_structure": "<p>Aide par le travail (8810C)</p>",
					"logo_structure": null,
					"membre_cress": null,
					"adherent_cress": null,
					"partner_cress": null,
					"coordonnees": "[-52.305299,4.921627]",
					"domaine_activite_structure": [
						7,
						8
					],
					"epci_structure": [],
					"volet_intervention_structure": [],
					"commune_intervention_structure": []
				},
				"domaines_activites_id": {
					"id": 16,
					"domaine": "Insertion, réinsertion"
				}
			}
		],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 460,
		"sigle_structure": "ASS L'EBENE",
		"nom_structure": "ASS L'EBENE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "SCE POLYVAL SOUTIEN DOMICILE-AIDE MENAGE\n306 RTE DE RABAN 97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "\nActivités des infirmiers et des sages-femmes (8690D) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.314473,4.935459]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 461,
		"sigle_structure": "ASS L'EBENE",
		"nom_structure": "ASS L'EBENE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "EHPAD J SERGE GERANTE LD TROU BIRAN\n208 RTE DE BADUEL 97300 CAYENNE OU 18 Chem. de Trou Biran A Cabassou, Cayenne 97300, Guyane française ?",
		"tel_interlocuteur": null,
		"website_structure": "https://ebene973.org",
		"social_media_structure": null,
		"description_structure": "Hébergement médicalisé pour personnes âgées (8710A) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.305299,4.921627]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 462,
		"sigle_structure": "ASS L'EBENE",
		"nom_structure": "ASS L'EBENE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "MAISON D'ACCUEIL SPECIALISEE\n234 RTE DE TROU BIRAN 97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "\nHébergement médicalisé pour adultes handicapés et autre hébergement médicalisé (8710C) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.300176,4.929128]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 463,
		"sigle_structure": "ASS L'EBENE",
		"nom_structure": "ASS L'EBENE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "SCE DE SOINS INFIRMIERS A DOMICILE\n306 RTE DE RABAN 97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "\nActivités des infirmiers et des sages-femmes (8690D) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.314473,4.935459]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 464,
		"sigle_structure": "IEM",
		"nom_structure": "ADPEP GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": " 34 lot. Héliconias - route de Baduel, 97300, CAYENNE\n\n direction-pcce@lespep973.org\n\n MADELEINE Elsa\n\n 0594 28 60 09",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "\"\nAccueil ou accompagnement sans hébergement d'enfants handicapés (8891B)\" ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.326746,4.931118]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 465,
		"sigle_structure": "IEM",
		"nom_structure": "ADPEP GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": " Collège Paule BERTHELOT Village Javouheyà Mana, 97360, SAINT-LAURENT-DU-MARONI\n\n direction-poleouest@lespep973.org\n\n SAMOS Maéva\n\n 0594 27 93 97",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "\"\nAccueil ou accompagnement sans hébergement d'enfants handicapés (8891B)\" ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-54.020345,5.495692]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 466,
		"sigle_structure": "IEM",
		"nom_structure": "ADPEP GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "LOT DES CULTURES\n12 RUE TINAUT\n97320 S",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "\nAccueil ou accompagnement sans hébergement d'enfants handicapés (8891B) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-54.025235,5.504954]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 467,
		"sigle_structure": "IEM",
		"nom_structure": "ADPEP GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": " 2 les Hauts de la Chaumière, 97351, MATOURY\n\n direction-pcce@lespep973.org\n\n MADELEINE Elsa\n\n 0594 27 24 20",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "\nAccueil ou accompagnement sans hébergement d'enfants handicapés (8891B) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.35304,4.889558]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 468,
		"sigle_structure": "IEM",
		"nom_structure": "ADPEP GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse : PAE degrad des cannes Batiment GAD, Remire-Montjoly 97354, Guyane française\nTéléphone : +594 594 38 38 64",
		"tel_interlocuteur": null,
		"website_structure": "https://www.lespep973.org/",
		"social_media_structure": null,
		"description_structure": "\nAccueil ou accompagnement sans hébergement d'enfants handicapés (8891B) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.272833,4.856976]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 469,
		"sigle_structure": "IEM",
		"nom_structure": "ADPEP GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "ADPEP GUYANE – PAE DEGRAD DES CANNES BP 50161 - 97323 CAYENNE CEDEX\n\nTél : 0594 38 38 64\n\nE-mail : info@lespep973.org\n\nSite web : https://www.lespep973.org",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "\nAccueil ou accompagnement sans hébergement d'enfants handicapés (8891B) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.31787,4.905012]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 470,
		"sigle_structure": "IEM",
		"nom_structure": "ADPEP GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": " Lot. Les Cultures - 12 avenue Tinaut Désiré, 97320, SAINT-LAURENT-DU-MARONI\n\n direction-poleouest@lespep973.org\n\n SAMOS Maéva\n\n 0594 27 93 97",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "\nAccueil ou accompagnement sans hébergement d'enfants handicapés (8891B) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-54.025235,5.504954]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 471,
		"sigle_structure": "IEM",
		"nom_structure": "ADPEP GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": " Parc d'Activité Economique de Dégrad des Cannes - BP 50161, 97354, REMIRE MONTJOLY\n\n adpep-guyane@lespep973.org",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "\nAccueil ou accompagnement sans hébergement d'enfants handicapés (8891B) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.278504,4.86361]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 472,
		"sigle_structure": "IEM",
		"nom_structure": "ADPEP GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": " Parc d'Activité Economique de Dégrad des Cannes - BP 50161, 97354, REMIRE MONTJOLY\n\n sapad973@lespep973.org\n\n SMOCK Régine\n\n 0594 38 38 64",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "\nAccueil ou accompagnement sans hébergement d'enfants handicapés (8891B) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.278504,4.86361]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 473,
		"sigle_structure": "IEM",
		"nom_structure": "ADPEP GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": " 11 lot Amaryllis, 97354, REMIRE MONTJOLY\n\n direction-pcce@lespep973.org\n\n MADELEINE Elsa\n\n 0594 25 27 31",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "\nAccueil ou accompagnement sans hébergement d'enfants handicapés (8891B) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.275578,4.916842]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 474,
		"sigle_structure": "SOLIHA GUYANE",
		"nom_structure": "SOLIHA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "1897 route de MONTJOLY RÉMIRE MONTJOLY, 97354, Guyane française",
		"tel_interlocuteur": null,
		"website_structure": "https://www.solihaguyane.com/contact.html",
		"social_media_structure": null,
		"description_structure": "Autres organisations fonctionnant par adhésion volontaire (9499Z) Horaires : \njeudi\t08:00–12:00, 14:00–16:00\nvendredi\t08:00–13:00\nsamedi\tFermé\ndimanche\tFermé\nlundi\t08:00–12:00, 14:00–16:00\nmardi\t08:00–12:00, 14:00–16:00\nmercredi\t08:00–13:00",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.284446,4.924241]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 475,
		"sigle_structure": "ASSOCIATION MO PITIT",
		"nom_structure": "ASSOCIATION MO PITIT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "32 RUE MARTIN LUTHER KING 97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "Accueil de jeunes enfants (8891A) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.294105,4.937724]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 476,
		"sigle_structure": "ASSOCIATION MO PITIT",
		"nom_structure": "ASSOCIATION MO PITIT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "143 CITE LES JACARANDAS\nBATIMENT KENTIA\n97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": "https://www.trouversacreche.fr/creche/97300_cayenne/13436/Mo-Pitit",
		"social_media_structure": null,
		"description_structure": "Accueil de jeunes enfants (8891A) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.316433,4.935318]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 477,
		"sigle_structure": "ASSOCIATION MO PITIT",
		"nom_structure": "ASSOCIATION MO PITIT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "3 SQ PALETUVIERS\nAPPT 7\n97355 MACOURIA",
		"tel_interlocuteur": null,
		"website_structure": "https://www.facebook.com/ville.macouria/posts/1083043915098231/",
		"social_media_structure": null,
		"description_structure": "Accueil de jeunes enfants (8891A) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.464565,5.00287]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 478,
		"sigle_structure": null,
		"nom_structure": "AIDES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "36 AV DU COLONEL CHANDON\n97320 SAINT LAURENT DU MARONI",
		"tel_interlocuteur": null,
		"website_structure": "https://www.aides.org",
		"social_media_structure": null,
		"description_structure": "Action sociale sans hébergement n.c.a. (8899B) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-54.028774,5.503091]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 479,
		"sigle_structure": "ATIRG",
		"nom_structure": "ASS TRAITEMENT INSUFFISANCE RENALE GUYAN",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "1361 RTE DE BADUEL\nCOMPLEXE MEDICAL DE BADUEL BAT A\n97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "Autres activités des médecins spécialistes (8622C)\nASS TRAITEMENT INSUFFISANCE RENALE GUYAN ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.307579,4.932638]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 480,
		"sigle_structure": "ORGANISME  GESTION DE L'ECOLE CATHOLIQUE",
		"nom_structure": "ORGANISME  GESTION DE L'ECOLE CATHOLIQUE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "30 AV SAINT DOMINIQUE 97354 REMIRE-MONTJOLY",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "Autres organisations fonctionnant par adhésion volontaire (9499Z) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.268575,4.918627]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 481,
		"sigle_structure": "ASPTT",
		"nom_structure": "ASSOC SPORTIVE PTT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "RTE DE BADUEL\nTROUBIRAN,\n97300 CAYENNE /\nHall Karaté 2299 rte Baduel 97300 CAYENNE  -",
		"tel_interlocuteur": null,
		"website_structure": "http://cayenne.asptt.com",
		"social_media_structure": null,
		"description_structure": "Activités de clubs de sports (9312Z) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.300664,4.929061]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 482,
		"sigle_structure": "AECD",
		"nom_structure": "ASSOCIATION POUR L'EDUCATION COGNITIVE ET LE DEVELOPPEMENT (AECD)",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "76 AVENUE DE GAULLE\n97300 - Cayenne ",
		"tel_interlocuteur": null,
		"website_structure": "https://www.aecd.fr",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.329449,4.939286]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 483,
		"sigle_structure": "SEPANGUY",
		"nom_structure": "SOC ETUDES PROTECTION NATURE EN GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "27 B AV LOUIS PASTEUR\n97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": "http://www.sepanguy.com/index_contact.html",
		"social_media_structure": null,
		"description_structure": "Autres organisations fonctionnant par adhésion volontaire (9499Z) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.323526,4.943681]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 484,
		"sigle_structure": "APADAG",
		"nom_structure": "ASS PARENTS AMIS DEFICIENTS AUDITIFS GUY",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "9 rue Louis Blanc\n97300 Cayenne",
		"tel_interlocuteur": null,
		"website_structure": "http://apadag.org",
		"social_media_structure": null,
		"description_structure": "Hébergement social pour handicapés mentaux et malades mentaux (8720A) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.335274,4.937792]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 485,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION TUTELAIRE DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "43 B RUE VERMONT POLYCARPE\nATG\n97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "Autres organisations fonctionnant par adhésion volontaire (9499Z vendredi\t07:30–13:30\nsamedi\tFermé\ndimanche\tFermé\nlundi\t07:00–15:30\nmardi\t07:30–13:30\nmercredi\t07:30–13:30\njeudi\t07:00–15:30",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.324382,4.941274]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 486,
		"sigle_structure": null,
		"nom_structure": "ASSOC KWATA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "16 AV LOUIS PASTEUR\n97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": "https://www.kwata.net",
		"social_media_structure": null,
		"description_structure": "Autres organisations fonctionnant par adhésion volontaire (9499Z) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.325548,4.942766]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 487,
		"sigle_structure": "ASSOCIATION MAMA BOBI",
		"nom_structure": "ASSOCIATION MAMA BOBI",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "1 r Simon 97320 SAINT LAURENT DU MARONI ",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "Autres organisations fonctionnant par adhésion volontaire (9499Z) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-54.033123,5.500701]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 488,
		"sigle_structure": "LIBI NA WAN",
		"nom_structure": "LIBI NA WAN",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "2 RUE CALI VILLAGE SARAMACA\n97310 KOUROU",
		"tel_interlocuteur": null,
		"website_structure": "https://www.association-libi-na-wan-kourou.fr",
		"social_media_structure": null,
		"description_structure": "Autres organisations fonctionnant par adhésion volontaire (9499Z) Du Mardi au vendredi de 9h00 à 12h00\net\nde 14h00 à 18h00\n Le samedi de\n10h00 à 13h00\net\nde 15h00 à 18h00.",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.638113,5.157834]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 489,
		"sigle_structure": null,
		"nom_structure": "ANTI PODES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "111, rue Christophe-Colomb,\n97300  Cayenne",
		"tel_interlocuteur": null,
		"website_structure": " www.compagnienormaclaire.com",
		"social_media_structure": null,
		"description_structure": "Arts du spectacle vivant (9001Z) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.327514,4.939173]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 490,
		"sigle_structure": "CEBTPG",
		"nom_structure": "ASS CELLULE ECO BAT TRAV PUB",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Immeuble CRCPBTP BP 842 ,97339 Cayenne Cedex",
		"tel_interlocuteur": null,
		"website_structure": "https://cercguyane.gf",
		"social_media_structure": null,
		"description_structure": "Autres organisations fonctionnant par adhésion volontaire (9499Z) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "null",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 491,
		"sigle_structure": "IOG",
		"nom_structure": "INITIATIVE OUEST GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "AV CHRISTOPHE COLOMB BP 58\nPK 1,9\n97320 SAINT LAURENT",
		"tel_interlocuteur": null,
		"website_structure": "http://www.initiative-ouestguyane.fr",
		"social_media_structure": null,
		"description_structure": "Autres organisations fonctionnant par adhésion volontaire (9499Z) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-54.038551,5.47676]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 492,
		"sigle_structure": null,
		"nom_structure": "LILLIPUT SCHOOL DE MATOURY",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "1 place Alexandre dumas 97351, Guyane française",
		"tel_interlocuteur": null,
		"website_structure": "https://www.lilliput-school973.com/accueil-intro",
		"social_media_structure": null,
		"description_structure": "Autres organisations fonctionnant par adhésion volontaire (9499Z) Horaires d'ouverture de l'association :\n \nLundi  : 08h0-15h00\nMardi  : 08h00-15h00\nMercredi  : 08h00-15h00\nJeudi : 08h00-15h00\nVendredi  : 08h00-15h00",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.323732,4.854673]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 493,
		"sigle_structure": null,
		"nom_structure": "UNION DEP SAPEURS POMPIERS DE LA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "20 BD DE LA REPUBLIQUE\nANGLE JUBELIN ET REPUBLIQUE\n97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": "http://udsp973.e-monsite.com",
		"social_media_structure": null,
		"description_structure": "Autres organisations fonctionnant par adhésion volontaire (9499Z) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.323938,4.937997]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 494,
		"sigle_structure": null,
		"nom_structure": "ASS GUYANAISE FORMATION TRAVAILSOCIAL",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "15 rue Gabriel Deveze\n97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": "https://lookallnews.com/fr/page-pro/guyane/cayenne/ass-guyanaise-formation-travailsocial",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.326206,4.942218]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 495,
		"sigle_structure": "MAE",
		"nom_structure": "MAE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "4 Av. Pasteur, Cayenne 97300, Guyane française",
		"tel_interlocuteur": null,
		"website_structure": "https://www.mae.fr",
		"social_media_structure": null,
		"description_structure": " Horaires : \nmardi\t07:00–12:00, 13:00–16:00\nmercredi\t07:00–12:00, 13:00–16:00\njeudi\t07:00–12:00, 13:00–16:00\nvendredi\t07:00–12:30\nsamedi\tFermé\ndimanche\tFermé\nlundi\tFermé",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.326874,4.942498]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 3,
			"statut": "Mutuelle"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 496,
		"sigle_structure": "MAE",
		"nom_structure": "MAE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "MAE - Saint-Laurent-du-Maroni\n1 rue Victor Hugo\n97320 Saint-Laurent-du-Maroni",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-54.029985,5.502583]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 3,
			"statut": "Mutuelle"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 497,
		"sigle_structure": "INSTITUT PASTEUR",
		"nom_structure": "INSTITUT PASTEUR",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse : 23 Avenue Pasteur, BP 6010, Cayenne Cedex 97306, Guyane française\n",
		"tel_interlocuteur": null,
		"website_structure": "https://www.pasteur-cayenne.fr",
		"social_media_structure": null,
		"description_structure": " mardi\t07:00–17:00\nmercredi\t07:00–17:00\njeudi\t07:00–17:00\nvendredi\t07:00–17:00\nsamedi\tFermé\ndimanche\tFermé\nlundi\t07:00–17:00",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.324592,4.94329]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 4,
			"statut": "Fondation"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 498,
		"sigle_structure": "UFR",
		"nom_structure": "UNITE FRATERNELLE DES REGIONS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Tél : 0800 097 354\nEmail: ufrmontjoly@mutufr.com",
		"tel_interlocuteur": null,
		"website_structure": "https://www.groupe-ufr.fr/coordonnees-agences-ufr",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "null",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 3,
			"statut": "Mutuelle"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 499,
		"sigle_structure": null,
		"nom_structure": "MUTUELLE GENERALE DE PREVOYANCE ET D ASSISTANCE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "22 Boulevard Nelson Madiba Mandela\n97308 CAYENNE CEDEX\nGuyane française",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " Lundi : 7h30 - 12h30 et 13h30 - 15h00\nMardi : 7h30 - 12h30 et 13h30 - 14h30\nMercredi : 7h30 - 12h30 et 13h30 - 15h00\nJeudi : 7h30 - 12h30 et 13h30 - 14h30\nVendredi : 7h30 - 12h30 et 13h30 - 15h00",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.326985,4.941162]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 3,
			"statut": "Mutuelle"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 500,
		"sigle_structure": "UCMG",
		"nom_structure": "MUTUALITE FRANCAISE DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse : 1 chemin beney, appartement 1B, Rte de Montabo, Cayenne 97300, Guyane française\n",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.290636,4.929773]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 3,
			"statut": "Mutuelle"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 501,
		"sigle_structure": null,
		"nom_structure": "LIGUE DE BASKET BALL DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse du siège : 81 rue des Peuples Autochtones - 97300 Cayenne",
		"tel_interlocuteur": null,
		"website_structure": "http://club.quomodo.com/basketguyane/",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.30743,4.93958]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 502,
		"sigle_structure": "ATMO GUYANE",
		"nom_structure": "ATMO GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse du siège : Immeuble EGTRANS International ZI de Dégrad des Cannes – BP 51059 97343 CAYENNE Cedex",
		"tel_interlocuteur": null,
		"website_structure": "atmo-guyane.org",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[2.392723,48.849585]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 503,
		"sigle_structure": null,
		"nom_structure": "ASS ILES DANSE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse du siège : 81 rue des Peuples Autochtones -97300 Cayenne",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.30743,4.93958]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 504,
		"sigle_structure": null,
		"nom_structure": "ASS CIE ZOUKOU YANYAN",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": "http://zoukouyanyan.com",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 505,
		"sigle_structure": null,
		"nom_structure": "MAYOURI THEATRE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "\nAdresse du siège : Cité ZUNEVE - Matoury",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.347751,4.889567]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 506,
		"sigle_structure": null,
		"nom_structure": "ATELIER VIDEO ET MULTIMEDIA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse du siège : GEPSL 26 Boulevard Malouet - 97320 Saint Laurent du Maroni",
		"tel_interlocuteur": null,
		"website_structure": "http://poleimagemaroni.org/",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-54.028828,5.505963]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 507,
		"sigle_structure": null,
		"nom_structure": "ENERGIA PURA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse du siège : 81 rue des peuples autochtones - 97300 Cayenne",
		"tel_interlocuteur": null,
		"website_structure": "https://www.facebook.com/capoeiraguyane",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.30743,4.93958]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 508,
		"sigle_structure": "A.F. CAYENNE",
		"nom_structure": "ALLIANCE FRANCAISE DE CAYENNE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse du siège : 2 place du marché -97300 Cayenne",
		"tel_interlocuteur": null,
		"website_structure": "https://afcayenne.org/",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.334173,4.9363]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 509,
		"sigle_structure": "GPS",
		"nom_structure": "GUYANE PROMO SANTE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse du siège : 4 rue Felix Eboué - 97300 cayenne",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.329068,4.941739]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 510,
		"sigle_structure": null,
		"nom_structure": "TANGRAM",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "\nAdresse du siège : 3426, Route de Baduel Impasse du Cormoran",
		"tel_interlocuteur": null,
		"website_structure": "http://tangram-guyane.org",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.29063,4.92734]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 511,
		"sigle_structure": null,
		"nom_structure": "LES LUCIOLES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse du siège : N°58 Rsd de la plage rte de montabo - Cayenne",
		"tel_interlocuteur": null,
		"website_structure": "http://leslucioles97300.canalblog.com/",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.302165,4.946219]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 512,
		"sigle_structure": "MANGUIER VOLANT",
		"nom_structure": "ASSOCIATION DU MANGUIER VOLANT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse du siège : 81 rue des Peuples Autochtones - 97300 Cayenne",
		"tel_interlocuteur": null,
		"website_structure": "http://www.lemanguiervolant.com/",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.30743,4.93958]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 513,
		"sigle_structure": "AAPSE",
		"nom_structure": "ASSOCIATION D'AIDE AUX PERSONNES EN SITUATION D'EXCLUSION",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "\nAdresse du siège : 7940 route des Plages 97354 Rémire Montjoly",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.25946,4.89527]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 514,
		"sigle_structure": "LA TETE DANS LES IMAGES",
		"nom_structure": "LA TETE DANS LES IMAGES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse du siège : 2304 Route de Baduel - Impasse Sparouine - 97300 Cayenne",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.300451,4.928949]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 515,
		"sigle_structure": "973 A A V I P",
		"nom_structure": "973 A A V I P ASS D AIDE AUX VICTIMES INFRACTIONS PENALES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "6 RUE DU FORT CEPEROU 97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.336303,4.938158]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 516,
		"sigle_structure": "LA CRITIC",
		"nom_structure": "LA CRITIC",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "\nAdresse du siège : 81 rue des Peuples Autochtones - 97300 Cayenne\n",
		"tel_interlocuteur": null,
		"website_structure": "http://www.la-critic.org/association.html",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.30743,4.93958]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 517,
		"sigle_structure": null,
		"nom_structure": "ATIPA AUTISME",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse du siège : 36 avenue rita 97354 REMIRE-MONTJOLY",
		"tel_interlocuteur": null,
		"website_structure": "https://www.atipa.fr/presentation",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.267883,4.91823]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 518,
		"sigle_structure": "AGRRR",
		"nom_structure": "ASSOCIATION GUYANAISE DE REDUCTION DES RISQUES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse du siège : 81 rue des Peuples Autochtones - 97300 Cayenne",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.30743,4.93958]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 519,
		"sigle_structure": null,
		"nom_structure": "RANJE TO BISIKLET - REPARATION PARTICIPATIVE ET PROMOTION DU VELO",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse du siège : 81 rue des peuples autochtones - 97300 Cayenne",
		"tel_interlocuteur": null,
		"website_structure": "https://r-t-b.fr/",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.30743,4.93958]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 520,
		"sigle_structure": null,
		"nom_structure": "POLE RESSOURCES DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse du siège : 39 rue Lieutenant Goinet- 97300 Cayenne",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.329367,4.940047]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 521,
		"sigle_structure": "ANFH",
		"nom_structure": "ASS FORMATION PERMANENTE PERSONNEL HOSP",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Résidence Man'cia, 1897 Route De Montjoly, Remire Montjoly 97354, Guyane française",
		"tel_interlocuteur": null,
		"website_structure": "https://www.anfh.fr/guyane",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.284446,4.924241]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 522,
		"sigle_structure": "CGOS",
		"nom_structure": "CTE GEST OEUV SOC ETS HOSP SOC MED SOC",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 523,
		"sigle_structure": "MNT",
		"nom_structure": "MUTUELLE NATIONALE TERRITORIALE MNT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Zone administrative du Moulin à Vent Cayenne, 97326, Guyane française",
		"tel_interlocuteur": null,
		"website_structure": "https://www.mnt.fr",
		"social_media_structure": null,
		"description_structure": " Horaires : \nmardi\t08:00–16:00\nmercredi\t08:00–16:00\njeudi\t08:00–16:00\nvendredi\tFermé\nsamedi\tFermé\ndimanche\tFermé\nlundi\t08:00–16:00",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[1.805008,50.943163]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 3,
			"statut": "Mutuelle"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 524,
		"sigle_structure": "MG",
		"nom_structure": "LA MUTUELLE GENERALE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "22 Bd Nelson Madiba Mandela, Cayenne 97300, Guyane française",
		"tel_interlocuteur": null,
		"website_structure": "\nSite Web : http://www.lamutuellegenerale.fr",
		"social_media_structure": null,
		"description_structure": " Horaires : \nmardi\t07:30–12:30, 13:30–14:30\nmercredi\t07:30–12:30, 13:30–15:00\njeudi\t07:30–12:30, 13:30–14:30\nvendredi\t07:30–12:30, 13:30–15:00\nsamedi\tFermé\ndimanche\tFermé\nlundi\t07:30–12:30, 13:30–15:00",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.326985,4.941162]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 3,
			"statut": "Mutuelle"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 525,
		"sigle_structure": null,
		"nom_structure": "MUTUELLE INTERIALE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse : 9 Rue Louis Blanc, Cayenne 97300, Guyane française",
		"tel_interlocuteur": null,
		"website_structure": "https://www.interiale.fr",
		"social_media_structure": null,
		"description_structure": " Horaires : \nmardi\t08:00–12:00\nmercredi\t08:00–12:00\njeudi\t08:00–12:00\nvendredi\t08:00–12:00\nsamedi\tFermé\ndimanche\tFermé\nlundi\t08:00–12:00",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.335274,4.937792]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 3,
			"statut": "Mutuelle"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 526,
		"sigle_structure": "MGEN",
		"nom_structure": "MUTUELLE GENERALE EDUCATION NATIONALE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "2844 Rte de Montabo, Cayenne 97300, Guyane française \nTéléphone : 0 821 01 19 73",
		"tel_interlocuteur": null,
		"website_structure": "https://proximite.mgen.fr/110-section-mgen-de-la-guyane",
		"social_media_structure": null,
		"description_structure": " Horaires : \nmardi\t08:30–15:00\nmercredi\t08:30–15:00\njeudi\t08:30–15:00\nvendredi\t08:30–15:00\nsamedi\tFermé\ndimanche\tFermé\nlundi\t08:30–15:00",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.296589,4.936022]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 3,
			"statut": "Mutuelle"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 527,
		"sigle_structure": "MFU",
		"nom_structure": "MUTUELLE DE FRANCE UNIE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Adresse\n23 Boulevard Nelson MANDELA\n97300 Cayenne\n",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " Horaires\nAgence ouverte le lundi, mardi, jeudi et vendredi de 7 h 30 à 12 h et de 14 h à 17 h\nLe mercredi de 8 h à 12 h",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.326773,4.941156]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 3,
			"statut": "Mutuelle"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 528,
		"sigle_structure": "SMI",
		"nom_structure": "SOC MUTUALISTE INTERPROFESSIONNELLE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": " 2 r Capit Bernard 97300 Cayenne",
		"tel_interlocuteur": null,
		"website_structure": "http://www.mutuelle-smi.com",
		"social_media_structure": null,
		"description_structure": " Du lundi au vendredi de 08h00 à 12h00 puis 15h00 à 18h00",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.330066,4.93706]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 3,
			"statut": "Mutuelle"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 529,
		"sigle_structure": null,
		"nom_structure": "CONGRE SOEURS ST PAUL CHARTRES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "13 RUE LEON GONTRAND DAMAS 97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.333267,4.939835]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 530,
		"sigle_structure": null,
		"nom_structure": "CONGRE SOEURS ST PAUL CHARTRES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 531,
		"sigle_structure": "AGC GUYANE",
		"nom_structure": "ASSOCIATION DE GESTION ET COMPTABILITE DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "PK15 Domaine de Soula\n97355 Macouria",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.407715,4.927428]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 532,
		"sigle_structure": "CISTC",
		"nom_structure": "CTRE INTERPROF SANTE TRAVAIL CAYENNE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 533,
		"sigle_structure": "STKOG",
		"nom_structure": "SERVICE INTERENTREPRISES DE SANTE AU TRAVAIL DE KOUROU ET OUEST GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 534,
		"sigle_structure": null,
		"nom_structure": "MISSION ADVENTISTE DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 535,
		"sigle_structure": "ADACLAM",
		"nom_structure": "ASS DANSE ART CLASS ET MODERNE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 536,
		"sigle_structure": null,
		"nom_structure": "TENNIS CLUB KOUROU",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 537,
		"sigle_structure": "LFG",
		"nom_structure": "LIGUE DE FOOTBALL DE LA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 538,
		"sigle_structure": null,
		"nom_structure": "GROUPE SOS SOLIDARITES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 539,
		"sigle_structure": null,
		"nom_structure": "GROUPE SOS SOLIDARITES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 540,
		"sigle_structure": null,
		"nom_structure": "GROUPE SOS SOLIDARITES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 541,
		"sigle_structure": null,
		"nom_structure": "GROUPE SOS SOLIDARITES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 542,
		"sigle_structure": null,
		"nom_structure": "LIGUE REGIONALE DE TENNIS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 543,
		"sigle_structure": "LES PETITS ATELIERS",
		"nom_structure": "LES PETITS ATELIERS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 544,
		"sigle_structure": "LES PETITS ATELIERS",
		"nom_structure": "LES PETITS ATELIERS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 545,
		"sigle_structure": "LES PETITS ATELIERS",
		"nom_structure": "LES PETITS ATELIERS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 546,
		"sigle_structure": null,
		"nom_structure": "AIDES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 547,
		"sigle_structure": "APCAT",
		"nom_structure": "ASS DES PRATIQUANTS DU CATAMARAN",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 548,
		"sigle_structure": "ADIE",
		"nom_structure": "ASS POUR DROIT A L INITIATIVE ECONOMIQUE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 549,
		"sigle_structure": "ADIE",
		"nom_structure": "ASS POUR DROIT A L INITIATIVE ECONOMIQUE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 550,
		"sigle_structure": "ADIE",
		"nom_structure": "ASS POUR DROIT A L INITIATIVE ECONOMIQUE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 551,
		"sigle_structure": "ADIE",
		"nom_structure": "ASS POUR DROIT A L INITIATIVE ECONOMIQUE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 552,
		"sigle_structure": "ADIE",
		"nom_structure": "ASS POUR DROIT A L INITIATIVE ECONOMIQUE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 553,
		"sigle_structure": "ADIE",
		"nom_structure": "ASS POUR DROIT A L INITIATIVE ECONOMIQUE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 554,
		"sigle_structure": "CGAG",
		"nom_structure": "CENTRE DE GESTION AGREE DE LA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 555,
		"sigle_structure": null,
		"nom_structure": "ENTR AIDES GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "10 RUE MADAME LYDIE PICHEVIN\n97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "Action sociale sans hébergement n.c.a. (8899B) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.325245,4.9409]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 556,
		"sigle_structure": "SIS",
		"nom_structure": "SIDA INFO SERVICE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 557,
		"sigle_structure": null,
		"nom_structure": "CLUB DE NATATION LES PACOUSSINES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 558,
		"sigle_structure": "CRCG",
		"nom_structure": "COMITE REGIONAL CYCLISTE DE LA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 559,
		"sigle_structure": "CEMEA",
		"nom_structure": "CTRE ENTRAIN METHOD EDUCAT ACTIVE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 560,
		"sigle_structure": null,
		"nom_structure": "LA DORLOTINE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 561,
		"sigle_structure": null,
		"nom_structure": "INSTITUT POLYFORMATION",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 562,
		"sigle_structure": "ADAPEI",
		"nom_structure": "ASS DEP AMIS PARENTS ENFANTS INADAPTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 563,
		"sigle_structure": "ADAPEI",
		"nom_structure": "ASS DEP AMIS PARENTS ENFANTS INADAPTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 564,
		"sigle_structure": "ADAPEI",
		"nom_structure": "ASS DEP AMIS PARENTS ENFANTS INADAPTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 565,
		"sigle_structure": "ADAPEI",
		"nom_structure": "ASS DEP AMIS PARENTS ENFANTS INADAPTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 566,
		"sigle_structure": "ADAPEI",
		"nom_structure": "ASS DEP AMIS PARENTS ENFANTS INADAPTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 567,
		"sigle_structure": "ADAPEI",
		"nom_structure": "ASS DEP AMIS PARENTS ENFANTS INADAPTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 568,
		"sigle_structure": "ADAPEI",
		"nom_structure": "ASS DEP AMIS PARENTS ENFANTS INADAPTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 569,
		"sigle_structure": "ADAPEI",
		"nom_structure": "ASS DEP AMIS PARENTS ENFANTS INADAPTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 570,
		"sigle_structure": "ADAPEI",
		"nom_structure": "ASS DEP AMIS PARENTS ENFANTS INADAPTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 571,
		"sigle_structure": "ADAPEI",
		"nom_structure": "ASS DEP AMIS PARENTS ENFANTS INADAPTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 572,
		"sigle_structure": "ADAPEI",
		"nom_structure": "ASS DEP AMIS PARENTS ENFANTS INADAPTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 573,
		"sigle_structure": "ADAPEI",
		"nom_structure": "ASS DEP AMIS PARENTS ENFANTS INADAPTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 574,
		"sigle_structure": "ADAPEI",
		"nom_structure": "ASS DEP AMIS PARENTS ENFANTS INADAPTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 575,
		"sigle_structure": "ADAPEI",
		"nom_structure": "ASS DEP AMIS PARENTS ENFANTS INADAPTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 576,
		"sigle_structure": "ASS DE DIEU DE GUYANE",
		"nom_structure": "ASS DE DIEU DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 577,
		"sigle_structure": "ORDRE DES AVOCATS DU BARREAU DE LA GUYAN",
		"nom_structure": "ORDRE DES AVOCATS DU BARREAU DE LA GUYAN",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 578,
		"sigle_structure": "CRESS",
		"nom_structure": "CHAMBRE REGIONALE DE L'ECONOMIE SOCIALE DE LA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 579,
		"sigle_structure": null,
		"nom_structure": "COMMUNAUTE DE SOEURS ST JOSEPH DE CLUNY",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 580,
		"sigle_structure": "RVLD",
		"nom_structure": "RADIO VOIX DANS LE DESERT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 581,
		"sigle_structure": null,
		"nom_structure": "LA PAGAIE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 582,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION TUTELAIRE DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 583,
		"sigle_structure": "ROM",
		"nom_structure": "RADIO OUASSAILLES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 584,
		"sigle_structure": null,
		"nom_structure": "ASS DECOUVERTE DE LA NATURE EN GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 585,
		"sigle_structure": "AGESJ",
		"nom_structure": "ASS DE GESTION DE L'EXTERNAT ST JOSEPH",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 586,
		"sigle_structure": "AGESJ",
		"nom_structure": "ASS DE GESTION DE L'EXTERNAT ST JOSEPH",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 587,
		"sigle_structure": null,
		"nom_structure": "MEGAQUARIUS CLUB",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 588,
		"sigle_structure": "GES APROSEP",
		"nom_structure": "GROUPE ECONOMIQUE SOLIDAIRE APROSEP",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 589,
		"sigle_structure": null,
		"nom_structure": "COSMA CANOE KAYAK DU MARONI",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 590,
		"sigle_structure": null,
		"nom_structure": "SPORT DE PLEIN AIR EN GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 591,
		"sigle_structure": null,
		"nom_structure": "ASSOC ESOPE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 592,
		"sigle_structure": "AKATIJ",
		"nom_structure": "AN NOU KOMBAT ANSAMN TOUT INEGALITE DI JODLA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 593,
		"sigle_structure": "AKATIJ",
		"nom_structure": "AN NOU KOMBAT ANSAMN TOUT INEGALITE DI JODLA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 594,
		"sigle_structure": "AKATIJ",
		"nom_structure": "AN NOU KOMBAT ANSAMN TOUT INEGALITE DI JODLA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 595,
		"sigle_structure": "AKATIJ",
		"nom_structure": "AN NOU KOMBAT ANSAMN TOUT INEGALITE DI JODLA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 596,
		"sigle_structure": "AKATIJ",
		"nom_structure": "AN NOU KOMBAT ANSAMN TOUT INEGALITE DI JODLA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 597,
		"sigle_structure": "AKATIJ",
		"nom_structure": "AN NOU KOMBAT ANSAMN TOUT INEGALITE DI JODLA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 598,
		"sigle_structure": "AKATIJ",
		"nom_structure": "AN NOU KOMBAT ANSAMN TOUT INEGALITE DI JODLA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 599,
		"sigle_structure": null,
		"nom_structure": "ASS CULTURELLE EGLISE EVANGELIQUE BAPTIS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 600,
		"sigle_structure": null,
		"nom_structure": "MISSION DU PLEIN EVANGILE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 601,
		"sigle_structure": "AKATIJ",
		"nom_structure": "AN NOU KOMBAT ANSAMN TOUT INEGALITE DI JODLA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 602,
		"sigle_structure": "AKATIJ",
		"nom_structure": "AN NOU KOMBAT ANSAMN TOUT INEGALITE DI JODLA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 603,
		"sigle_structure": "AKATIJ",
		"nom_structure": "AN NOU KOMBAT ANSAMN TOUT INEGALITE DI JODLA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 604,
		"sigle_structure": null,
		"nom_structure": "ASS TI DOUDOU MONTLUCAS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 605,
		"sigle_structure": null,
		"nom_structure": "ASS DES HOMES DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " et",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 606,
		"sigle_structure": null,
		"nom_structure": "ASS FOURKA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " de 14h00 à 18h00",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 607,
		"sigle_structure": null,
		"nom_structure": "ASS FOURKA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "  Le samedi de",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 608,
		"sigle_structure": null,
		"nom_structure": "ASS FOURKA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " 10h00 à 13h00",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 609,
		"sigle_structure": "OGEC",
		"nom_structure": "ORGANISATION DE GESTION DE L'ENSEIGNEMENT CATHOLIQUE ST PAUL",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " et",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 610,
		"sigle_structure": null,
		"nom_structure": "ASS SPORTIVE GOLF ANSE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " de 15h00 à 18h00.",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 611,
		"sigle_structure": null,
		"nom_structure": "LE KAN KOUROU",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 612,
		"sigle_structure": "TRANSITIONS PRO GUYANE",
		"nom_structure": "TRANSITIONS PRO GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 613,
		"sigle_structure": null,
		"nom_structure": "LA MARMOTINE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 614,
		"sigle_structure": null,
		"nom_structure": "CIE THEATRALE GUYANAISE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Cie Théâtrale Guyanaise\n77 lot Flamboyant\nBP 19\n97355 Macouria",
		"tel_interlocuteur": null,
		"website_structure": "http://theatre-de-macouria.com",
		"social_media_structure": null,
		"description_structure": "Arts du spectacle vivant (9001Z) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.472635,5.010536]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 615,
		"sigle_structure": null,
		"nom_structure": "ASS ACTIVITE CONSEIL",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 616,
		"sigle_structure": null,
		"nom_structure": "ASS ACTIVITE CONSEIL",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 617,
		"sigle_structure": null,
		"nom_structure": "ASS ACTIVITE CONSEIL",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 618,
		"sigle_structure": null,
		"nom_structure": "ASS LIGUE DE VOLLEY BALL",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 619,
		"sigle_structure": null,
		"nom_structure": "ASS GROUPE ANIMATION SOCIO EDUC AG",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 620,
		"sigle_structure": null,
		"nom_structure": "ASS ESPACE ENFANT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 621,
		"sigle_structure": null,
		"nom_structure": "CTE REG GUYANE CANOE KAYAK PIROGUE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 622,
		"sigle_structure": null,
		"nom_structure": "ASS RADIO SAINT GABRIEL",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 623,
		"sigle_structure": null,
		"nom_structure": "ASS JEUNESSE ET VIE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 624,
		"sigle_structure": null,
		"nom_structure": "ASS DEVELO SOCIAL SOLIDAR URBAINE KOUROU",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "1 RUE ATHEONODORE\nBOURG\n97310 KOUROU",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "\nAutres organisations fonctionnant par adhésion volontaire (9499Z) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.652346,5.162689]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 625,
		"sigle_structure": null,
		"nom_structure": "RELAIS DROGUE SOLIDARITE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 626,
		"sigle_structure": "CARPAG",
		"nom_structure": "CAISSE RGLT PECUNIAIRES AVOCATS GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 627,
		"sigle_structure": "ORGANISM GESTION EC ST JOSEPH CLUNY MANA",
		"nom_structure": "ORGANISM GESTION EC ST JOSEPH CLUNY MANA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 628,
		"sigle_structure": null,
		"nom_structure": "LIGUE DE JUDO",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 629,
		"sigle_structure": null,
		"nom_structure": "THEATRE DE LA RUCHE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 630,
		"sigle_structure": "ASDEC",
		"nom_structure": "ASS SUPPORT DIR DIOCES ENSEIG CATHO GUYA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 631,
		"sigle_structure": null,
		"nom_structure": "ASS SPORTIVE ET CULTURELLE MONTARGUE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 632,
		"sigle_structure": null,
		"nom_structure": "KAYAK CLUB DE MARIPASOULA LAWA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 633,
		"sigle_structure": null,
		"nom_structure": "KS AND CO",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "9 av Lieut-Col Chandon \n97320 SAINT LAURENT DU MARONI  ",
		"tel_interlocuteur": null,
		"website_structure": "compagnie-ksandco.org",
		"social_media_structure": null,
		"description_structure": "Arts du spectacle vivant (9001Z) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-54.029675,5.503912]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 634,
		"sigle_structure": "GEMAG",
		"nom_structure": "GPT EMPLOYEURS MANUTENTION GUYANAISE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 635,
		"sigle_structure": null,
		"nom_structure": "ASS DECOUVERTE SCIENTIFIQUE PETIT SAUT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 636,
		"sigle_structure": null,
		"nom_structure": "ASS G.R.A.I.N.E.",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 637,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION RESERVE NATURELLE TRESOR",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 638,
		"sigle_structure": null,
		"nom_structure": "ASS CULTURELLE ET SPORTIVE ROU KOU",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 639,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION L'ILE AUX ENFANTS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 640,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION L'ILE AUX ENFANTS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 641,
		"sigle_structure": null,
		"nom_structure": "ASS DEP SECOUR FRANCAIS CRX BLANCHE GUYA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 642,
		"sigle_structure": "UDAF",
		"nom_structure": "UNION DEPARTEMENTAL DES ASS FAMILIALES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 643,
		"sigle_structure": "AGAMIS",
		"nom_structure": "ASSOCIATION POUR GERER L'ARCHITECTURE ET LE MUSEE DES ILES DU SALUT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 644,
		"sigle_structure": null,
		"nom_structure": "ASS  F.A.D.S.E.P.L.",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 645,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION MEKI WI LIBI NA WAN",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 646,
		"sigle_structure": null,
		"nom_structure": "ASS FAG LOISIRS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 647,
		"sigle_structure": null,
		"nom_structure": "AIMARA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 648,
		"sigle_structure": null,
		"nom_structure": "MAISON FAMILIALE DU LITTORAL OUEST",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "CD 8 – PK 27,5 Avenue Paule BERTHELOT\n97360 MANA\n/5 AV PAULE BERTHELOT 97360 MANA\n",
		"tel_interlocuteur": null,
		"website_structure": "www.mfr.asso.fr",
		"social_media_structure": null,
		"description_structure": "Formation continue d'adultes (8559A) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-53.745551,5.650828]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 649,
		"sigle_structure": null,
		"nom_structure": "LIGUE DE VOILE DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 650,
		"sigle_structure": "ASS EGLISE CHRETIENNE EVANGELIQUE",
		"nom_structure": "ASS EGLISE CHRETIENNE EVANGELIQUE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 651,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION SOS FAUNE SAUVAGE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "CD 5, PK 29\n97355 MACOURIA\nGUYANE\n",
		"tel_interlocuteur": null,
		"website_structure": "http://www.sosfaunesauvage.com",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.479202,4.97733]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 652,
		"sigle_structure": null,
		"nom_structure": "LA GRENOUILLERE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": "Accueil de jeunes enfants (8891A) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 653,
		"sigle_structure": "AFDG",
		"nom_structure": "ASS FRANCO DOMINICAINE DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 654,
		"sigle_structure": null,
		"nom_structure": "MEDIA'TIC",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 655,
		"sigle_structure": "CROSGUY",
		"nom_structure": "COMITE REG OLYMPIQUE ET SPORTIF  GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 656,
		"sigle_structure": null,
		"nom_structure": "POINT.COM",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "77 RUE RENE JADFARD 97300 CAYENNE",
		"tel_interlocuteur": null,
		"website_structure": "\npointcom-guyane.fr",
		"social_media_structure": null,
		"description_structure": "Autres organisations fonctionnant par adhésion volontaire (9499Z) Le Lundi de 8h30 à 12h30\nDu Mardi au Vendredi\nLe matin :\nde 8h30 à 12h30 \nl'après midi :\nde 13h30 à 16h30",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.327996,4.935419]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 657,
		"sigle_structure": null,
		"nom_structure": "CLUB SAINT JO",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " Du Mardi au Vendredi",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 658,
		"sigle_structure": "CIDF",
		"nom_structure": "CENTRE INFO DROITS FEMMES GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " Le matin : ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 659,
		"sigle_structure": "INITIATIVE GUYANE",
		"nom_structure": "INITIATIVE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "4 rue Astrolabe\nImm Horizon\n97354 Remire-Montjoly/\n69 IMP CASSIOPEE\n97300 Cayenne, Guyane, FR",
		"tel_interlocuteur": null,
		"website_structure": "https://www.initiative-ceguyane.fr",
		"social_media_structure": null,
		"description_structure": "Autres organisations fonctionnant par adhésion volontaire (9499Z) ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-52.288166,4.924532]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 660,
		"sigle_structure": "ORG GESTION ECOLE CATHOLIQUE ST PIERRE",
		"nom_structure": "ORG GESTION ECOLE CATHOLIQUE ST PIERRE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " de 8h30 à 12h30 ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 661,
		"sigle_structure": "BTPR",
		"nom_structure": "ASS DE RETRAITE ET DE PREVOYANCE DU BATIMENT ET DES TRAVAUX PUBLICS DES ANTILLES ET DE LA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 662,
		"sigle_structure": "GADEPAM",
		"nom_structure": "ASSOCIATION POUR L'ETUDE ET LE DEVELOPPEMENT DES PLANTES MEDICINALES ET AROMATIQUE EN GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " l'après midi : ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 663,
		"sigle_structure": null,
		"nom_structure": "THEATRE DE L'ENTONNOIR",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 664,
		"sigle_structure": "CRPV Guyane",
		"nom_structure": "CENTRE RESSOURCES POLITIQUE VILLE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " de 13h30 à 16h30",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 665,
		"sigle_structure": null,
		"nom_structure": "VENT D'OUEST",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 666,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION  PERINAT GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 667,
		"sigle_structure": null,
		"nom_structure": "EGLIS EVANG ASS DIEU LA PIONNIERE ....",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 668,
		"sigle_structure": "GARDE DES MEDECINS",
		"nom_structure": "GARDE DES MEDECINS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 669,
		"sigle_structure": null,
		"nom_structure": "LE NEOCLUB DES PETITES FRIMOUSSES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 670,
		"sigle_structure": null,
		"nom_structure": "LE NEOCLUB DES PETITES FRIMOUSSES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 671,
		"sigle_structure": "OFFICE DE TOURISME DE SLM",
		"nom_structure": "OFFICE DE TOURISME DE SLM",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 672,
		"sigle_structure": null,
		"nom_structure": "PRACTICE GOLF DE MATOURY",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 673,
		"sigle_structure": null,
		"nom_structure": "EGLISE EVANGELIQUE DE JAVOUHEY",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 674,
		"sigle_structure": null,
		"nom_structure": "LA MAISON DE LA KINESITHERAPIE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 675,
		"sigle_structure": null,
		"nom_structure": "GARDERIE LES PETITS PAPILLONS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 676,
		"sigle_structure": null,
		"nom_structure": "GARDERIE LES PETITS PAPILLONS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 677,
		"sigle_structure": null,
		"nom_structure": "GARDERIE LES PETITS PAPILLONS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 678,
		"sigle_structure": null,
		"nom_structure": "K'BOSS DE CACAO",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 679,
		"sigle_structure": "SSG",
		"nom_structure": "SAMU SOCIAL GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 680,
		"sigle_structure": null,
		"nom_structure": "NE PLUS JETER",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 681,
		"sigle_structure": null,
		"nom_structure": "ASS ONCO GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 682,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION TENNIS CLUB DE TENNIS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 683,
		"sigle_structure": null,
		"nom_structure": "ECURIES DE CONCOURS DE FORT DIAMANT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 684,
		"sigle_structure": null,
		"nom_structure": "BRIDGE CLUB DE L'ILE DE CAYENNE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 685,
		"sigle_structure": null,
		"nom_structure": "PARLER AVEC LES MAINS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 686,
		"sigle_structure": null,
		"nom_structure": "PASSERELLE POUR EMPLOI INITIATIVE ECON",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 687,
		"sigle_structure": "APAMEG",
		"nom_structure": "ACTION PROTECTION ACCOMPAGNEMENT ET MESURES EDUCATIVES ET PENALES EN GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 688,
		"sigle_structure": "U.N.A.A.S.S.",
		"nom_structure": "UNION NATIONALE DES ASSOCIATIONS AGREEES DU SYSTEME DE SANTE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 689,
		"sigle_structure": null,
		"nom_structure": "OCEAN SCIENCES & LOGISTIC",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 690,
		"sigle_structure": null,
		"nom_structure": "L INSTITUT DES AMERIQUES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 691,
		"sigle_structure": null,
		"nom_structure": "L INSTITUT DES AMERIQUES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 692,
		"sigle_structure": null,
		"nom_structure": "YEEPI INSERTION",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 693,
		"sigle_structure": null,
		"nom_structure": "CTE REG EPMM SPORTS POUR TOUS GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 694,
		"sigle_structure": null,
		"nom_structure": "RESEAU KIKIWI",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 695,
		"sigle_structure": null,
		"nom_structure": "JUDO CLUB DE MATOURY",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 696,
		"sigle_structure": null,
		"nom_structure": "LES CHOUPINETTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 697,
		"sigle_structure": null,
		"nom_structure": "GRAINES D'ACROBATES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 698,
		"sigle_structure": "ENSEIGNANTS DE L'ECOLE SAINT PIERRE",
		"nom_structure": "ENSEIGNANTS DE L'ECOLE SAINT PIERRE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 699,
		"sigle_structure": "ODGESA",
		"nom_structure": "ORGANISME DEPT GESTION ETABLISSEMENT SCOLAIRES ADVENTISTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 700,
		"sigle_structure": "ODGESA",
		"nom_structure": "ORGANISME DEPT GESTION ETABLISSEMENT SCOLAIRES ADVENTISTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 701,
		"sigle_structure": "ODGESA",
		"nom_structure": "ORGANISME DEPT GESTION ETABLISSEMENT SCOLAIRES ADVENTISTES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 702,
		"sigle_structure": "EEBIG",
		"nom_structure": "EGLISE EVANGELIQUE BAPTISTE INTERNATIONALE DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 703,
		"sigle_structure": "LRHBG",
		"nom_structure": "LIGUE REGIONALE DE HANDBALL DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 704,
		"sigle_structure": "DAAC",
		"nom_structure": "DEVELOPPEMENT ACCOMPAGNEMENT ANIMATION COOPERATION",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 705,
		"sigle_structure": "FFROLLER SPORTS",
		"nom_structure": "LIGUE ROLLER ET SKATEBOARD GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 706,
		"sigle_structure": null,
		"nom_structure": "TAYRA SPORTING CLUB DE ROURA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 707,
		"sigle_structure": null,
		"nom_structure": "LIGUE DE GUYANE DE BADMINTON",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 708,
		"sigle_structure": null,
		"nom_structure": "APATOU C K",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 709,
		"sigle_structure": "ARAVEG",
		"nom_structure": "ACCES SOINS VEILLE SANIT EPIDEMIOLOGIQUE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 710,
		"sigle_structure": "ADAEI",
		"nom_structure": "GROUPEMENT D EMPLOYEURS DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 711,
		"sigle_structure": "BCACM",
		"nom_structure": "BUSHIDO CLUB AIKIDO DE CAYENNE MATOURY",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 712,
		"sigle_structure": null,
		"nom_structure": "UNION TERRITORIALE DES PETITES ET MOYENNES ENTREPRISES DE LA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 713,
		"sigle_structure": null,
		"nom_structure": "LILI TIG",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 714,
		"sigle_structure": null,
		"nom_structure": "MAISON DES RESEAUX",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 715,
		"sigle_structure": "CDOMK-GUYANE",
		"nom_structure": "CONSEIL DEPARTEMENTAL DE L'ORDRE DES MASSEURS-KINESITHERAPEUTHES DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 716,
		"sigle_structure": "MRC",
		"nom_structure": "MIRZA ROLLER CLUB",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 717,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION VREPAGS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 718,
		"sigle_structure": null,
		"nom_structure": "EMPREINTE COLOREE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 719,
		"sigle_structure": null,
		"nom_structure": "MAISON FAMILIALE RURALE DES FLEUVES DE L'EST",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 720,
		"sigle_structure": null,
		"nom_structure": "SECU OR",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 721,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION PALHACO",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 722,
		"sigle_structure": null,
		"nom_structure": "RESEAU ENTREPRENDRE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 723,
		"sigle_structure": null,
		"nom_structure": "REGIE DE QUARTIER DE REMIRE MONTJOLY",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 724,
		"sigle_structure": "APEIG",
		"nom_structure": "ASSOCIATION POUR L'EMPLOI ET L'INSERTION EN GUYANE (APEIG)",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 725,
		"sigle_structure": null,
		"nom_structure": "ACTION POUR LE DEVELOPPEMENT L EDUCATION ET LA RECHERCHE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 726,
		"sigle_structure": null,
		"nom_structure": "SALSA PICANTE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 727,
		"sigle_structure": null,
		"nom_structure": "ACTION PREVENTION SANTE VILLAGES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 728,
		"sigle_structure": null,
		"nom_structure": "PEUPL'EN HARMONIE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 729,
		"sigle_structure": null,
		"nom_structure": "CONSERVATOIRE DES ESPACES NATURELS DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 730,
		"sigle_structure": null,
		"nom_structure": "SHINTO RYU AIKIDO DE MACOURIA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 731,
		"sigle_structure": null,
		"nom_structure": "LES PAPILLONITES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 732,
		"sigle_structure": null,
		"nom_structure": "LES PETITS EPHORES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 733,
		"sigle_structure": null,
		"nom_structure": "LES PETITS EPHORES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 734,
		"sigle_structure": null,
		"nom_structure": "LES PETITS EPHORES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 735,
		"sigle_structure": "INTERPROBOIS GUYANE",
		"nom_structure": "INTERPROBOIS GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 736,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION A BON DANCE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 737,
		"sigle_structure": null,
		"nom_structure": "MAISON FAMILIALE RURALE D'APATOU",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 738,
		"sigle_structure": "G-CAM",
		"nom_structure": "G-CAM GUYANE CINEMA AUDIOVISUEL ET MULTIMEDIA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 739,
		"sigle_structure": null,
		"nom_structure": "COULEUR CHOCO",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 740,
		"sigle_structure": null,
		"nom_structure": "LES ECURIES DE LA POINTE LIBERTE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 741,
		"sigle_structure": null,
		"nom_structure": "LES CHRYSALIDES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 742,
		"sigle_structure": null,
		"nom_structure": "LES CHRYSALIDES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 743,
		"sigle_structure": null,
		"nom_structure": "LES CHRYSALIDES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 744,
		"sigle_structure": null,
		"nom_structure": "LES CHRYSALIDES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 745,
		"sigle_structure": null,
		"nom_structure": "GUYANE NATURE ENVIRONNEMENT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 746,
		"sigle_structure": null,
		"nom_structure": "KOGNOTOPIA KGTP",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 747,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION LES ECURIES DE MARIVAT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 748,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION GESTIONNAIRE DU CENTRE SCOLAIRE ET EDUCATIF LASALLE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 749,
		"sigle_structure": null,
		"nom_structure": "BIEN GRANDIR ENSEMBLE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 750,
		"sigle_structure": "APAPAGUYANE",
		"nom_structure": "ASSOCIATION POUR LA PROMOTION DE L AGRICULTURE ET DES PRODUITS AGRICOLES DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 751,
		"sigle_structure": "ADESS",
		"nom_structure": "ASSOCIATION DE DEVELOPPEMENT DE L ECONOMIE SOLIDAIRE ET SOCIALE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 752,
		"sigle_structure": "GEIQ BTP GUYANE",
		"nom_structure": "GROUPEMENT D EMPLOYEURS POUR L INSERTION ET LA QUALIFICATION DU BTP DE LA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 753,
		"sigle_structure": null,
		"nom_structure": "ORKIDE DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 754,
		"sigle_structure": "ASSOCIATION BOIS CANON",
		"nom_structure": "ASSOCIATION BOIS CANON",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 755,
		"sigle_structure": "ASSOCIATION BOIS CANON",
		"nom_structure": "ASSOCIATION BOIS CANON",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 756,
		"sigle_structure": "ASSOCIATION BOIS CANON",
		"nom_structure": "ASSOCIATION BOIS CANON",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 757,
		"sigle_structure": null,
		"nom_structure": "ASS. SAPOKAYE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 758,
		"sigle_structure": "CDJDF",
		"nom_structure": "CELECION DEPORTIVO JUVENIL DOMINICO FRANCES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 759,
		"sigle_structure": null,
		"nom_structure": "UNION REGIONALE DES PROFESSIONNELS DE SANTE INFIRMIERS LIBERAUX DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 760,
		"sigle_structure": null,
		"nom_structure": "LA CANOPEE DES SCIENCES : CENTRE DE CULTURE SCIENTIFIQUE TECHNIQUE ET INDUSTRIELLE EN GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 761,
		"sigle_structure": "GADJ",
		"nom_structure": "GUYANE ACCOMPAGNEMENTS DEVELOPPEMENT JALONNES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 762,
		"sigle_structure": null,
		"nom_structure": "GUYANAISE POUR L EDUCATION LA FORMATION ET L ECONOMIE DURABLE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 763,
		"sigle_structure": "OPCO CONSTRUCTION",
		"nom_structure": "OPERATEUR DE COMPETENCES DE LA CONSTRUCTION",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 764,
		"sigle_structure": "CEMEA",
		"nom_structure": "CTRE ENTRAINEM METHODE EDUCATION ACTIVE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 765,
		"sigle_structure": "CRF",
		"nom_structure": "CROIX ROUGE FRANCAISE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 766,
		"sigle_structure": "CRF",
		"nom_structure": "CROIX ROUGE FRANCAISE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 767,
		"sigle_structure": "CRF",
		"nom_structure": "CROIX ROUGE FRANCAISE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 768,
		"sigle_structure": "CRF",
		"nom_structure": "CROIX ROUGE FRANCAISE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 769,
		"sigle_structure": "CRF",
		"nom_structure": "CROIX ROUGE FRANCAISE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 770,
		"sigle_structure": "CRF",
		"nom_structure": "CROIX ROUGE FRANCAISE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 771,
		"sigle_structure": "CRF",
		"nom_structure": "CROIX ROUGE FRANCAISE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 772,
		"sigle_structure": "CRF",
		"nom_structure": "CROIX ROUGE FRANCAISE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 773,
		"sigle_structure": "CRF",
		"nom_structure": "CROIX ROUGE FRANCAISE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 774,
		"sigle_structure": null,
		"nom_structure": "GROUPE SOS JEUNESSE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 775,
		"sigle_structure": null,
		"nom_structure": "GROUPE SOS JEUNESSE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 776,
		"sigle_structure": null,
		"nom_structure": "GROUPE SOS JEUNESSE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 777,
		"sigle_structure": null,
		"nom_structure": "GROUPE SOS JEUNESSE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 778,
		"sigle_structure": null,
		"nom_structure": "GROUPE SOS JEUNESSE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 779,
		"sigle_structure": null,
		"nom_structure": "GROUPE SOS JEUNESSE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 780,
		"sigle_structure": "OCCE",
		"nom_structure": "OFFICE CENTRAL DE COOPERATION A L ECOLE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 781,
		"sigle_structure": "SPA",
		"nom_structure": "SOCIETE PROTECTRICE DES ANIMAUX",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 782,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION LOISIRS MO KOTE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 783,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION LOISIRS MO KOTE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 784,
		"sigle_structure": "CSBA JUDO",
		"nom_structure": "CLUB DE SPORT ET D'ANIMATION DE BONHOMME CSBA JUDO",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 785,
		"sigle_structure": "GDI",
		"nom_structure": "GUYANE DEVELOPPEMENT INNOVATION",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 786,
		"sigle_structure": null,
		"nom_structure": "ROYAL RANCH CENTRE EQUESTRE DE MATITI",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 787,
		"sigle_structure": null,
		"nom_structure": "COLOMBES CULTURE SANTE BIEN ETRE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 788,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION GUYANASSO",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 789,
		"sigle_structure": "LES PREMIERES GUYANE",
		"nom_structure": "L'INCUBATEUR PEPINIERE AU FEMININ DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 790,
		"sigle_structure": null,
		"nom_structure": "PILOT SERVICES GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 791,
		"sigle_structure": null,
		"nom_structure": "NATURE RIGHTS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 792,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION KIFENOUPITIT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 793,
		"sigle_structure": null,
		"nom_structure": "TERRA DA DANCA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 794,
		"sigle_structure": null,
		"nom_structure": "SYND COPROPRIETAIRES CENTAURE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 795,
		"sigle_structure": null,
		"nom_structure": "SYND COPROPRIETAIRES PEGASE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 796,
		"sigle_structure": null,
		"nom_structure": "SYND COPROPRIETAIRES PHARAM",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 797,
		"sigle_structure": null,
		"nom_structure": "TAKARI DEVELOPPEMENT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 798,
		"sigle_structure": "ASL",
		"nom_structure": "ASSOCIATION SYNDICALE LIBRE UNIVERSIADES HIBISCUS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 799,
		"sigle_structure": null,
		"nom_structure": "LES AMIS DU RALLYE NEREIDES - NEREID'S RALLY",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 800,
		"sigle_structure": null,
		"nom_structure": "GUYACLIC'",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 801,
		"sigle_structure": null,
		"nom_structure": "C'MAFOR",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 802,
		"sigle_structure": null,
		"nom_structure": "LA COMPAGNIE DES VOLEURS DE SOLEIL",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 803,
		"sigle_structure": "EMPD",
		"nom_structure": "EGLISE MONDIALE DE LA PUISSANCE DE DIEU",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 804,
		"sigle_structure": "CET-YP",
		"nom_structure": "CSE AIR FRANCE PILOTAGE ECONOMIQUE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 805,
		"sigle_structure": null,
		"nom_structure": "KULANAN 973",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 806,
		"sigle_structure": "SDC EDEN VERT",
		"nom_structure": "SYNDICAT DES COPROPRIETAIRES EDEN VERT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 807,
		"sigle_structure": null,
		"nom_structure": "SYNDICAT DES COPROPRIETAIRES CITY HALL",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 808,
		"sigle_structure": null,
		"nom_structure": "SYNDICAT DES COPROPRIETAIRES COEUR DE VILLE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 809,
		"sigle_structure": null,
		"nom_structure": "LA COMPAGNIE DES CUEILLEURS DE BRUME",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 810,
		"sigle_structure": null,
		"nom_structure": "SEVEN FITNESS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 811,
		"sigle_structure": "C.F.A.P.P.E.C",
		"nom_structure": "CENTRE DE FORMATION D ACCOMPAGNEMENT ET DE PERFECTIONNEMENT PROFESSIONNELS DE L ENSEIGNEMENT CATHOLIQUE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 812,
		"sigle_structure": null,
		"nom_structure": "COMITE D'ENTREPRISE DE SODEXO",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 813,
		"sigle_structure": null,
		"nom_structure": "GUYA'KITE SCHOOL",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 814,
		"sigle_structure": "AFDAS",
		"nom_structure": "ASSOCIATION DE FORMATIONS ET D'ACTIONS SOCIALES MARTINIQUE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 815,
		"sigle_structure": "GEPSL",
		"nom_structure": "GROUPEMENT D'EMPLOYEURS PROFESSION SPORT ET LOISIRS GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 816,
		"sigle_structure": "OFA GUYANE",
		"nom_structure": "OFA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 817,
		"sigle_structure": null,
		"nom_structure": "GUYAN'ART NATURE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 818,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION HAPPY DAYS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 819,
		"sigle_structure": null,
		"nom_structure": "L'ARBRE FROMAGER",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 820,
		"sigle_structure": null,
		"nom_structure": "BIEN-ETRE THERAPIES MANUELLES ENERGETIQUES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 821,
		"sigle_structure": null,
		"nom_structure": "LIGUE DE L'ENSEIGNEMENT-FEDERATION DE GUYANE FRANCAISE MOUVEMENT D'EDUCATION POPULAIRE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 822,
		"sigle_structure": "RQC",
		"nom_structure": "REGIE DE QUARTIERS DE CAYENNE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 4,
			"effectif": "20-29"
		},
		"logo_structure": null
	},
	{
		"id": 823,
		"sigle_structure": null,
		"nom_structure": "UFOLEP GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 824,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION NAUTIQUE DE KOUROU",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 825,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION CULTURELLE ET SPORTIVE SOCCERTIME",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 826,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION BOXING CLUB DE KOUROU",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 827,
		"sigle_structure": "AGAPE",
		"nom_structure": "ASSOCIATION GUYANAISE APPRENTIS D'AUTEUIL ET PARTENAIRES POUR L'EDUCATION OU AGAPE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 828,
		"sigle_structure": null,
		"nom_structure": "KAZ TIMOUN JARDIN PEDAGOGIQUE DE L ENFANCE GUYANAISE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 829,
		"sigle_structure": null,
		"nom_structure": "CENTRE TECHNIQUE BOIS & FORETS DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 830,
		"sigle_structure": "IDSANTE",
		"nom_structure": "IDSANTE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 831,
		"sigle_structure": null,
		"nom_structure": "CENTRE EQUESTRE KAWALE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 832,
		"sigle_structure": "APV",
		"nom_structure": "PROTECT'VEG FREDON GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 833,
		"sigle_structure": "SDC",
		"nom_structure": "SYNDICAT DES COPROPRIETAIRES COCONUT PLAGE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 834,
		"sigle_structure": null,
		"nom_structure": "L'EFFET MORPHO",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 835,
		"sigle_structure": null,
		"nom_structure": "LE REPIT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 836,
		"sigle_structure": null,
		"nom_structure": "KALAMUS GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 837,
		"sigle_structure": null,
		"nom_structure": "GUYANE SENSACION",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 838,
		"sigle_structure": null,
		"nom_structure": "BISOUS NURSE PALAIS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 839,
		"sigle_structure": "REAGIR",
		"nom_structure": "RESEAU D'ACTEURS GUYANAIS POUR UNE INSERTION REUSSIE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 840,
		"sigle_structure": "GHC",
		"nom_structure": "GUYANE HORSE CLUB",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 841,
		"sigle_structure": "SDC",
		"nom_structure": "SYNDICAT DE COPROPRIETE ATLANTIS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 842,
		"sigle_structure": "SDC",
		"nom_structure": "SYNDICAT DE COPROPRIETE OPALINE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 843,
		"sigle_structure": "ECA",
		"nom_structure": "LA PORTE OUVERTE CHRETIENNE DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 844,
		"sigle_structure": null,
		"nom_structure": "H'ART",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 845,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION ZUMBA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 846,
		"sigle_structure": null,
		"nom_structure": "MARONI LAB",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 847,
		"sigle_structure": null,
		"nom_structure": "LA BOITE A SOURIRE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 848,
		"sigle_structure": "NANADOM GUYANE",
		"nom_structure": "NANADOM GUYANE SERVICE A LA PERSONNE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 849,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION HOSPITALIERE DE PREVENTION DU DIABETE ET DES PATHOLOGIES METABOLIQUES EN GUYANE - GUYANE DIABETE OBESITE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 850,
		"sigle_structure": null,
		"nom_structure": "MUNTU GWIYANN",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 851,
		"sigle_structure": null,
		"nom_structure": "PREFIGURATION DE LA REGIE INTER QUARTIERS DE MATOURY",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 852,
		"sigle_structure": null,
		"nom_structure": "AVENTURES THEATRE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 853,
		"sigle_structure": null,
		"nom_structure": "OPUS GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 854,
		"sigle_structure": null,
		"nom_structure": "YENKUMU LUKU",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 855,
		"sigle_structure": null,
		"nom_structure": "ADI ET NANA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 856,
		"sigle_structure": "ARDAG",
		"nom_structure": "ASSOCIATION POUR LE RECYCLAGE DES DECHETS DE L'AUTOMOBILE EN GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 857,
		"sigle_structure": null,
		"nom_structure": "CINEMA ELDORADO PROJECT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 858,
		"sigle_structure": null,
		"nom_structure": "ASSOCIATION POUR L'ETUDE DES LANGUES DE SIGNES D'AMAZONIE - ELSA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 859,
		"sigle_structure": null,
		"nom_structure": "GUYAGUITARE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 860,
		"sigle_structure": "LIANE",
		"nom_structure": "LIEN ET INSERTION POUR LA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 861,
		"sigle_structure": "AFIFAC",
		"nom_structure": "ASSOCIATION DU FESTIVAL INTERNATIONAL DU FILM D'AMAZONIE ET DES CARAIBES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 862,
		"sigle_structure": null,
		"nom_structure": "DOGGY OASIS INTERNATIONAL",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 863,
		"sigle_structure": null,
		"nom_structure": "EGLISE EVANGELIQUE POUVOIR DE DIEU",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 864,
		"sigle_structure": null,
		"nom_structure": "NEOCLUB HECTOR BERLIOZ",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 865,
		"sigle_structure": "OPCO SANTE",
		"nom_structure": "OPCO SANTE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 866,
		"sigle_structure": null,
		"nom_structure": "GROUPEMENT D'EMPLOYEUR POUR LE RENFORCEMENT HUMAIN DES ORGANISATIONS PROFESSIONNELLES AGRICOLES DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 867,
		"sigle_structure": "FENESAJE",
		"nom_structure": "FEDERATION NEOCLUB DES STRUCTURES D'ACCUEIL DU JEUNE ENFANT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 868,
		"sigle_structure": null,
		"nom_structure": "EMERGENCE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 869,
		"sigle_structure": "ADD DE CAYENNE",
		"nom_structure": "ASSEMBLEE DE DIEU DE CAYENNE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 870,
		"sigle_structure": "SDC",
		"nom_structure": "SYNDICAT DE COPROPRIETE LES FEUILLES D'OR",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 871,
		"sigle_structure": "OPCO AKTO",
		"nom_structure": "AKTO",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 872,
		"sigle_structure": "ORG GESTION ENS CATHO COLL STE THERESE",
		"nom_structure": "ORG GESTION ENS CATHO COLL STE THERESE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 873,
		"sigle_structure": "BRED",
		"nom_structure": "BRED BANQUE POPULAIRE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 874,
		"sigle_structure": "BRED",
		"nom_structure": "BRED BANQUE POPULAIRE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 875,
		"sigle_structure": "BRED",
		"nom_structure": "BRED BANQUE POPULAIRE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 876,
		"sigle_structure": "BRED",
		"nom_structure": "BRED BANQUE POPULAIRE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 6,
			"effectif": "50 et plus"
		},
		"logo_structure": null
	},
	{
		"id": 877,
		"sigle_structure": "CRCAM-MG",
		"nom_structure": "CAISSE REGIONALE DE CREDIT AGRICOLE MUTUEL DE LA MARTINIQUE ET DE LA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 878,
		"sigle_structure": "CRCAM-MG",
		"nom_structure": "CAISSE REGIONALE DE CREDIT AGRICOLE MUTUEL DE LA MARTINIQUE ET DE LA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 879,
		"sigle_structure": "CRCAM-MG",
		"nom_structure": "CAISSE REGIONALE DE CREDIT AGRICOLE MUTUEL DE LA MARTINIQUE ET DE LA GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 880,
		"sigle_structure": "CODEPEG",
		"nom_structure": "COOPERATIVE PECHEURS DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 881,
		"sigle_structure": null,
		"nom_structure": "COOP ELEVAGE AVICOLE ET CUNICOLE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 882,
		"sigle_structure": "SCEBOG",
		"nom_structure": "SOC COOP ELEVEURS DE BOVINS DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 883,
		"sigle_structure": null,
		"nom_structure": "BIO SAVANE SOCIETE COOPERATIVE AGRICOLE DE SINNAMARY",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 884,
		"sigle_structure": null,
		"nom_structure": "COOPERATIVE SUD CONCEPT",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 885,
		"sigle_structure": "PETRA PATRIMONIA",
		"nom_structure": "COOPERATIVE D'ACTIVITE ET D'EMPLOI PETRA PATRIMONIA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 886,
		"sigle_structure": "CFAG",
		"nom_structure": "CAISSE REGIONALE DU CREDIT MUTUEL ANTILLES GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 887,
		"sigle_structure": "CFAG",
		"nom_structure": "CAISSE REGIONALE DU CREDIT MUTUEL ANTILLES GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 888,
		"sigle_structure": null,
		"nom_structure": "KWALA FAYA",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 889,
		"sigle_structure": "CASDEN BANQUE POPULAIRE",
		"nom_structure": "CASDEN BANQUE POPULAIRE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 5,
			"effectif": "30-49"
		},
		"logo_structure": null
	},
	{
		"id": 890,
		"sigle_structure": "SC'OPARA",
		"nom_structure": "COOPERATIVE D'ACTIVITE ET D'EMPLOI WORK IN SCOP",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 891,
		"sigle_structure": null,
		"nom_structure": "COOPERATIVE D'INITIATIVE JEUNES",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 3,
			"effectif": "10-19"
		},
		"logo_structure": null
	},
	{
		"id": 892,
		"sigle_structure": "COP'FLEG",
		"nom_structure": "COOPERATIVE DES PRODUCTEURS DE FRUITS, FLEURS ET LEGUMES DE GUYANE",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": null,
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": null,
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 2,
			"statut": "Coopérative"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 893,
		"sigle_structure": null,
		"nom_structure": "100ZERREURS",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "8 RUE SOLANGE HULIC 97320 SAINT-LAURENT-DU-MARONI",
		"tel_interlocuteur": null,
		"website_structure": null,
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-54.024381,5.505968]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	},
	{
		"id": 894,
		"sigle_structure": null,
		"nom_structure": "\"ASSOCIATION DE BIEN ETRE \"COQUELICOT\"",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "lotissement rose de porcelaine, 97318 Javouhey, French Guiana",
		"tel_interlocuteur": null,
		"website_structure": "bizarre le site n'a pas été trouvé / structure uniquement sur Savigny-sur-orge",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-61.67203,16.281209]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 1,
			"statut": "Association"
		},
		"effectif": {
			"id": 2,
			"effectif": "1-9"
		},
		"logo_structure": null
	},
	{
		"id": 895,
		"sigle_structure": "Autres organisations fonctionnant par adhésion volontaire",
		"nom_structure": "9499Z",
		"interlocuteur_structure": null,
		"poste_interlocuteur": null,
		"email_interlocuteur": null,
		"adresse_siege": "Autres organisations fonctionnant par adhésion volontaire",
		"tel_interlocuteur": null,
		"website_structure": "2019",
		"social_media_structure": null,
		"description_structure": " ",
		"membre_cress": null,
		"adherent_cress": null,
		"partner_cress": null,
		"coordonnees": "[-1.002114,43.748206]",
		"domaine_activite_structure": [],
		"epci_structure": [],
		"volet_intervention_structure": [],
		"commune_intervention_structure": [],
		"statut_juridique_structure": {
			"id": 5,
			"statut": "Société commerciale d'utilité sociale"
		},
		"effectif": {
			"id": 1,
			"effectif": "Aucun"
		},
		"logo_structure": null
	}
]

    data = JSON.stringify(data)
    data = JSON.parse(data)
    if(filter.statut != ''){
        data = data.filter((item) => {
            console.log('egal = ', item.statut_juridique_structure.id == filter.statut)
            return item.statut_juridique_structure.id == filter.statut
        })
    }


    if(filter.domaine != ''){
        data = data.filter((item) => {
            var found = false;
            for(var i = 0; i < item.domaine_activite_structure.length; i++) {
                if (item.domaine_activite_structure[i].id == filter.domaine) {
                    found = true;
                    break;
                }
            }

            return found
        })
    }

    if(filter.commune != ''){
        data = data.filter((item) => {
            var found = false;
            for(var i = 0; i < item.commune_intervention_structure.length; i++) {
                if (item.commune_intervention_structure[i].id == filter.commune) {
                    found = true;
                    break;
                }
            }

            return found
        })
    }

    if(filter.query != ''){
        data = data.filter((item) => {
            return item.nom_structure.includes(filter.query)
        })
    }


    data = data.filter((item) => {
        if(item.coordonnees && item.coordonnees != "" && item.coordonnees != null){
            console.log(item.id ," - ", item.coordonnees)
        }
        return (item.coordonnees && item.coordonnees != "" && item.coordonnees != null && item.coordonnees != 'null')
    })
    
    
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
    
    console.log(data_maped)

    return JSON.stringify(data_maped)
}







// -----------------------------------------------------------------------------
// Search entreprise (Ajax)
// -----------------------------------------------------------------------------

// Initialize all entreprise in the map
// test('http://137.74.196.180:8055/items/fiches_entreprises?fields=*,*.*.*&filter[coordonnees][_ncontains]=null')

// Search enterprise
async function search(statut, domaine, commune, query, recherche_btn){
    statut = $(`#${statut}`)
    domaine = $(`#${domaine}`)
    commune = $(`#${commune}`)
    query = $(`#${query}`)
    recherche_btn = $(`#${recherche_btn}`)

    let url = 'http://137.74.196.180:8055/items/fiches_entreprises?fields=*,*.*.*&filter[coordonnees][_ncontains]=null'

    recherche_btn.click(function () {
        const filter_val = {
            statut: statut.val(),
            domaine: domaine.val(),
            commune: commune.val(),
            query: query.val(),
        }
    
        let filter = {
            statut: "filter[statut_juridique_structure][_eq]="+statut.val(),
            domaine: "filter[domaine_activite_structure][id][_in]="+domaine.val(),
            commune: "filter[commune_intervention_structure][id][_in]="+commune.val(),
            query: "filter[nom_structure][_contains]="+query.val(),
        }
    
        let sorted_filter = []
    
        for (const key in filter_val) {
            if(filter_val[key] != ''){
                sorted_filter.push(filter[key])
            }
        }

        let _query = ''

        for (let i = 0; i < sorted_filter.length; i++) {
            _query += '&'+sorted_filter[i]
        }

        // console.log('http://137.74.196.180:8055/items/fiches_entreprises?fields=*,*.*.*&filter[coordonnees][_ncontains]=null' + _query)

        // test('http://137.74.196.180:8055/items/fiches_entreprises?fields=*,*.*.*&filter[coordonnees][_ncontains]=null' + _query)

        url = 'http://137.74.196.180:8055/items/fiches_entreprises?fields=*,*.*.*&filter[coordonnees][_ncontains]=null' + _query
    })

    
}


// console.log(search("statut", "domaine", "commune", "query", "recherche_btn"))




