/* ===================================================================
   RETETI Adventure Safaris — Landing Page Script
   Plain (vanilla) JavaScript · no framework, no dependencies
   =================================================================== */

(function () {
    "use strict";

    /* ---------------- Contact ---------------- */
    var PHONE_RAW = "254700302965";
    var CONTACT = { phone: "+254 700 302965", email: "info@retetisafaris.com", location: "Nairobi, Kenya",
      ig: "https://www.instagram.com/reteti_adventure_safaris/",
      fb: "https://www.facebook.com/profile.php?id=61555154436029",
      ta: "https://www.tripadvisor.com/Attraction_Review-g294207-d27128058-Reviews-Reteti_Adventure_Safaris-Nairobi.html" };

    /* ---------------- Icon set ---------------- */
    var A = 'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"';
    var ICONS = {
      value: '<circle cx="12" cy="12" r="8.5" '+A+'/><path d="M12 7.5v9M14.3 9.4c-.5-.7-1.4-1-2.3-1-1.2 0-2.2.7-2.2 1.8 0 2.4 4.6 1.3 4.6 3.8 0 1.1-1 1.9-2.4 1.9-1 0-1.9-.4-2.4-1.1" '+A+'/>',
      plane: '<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" '+A+'/>',
      migration: '<path d="M3 17h4l2-3 3 5 2.5-8L19 17h2" '+A+'/><circle cx="6" cy="7" r="1.4" '+A+'/><circle cx="12" cy="6" r="1.4" '+A+'/><circle cx="18" cy="7" r="1.4" '+A+'/>',
      lion: '<circle cx="12" cy="13" r="3.2" '+A+'/><path d="M12 3c-2 0-3.5 1.3-4 3M12 3c2 0 3.5 1.3 4 3M6.4 7.2C4.8 8 4 9.6 4.4 11.4M17.6 7.2c1.6.8 2.4 2.4 2 4.2M10.7 13c.2.3.7.3.9 0M13.3 13c-.2.3-.7.3-.9 0M12 14.4v1" '+A+'/>',
      sun: '<circle cx="12" cy="12" r="4" '+A+'/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" '+A+'/>',
      family: '<circle cx="8" cy="7" r="2.3" '+A+'/><circle cx="16" cy="7" r="2.3" '+A+'/><path d="M4 19v-2a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2M13 19v-2a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v2" '+A+'/>',
      heart: '<path d="M12 20s-7-4.3-9.2-8.3C1.3 9 2.4 6 5.3 6c1.9 0 3 .9 3.7 2 .7-1.1 1.8-2 3.7-2 2.9 0 4 3 2.5 5.7C19 15.7 12 20 12 20z" '+A+'/>',
      camera: '<rect x="3" y="7" width="18" height="13" rx="2.5" '+A+'/><circle cx="12" cy="13.5" r="3.3" '+A+'/><path d="M8 7l1.5-2.2h5L16 7" '+A+'/>',
      lodge: '<path d="M3 11l9-6 9 6M5 10v9h14v-9M9.5 19v-4.5h5V19" '+A+'/>',
      food: '<path d="M5 3v7a2 2 0 0 0 4 0V3M7 3v18M19 3c-1.8 0-3 2-3 5s1 4 3 4m0 0v9" '+A+'/>',
      jeep: '<path d="M3 13h18M5 13l1.5-4h9L18 13M3 17h18v-2H3zM6.5 13V9M14 13V9" '+A+'/><circle cx="7.5" cy="18.5" r="1.5" '+A+'/><circle cx="16.5" cy="18.5" r="1.5" '+A+'/>',
      guide: '<circle cx="12" cy="7.5" r="3" '+A+'/><path d="M5.5 20a6.5 6.5 0 0 1 13 0" '+A+'/>',
      water: '<path d="M12 3.5C12 3.5 5.5 10 5.5 14.5a6.5 6.5 0 0 0 13 0C18.5 10 12 3.5 12 3.5z" '+A+'/>',
      cab: '<path d="M4 14h16M6 14l1.4-4.3A2 2 0 0 1 9.3 8h5.4a2 2 0 0 1 1.9 1.7L18 14M4 18h16v-4H4zM9 5h6" '+A+'/><circle cx="8" cy="18.5" r="1.3" '+A+'/><circle cx="16" cy="18.5" r="1.3" '+A+'/>',
      park: '<path d="M12 21v-5M7 16h10M8 16c-2 0-3-1.4-3-3 0-1 .5-1.8 1.2-2.3C5.6 9.4 6 8 7.5 8c.3-2 2-3.2 4.5-3.2S16.2 6 16.5 8c1.5 0 1.9 1.4 1.3 2.7.7.5 1.2 1.3 1.2 2.3 0 1.6-1 3-3 3" '+A+'/>',
      support: '<path d="M5 13v-1a7 7 0 0 1 14 0v1M5 13a2 2 0 0 0 2 2v-4a2 2 0 0 0-2 2zM19 13a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2zM19 15v1a4 4 0 0 1-4 4h-2" '+A+'/>',
      veg: '<path d="M11 21C7 21 4 18 4 14c0-1 .2-2 .6-2.8 2 .3 4 1.6 5 3.4M11 21c0-6 1-11 8-13-1 5-3 8-5 9.5" '+A+'/><path d="M11 21v-3.5" '+A+'/>',
      trust: '<path d="M12 3l7 3v5c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6z" '+A+'/><path d="M9 12l2 2 4-4" '+A+'/>',
      boat: '<path d="M4 15h16l-2 4H6zM6 15V8l8 2v5M6 9 4 11M14 10l3 1v4" '+A+'/>',
      walk: '<circle cx="13" cy="4.5" r="1.6" '+A+'/><path d="M12 8l-2 4 2 2v6M12 12l3 1M10 12L7 16M14 20l-2-6" '+A+'/>',
      balloon: '<path d="M12 14c3.3 0 6-2.9 6-6.5S15.3 1 12 1 6 3.9 6 7.5 8.7 14 12 14zM10 13.5l.5 2.5h3l.5-2.5M10.5 16h3v2h-3z" '+A+'/>',
      culture: '<path d="M4 20h16M5 20l4-12 3 4 3-4 4 12M9 8c0-1.7 1.3-3 3-3s3 1.3 3 3" '+A+'/>',
      bird: '<path d="M16 7a2 2 0 1 1 .01 0M3 18c4 0 6-2 8-5 1.5-2.2 3-4 6-4 0 4-2 6-5 7l3 1-4 1" '+A+'/>',
      beach: '<path d="M3 20h18M12 20V9M12 9c2-3 5-4 8-3-2 1-3 2.5-3.5 4M12 9C10 6 7 5 4 6c2 1 3 2.5 3.5 4" '+A+'/>',
      big5: '<circle cx="12" cy="12" r="2.4" '+A+'/><circle cx="7" cy="8" r="1.5" '+A+'/><circle cx="17" cy="8" r="1.5" '+A+'/><circle cx="5.5" cy="13" r="1.3" '+A+'/><circle cx="18.5" cy="13" r="1.3" '+A+'/>',
      arrow: '<path d="M5 12h14M13 6l6 6-6 6" '+A+'/>',
      check: '<path d="M5 12.5l4.5 4.5L19 7" '+A+'/>',
      phone: '<path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5V20a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" '+A+'/>',
      mail: '<rect x="3" y="5" width="18" height="14" rx="2" '+A+'/><path d="M3.5 7l8.5 6 8.5-6" '+A+'/>',
      pin: '<path d="M12 21s-6.5-5.5-6.5-10.5A6.5 6.5 0 0 1 18.5 10.5C18.5 15.5 12 21 12 21z" '+A+'/><circle cx="12" cy="10.5" r="2.3" '+A+'/>',
      moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z" '+A+'/>',
      calendar: '<rect x="4" y="5" width="16" height="16" rx="2.5" '+A+'/><path d="M4 9h16M8 3v3M16 3v3" '+A+'/>',
      users: '<circle cx="9" cy="8" r="3" '+A+'/><path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 5.8M21 20a5 5 0 0 0-4-4.9" '+A+'/>',
      instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5" '+A+'/><circle cx="12" cy="12" r="3.7" '+A+'/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/>',
      facebook: '<path d="M14 8.5h2.5M14 8.5V6.8c0-1 .6-1.8 1.8-1.8H17M14 8.5V21M14 12.5h3M10 21h4" '+A+'/>',
      tripadvisor: '<circle cx="8" cy="13" r="3.2" '+A+'/><circle cx="16" cy="13" r="3.2" '+A+'/><path d="M8 13h.01M16 13h.01M4.5 10c1.8-1.6 5-2.5 7.5-2.5S17.7 8.4 19.5 10" '+A+'/>',
      menu: '<path d="M4 7h16M4 12h16M4 17h16" '+A+'/>',
      close: '<path d="M6 6l12 12M18 6L6 18" '+A+'/>',
      whatsapp: '<path d="M4 20l1.3-4A7.5 7.5 0 1 1 8 18.7L4 20zM9 8.5c-.3 0-.6.1-.8.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.7 4.2 3.6 2 .8 2.5.7 2.9.6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1 .1-1.2-.1-.1-.3-.2-.6-.4l-1.5-.7c-.2-.1-.4-.1-.6.1l-.6.8c-.1.2-.3.2-.5.1-.7-.3-1.4-.6-2.2-1.5-.6-.7-.6-1-.5-1.1l.4-.5c.1-.2.1-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.6-.4z" fill="currentColor" stroke="none"/>',
      leaf: '<path d="M5 20C4 14 6 6 19 5c0 9-3 14-11 14-1.5 0-2.5-.4-3-1zM8 17c2-3 5-6 8-7" '+A+'/>',
      quote: '<path d="M9 7c-2.5 1-4 3.2-4 6.5V17h4v-4H6.5c0-2 .8-3.4 2.5-4zm9 0c-2.5 1-4 3.2-4 6.5V17h4v-4h-2.5c0-2 .8-3.4 2.5-4z" fill="currentColor" stroke="none"/>',
      chevron: '<path d="M9 6l6 6-6 6" '+A+'/>',
      sparkle: '<path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z" '+A+'/>',
      globe: '<circle cx="12" cy="12" r="8.5" '+A+'/><path d="M3.5 12h17M12 3.5c2.4 2.3 3.8 5.4 3.8 8.5S14.4 18.2 12 20.5C9.6 18.2 8.2 15.1 8.2 12S9.6 5.8 12 3.5z" '+A+'/>'
    };
    function svg(name, cls) {
      return '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" class="'+(cls||'')+'">'+(ICONS[name]||ICONS.leaf)+'</svg>';
    }
    function hydrateIcons(root) {
      (root || document).querySelectorAll('.ico[data-ico]').forEach(function (el) {
        if (el.dataset.done) return;
        el.innerHTML = svg(el.getAttribute('data-ico'));
        el.dataset.done = "1";
        el.style.display = 'inline-flex';
      });
    }
    function stars(n) {
      var s = '';
      for (var i = 0; i < n; i++) s += '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M12 3.2l2.7 5.5 6 .9-4.3 4.2 1 6L12 17l-5.4 2.8 1-6L3.3 9.6l6-.9z" fill="currentColor"/></svg>';
      return s;
    }

    /* ---------------- Data ---------------- */
    var WHY_DESTINATION = [
      { icon: "value", title: "Better Value for Indian Travellers", text: "Luxury lodges, thrilling game drives and personalised experiences — often more affordable than a comparable Europe holiday from India." },
      { icon: "plane", title: "Shorter Flights from India", text: "Convenient connections from major Indian cities make Kenya & Tanzania perfect for a 5–8 day international holiday." },
      { icon: "migration", title: "Witness the Great Migration", text: "Watch millions of wildebeest and zebras cross the Maasai Mara — a true bucket-list moment for every Indian explorer." },
      { icon: "lion", title: "Big Five Like Never Before", text: "See Lion, Leopard, Elephant, Rhino and Buffalo in the wild — far beyond any zoo or wildlife park back home." },
      { icon: "sun", title: "Perfect Weather, Year-Round", text: "A pleasant climate makes it an excellent destination for Indian families, couples, honeymooners and adventure seekers." },
      { icon: "family", title: "Ideal for Indian Families & Groups", text: "From kids seeing wild animals for the first time to grandparents on scenic drives — unforgettable for every generation." },
      { icon: "heart", title: "A Once-in-a-Lifetime Trip", text: "Many Indians visit Europe many times — but a genuine African safari is a singular adventure unlike any other holiday." },
      { icon: "camera", title: "Instagram-Worthy Landscapes", text: "Capture wildlife, golden savannahs, hot air balloons and sunsets that few destinations on earth can match." }
    ];
    var TRUSTED_CITIES = ["Mumbai", "Delhi", "Bengaluru", "Ahmedabad", "Hyderabad", "Chennai", "Pune"];
    var INCLUDES = [
      { icon: "lodge", label: "Hotel & Accommodation" }, { icon: "food", label: "Indian Food" },
      { icon: "jeep", label: "4x4 Safari Jeep" }, { icon: "guide", label: "Expert Local Guide" },
      { icon: "water", label: "Drinking Water" }, { icon: "cab", label: "Airport Cab Transfers" },
      { icon: "park", label: "Park Entry Fees" }, { icon: "support", label: "24/7 On-trip Support" }
    ];
    var KENYA_PACKAGES = [
      { name: "Magical Kenya Bush Safari", days: 6, nights: 5, price: "1,49,000", badge: "Best Seller", desc: "Maasai Mara, Lake Nakuru & Lake Naivasha — the classic Kenyan circuit packed with Big Five sightings.", highlights: ["Maasai Mara", "Lake Nakuru", "Lake Naivasha"], kw: "lion,maasai,mara,kenya", lock: 11, img: "Lions on the golden Maasai Mara at sunrise" },
      { name: "Mara Migration Special", days: 6, nights: 5, price: "1,69,000", badge: "Seasonal", desc: "Time your trip with the Great Migration and witness thundering river crossings of wildebeest and zebra.", highlights: ["River Crossings", "Big Cats", "Balloon add-on"], kw: "wildebeest,migration,africa", lock: 12, img: "Wildebeest crossing the Mara River" },
      { name: "Finest of Kenya Bush Safari", days: 9, nights: 8, price: "2,55,000", badge: "Grand Tour", desc: "Amboseli to Mara via Mt Kenya & Sweetwaters — elephants beneath Kilimanjaro and rhino sanctuaries.", highlights: ["Amboseli", "Mt Kenya", "Sweetwaters"], kw: "elephant,amboseli,kilimanjaro", lock: 13, img: "Elephants in Amboseli with Kilimanjaro behind" }
    ];
    var TANZANIA_PACKAGES = [
      { name: "Ngorongoro & Serengeti Safari", days: 6, nights: 5, price: "1,89,000", badge: "Iconic", desc: "Descend into the Ngorongoro Crater and roam the endless Serengeti — Africa's most legendary arenas.", highlights: ["Ngorongoro", "Serengeti", "Tarangire"], kw: "ngorongoro,crater,tanzania", lock: 21, img: "View into the Ngorongoro Crater" },
      { name: "Tarangire, Manyara & Eyasi", days: 4, nights: 3, price: "1,35,000", badge: "Short Escape", desc: "Giant baobabs, tree-climbing lions and the cultural Lake Eyasi region — compact Northern Tanzania.", highlights: ["Tarangire", "Lake Manyara", "Lake Eyasi"], kw: "baobab,tarangire,elephant", lock: 22, img: "Baobab trees and elephants in Tarangire" },
      { name: "Northern Wilds Adventure", days: 7, nights: 6, price: "2,40,000", badge: "Explorer", desc: "The full Northern Circuit — Tarangire, Ngorongoro, Lake Natron's flamingos and the Serengeti.", highlights: ["Lake Natron", "Ngorongoro", "Serengeti"], kw: "flamingo,lake,africa", lock: 23, img: "Flamingos along Lake Natron" }
    ];
    var KENYA_DEST = [
      { name: "Maasai Mara", tag: "Great Migration & Big Cats", kw: "maasai,mara,lion", lock: 31 },
      { name: "Amboseli", tag: "Elephants & Kilimanjaro views", kw: "amboseli,elephant,kilimanjaro", lock: 32 },
      { name: "Lake Nakuru", tag: "Flamingos & Rhino", kw: "flamingo,lake,nakuru", lock: 33 },
      { name: "Nairobi National Park", tag: "Wildlife beside the city", kw: "nairobi,rhino,park", lock: 34 },
      { name: "Lake Naivasha", tag: "Boat safaris & hippos", kw: "hippo,lake,naivasha", lock: 35 },
      { name: "Samburu Reserve", tag: "Rare northern species", kw: "samburu,giraffe,kenya", lock: 36 },
      { name: "Tsavo", tag: "Red elephants & vast plains", kw: "tsavo,elephant,red", lock: 37 },
      { name: "Diani Beach", tag: "White-sand coast", kw: "diani,beach,kenya", lock: 38 }
    ];
    var TANZANIA_DEST = [
      { name: "Serengeti", tag: "Endless plains & predators", kw: "serengeti,lion,plains", lock: 41 },
      { name: "Ngorongoro Crater", tag: "A natural wildlife arena", kw: "ngorongoro,crater", lock: 42 },
      { name: "Tarangire", tag: "Giant baobabs & elephants", kw: "tarangire,baobab,elephant", lock: 43 },
      { name: "Lake Manyara", tag: "Tree-climbing lions", kw: "manyara,lion,tree", lock: 44 },
      { name: "Zanzibar", tag: "Turquoise beach paradise", kw: "zanzibar,beach,island", lock: 45 },
      { name: "Lake Natron", tag: "Flamingo-pink shores", kw: "natron,flamingo,lake", lock: 46 },
      { name: "Mt Kilimanjaro", tag: "Africa's highest peak", kw: "kilimanjaro,mountain,tanzania", lock: 47 },
      { name: "Mahale Mountains", tag: "Wild chimpanzees", kw: "mahale,chimpanzee,forest", lock: 48 }
    ];
    var WHY_US = [
      { icon: "food", title: "Indian Food Throughout Your Journey", text: "Food matters when travelling abroad. We arrange delicious Indian meals and vegetarian options at selected hotels, lodges and safari camps." },
      { icon: "veg", title: "Vegetarian & Jain-Friendly Options", text: "Whether you prefer vegetarian, vegan or Jain meals, we customise your safari to match your dietary preferences." },
      { icon: "trust", title: "Trusted by 50+ Indian Travellers", text: "We've proudly hosted and guided more than 50 Indian travellers across Kenya and Tanzania, creating unforgettable memories." },
      { icon: "family", title: "Customised for Indian Families & Groups", text: "From honeymoon couples to large family groups, we design packages that suit the style, comfort and budget of Indian travellers." },
      { icon: "lion", title: "Local Safari Experts", text: "Being based in Kenya lets us provide authentic experiences, expert guides and insider knowledge international agencies often cannot." },
      { icon: "jeep", title: "Seamless & Hassle-Free Planning", text: "We handle accommodation, safari vehicles, park fees, airport transfers and daily logistics so you focus on the adventure." }
    ];
    var ACTIVITIES = [
      { icon: "lion", title: "Exciting Game Drives", text: "Spot lions, elephants, leopards, cheetahs, giraffes and zebras. Morning and evening drives offer the best sightings.", kw: "safari,jeep,lion", lock: 51 },
      { icon: "boat", title: "Boat Safaris", text: "Get up close to hippos, crocodiles and colourful birdlife from lakes and rivers — a relaxing, unique perspective.", kw: "boat,hippo,africa", lock: 52 },
      { icon: "walk", title: "Guided Walking Safaris", text: "Step into the wild on foot with expert guides and discover tracks, plants and birds missed on game drives.", kw: "walking,safari,bush", lock: 53 },
      { icon: "balloon", title: "Hot Air Balloon Safaris", text: "Float above the Mara or Serengeti at sunrise for panoramic views of wildlife and endless plains.", kw: "hot,air,balloon,safari", lock: 54 },
      { icon: "camera", title: "Wildlife Photography Tours", text: "Capture stunning photographs of Africa's iconic animals, dramatic landscapes and unforgettable sunsets.", kw: "wildlife,photography,camera", lock: 55 },
      { icon: "culture", title: "Cultural Village Visits", text: "Meet local Maasai communities, learn their traditions and experience authentic African hospitality.", kw: "maasai,village,culture", lock: 56 },
      { icon: "bird", title: "Bird Watching & Nature Tours", text: "East Africa is home to hundreds of bird species — a paradise for bird lovers and nature enthusiasts.", kw: "bird,africa,wildlife", lock: 57 },
      { icon: "beach", title: "Zanzibar Beach Extension", text: "Combine your safari with a relaxing beach holiday in Zanzibar, famed for white sands and clear waters.", kw: "zanzibar,beach,ocean", lock: 58 },
      { icon: "big5", title: "Big Five Safari Experience", text: "Challenge yourself to spot Lion, Leopard, Elephant, Rhino and Buffalo — all on one adventure.", kw: "rhino,buffalo,safari", lock: 59 }
    ];
    var TESTIMONIALS = [
      { name: "Rohan & Priya Mehta", city: "Mumbai", trip: "Honeymoon · 7 Days Kenya", rating: 5, text: "Our honeymoon safari was magical! The Reteti team arranged a candle-lit dinner in the Mara and even managed pure-veg Indian food at every camp. We felt completely at home in Africa." },
      { name: "Anil Deshpande", city: "Pune", trip: "Family Holiday · 6 Days", rating: 5, text: "Travelled with my parents and two kids. The guide was so patient with the children and my mother got her dal-chawal every night! Smooth airport pickups and zero hassle from start to finish." },
      { name: "Sneha Iyer", city: "Bengaluru", trip: "Friends Group · Tanzania", rating: 5, text: "Six friends, one epic trip. Ngorongoro and Serengeti blew our minds. Booking and payment from India was super easy and Kim answered every WhatsApp within minutes." },
      { name: "Rajesh & Meena Gupta", city: "Delhi", trip: "Family · Kenya & Tanzania", rating: 5, text: "Best decision to choose an India-friendly operator. Jain meals were respected throughout, and the Great Migration river crossing left all of us speechless. Worth every rupee." },
      { name: "Kavita Shah", city: "Ahmedabad", trip: "Family with Parents", rating: 5, text: "As a pure vegetarian Gujarati family we were worried about food abroad — Reteti completely took care of us. Hot khichdi after a long game drive felt like heaven!" },
      { name: "Vikram Reddy", city: "Hyderabad", trip: "Photography Safari", rating: 5, text: "As a hobby photographer this was a dream. Bernard knew exactly where the cheetahs would be and positioned the jeep perfectly for the light. I came back with portfolio-worthy shots." },
      { name: "Neha & Arjun Kapoor", city: "Chennai", trip: "Couple · 5 Days", rating: 5, text: "From the warm welcome at Nairobi airport to the farewell, everything was personal. They planned the whole trip around our interests. We're already planning our next safari with them!" }
    ];
    var PARTNERS = [
      { name: "Magical Kenya", file: "assets/partners/magical-kenya.png" },
      { name: "Ecotourism Kenya", file: "assets/partners/ecotourism.png" },
      { name: "Tourism Regulatory Authority", file: "assets/partners/tra.png" },
      { name: "Kenya Wildlife Service", file: "assets/partners/kws.png" },
      { name: "Amref Flying Doctors", file: "assets/partners/amref.png" },
      { name: "Tour Operators Society of Kenya", file: "assets/partners/tosk.png" }
    ];
    var MONTHS = (function () {
      var names = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      var out = [], y = 2026, m = 6;
      for (var i = 0; i < 12; i++) { out.push(names[m] + " " + y); m++; if (m > 11) { m = 0; y++; } }
      return out;
    })();
    var TRAVELLERS = ["1","2","3","4","5","6","7","8","9","10","11","12","13+"];
    var BUDGETS = ["₹50K – ₹1 Lakh", "₹1 – ₹2 Lakh", "₹2 – ₹3 Lakh", "₹3 – ₹5 Lakh", "₹5 – ₹10 Lakh", "₹10 Lakh+"];
    var DESTS = ["Kenya", "Tanzania", "Kenya & Tanzania"];
    var TRIPS = ["Family Holiday", "Honeymoon", "Friends Group", "Solo Travel", "Corporate Group"];
    var TESTI_COLORS = ["#E9A23B", "#6BA12B", "#E2683A", "#2E6B30", "#C9821D", "#3a7d3c", "#b5532a"];

    /* ---------------- helpers ---------------- */
    function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
    function el(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }

    /* image box html */
    function imgHTML(opt) {
      var ratio = opt.ratio ? 'aspect-ratio:' + opt.ratio + ';' : '';
      var src = "https://loremflickr.com/" + (opt.w || 900) + "/" + (opt.h || 650) + "/" + encodeURIComponent(opt.kw) + "?lock=" + (opt.lock || 1);
      var ph = '<div class="ph">' +
        (opt.corner ? '<span class="ph-corner">' + esc(opt.corner) + '</span>' : '') +
        '<span class="ico ph-ico" data-ico="' + (opt.icon || 'camera') + '"></span>' +
        '<span class="ph-label">' + esc(opt.label || '') + '</span>' +
        (opt.tag ? '<span class="ph-tag">' + esc(opt.tag) + '</span>' : '') + '</div>';
      var img = '<img loading="lazy" alt="' + esc(opt.label || '') + '" data-src="' + src + '" ' +
        'onload="this.classList.add(\'loaded\');var p=this.parentNode.querySelector(\'.ph\');if(p)p.style.opacity=0;" ' +
        'onerror="this.remove();" />';
      return '<div class="imgbox-inner" style="position:absolute;inset:0;' + ratio + '">' + ph + img + '</div>';
    }
    /* hydrate declarative imgbox elements (those with data-img) */
    function hydrateImages() {
      document.querySelectorAll('.imgbox[data-img]').forEach(function (box) {
        if (box.dataset.done) return;
        box.dataset.done = "1";
        var opt = JSON.parse(box.getAttribute('data-img'));
        var src = "https://loremflickr.com/" + (opt.w || 900) + "/" + (opt.h || 650) + "/" + encodeURIComponent(opt.kw) + "?lock=" + (opt.lock || 1);
        var ph = el('<div class="ph"></div>');
        if (opt.corner) ph.appendChild(el('<span class="ph-corner">' + esc(opt.corner) + '</span>'));
        ph.appendChild(el('<span class="ico ph-ico" data-ico="' + (opt.icon || 'camera') + '"></span>'));
        ph.appendChild(el('<span class="ph-label">' + esc(opt.label || '') + '</span>'));
        if (opt.tag) ph.appendChild(el('<span class="ph-tag">' + esc(opt.tag) + '</span>'));
        box.appendChild(ph);
        var img = new Image();
        img.loading = "lazy";
        img.alt = opt.label || '';
        img.onload = function () { img.classList.add('loaded'); ph.style.opacity = 0; };
        img.onerror = function () { img.remove(); };
        img.src = src;
        box.appendChild(img);
      });
    }

    /* ---------------- Renderers ---------------- */
    function renderWhy() {
      var g = document.getElementById('why-grid');
      WHY_DESTINATION.forEach(function (w, i) {
        g.appendChild(el(
          '<div class="reveal why-card" style="transition-delay:' + ((i % 4) * 70) + 'ms;background:linear-gradient(165deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03));border:1px solid rgba(164,214,94,0.16);border-radius:var(--r-lg);padding:26px 24px;position:relative">' +
          '<div style="position:absolute;top:20px;right:22px;font-family:var(--display);font-size:34px;color:rgba(164,214,94,0.18)">' + String(i + 1).padStart(2, "0") + '</div>' +
          '<div style="width:52px;height:52px;border-radius:15px;background:linear-gradient(150deg, var(--lime), var(--lime-deep));display:grid;place-items:center;color:var(--forest-2);margin-bottom:16px"><span class="ico" data-ico="' + w.icon + '" style="width:27px;height:27px"></span></div>' +
          '<h3 class="head" style="font-weight:800;font-size:18px;color:#F3FBE9;margin-bottom:8px;line-height:1.2">' + esc(w.title) + '</h3>' +
          '<p style="font-size:14px;line-height:1.6;color:rgba(243,251,233,0.72)">' + esc(w.text) + '</p></div>'));
      });
    }
    function renderTrusted() {
      var g = document.getElementById('trusted-cities');
      TRUSTED_CITIES.forEach(function (c) { g.appendChild(el('<span>' + esc(c) + '</span>')); });
    }
    function renderIncludes() {
      var g = document.getElementById('includes-grid');
      INCLUDES.forEach(function (it, i) {
        g.appendChild(el(
          '<div class="reveal include-card" style="transition-delay:' + ((i % 4) * 70) + 'ms;background:var(--white);border-radius:var(--r-lg);padding:24px 22px;box-shadow:var(--shadow-sm);border:1px solid var(--line);display:flex;align-items:center;gap:16px;transition:transform .2s ease, box-shadow .2s ease">' +
          '<div style="width:50px;height:50px;border-radius:14px;flex-shrink:0;background:rgba(140,198,63,0.15);display:grid;place-items:center;color:var(--lime-deep)"><span class="ico" data-ico="' + it.icon + '" style="width:26px;height:26px"></span></div>' +
          '<div class="head" style="font-weight:800;font-size:15.5px;color:var(--forest);line-height:1.25">' + esc(it.label) + '</div></div>'));
      });
    }
    function packageCard(p, theme, i) {
      var accent = theme === "kenya" ? "var(--gold)" : "var(--sunset)";
      var accentSoft = theme === "kenya" ? "rgba(233,162,59,0.16)" : "rgba(226,104,58,0.14)";
      var hlColor = theme === "kenya" ? "var(--gold-deep)" : "var(--clay)";
      var hl = p.highlights.map(function (h) {
        return '<span style="font-size:12px;font-weight:700;font-family:var(--head);color:' + hlColor + ';background:' + accentSoft + ';padding:5px 11px;border-radius:100px">' + esc(h) + '</span>';
      }).join('');
      return el(
        '<article class="reveal pkg-card" style="transition-delay:' + (i * 70) + 'ms;background:var(--white);border-radius:var(--r-xl);overflow:hidden;box-shadow:var(--shadow-sm);border:1px solid var(--line);display:flex;flex-direction:column;transition:transform .25s ease, box-shadow .25s ease">' +
        '<div style="position:relative">' +
          '<div class="imgbox" style="aspect-ratio:16 / 10;position:relative">' + imgHTML({ kw: p.kw, lock: p.lock, icon: "camera", label: p.img, corner: theme === "kenya" ? "Kenya" : "Tanzania" }) + '</div>' +
          '<span style="position:absolute;top:14px;right:14px;background:' + accent + ';color:var(--forest-2);font-family:var(--head);font-weight:800;font-size:12px;padding:7px 13px;border-radius:100px;box-shadow:0 6px 16px rgba(0,0,0,0.2);z-index:3">' + esc(p.badge) + '</span>' +
          '<div style="position:absolute;left:14px;bottom:14px;display:flex;gap:8px;z-index:3">' +
            '<span style="display:inline-flex;align-items:center;gap:6px;background:rgba(8,28,12,0.8);color:#eaf6dd;font-family:var(--head);font-weight:700;font-size:12.5px;padding:6px 11px;border-radius:100px"><span class="ico" data-ico="sun" style="width:14px;height:14px"></span> ' + p.days + ' Days</span>' +
            '<span style="display:inline-flex;align-items:center;gap:6px;background:rgba(8,28,12,0.8);color:#eaf6dd;font-family:var(--head);font-weight:700;font-size:12.5px;padding:6px 11px;border-radius:100px"><span class="ico" data-ico="moon" style="width:14px;height:14px"></span> ' + p.nights + ' Nights</span>' +
          '</div>' +
        '</div>' +
        '<div style="padding:24px 24px 26px;display:flex;flex-direction:column;flex:1">' +
          '<h3 class="head" style="font-weight:800;font-size:22px;color:var(--forest);margin-bottom:10px;line-height:1.15">' + esc(p.name) + '</h3>' +
          '<p style="font-size:14.5px;line-height:1.6;color:var(--ink-soft);margin-bottom:16px">' + esc(p.desc) + '</p>' +
          '<div style="display:flex;flex-wrap:wrap;gap:7px;margin-bottom:20px">' + hl + '</div>' +
          '<div style="margin-top:auto;display:flex;align-items:flex-end;justify-content:space-between;gap:12px;padding-top:18px;border-top:1px dashed var(--line)">' +
            '<div><div style="font-size:12px;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.08em">From / person</div>' +
            '<div class="head" style="font-weight:900;font-size:26px;color:var(--forest);line-height:1">₹' + esc(p.price) + '</div></div>' +
            '<button class="btn btn-forest js-form" style="padding:13px 20px;font-size:14px">Get a Quote <span class="ico" data-ico="arrow"></span></button>' +
          '</div></div></article>');
    }
    function renderPackages() {
      var kg = document.getElementById('kenya-grid'), tg = document.getElementById('tanzania-grid');
      KENYA_PACKAGES.forEach(function (p, i) { kg.appendChild(packageCard(p, "kenya", i)); });
      TANZANIA_PACKAGES.forEach(function (p, i) { tg.appendChild(packageCard(p, "tanzania", i)); });
    }
    function destSlide(d, theme) {
      var accent = theme === "kenya" ? "var(--gold)" : "var(--sunset)";
      return el(
        '<div class="dest-slide">' + imgHTML({ kw: d.kw, lock: d.lock, icon: "camera", label: d.name }) +
        '<div class="scrim"></div>' +
        '<div class="info">' +
          '<span style="display:inline-flex;align-items:center;gap:6px;background:' + accent + ';color:var(--forest-2);font-family:var(--head);font-weight:800;font-size:11px;padding:4px 10px;border-radius:100px;margin-bottom:9px"><span class="ico" data-ico="pin" style="width:12px;height:12px"></span> ' + (theme === "kenya" ? "Kenya" : "Tanzania") + '</span>' +
          '<h4 class="head" style="font-weight:800;font-size:21px;color:#fff;line-height:1.1;text-shadow:0 2px 10px rgba(0,0,0,0.5)">' + esc(d.name) + '</h4>' +
          '<div style="font-size:12.5px;color:var(--lime-bright);font-weight:700;margin-top:3px">' + esc(d.tag) + '</div>' +
        '</div></div>');
    }
    function renderDestinations() {
      var kg = document.getElementById('kenya-dest'), tg = document.getElementById('tanzania-dest');
      KENYA_DEST.forEach(function (d) { kg.appendChild(destSlide(d, "kenya")); });
      TANZANIA_DEST.forEach(function (d) { tg.appendChild(destSlide(d, "tanzania")); });
    }
    function renderWhyUs() {
      var g = document.getElementById('whyus-grid');
      WHY_US.forEach(function (w, i) {
        g.appendChild(el(
          '<div class="reveal whyus-card" style="transition-delay:' + ((i % 2) * 70) + 'ms;background:var(--white);border-radius:var(--r-lg);padding:24px 22px;box-shadow:var(--shadow-sm);border:1px solid var(--line);transition:transform .2s ease, box-shadow .2s ease">' +
          '<div style="width:46px;height:46px;border-radius:13px;background:rgba(140,198,63,0.15);display:grid;place-items:center;color:var(--lime-deep);margin-bottom:14px"><span class="ico" data-ico="' + w.icon + '" style="width:24px;height:24px"></span></div>' +
          '<h3 class="head" style="font-weight:800;font-size:16.5px;color:var(--forest);margin-bottom:7px;line-height:1.25">' + esc(w.title) + '</h3>' +
          '<p style="font-size:13.8px;line-height:1.55;color:var(--ink-soft)">' + esc(w.text) + '</p></div>'));
      });
    }
    function renderActivities() {
      var g = document.getElementById('activities-grid');
      ACTIVITIES.forEach(function (a, i) {
        g.appendChild(el(
          '<div class="reveal act-card" style="transition-delay:' + ((i % 3) * 70) + 'ms;background:var(--white);border-radius:var(--r-lg);overflow:hidden;box-shadow:var(--shadow-sm);border:1px solid var(--line);transition:transform .22s ease, box-shadow .22s ease">' +
          '<div style="position:relative"><div class="imgbox" style="aspect-ratio:16 / 10;position:relative">' + imgHTML({ kw: a.kw, lock: a.lock, icon: a.icon, label: a.title }) + '</div>' +
            '<div style="position:absolute;left:16px;bottom:-22px;width:50px;height:50px;border-radius:14px;background:linear-gradient(150deg, var(--lime), var(--lime-deep));display:grid;place-items:center;color:var(--forest-2);box-shadow:0 8px 20px rgba(8,28,12,0.3);z-index:3"><span class="ico" data-ico="' + a.icon + '" style="width:26px;height:26px"></span></div></div>' +
          '<div style="padding:30px 22px 24px"><h3 class="head" style="font-weight:800;font-size:18.5px;color:var(--forest);margin-bottom:8px;line-height:1.2">' + esc(a.title) + '</h3>' +
            '<p style="font-size:14px;line-height:1.55;color:var(--ink-soft)">' + esc(a.text) + '</p></div></div>'));
      });
    }
    function renderTestimonials() {
      var g = document.getElementById('testi-track');
      TESTIMONIALS.forEach(function (t, i) {
        g.appendChild(el(
          '<div class="testi-slide">' +
          '<span class="ico" data-ico="quote" style="width:38px;height:38px;color:var(--gold)"></span>' +
          '<span class="stars">' + stars(t.rating) + '</span>' +
          '<p style="font-size:14.5px;line-height:1.6;color:rgba(243,251,233,0.86);margin:12px 0 18px;flex:1">"' + esc(t.text) + '"</p>' +
          '<div style="display:flex;align-items:center;gap:12px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.1)">' +
            '<div style="width:46px;height:46px;border-radius:50%;background:' + TESTI_COLORS[i % TESTI_COLORS.length] + ';display:grid;place-items:center;font-family:var(--head);font-weight:800;font-size:17px;color:#fff;flex-shrink:0">' + esc(t.name[0]) + '</div>' +
            '<div><div class="head" style="font-weight:800;font-size:15px;color:#fff;line-height:1.2">' + esc(t.name) + '</div>' +
            '<div style="font-size:12.5px;color:var(--lime-bright);font-weight:600;margin-top:2px"><span class="ico" data-ico="pin" style="width:12px;height:12px;display:inline-flex;vertical-align:-1px"></span> ' + esc(t.city) + ' · ' + esc(t.trip) + '</div></div>' +
          '</div></div>'));
      });
    }
    function renderPartners() {
      var g = document.getElementById('partners-grid');
      PARTNERS.forEach(function (p) {
        g.appendChild(el('<div class="partner-card" title="' + esc(p.name) + '"><img src="' + p.file + '" alt="' + esc(p.name) + '" /></div>'));
      });
    }
    function renderFooter() {
      var s = document.getElementById('footer-social');
      [["instagram", CONTACT.ig], ["facebook", CONTACT.fb], ["tripadvisor", CONTACT.ta]].forEach(function (pair) {
        s.appendChild(el('<a href="' + pair[1] + '" target="_blank" rel="noopener" aria-label="' + pair[0] + '"><span class="ico" data-ico="' + pair[0] + '" style="width:20px;height:20px"></span></a>'));
      });
      var c = document.getElementById('footer-contact');
      [["pin", CONTACT.location, "#"], ["phone", CONTACT.phone, "tel:" + PHONE_RAW], ["mail", CONTACT.email, "mailto:" + CONTACT.email]].forEach(function (row) {
        c.appendChild(el('<a href="' + row[2] + '"><span class="fc-ico"><span class="ico" data-ico="' + row[0] + '"></span></span><span>' + esc(row[1]) + '</span></a>'));
      });
      document.getElementById('footer-copy').textContent = "© " + new Date().getFullYear() + " Reteti Adventure Safaris. All rights reserved.";
    }
    document.querySelectorAll('.stars[data-stars]').forEach(function (s) { s.innerHTML = stars(parseInt(s.getAttribute('data-stars'), 10)); });

    /* ---------------- Quote form ---------------- */
    function optionList(arr) { return arr.map(function (x) { return '<option>' + esc(x) + '</option>'; }).join(''); }
    function buildForm(container, ctaLabel) {
      var html =
        '<form novalidate>' +
        '<div class="grid qf-grid" style="grid-template-columns:1fr 1fr;gap:15px">' +
          fieldText("name", "Full Name", true, "e.g. Priya Sharma") +
          '<div class="ff" data-k="mobile"><label>Mobile Number <span class="req">*</span></label>' +
            '<div class="phone-row"><span class="cc">🇮🇳 +91</span><input data-f="mobile" inputmode="numeric" maxlength="10" placeholder="10-digit number" /></div>' +
            '<span class="err"></span></div>' +
          fieldText("email", "Email Address", true, "you@email.com", "email") +
          fieldText("city", "City (India)", true, "e.g. Mumbai") +
          fieldSelect("dest", "Preferred Destination", true, DESTS) +
          fieldSelect("month", "Travel Month", false, MONTHS, "Not Decided Yet") +
          fieldSelect("travelers", "Number of Travellers", true, TRAVELLERS) +
          fieldSelect("budget", "Estimated Budget / person", false, BUDGETS) +
          '<div class="ff full"><label>Type of Trip</label><div class="trip-chips" style="display:flex;flex-wrap:wrap;gap:8px">' +
            TRIPS.map(function (t) { return '<button type="button" class="trip-chip" data-trip="' + esc(t) + '">' + esc(t) + '</button>'; }).join('') +
          '</div></div>' +
          '<div class="ff full"><label>Special Requirements</label><textarea data-f="notes" placeholder="Indian food, vegetarian / Jain meals, luxury lodges, kids-friendly safari, etc."></textarea></div>' +
        '</div>' +
        '<button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:20px;padding:17px;font-size:16px">' + esc(ctaLabel) + ' <span class="ico" data-ico="arrow"></span></button>' +
        '<p style="font-size:12px;color:var(--muted);text-align:center;margin-top:12px">🔒 Your details are safe with us. No spam, ever.</p>' +
        '</form>';
      container.innerHTML = html;
      hydrateIcons(container);

      var form = container.querySelector('form');
      var trip = "";
      container.querySelectorAll('.trip-chip').forEach(function (chip) {
        chip.addEventListener('click', function () {
          container.querySelectorAll('.trip-chip').forEach(function (c) { c.classList.remove('on'); });
          chip.classList.add('on'); trip = chip.getAttribute('data-trip');
        });
      });

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var vals = {};
        ['name','mobile','email','city','dest','month','travelers','budget','notes'].forEach(function (k) {
          var input = container.querySelector('[data-f="' + k + '"]');
          vals[k] = input ? input.value : '';
        });
        var errs = {};
        if (!vals.name.trim()) errs.name = "Please enter your name";
        if (!/^\d{10}$/.test(vals.mobile.replace(/\D/g, ""))) errs.mobile = "Enter a valid 10-digit mobile number";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals.email)) errs.email = "Enter a valid email address";
        if (!vals.city.trim()) errs.city = "Please enter your city";
        if (!vals.dest) errs.dest = "Choose a destination";
        if (!vals.travelers) errs.travelers = "Select travellers";

        container.querySelectorAll('.ff').forEach(function (ff) {
          var k = ff.getAttribute('data-k');
          var errSpan = ff.querySelector('.err');
          if (k && errs[k]) { ff.classList.add('invalid'); if (errSpan) errSpan.textContent = errs[k]; }
          else { ff.classList.remove('invalid'); if (errSpan) errSpan.textContent = ''; }
        });

        if (Object.keys(errs).length === 0) {
          showSuccess(container, vals);
        } else {
          var firstBad = container.querySelector('.ff.invalid input, .ff.invalid select');
          if (firstBad) firstBad.focus();
        }
      });
    }
    function fieldText(k, label, req, ph, type) {
      return '<div class="ff" data-k="' + k + '"><label>' + esc(label) + (req ? ' <span class="req">*</span>' : '') + '</label>' +
        '<input data-f="' + k + '" ' + (type ? 'type="' + type + '" ' : '') + 'placeholder="' + esc(ph || '') + '" /><span class="err"></span></div>';
    }
    function fieldSelect(k, label, req, arr, extra) {
      return '<div class="ff" data-k="' + k + '"><label>' + esc(label) + (req ? ' <span class="req">*</span>' : '') + '</label>' +
        '<select data-f="' + k + '"><option value="">Choose…</option>' + optionList(arr) + (extra ? '<option>' + esc(extra) + '</option>' : '') + '</select><span class="err"></span></div>';
    }
    function showSuccess(container, vals) {
      var first = (vals.name || '').split(' ')[0] || 'traveller';
      var dest = vals.dest || 'Kenya & Tanzania';
      container.innerHTML =
        '<div style="text-align:center;padding:30px 10px">' +
        '<div style="width:78px;height:78px;border-radius:50%;background:rgba(140,198,63,0.18);display:grid;place-items:center;margin:0 auto 20px;color:var(--lime-deep)"><span class="ico" data-ico="check" style="width:42px;height:42px"></span></div>' +
        '<h3 class="head" style="font-weight:800;font-size:25px;color:var(--forest);margin-bottom:10px">Dhanyavaad, ' + esc(first) + '! 🎉</h3>' +
        '<p style="font-size:15.5px;color:var(--ink-soft);line-height:1.6;max-width:400px;margin:0 auto 22px">Your request is in. Our India desk will craft your personalised ' + esc(dest) + ' itinerary and reach out within 24 hours.</p>' +
        '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">' +
          '<a href="https://wa.me/' + PHONE_RAW + '" target="_blank" rel="noopener" class="btn btn-wa"><span class="ico" data-ico="whatsapp"></span> Message us now</a>' +
          '<button class="btn btn-ghost js-resubmit">Submit another</button>' +
        '</div></div>';
      hydrateIcons(container);
      var rb = container.querySelector('.js-resubmit');
      if (rb) rb.addEventListener('click', function () { buildForm(container, container.getAttribute('data-cta') || 'Get My Free Safari Quote'); });
    }

    /* ---------------- Sliders ---------------- */
    function animateScrollX(elm, target, dur) {
      dur = dur || 460;
      var start = elm.scrollLeft, diff = target - start;
      if (Math.abs(diff) < 1) return;
      var t0 = (window.performance && performance.now) ? performance.now() : Date.now();
      elm.style.scrollSnapType = "none";
      clearTimeout(elm._snapT);
      clearInterval(elm._animT);
      elm._animT = setInterval(function () {
        var now = (window.performance && performance.now) ? performance.now() : Date.now();
        var p = Math.min(1, (now - t0) / dur);
        var e = 1 - Math.pow(1 - p, 3);
        elm.scrollLeft = start + diff * e;
        if (p >= 1) {
          clearInterval(elm._animT);
          elm.scrollLeft = target;
          elm._snapT = setTimeout(function () { elm.style.scrollSnapType = "x mandatory"; }, 60);
        }
      }, 16);
    }
    function initSlider(sliderEl, trackSel, slideSel, interval) {
      var track = sliderEl.querySelector(trackSel);
      var paused = false;
      function step(dir) {
        var card = track.querySelector(slideSel);
        var cw = card ? card.offsetWidth + 18 : 320;
        var max = track.scrollWidth - track.clientWidth;
        var target;
        if (dir > 0 && track.scrollLeft >= max - 8) target = 0;
        else if (dir < 0 && track.scrollLeft <= 8) target = max;
        else target = Math.max(0, Math.min(max, track.scrollLeft + cw * dir));
        animateScrollX(track, target);
      }
      sliderEl.querySelector('.js-next').addEventListener('click', function () { step(1); });
      sliderEl.querySelector('.js-prev').addEventListener('click', function () { step(-1); });
      sliderEl.addEventListener('mouseenter', function () { paused = true; });
      sliderEl.addEventListener('mouseleave', function () { paused = false; });
      setInterval(function () { if (!paused) step(1); }, interval);
    }

    /* ---------------- Nav / scroll / reveal ---------------- */
    function scrollToEl(target) { if (target) target.scrollIntoView({ behavior: "smooth", block: "start" }); }
    function scrollToForm() {
      var plan = document.getElementById('plan'), quote = document.getElementById('quote');
      var mid = window.scrollY + window.innerHeight / 2;
      function dist(e) { return e ? Math.abs(e.getBoundingClientRect().top + window.scrollY - mid) : Infinity; }
      scrollToEl(dist(plan) <= dist(quote) ? plan : quote);
    }
    function initNav() {
      var nav = document.getElementById('nav');
      function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 40); }
      onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

      var menu = document.getElementById('mobile-menu');
      var toggle = document.getElementById('mobile-toggle');
      toggle.addEventListener('click', function () {
        var open = menu.classList.toggle('open');
        toggle.querySelector('.ico').innerHTML = svg(open ? 'close' : 'menu');
      });

      document.querySelectorAll('.js-scroll').forEach(function (a) {
        a.addEventListener('click', function (e) {
          var href = a.getAttribute('href');
          if (href && href.charAt(0) === '#') {
            e.preventDefault();
            menu.classList.remove('open');
            toggle.querySelector('.ico').innerHTML = svg('menu');
            scrollToEl(document.querySelector(href));
          }
        });
      });
    }
    function initFormButtons() {
      document.addEventListener('click', function (e) {
        var btn = e.target.closest && e.target.closest('.js-form');
        if (btn) { e.preventDefault(); scrollToForm(); }
      });
    }
    function initReveal() {
      var els = document.querySelectorAll('.reveal:not(.in)');
      if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      els.forEach(function (e) { io.observe(e); });
    }

    /* ---------------- Boot ---------------- */
    function boot() {
      renderWhy(); renderTrusted(); renderIncludes(); renderPackages();
      renderDestinations(); renderWhyUs(); renderActivities(); renderTestimonials();
      renderPartners(); renderFooter();

      document.querySelectorAll('.form-card').forEach(function (fc) {
        var cta = fc.getAttribute('data-form') === 'plan' ? 'Get My Free Safari Quote' : 'Get My Free Safari Quote';
        fc.setAttribute('data-cta', cta);
        buildForm(fc, cta);
      });

      hydrateImages();
      hydrateIcons(document);

      initSlider(document.querySelector('[data-slider="kenya"]'), '.dest-track', '.dest-slide', 3800);
      initSlider(document.querySelector('[data-slider="tanzania"]'), '.dest-track', '.dest-slide', 4200);
      initSlider(document.querySelector('[data-slider="testi"]'), '.testi-track', '.testi-slide', 4200);

      initNav(); initFormButtons(); initReveal();

      document.getElementById('page-loading').style.display = 'none';
      document.getElementById('app').style.display = 'block';
      requestAnimationFrame(initReveal);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
    else boot();
  })();
