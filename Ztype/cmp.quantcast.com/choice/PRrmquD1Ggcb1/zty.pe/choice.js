'use strict';
(function() {
    var cmpFile = 'noModule' in HTMLScriptElement.prototype ? 'cmp2.js' : 'cmp2-polyfilled.js';
    (function() {
        var cmpScriptElement = document.createElement('script');
        var firstScript = document.getElementsByTagName('script')[0];
        cmpScriptElement.async = true;
        cmpScriptElement.type = 'text/javascript';
        var cmpVersion;
        var tagUrl = document.currentScript.src;
        cmpVersion = 'https://cmp.quantcast.com/tcfv2/CMP_FILE?referer=zty.pe'.replace('CMP_FILE', cmpFile);
        cmpScriptElement.src = cmpVersion;
        firstScript.parentNode.insertBefore(cmpScriptElement, firstScript);
    })();
    (function() {
        var css = "" +
            " .qc-cmp-button.qc-cmp-secondary-button:hover { " +
            "   background-color: #368bd6 !important; " +
            "   border-color: transparent !important; " +
            " } " +
            " .qc-cmp-button.qc-cmp-secondary-button:hover { " +
            "   color: #ffffff !important; " +
            " } " +
            " .qc-cmp-button.qc-cmp-secondary-button { " +
            "   color: #368bd6 !important; " +
            " } " +
            " .qc-cmp-button.qc-cmp-secondary-button { " +
            "   background-color: #eee !important; " +
            "   border-color: transparent !important; " +
            " } " +
            ".qc-cmp-qc-link #qcLogo { display: none;}.qc-cmp-link-text { margin: 1em 0; display: none;}" +
            "" +
            "";
        var stylesElement = document.createElement('style');
        var re = new RegExp('&quote;', 'g');
        css = css.replace(re, '"');
        stylesElement.type = 'text/css';
        if (stylesElement.styleSheet) {
            stylesElement.styleSheet.cssText = css;
        } else {
            stylesElement.appendChild(document.createTextNode(css));
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(stylesElement);
    })();
    var autoDetectedLanguage = 'en';

    function splitLang(lang) {
        return lang.length > 2 ? lang.split('-')[0] : lang;
    };

    function isSupported(lang) {
        var langs = ['en', 'fr', 'de', 'it', 'es', 'da', 'nl', 'el', 'hu', 'pt', 'ro', 'fi', 'pl', 'sk', 'sv', 'no', 'ru', 'bg', 'ca', 'cs', 'et', 'hr', 'lt', 'lv', 'mt', 'sl', 'tr', 'zh'];
        return langs.indexOf(lang) === -1 ? false : true;
    };
    if (isSupported(splitLang(document.documentElement.lang))) {
        autoDetectedLanguage = splitLang(document.documentElement.lang);
    } else if (isSupported(splitLang(navigator.language))) {
        autoDetectedLanguage = splitLang(navigator.language);
    };
    var choiceMilliSeconds = (new Date).getTime();
    window.__tcfapi('init', 2, function() {}, {
        "coreConfig": {
            "uspVersion": 1,
            "uspJurisdiction": ["CA"],
            "uspLspact": "N",
            "uspPrivacyPolicyLink": "https://publift.com/privacy-policy/",
            "uspDeleteDataLink": "https://forms.gle/c8PZeTKuH7Z6bQWs7",
            "uspAccessDataLink": "https://forms.gle/c8PZeTKuH7Z6bQWs7",
            "suppressCcpaLinks": false,
            "quantcastAccountId": "PRrmquD1Ggcb1",
            "privacyMode": ["GDPR", "USP"],
            "hashCode": "xP+v+h0ncgObyNqEl15pGg",
            "publisherCountryCode": "DE",
            "publisherName": "Ztype",
            "vendorPurposeIds": [2, 3, 4, 5, 6, 7, 8, 9, 10, 1],
            "vendorFeaturesIds": [1, 3, 2],
            "vendorPurposeLegitimateInterestIds": [2, 3, 4, 5, 6, 7, 8, 9, 10],
            "vendorSpecialFeaturesIds": [1, 2],
            "vendorSpecialPurposesIds": [1, 2],
            "googleEnabled": true,
            "consentScope": "service",
            "thirdPartyStorageType": "iframe",
            "consentOnSafari": false,
            "displayUi": "inEU",
            "defaultToggleValue": "off",
            "initScreenRejectButtonShowing": false,
            "softOptInEnabled": false,
            "showSummaryView": true,
            "persistentConsentLinkLocation": 3,
            "displayPersistentConsentLink": false,
            "uiLayout": "banner",
            "vendorListUpdateFreq": 30,
            "publisherPurposeIds": [1, 2, 3, 4, 5],
            "initScreenBodyTextOption": 1,
            "publisherConsentRestrictionIds": [],
            "publisherLIRestrictionIds": [],
            "publisherPurposeLegitimateInterestIds": [],
            "publisherSpecialPurposesIds": [],
            "publisherFeaturesIds": [],
            "publisherSpecialFeaturesIds": [],
            "stacks": [],
            "lang_": autoDetectedLanguage,
            "gvlVersion": 2
        },
        "premiumUiLabels": {
            "uspPrivacyPolicyLinkText": "Advertising Partner Privacy Policy",
            "uspDeleteDataLinkText": "Delete Advertising Data",
            "uspAccessDataLinkText": "Request Advertising Data"
        },
        "premiumProperties": {
            "vendorBlacklist": [896],
            "googleWhitelist": [1]
        },
        "coreUiLabels": {},
        "theme": {},
        "nonIabVendorsInfo": {
            "nonIabVendorList": [{
                "vendorId": 13,
                "pCode": "PRrmquD1Ggcb1",
                "name": "Getsitecontrol",
                "description": "Getsitecontrol is an easy-to-use set of smart widgets for website optimization. It lets a website owner quickly add elements that engage website visitors and help to increase conversions. With average visitors spending less than a minute on a website, it is important to make sure they see the most important content right away and encourage them to stay longer and engage more with the website.",
                "privacyPolicyUrl": "https://getsitecontrol.com/privacy/",
                "nonIabPurposeConsentIds": [1, 5, 6, 8, 9],
                "nonIabPurposeLegitimateInterestIds": [],
                "active": null
            }, {
                "vendorId": 5,
                "pCode": "PRrmquD1Ggcb1",
                "name": "Google Analytics",
                "description": "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand.",
                "privacyPolicyUrl": "https://policies.google.com/privacy?hl=en-US",
                "nonIabPurposeConsentIds": [1, 3, 7, 9, 10],
                "nonIabPurposeLegitimateInterestIds": [],
                "active": null
            }, {
                "vendorId": 6,
                "pCode": "PRrmquD1Ggcb1",
                "name": "Google Ads",
                "description": "Google Ads is an online advertising platform developed by Google, where advertisers bid to display brief advertisements, service offerings, product listings, or videos to web users. It can place ads both in the results of search engines like Google Search and on non-search websites, mobile apps, and videos.",
                "privacyPolicyUrl": "https://policies.google.com/technologies/ads?hl=en-US",
                "nonIabPurposeConsentIds": [7, 1, 3, 9, 10, 4, 5, 2],
                "nonIabPurposeLegitimateInterestIds": [],
                "active": null
            }, {
                "vendorId": 14,
                "pCode": "PRrmquD1Ggcb1",
                "name": "Youtube",
                "description": "Youtube",
                "privacyPolicyUrl": "https://policies.google.com/privacy?hl=en-US",
                "nonIabPurposeConsentIds": [1],
                "nonIabPurposeLegitimateInterestIds": [],
                "active": null
            }, {
                "vendorId": 9,
                "pCode": "PRrmquD1Ggcb1",
                "name": "Facebook Pixel",
                "description": "A piece of code for your website that lets you measure, optimise and build audiences for your advertising campaigns.",
                "privacyPolicyUrl": "https://www.facebook.com/policy.php",
                "nonIabPurposeConsentIds": [1, 9, 8, 7, 3, 4],
                "nonIabPurposeLegitimateInterestIds": [],
                "active": null
            }, {
                "vendorId": 10,
                "pCode": "PRrmquD1Ggcb1",
                "name": "Hotjar",
                "description": "Hotjar is a behavior analytics company that analyses website use, providing feedback through tools such as heatmaps, session recordings, and surveys.",
                "privacyPolicyUrl": "https://www.hotjar.com/legal/policies/privacy/",
                "nonIabPurposeConsentIds": [10, 8, 9, 1],
                "nonIabPurposeLegitimateInterestIds": [],
                "active": null
            }, {
                "vendorId": 15,
                "pCode": "PRrmquD1Ggcb1",
                "name": "slideshare",
                "description": "present slides on your website",
                "privacyPolicyUrl": "https://www.slideshare.net/privacy",
                "nonIabPurposeConsentIds": [1],
                "nonIabPurposeLegitimateInterestIds": [],
                "active": null
            }, {
                "vendorId": 11,
                "pCode": "PRrmquD1Ggcb1",
                "name": "WisePops",
                "description": "WisePops helps marketers build intelligent website popups and exit popups. Increase email signups and conversions.",
                "privacyPolicyUrl": "https://support.wisepops.com/en/articles/1095535-data-security-policy",
                "nonIabPurposeConsentIds": [9, 5, 6, 8, 1],
                "nonIabPurposeLegitimateInterestIds": [],
                "active": null
            }, {
                "vendorId": 12,
                "pCode": "PRrmquD1Ggcb1",
                "name": "Marketplacer",
                "description": "We're A Global, Tech Led Platform Which Enables You To Create All Types Of Marketplaces. We Make It Easier To Create Successful, Scalable And Limitless Online Marketplaces.",
                "privacyPolicyUrl": "https://marketplacer.com/home/privacy-and-cookie-policy/",
                "nonIabPurposeConsentIds": [9, 10, 1, 8, 5, 6],
                "nonIabPurposeLegitimateInterestIds": [],
                "active": null
            }, {
                "vendorId": 4,
                "pCode": "PRrmquD1Ggcb1",
                "name": "Bike Exchange DE",
                "description": "BikeExchange is the internet interface between customers and bicycle dealers. You buy bicycles and accessories from a local bicycle dealer via BikeExchange, not from any online shop. Almost 400 professional bicycle dealers offer you on our websitefrom all over Germany. The special thing about it: both sides benefit from it! At BikeExchange, dealers can present their range online with little effort, customers can find out more online, compare items and prices, and then order from a dealer or go shopping in the store. Brands, models, prices, color variants or sizes - on BikeExchange the customer has the choice, gets advice and service and still leaves sales where they belong - in a local bicycle shop. That brings customers back to the store and strengthens local trade .",
                "privacyPolicyUrl": "https://www.bikeexchange.de/promo/datenschutz",
                "nonIabPurposeConsentIds": [1, 7, 8, 9, 3, 10],
                "nonIabPurposeLegitimateInterestIds": [],
                "active": null
            }, {
                "vendorId": 7,
                "pCode": "PRrmquD1Ggcb1",
                "name": "Hubspot",
                "description": "HubSpot is an American developer and marketer of software products for inbound marketing, sales, and customer service.",
                "privacyPolicyUrl": "https://legal.hubspot.com/privacy-policy",
                "nonIabPurposeConsentIds": [9, 1],
                "nonIabPurposeLegitimateInterestIds": [],
                "active": null
            }, {
                "vendorId": 8,
                "pCode": "PRrmquD1Ggcb1",
                "name": "Zendesk",
                "description": "Zendesk Inc. is an American customer service software company headquartered in San Francisco, California, USA",
                "privacyPolicyUrl": "https://www.zendesk.com/company/customers-partners/privacy-policy/",
                "nonIabPurposeConsentIds": [5, 9, 1],
                "nonIabPurposeLegitimateInterestIds": [],
                "active": null
            }, {
                "vendorId": 3,
                "pCode": "PRrmquD1Ggcb1",
                "name": "VolcanoDiscovery",
                "description": "www.volcanodiscovery.com has many exciting facets: - It alerts the public about volcanoes and earthquakes happening anywhere in the world and provides an extensive database of these phenomena in all corners of the globe. - It is an adventure tour operator that conducts geotours and volcano tours around the globe, in collaboration with trusted partners. - It is a recognized news portal for earthquake and volcano updates, driven by our personal fascination with the incredibly varied and interesting world of these geological phenomena.",
                "privacyPolicyUrl": "https://www.volcanodiscovery.com/privacy.html",
                "nonIabPurposeConsentIds": [1],
                "nonIabPurposeLegitimateInterestIds": [],
                "active": null
            }, {
                "vendorId": 2,
                "pCode": "PRrmquD1Ggcb1",
                "name": "Clicktripz",
                "description": "Conversion Solutions for Travel",
                "privacyPolicyUrl": "https://www.clicktripz.com/privacy_policy.php",
                "nonIabPurposeConsentIds": [1, 2, 3, 4, 5],
                "nonIabPurposeLegitimateInterestIds": [],
                "active": null
            }]
        }
    });
})();