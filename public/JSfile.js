const Home = {
  template: `
    <section class="home">
      <div class="homeSection1">
        <div class="homeText1">Australian Traveller</div>
        <div class="homeText2">Travel, Experience, and Share Australia Together!</div>
      </div>
      <div class="homeContainer">
        <div 
          v-for="(city, index) in cities" 
          :key="index" 
          class="homeBox"
          @click="navigateToCity(city.name.toLowerCase())">
          <div class="homeBoxContent">
            <img :src="city.image" :alt="'Image of ' + city.name">
            <p class="boxText">{{ city.name }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      cities: [
        { name: 'Melbourne', image: 'https://images.unsplash.com/photo-1470294402047-fc1b5f39bd99' },
        { name: 'Sydney', image: 'https://images.unsplash.com/photo-1599352318473-abbc53b44a9a' },
        { name: 'Brisbane', image: 'https://images.unsplash.com/photo-1656202551995-cdc45daeb49b' },
      ],
    };
  },
  methods: {
    navigateToCity(city) {
      this.$router.push(`/${city}`);
    },
  },
  created() {
    fetch('/api/places')
      .then(res => res.json())
      .then(data => {
        this.places = data;
      });
  }
};

const places = [
  {
    id: 1,
    name: "Flinders Street Railway Station",
    address: "Flinders St, Melbourne VIC 3000",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1470294402047-fc1b5f39bd99",
    city: "Melbourne",
    ticketPrice: 0,
    description: "Flinders Street Railway Station, Melbourne’s iconic landmark, is renowned for its Edwardian architecture, yellow facade, and famous clocks. Opened in 1910, it serves as the city’s central transit hub and a popular meeting spot.",
    openingTime: "24/7",
    Family: 1,
    Friends: 1,
    tourist: 1,
    type: "historical",
    Accessibility: 1
  },
  {
    id: 2,
    name: "Luna Park",
    address: "18 Lower Esplanade, St Kilda VIC 3182",
    rating: 4,
    image: "https://images.unsplash.com/photo-1552709216-b3838b41b2dd",
    city: "Melbourne",
    ticketPrice: 10,
    description: "Luna Park is a historic amusement park in Melbourne's St Kilda. Known for its iconic smiling entrance, it offers thrilling rides, carnival games, and family-friendly fun by the beach.",
    openingTime: "11:00 AM - 8:00 PM",
    Family: 1,
    Friends: 1,
    tourist: 1,
    type: "amusement",
    Accessibility: 0
  },
  {
    id: 3,
    name: "State Library of Victoria",
    address: "328 Swanston St, Melbourne VIC 3000",
    rating: 4,
    image: "https://images.unsplash.com/photo-1515199232915-d74ea00e6149",
    city: "Melbourne",
    ticketPrice: 0,
    description: "The State Library of Victoria is a grand heritage building with an impressive reading room, exhibitions, and vast collections of books, making it a cultural icon in Melbourne.",
    openingTime: "10:00 AM - 6:00 PM",
    Family: 1,
    Friends: 0,
    tourist: 1,
    type: "cultural",
    Accessibility: 1
  },
  {
    id: 4,
    name: "Block Arcade",
    address: "282 Collins St, Melbourne VIC 3000",
    rating: 4,
    image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735",
    city: "Melbourne",
    ticketPrice: 0,
    description: "The Block Arcade is a historic shopping arcade in Melbourne, featuring stunning 19th-century architecture, boutique shops, and charming cafes.",
    openingTime: "9:00 AM - 5:30 PM",
    Family: 0,
    Friends: 1,
    tourist: 1,
    type: "shopping",
    Accessibility: 0
  },
  {
    id: 5,
    name: "Melbourne Zoo",
    address: "Elliott Ave, Parkville VIC 3052",
    rating: 4,
    image: "https://images.unsplash.com/photo-1556513584-7452cfa1c201",
    city: "Melbourne",
    ticketPrice: 42,
    description: "Melbourne Zoo is Australia's oldest zoo, housing a diverse range of animals in naturalistic habitats, with a focus on conservation and education.",
    openingTime: "9:00 AM - 5:00 PM",
    Family: 1,
    Friends: 1,
    tourist: 1,
    type: "wildlife",
    Accessibility: 1
  },
  {
    id: 6,
    name: "Brighton Beach",
    address: "Esplanade, Brighton, Bayside, Victoria 3186 Australia",
    rating: 4,
    image: "https://images.unsplash.com/photo-1558954002-ebe14bde5016",
    city: "Melbourne",
    ticketPrice: 0,
    description: "Brighton Beach is famous for its colorful bathing boxes, soft sand, and beautiful ocean views, making it a perfect spot for relaxation and photography.",
    openingTime: "24/7",
    Family: 1,
    Friends: 1,
    tourist: 1,
    type: "beach",
    Accessibility: 1
  },
  {
    id: 7,
    name: "Sydney Harbour",
    address: "Sydney Hbr Brg, Sydney NSW",
    rating: 4,
    image: "https://images.unsplash.com/photo-1532984601283-d68a3ee3e51f",
    city: "Sydney",
    ticketPrice: 0,
    description: "Sydney Harbour is a stunning natural harbor offering iconic views of the Sydney Opera House and Harbour Bridge, along with ferry rides and scenic walks.",
    openingTime: "24/7",
    Family: 1,
    Friends: 1,
    tourist: 1,
    type: "scenic",
    Accessibility: 1
  },
  {
    id: 8,
    name: "Opera House",
    address: "Bennelong Point, Sydney NSW 2000",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1526198968359-5a74beda17f8",
    city: "Sydney",
    ticketPrice: 43,
    description: "The Sydney Opera House, a UNESCO World Heritage Site, is an architectural marvel and a hub for world-class performances and cultural events.",
    openingTime: "9:00 AM - 5:00 PM",
    Family: 0,
    Friends: 1,
    tourist: 1,
    type: "cultural",
    Accessibility: 1
  },
  {
    id: 9,
    name: "Harbour Bridge",
    address: "Sydney Hbr Brg, Sydney NSW",
    rating: 5,
    image: "https://images.unsplash.com/photo-1647499681644-da181425a61a",
    city: "Sydney",
    ticketPrice: 0,
    description: "The Sydney Harbour Bridge, affectionately known as the 'Coathanger,' is a must-see landmark offering spectacular views of the city and harbor.",
    openingTime: "24/7",
    Family: 1,
    Friends: 1,
    tourist: 1,
    type: "scenic",
    Accessibility: 0
  },
  {
    id: 10,
    name: "The Queen Victoria Building",
    address: "455 George St, Sydney NSW 2000",
    rating: 4,
    image: "https://images.unsplash.com/photo-1555753359-2964c809e729",
    city: "Sydney",
    ticketPrice: 0,
    description: "The Queen Victoria Building is a historic shopping destination in Sydney, boasting elegant architecture and a variety of premium stores.",
    openingTime: "9:00 AM - 6:00 PM",
    Family: 0,
    Friends: 1,
    tourist: 1,
    type: "shopping",
    Accessibility: 1
  },
  {
    id: 11,
    name: "WILD LIFE Sydney Zoo",
    address: "1-5 Wheat Rd, Sydney NSW 2000",
    rating: 3.5,
    image: "https://images.unsplash.com/photo-1547006933-a4ab8704ef6f",
    city: "Sydney",
    ticketPrice: 40,
    description: "WILD LIFE Sydney Zoo is a compact, family-friendly zoo featuring a variety of Australian wildlife, from kangaroos to koalas and crocodiles.",
    openingTime: "10:00 AM - 5:00 PM",
    Family: 1,
    Friends: 1,
    tourist: 1,
    type: "wildlife",
    Accessibility: 1
  },
  {
    id: 12,
    name: "Sydney Tower Eye",
    address: "Westfield Sydney, Level 5/108 Market St, Sydney NSW 2000",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1523164171945-ce972a85bdd1",
    city: "Sydney",
    ticketPrice: 30,
    description: "Sydney Tower Eye offers panoramic views of the city from its observation deck and a thrilling Skywalk experience for adventurous visitors.",
    openingTime: "10:00 AM - 8:00 PM",
    Family: 0,
    Friends: 1,
    tourist: 1,
    type: "adventure",
    Accessibility: 0
  },
  {
    id: 13,
    name: "Story Bridge",
    address: "State Route 15, New Farm QLD 4169",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1553054016-374a8fef247a",
    city: "Brisbane",
    ticketPrice: 0,
    description: "Story Bridge is an iconic Brisbane landmark offering incredible city views and the opportunity for bridge climbing adventures.",
    openingTime: "24/7",
    Family: 0,
    Friends: 1,
    tourist: 1,
    type: "adventure",
    Accessibility: 1
  },
  {
    id: 14,
    name: "The Wheel of Brisbane",
    address: "Russell St, South Brisbane QLD 4101",
    rating: 4,
    image: "https://images.unsplash.com/photo-1452859030887-bb96ef08d051",
    city: "Brisbane",
    ticketPrice: 20,
    description: "The Wheel of Brisbane is a giant observation wheel providing breathtaking views of the city and surrounding areas.",
    openingTime: "10:00 AM - 10:00 PM",
    Family: 1,
    Friends: 1,
    tourist: 1,
    type: "scenic",
    Accessibility: 0
  },
  {
    id: 15,
    name: "Lone Pine Koala Sanctuary",
    address: "708 Jesmond Rd, Fig Tree Pocket QLD 4069",
    rating: 5,
    image: "https://images.unsplash.com/photo-1556811431-ec33c663aa89",
    city: "Brisbane",
    ticketPrice: 38,
    description: "Lone Pine Koala Sanctuary is the world's largest and oldest koala sanctuary, offering close encounters with Australia's native wildlife.",
    openingTime: "9:00 AM - 5:00 PM",
    Family: 1,
    Friends: 1,
    tourist: 1,
    type: "wildlife",
    Accessibility: 1
  },
  {
    id: 16,
    name: "Brisbane River Cruise",
    address: "Cultural Centre Public Pontoon, South Brisbane QLD 4101",
    rating: 5,
    image: "https://images.unsplash.com/photo-1656202552039-65ffaa774260",
    city: "Brisbane",
    ticketPrice: 25,
    description: "The Brisbane River Cruise provides a relaxing way to explore the city’s sights while enjoying scenic views from the water.",
    openingTime: "9:00 AM - 7:00 PM",
    Family: 1,
    Friends: 1,
    tourist: 1,
    type: "cruise",
    Accessibility: 0
  },
];


const Melbourne = {
  template: `
    <div>
      <section class="melSection1">
        <div class="text1">Melbourne</div>
      </section>
      <section class="section2">
        <div class="List">
          <div
            class="place"
            v-for="place in filteredPlaces"
            :key="place.id"
            @click="navigateToPlace(place.id)">
            <img :src="place.image" :alt="place.name" class="placeImage" />
            <div class="placeDetails">
              <h3>{{ place.name }}</h3>
              <p>Address: {{ place.address }}</p>
              <span class="rating">{{ place.rating }}</span>
              <button class="heartBtn" @click.stop="toggleFavorite(place)">❤️</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  data() {
    return {
      city: "Melbourne", 
    };
  },
  computed: {
    filteredPlaces() {
      return places.filter((place) => place.city === this.city);  
    },
  },
  methods: {
    navigateToPlace(placeId) {
      this.$router.push(`/melbourne/place/${placeId}`);
    },
    toggleFavorite(place) {
      this.$emit("add-to-favorites", place);
      alert(`${place.name} has been added to Your List!`);
    },
  },
};
const Sydney = {
  template: `
    <div>
      <section class="seydneySection1">
        <div class="text1">Sydney</div>
      </section>
      <section class="section2">
        <div class="List">
          <div
            class="place"
            v-for="place in filteredPlaces"
            :key="place.id"
            @click="navigateToPlace(place.id)">
            <img :src="place.image" :alt="place.name" class="placeImage" />
            <div class="placeDetails">
              <h3>{{ place.name }}</h3>
              <p>Address: {{ place.address }}</p>
              <span class="rating">{{ place.rating }}</span>
              <button class="heartBtn" @click.stop="toggleFavorite(place)">❤️</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  data() {
    return {
      city: "Sydney", 
    };
  },
  computed: {
    filteredPlaces() {
      return places.filter((place) => place.city === this.city);  
    },
  },
  methods: {
    navigateToPlace(placeId) {
      this.$router.push(`/sydney/place/${placeId}`);
    },
    toggleFavorite(place) {
      this.$emit("add-to-favorites", place);
      alert(`${place.name} has been added to Your List!`);
    },
  },
};
const Brisbane = {
  template: `
    <div>
      <section class="brisSection1">
        <div class="text1">Brisbane</div>
      </section>
      <section class="section2">
        <div class="List">
          <div
            class="place"
            v-for="place in filteredPlaces"
            :key="place.id"
            @click="navigateToPlace(place.id)">
            <img :src="place.image" :alt="place.name" class="placeImage" />
            <div class="placeDetails">
              <h3>{{ place.name }}</h3>
              <p>Address: {{ place.address }}</p>
              <span class="rating">{{ place.rating }}</span>
              <button class="heartBtn" @click.stop="toggleFavorite(place)">❤️</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  data() {
    return {
      city: "Brisbane", 
    };
  },
  computed: {
    filteredPlaces() {
      return places.filter((place) => place.city === this.city); 
    },
  },
  methods: {
    navigateToPlace(placeId) {
      this.$router.push(`/brisbane/place/${placeId}`);
    },
    toggleFavorite(place) {
      this.$emit("add-to-favorites", place);
      alert(`${place.name} has been added to Your List!`);
    },
  },
};

var PlaceDetails = {
  template: `
    <div class="place-details-container">
      <header class="place-header">
        <h1>{{ place.name }}</h1>
      </header>
      <section class="place-details-content">
        <!-- Image Section -->
        <div class="place-image-section">
          <img :src="place.image" :alt="place.name" class="place-image" />
        </div>
        <!-- Details Section -->
        <div class="place-info-section">
          <div class="ticket-price">
            <span class="priceLabel">Ticket Price</span>
            <span class="priceAmount">{{ place.ticketPrice === 0 ? 'Free' : '$' + place.ticketPrice }}</span>
          </div>
          <p class="place-description">{{ place.description }}</p>
          <div class="place-phone">
            <strong>Phone:</strong> {{ place.phone || 'N/A' }}
          </div>
          <div class="place-address">
            <strong>Address:</strong>
            <p>{{ place.address }}</p>
          </div>
        </div>
      </section>
    </div>
  `,
  data() {
    return {
      place: null,
    };
  },
  created() {
    const placeId = parseInt(this.$route.params.placeId); 
    this.place = places.find((p) => p.id === placeId); 
  },
};

const FooterComponent = {
      template: `
        <footer class="footer">
          <p>&copy; 2025 Australian Traveller. All Rights Reserved.</p>
          <p>Contact us: info@australiantraveller.com</p>
        </footer>
      `,
    };

const YourList = {
  name: "YourList",
  props: ["places"],
  template: `
    <section class="your-list">
      <h2>Your Favourite Spots</h2>
      
      <!-- Slot for customizing the "empty list" message -->
      <div v-if="places.length === 0" class="no-places">
        <slot name="empty">You haven't added any places yet!</slot>
      </div>
      
      <!-- Slot for customizing the display of each place -->
      <ul v-else class="place-list">
        <li v-for="place in places" :key="place.id" class="place-item">
          <slot name="place" :place="place">
            <!-- Default content -->
            <img :src="place.image" :alt="place.name" class="place-image">
            <div class="place-details">
              <h3>{{ place.name }}</h3>
              <p>{{ place.address }}</p>
              <button @click="$emit('remove-place', place)" class="remove-btn">Remove</button>
            </div>
          </slot>
        </li>
      </ul>
    </section>
  `,
};


const Planner = {
  name: "Planner",
  template: `
    <section class="planner-section" :class="{ 'dark-mode': $root.darkMode }">
      <!-- Initial Plan Display -->
      <div v-if="!isPlanning && dayPlan.length === 0">
        <h2>No plan created yet!</h2>
        <!-- Animated Button -->
        <button @click="startPlanning" class="attention-btn">Do you want to plan a day?</button>
      </div>

      <!-- Display Current Plan -->
      <div v-if="!isPlanning && dayPlan.length > 0">
        <h2>Your Current Plan</h2>
        <div class="day-plan">
          <div v-for="place in dayPlan" :key="place.id" class="plan-item">
            <img :src="place.image" :alt="place.name" />
            <div class="plan-details">
              <h4>{{ place.name }}</h4>
              <p>{{ place.address }}</p>
              <p>Ticket Price: {{ place.ticketPrice }}</p>
            </div>
          </div>
        </div>

        <!-- Calculate Fee Section -->
        <div class="calculate-fee-section">
          <label for="numberOfPeople">Enter the number of people:</label>
          <input
            type="number"
            id="numberOfPeople"
            v-model.number="numberOfPeople"
            min="1"
            placeholder="Enter number of people"
          />
          <p v-if="totalFee > 0" class="total-fee">
            Total fee: {{ totalFee }}
          </p>
        </div>

        <button @click="startPlanning" class="start-planning-btn">Do you want to plan more?</button>
      </div>

      <!-- Filter Section -->
      <div v-if="isPlanning">
        <h2>Let's plan your excursion →</h2>
        <div class="filter-container">
          <div class="filters">
            <label>Choose a City</label>
            <select v-model="selectedCity">
              <option value="">All Cities</option>
              <option value="Melbourne">Melbourne</option>
              <option value="Sydney">Sydney</option>
              <option value="Brisbane">Brisbane</option>
            </select>

            <label>Choose a Category</label>
            <select v-model="selectedCategory">
              <option value="">All Categories</option>
              <option value="beach">Beach</option>
              <option value="historical">Historical Spots</option>
              <option value="cultural">Cultural</option>
              <option value="shopping">Shopping</option>
              <option value="adventure">Adventure</option>
              <option value="wildlife">Wildlife</option>
              <option value="amusement">Amusement</option>
            </select>
            
            <div class="checkbox-filters">
              <label><input type="checkbox" v-model="filters.family" /> With Family</label>
              <label><input type="checkbox" v-model="filters.friends" /> With Friends</label>
              <label><input type="checkbox" v-model="filters.tourist" /> Tourist</label>
            </div>

            <label>Sort Results</label>
            <select v-model="sortOrder" @change="sortPlaces">
              <option value="default">Default</option>
              <option value="cheap">Cheapest First</option>
              <option value="expensive">Most Expensive First</option>
            </select>

            <button @click="filterPlaces">Search</button>
          </div>
        </div>

        <!-- Results Section -->
        <div class="results">
          <h3>Results</h3>
          <div v-if="filteredPlaces.length === 0">No results found.</div>
          <div v-for="place in filteredPlaces" :key="place.id" class="result-item">
            <img :src="place.image" :alt="place.name" />
            <div class="result-details">
              <h4>{{ place.name }}</h4>
              <p>{{ place.address }}</p>
              <p>{{ place.ticketPrice }}</p>
              <button @click="addToPlan(place)">Add to Plan</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      isPlanning: false,
      selectedCity: "",
      selectedCategory: "",
      filters: {
        family: false,
        friends: false,
        tourist: false,
      },
      sortOrder: "default",
      filteredPlaces: [],
      dayPlan: [],
      numberOfPeople: 1,
      totalFee: 0,
    };
  },
  methods: {
    startPlanning() {
      this.isPlanning = true;
    },
    filterPlaces() {
      this.filteredPlaces = places.filter((place) => {
        const cityMatch = this.selectedCity ? place.city === this.selectedCity : true;
        const categoryMatch = this.selectedCategory
          ? place.type.toLowerCase() === this.selectedCategory.toLowerCase()
          : true;

        return cityMatch && categoryMatch;
      });
      this.sortPlaces();
    },
    sortPlaces() {
      if (this.sortOrder === "cheap") {
        this.filteredPlaces.sort((a, b) => a.ticketPrice - b.ticketPrice);
      } else if (this.sortOrder === "expensive") {
        this.filteredPlaces.sort((a, b) => b.ticketPrice - a.ticketPrice);
      }
    },
    addToPlan(place) {
      if (!this.dayPlan.find((p) => p.id === place.id)) {
        this.dayPlan.push(place);
      }
      this.isPlanning = false;
    },
    calculateFee() {
      this.totalFee = this.dayPlan.reduce((total, place) => {
        return total + place.ticketPrice * this.numberOfPeople;
      }, 0);
    },
  },
  created() {
    this.filteredPlaces = places;
  },
};


const Settings = {
  template: `
    <section class="settings">
      <h2>Settings</h2>
      <label>
        <input type="checkbox" v-model="$root.darkMode" />
        Dark Mode
      </label>
    </section>
  `,
};



const Login = {
  template: `
    <section class="login-section">
      <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="form-group" :class="{ shake: shake }">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div class="form-group" :class="{ shake: shake }">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" class="login-btn">Login</button>
        </form>
        <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
      </div>
    </section>
  `,
  data() {
    return {
      username: "",
      password: "",
      shake: false,
      errorMessage: "",
    };
  },
  methods: {
    handleLogin() {
      if (!this.username || !this.password) {
        this.triggerShake();
        this.errorMessage = "Please fill in both fields!";
      } else {
        this.errorMessage = "";
        alert(`Welcome, ${this.username}!`);
      }
    },
    triggerShake() {
      this.shake = true;
      setTimeout(() => {
        this.shake = false;
      }, 820); // Match the animation duration
    },
  },
};


const routes = [
  { path: '/', component: Home }, 
  { path: '/YourList', component: YourList },
  { path: '/Planner', component: Planner },
  { path: '/login', component: Login },
  { path: "/Settings", component: Settings },
  { path: '/melbourne', component: Melbourne },
  { path: '/sydney', component: Sydney },
  { path: '/brisbane', component: Brisbane },
  { path: '/:city/place/:placeId', component: PlaceDetails, name: 'place-details' },
];

const router = new VueRouter({
  routes,
  mode: 'hash',
});


new Vue({
  el: "#app",
  router,
  data: {
    isMenuOpen: false,
    favoritePlaces: [],
    backgroundColor: "white",
    darkMode: false, // Default is light mode
  },
  computed: {
    appBackground() {
      return this.darkMode ? "black" : "white";
    },
    textColor() {
      return this.darkMode ? "white" : "black";
    },
  },
  watch: {
    darkMode(newVal) {
      if (newVal) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    addToFavorites(place) {
      this.favoritePlaces.push(place);
    },
    removeFromFavorites(place) {
      this.favoritePlaces = this.favoritePlaces.filter((p) => p.id !== place.id);
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
});


