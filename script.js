const menu = [
    {cat:'specials',ph:'🍗',name:'10 Pieces Jumbo Party Wings',desc:'Our most reordered item. Crispy, jumbo-sized wings.',price:'$17.59',orig:'$19.99',badge:'Top Reordered'},
    {cat:'specials',ph:'🍗',name:'20 Pieces Jumbo Party Wings',desc:'Perfect for sharing.',price:'$27.45',orig:'$31.19'},
    {cat:'specials',ph:'🍗',name:'40 Pieces Jumbo Party Wings',desc:'For the whole crew.',price:'$48.57',orig:'$55.19',badge:'Party Size'},
    {cat:'specials',ph:'🐔',name:'Whole Chicken',desc:'A full golden-fried bird.',price:'$19.00',orig:'$21.59'},
    {cat:'specials',ph:'🔥',name:'Flaming Honey Wings (6 pcs)',desc:'Default flaming honey sauce — sub with any sauce.',price:'$7.38',orig:'$8.39'},
    {cat:'specials',ph:'🔥',name:'Flaming Honey Wings (10 pcs)',desc:'Default flaming honey sauce — sub with any sauce.',price:'$11.61',orig:'$13.19'},
    {cat:'specials',ph:'🍗',name:'Chicken Dinner',desc:'Waffle Fries, Sandwich Meat, Korean Slaw, Lettuce.',price:'$12.93',orig:'$14.69'},
    {cat:'specials',ph:'🐔',name:'The Feast',desc:'10 Jumbo Wings, 3 Tenders, Popcorn Chicken.',price:'$28.50',orig:'$32.39',badge:'Best Value'},
    {cat:'combo',ph:'🐔',name:'Classic Combo',desc:'Sandwich, fries, and a drink.',price:'$10.11',orig:'$11.49'},
    {cat:'combo',ph:'🌯',name:'Chicken Wrap Combo',desc:'Wrap, fries, and a drink.',price:'$10.11',orig:'$11.49'},
    {cat:'sandwiches',ph:'🐔',name:'Chicken Sandwich',desc:'Classic crispy chicken sandwich.',price:'$4.99',orig:'$8.87',badge:'44% Off'},
    {cat:'sandwiches',ph:'🐔',name:'Double Chicken Sandwich',desc:'Double the chicken.',price:'$11.61',orig:'$13.19'},
    {cat:'sandwiches',ph:'🌯',name:'Awesome Chicken Wrap',desc:'Crispy chicken in a fresh wrap.',price:'$6.75',orig:'$7.67'},
    {cat:'sandwiches',ph:'🌯',name:'Beijing Chicken Wrap',desc:'Crispy crust, tender chicken, unique Beijing sauce.',price:'$7.17',orig:'$8.15'},
    {cat:'rice',ph:'🍙',name:'Fried Chicken Seaweed Rice',desc:'Crispy chicken on savory seaweed rice.',price:'$10.55',orig:'$11.99'},
    {cat:'rice',ph:'🍙',name:'Seaweed Rice with Flaming Honey Wings',desc:'Seaweed rice with 6 flaming honey wings.',price:'$11.61',orig:'$13.19'},
    {cat:'rice',ph:'🍙',name:'Seaweed Rice with Teriyaki Tenders',desc:'Teriyaki tenders on seaweed rice.',price:'$11.61',orig:'$13.19'},
    {cat:'appetizers',ph:'🍿',name:'Popcorn Chicken',desc:'Crispy, bite-sized pieces.',price:'$7.38',orig:'$8.39'},
    {cat:'appetizers',ph:'🍗',name:'Tender (3 pcs)',desc:'Juicy golden tenders with dipping sauce.',price:'$6.33',orig:'$7.19'},
    {cat:'appetizers',ph:'🍗',name:'Nuggets (6 pcs)',desc:'Golden crispy nuggets.',price:'$6.33',orig:'$7.19'},
    {cat:'appetizers',ph:'🍗',name:'Chicken Gizzard',desc:'Spicy, flavorful fried gizzard.',price:'$8.86',orig:'$10.07'},
    {cat:'appetizers',ph:'🍟',name:'Fries',desc:'Classic golden fries.',price:'$4.22',orig:'$4.79'},
    {cat:'appetizers',ph:'🧇',name:'Waffle Fries',desc:'Thick, crispy waffle-cut fries.',price:'$6.33',orig:'$7.19'},
    {cat:'appetizers',ph:'🥚',name:'Tea Egg',desc:'Classic Chinese braised tea egg.',price:'$2.10',orig:'$2.39'},
    {cat:'appetizers',ph:'🥗',name:'Korean Slaw',desc:'Refreshing vegetables with Korean sauce.',price:'$2.10',orig:'$2.39'},
    {cat:'sauces',ph:'🧂',name:'Signature Sweet Chili',desc:'',price:'$0.44',orig:'$0.50'},
    {cat:'sauces',ph:'🧂',name:'Glazing Asian BBQ',desc:'',price:'$0.44',orig:'$0.50'},
    {cat:'sauces',ph:'🧂',name:'Yum Yum Mustard',desc:'',price:'$0.44',orig:'$0.50'},
    {cat:'sauces',ph:'🧂',name:'Tropical Habanero',desc:'',price:'$0.44',orig:'$0.50'},
    {cat:'sauces',ph:'🧂',name:'Flaming Honey Sauce',desc:'',price:'$0.44',orig:'$0.50'},
    {cat:'drinks',ph:'🥤',name:'Pepsi',desc:'',price:'$2.63',orig:'$2.99'},
    {cat:'drinks',ph:'🥤',name:'Pepsi Zero Sugar',desc:'',price:'$2.63',orig:'$2.99'},
    {cat:'drinks',ph:'🥤',name:'Starry Soda',desc:'Lemon-lime.',price:'$2.63',orig:'$2.99'},
  ];
  
  const reviews = [
    {name:'Onye',      date:'4 months ago',  stars:5, text:'The store definitely got an upgrade! Love the new layout and new flavors. Staff were super friendly and helpful — I enjoyed the in-store experience. Loved my melon drink with mango boba and I\'ll definitely be back!'},
    {name:'Vien L.',   date:'7 months ago',  stars:5, text:'The fried chicken wings taste good, well-marinated, the skin is crispy, and not too salty. After eating them you won\'t feel like drinking water constantly. Small in size, making them easier to eat.'},
    {name:'Milo K.',   date:'2 months ago',  stars:5, text:'Love it! The food is delicious (albeit a bit oily) but the best chicken I have ever had!'},
    {name:'AkiRin',    date:'a year ago',    stars:5, text:'The chicken really reminds me of what I used to get after school back in China. Service is friendly, prices are super reasonable, and I love how the order machine makes a rooster sound when your order is ready. A perfect place to grab a quick bite.'},
    {name:'Feyza B.',  date:'10 months ago', stars:5, text:'Can\'t beat the convenient location, ease of order, and prices. The sandwiches are quite big for $5. They use dark chicken meat so it\'s more flavorful and moist. Fun place with chicken art on the walls, spacious, and a yellow theme throughout.'},
    {name:'Julian D.', date:'4 months ago',  stars:5, text:'Recently went to this chicken place and it was honestly so good. The chicken was crispy on the outside, juicy on the inside, and full of flavor. You could tell it was cooked fresh — not something sitting around. The seasoning was on point too.'},
  ];


  const delivery = [
    {icon:'🛒',name:'Online Ordering by DoorDash',meta:'Service fee 10% · Delivery fee $3.99',   time:'Delivers in 32 min',   fee:true, url:'https://order.online/store/-23124359/?delivery=true&hideModal=true&utm_source=gfo&rwg_token=AFd1xnG8aUBC97MGEnFnaHqD1krp6xC4gzReCNi2myNLa0Mge4dSuJL0HZBjSz4Y6lERlW9UbY_qELIJD7pkCAAPVxslCr0UdQ%3D%3D'},
    {icon:'🍔',name:'Grubhub',                    meta:'Service fee 5–15% · Delivery from $1.49',time:'Delivers in 25 min',   fee:true, url:'https://www.grubhub.com/restaurant/call-a-chicken-4237-university-way-ne-seattle/5616552?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&delivery=true&rwg_token=AFd1xnFOnfTrhRwDq5cCetIKK3yXp5292NJRKbWxLwOcyOZJpOVdHGomoG5LQAI4VaMofoxnsBl9OTL5sMV30uyqwHFuXN9rMg%3D%3D'},
    {icon:'🐼',name:'HungryPanda',                meta:'Fees may apply',                         time:'Delivers in 10 min',   fee:null, url:'https://usa.hungrypanda.co/shop?shopId=20052&brand=hungrypanda&channel_source=linkout&delivery_method=1&is_gfo=1&isRedirect=1&rwg_token=AFd1xnGAlAxp_AJg9n_Kp3N7nrgnC4hCRAsq1e26v9uqTGiodcAl7KhO1WyX79PkX_lgVRi-KPnXToYp0_3wH4x5tBLBPLOvLw%3D%3D'},
    {icon:'🍔',name:'Seamless',                   meta:'Service fee 5–15% · Delivery from $1.49',time:'Delivers in 25 min',   fee:true, url:'https://www.seamless.com/menu/call-a-chicken-4237-university-way-ne-seattle/5616552?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&delivery=true&rwg_token=AFd1xnEPbUo2dY0V_zCP11lE6gchEHBvc6ODuuANyn_LS72Bpi3_bRPM65urHL3LrxbXLSi3n2pJVykNV3n2NxsChQwVtxOwjQ%3D%3D'},
    {icon:'🐼',name:'Fantuan Delivery',           meta:'Fees may apply',                         time:'Delivers in 20–30 min',fee:null, url:'https://www.fantuanorder.com/store/call-a-chicken-uw/us-1364012329?page=restaurant&storeId=1364012329&country=us&wechatId=1&lat=47.6594176&lng=-122.3134221&shippingType=1&city=Seattle&rwg_token=AFd1xnGy4VxIVCf2lyYJLHUR7QRJA6m0LiE-uKUKCcuFTYxu2t0C6llXMqbX3p2vABxUj-pYL13KT6eSHyYIs-HUbDdE7PQ-Gg%3D%3D'},
    {icon:'🚗',name:'DoorDash',                   meta:'Service fee 15% · Delivery fee $5.99',   time:'Delivers in 43 min',   fee:true, url:'https://www.doordash.com/store/call-a-chicken-seattle-23124359/?utm_campaign=gpa'},
    {icon:'📮',name:'Postmates',                  meta:'Service fee 5–15% · Delivery from $0.50',time:'Delivers in 9–24 min', fee:true, url:'https://www.postmates.com/store/call-a-chicken/6wnB9pi0VIaHIjSVaSyIaQ?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas'},
    {icon:'🚘',name:'Uber Eats',                  meta:'Service fee 5–15% · Delivery from $0.50',time:'Delivers in 9–24 min', fee:true, url:'https://www.ubereats.com/store/call-a-chicken/6wnB9pi0VIaHIjSVaSyIaQ?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas'},
  ];
  const pickup = [
    {icon:'🛒',name:'Online Ordering by DoorDash',meta:'No fee',           time:'Ready in 16 min',   fee:false,url:'https://order.online/store/-23124359/?pickup=true&hideModal=true&utm_source=gfo&rwg_token=AFd1xnG-sJ8kc3kwk1Wm6tvSbg--i0JW9UUbmuhvFWCGA3wifzyyYVM5jOtCAUya0cQMUNL_cW6KmIEXRzEkqc9NHd62ZkhY7A%3D%3D'},
    {icon:'🐼',name:'Fantuan',                    meta:'No fee · 12% off', time:'Ready in 10–15 min',fee:false,url:'https://www.fantuanorder.com/store/call-a-chicken-uw/us-1364012329?page=restaurant&storeId=1364012329&country=us&wechatId=1&lat=47.6594176&lng=-122.3134221&shippingType=0&city=Seattle&rwg_token=AFd1xnFc-jbiVdnH3w0wZFYh1djBXyUWH3sLqaOS-VOf5OsGXL0F2mMjf5u5yNkcwnschknqdbt2DrTZyOK5vHHqu8gUvPZcdA%3D%3D'},
    {icon:'🐼',name:'HungryPanda',                meta:'No fee',           time:'Ready in 10 min',   fee:false,url:'https://usa.hungrypanda.co/shop?shopId=20052&brand=hungrypanda&channel_source=linkout&delivery_method=2&is_gfo=1&isRedirect=1&rwg_token=AFd1xnEtVQstW29FtvwZzwTFA4BhSv72BclDpng2AZIzvWsLoCSTzeU9lNdOIWNC17FHWazUdACo9OCB1CkArRz75mtTMKFq5A%3D%3D'},
    {icon:'🍔',name:'Grubhub',                    meta:'No fee',           time:'Ready in 10 min',   fee:false,url:'https://www.grubhub.com/restaurant/call-a-chicken-4237-university-way-ne-seattle/5616552?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AFd1xnHPHYUmwI5q5DG7llvnCS1JseJZWfh-3ywB1GNJfhnWTIg8kX7VorrK9cjyifSufFCSNlFbf7JHhgpjU-XFKA5jaI7u8g%3D%3D'},
    {icon:'🍔',name:'Seamless',                   meta:'No fee',           time:'Ready in 10 min',   fee:false,url:'https://www.seamless.com/menu/call-a-chicken-4237-university-way-ne-seattle/5616552?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AFd1xnGYe6oLeIVFasWGLTfUa4KafXwIWpDFoDM3gibqwG-rkoZyuDPvXo0TWwMDEslzBdbf5WtTy_509jk0KxUMpkoRm4j9lw%3D%3D'},
    {icon:'🚗',name:'DoorDash',                   meta:'No fee',           time:'Ready in 17 min',   fee:false,url:'https://www.doordash.com/store/call-a-chicken-seattle-23124359/?utm_campaign=gpa&pickup=true'},
    {icon:'📮',name:'Postmates',                  meta:'No fee',           time:'Ready in 1–16 min', fee:false,url:'https://www.postmates.com/store/call-a-chicken/6wnB9pi0VIaHIjSVaSyIaQ?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas'},
    {icon:'🚘',name:'Uber Eats',                  meta:'No fee',           time:'Ready in 1–16 min', fee:false,url:'https://www.ubereats.com/store/call-a-chicken/6wnB9pi0VIaHIjSVaSyIaQ?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas'},
  ];
  
  // Menu
  function renderMenu(f) {
    const items = f === 'all' ? menu : menu.filter(i => i.cat === f);
    document.getElementById('menuGrid').innerHTML = items.map(i => `
      <div class="mcard">
        <div class="mcard-img">
          ${i.badge ? `<div class="badge">${i.badge}</div>` : ''}
          <div class="ph">${i.ph}</div>
        </div>
        <div class="mcard-body">
          <div class="mcard-name">${i.name}</div>
          <div class="mcard-desc">${i.desc}</div>
          <div class="mcard-foot">
            <span class="price">${i.price}</span>
            <span class="price-orig">${i.orig}</span>
          </div>
        </div>
      </div>`).join('');
  }
  
  function filterMenu(cat, el) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    renderMenu(cat);
  }
  
  // Reviews
  document.getElementById('reviewsGrid').innerHTML = reviews.map(r => `
    <div class="rcard">
      <div class="rcard-head">
        <div class="avatar">${[...r.name][0]}</div>
        <div><div class="rname">${r.name}</div><div class="rdate">${r.date}</div></div>
      </div>
      <div class="rstars">${Array.from({length:5}, (_,i) => `<div class="rs${i < r.stars ? '' : ' e'}"></div>`).join('')}</div>
      <p class="rtext">${r.text}</p>
    </div>`).join('');
  
  // Modal
  let activeTab = 'delivery';
  
  function renderModal() {
    const list = activeTab === 'delivery' ? delivery : pickup;
    document.getElementById('modalBody').innerHTML = list.map(o => `
      <a class="order-option" href="${o.url}" target="_blank">
        <div class="opt-left">
          <div class="opt-icon">${o.icon}</div>
          <div>
            <div class="opt-name">${o.name}</div>
            <div class="opt-meta">${o.meta}</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
          ${o.fee === false ? `<span class="opt-badge badge-free">No fee</span>` : o.fee === true ? `<span class="opt-badge badge-fee">Fees apply</span>` : ''}
          <span class="opt-time">${o.time}</span>
        </div>
      </a>`).join('');
  }
  
  function switchTab(tab, el) {
    activeTab = tab;
    document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    renderModal();
  }
  
  function openModal() {
    document.getElementById('orderModal').classList.add('open');
    renderModal();
  }
  
  function closeModal() {
    document.getElementById('orderModal').classList.remove('open');
  }
  
  function openMapModal() {
    document.getElementById('mapModal').classList.add('open');
  }
  
  function closeMapModal() {
    document.getElementById('mapModal').classList.remove('open');
  }
  
  // Slideshow
  const slides = document.querySelectorAll('.slide');
  const dotsEl = document.getElementById('slideDots');
  let cur = 0, timer;
  
  slides.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.onclick = () => goTo(i);
    dotsEl.appendChild(d);
  });
  
  function goTo(n) {
    slides[cur].classList.remove('active');
    dotsEl.children[cur].classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dotsEl.children[cur].classList.add('active');
    clearInterval(timer);
    timer = setInterval(() => goTo(cur + 1), 4000);
  }
  
  timer = setInterval(() => goTo(cur + 1), 4000);
  
  renderMenu('all');