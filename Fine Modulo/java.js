const jobs = [
  {
    title: "Marketing Intern",
    location: "US, NY, New York"
  },

  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },

  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },

  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },

  {
    title: "Bill Review Manager",
    location: "US, FL, Fort Worth"
  },

  {
    title: "Accounting Clerk",
    location: "US, MD,"
  },

  {
    title: "Head of Content (m/f)",
    location: "DE, BE, Berlin"
  },

  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },

  {
    title: "HP BSM SME",
    location: "US, FL, Pensacola"
  },

  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },

  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },

  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },

  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },

  {
    title: "Installers",
    location: "US, FL, Orlando"
  },

  {
    title: "Account Executive - Sydney",
    location: "AU, NSW, Sydney"
  },

  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },

  {
    title: "Hands-On QA Leader",
    location: "IL, Tel Aviv, Israel"
  },

  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },

  {
    title: "Visual Designer",
    location: "US, NY, New York"
  },

  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },

  {
    title: "Marketing Assistant",
    location: "US, TX, Austin"
  },

  {
    title: "Front End Developer",
    location: "NZ, N, Auckland"
  },

  {
    title: "Engagement Manager",
    location: "AE,"
  },

  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },

  {
    title: "Customer Service",
    location: "GB, LND, London"
  },

  {
    title: "H1B SPONSOR FOR L1/L2/OPT",
    location: "US, NY, New York"
  },

  {
    title: "Marketing Exec",
    location: "SG,"
  },

  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },

  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },

  {
    title: "Customer Service Associate",
    location: "CA, ON, Toronto"
  },

  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },

  {
    title: "Software Applications Specialist",
    location: "US, KS,"
  },

  {
    title: "Craftsman Associate",
    location: "US, WA, Everett"
  },

  {
    title: "Completion Engineer",
    location: "US, CA, San Ramon"
  },

  {
    title: "I Want To Work At Karmarama",
    location: "GB, LND,"
  },

  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

function ricerca() {
  let rst = document.getElementById("risultati")
  rst.innerText = ""

  let inpPos = document.querySelector("#pos")
  let inpGeo = document.getElementById("loc")

  let posLav = inpPos.value
  let posGeo = inpGeo.value

  let posLavMin = posLav.toLowerCase()
  let posGeoMin = posGeo.toLowerCase()


  let result = []
  for (let i of jobs) {
    let iLavMin = i.title.toLowerCase()
    let iGeoMin = i.location.toLowerCase()

    if (iLavMin.includes(posLavMin) && iGeoMin.includes(posGeoMin)) {
      result.push(i)
    }

  }



  let test = document.createElement('ol');
  test.setAttribute('id', 'test');
  test.innerText = "RISULTATI DELLA RICERCA"
  test.classList.add("secRicerca")
  rst.appendChild(test);


  for (const e of result) {

    let li = document.createElement('li');

    test.appendChild(li);
    li.innerText = (e.title + " --" + e.location)
    li.classList.add("liclass")
  }
}

function cancella() {
  let canc = document.getElementById("risultati")
  canc.innerText = ""
}







/*ricerca(posLav, posGeo)
console.log(result);
let count = result.length
console.log(count);*/

