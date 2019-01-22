const express         = require("express"),
      app             = express(),
      bodyParser      = require("body-parser"),
      methodOverride  = require("method-override"),
      mongoose        = require("mongoose"),
      Schema          = mongoose.Schema,
      Report          = require('./models/reports'),
      Announcement    = require('./models/announcements'),
      User            = require('./models/users'),
      News            = require('./models/news'),
      Comment         = require('./models/comments');

// var dataArticles = [
//   {
//     title: "President Trump Issues Apology to Native Americans Offended by Youth Protesters from Northern Kentucky Catholic School",
//     subtitle: "The President attempts to disassociate with right-wing counter-protest during Indigenous People's March at Lincoln Memorial",
//     author: "Jakob Mendoza",
//     coverImage: "/photos/protest-vote-thinkagain.jpg",
//     body: "In a rare press event, President Trump has seemingly expressed sorrow and compassion to the Omaha Native American Tribe. In a viral video circulating social media, an Elder from the tribe is seen chanting and beating the drums to a healing song to diffuse a tense situation, when a youth from Covington Catholic presents him from continuing forward. The young man, identified as Nick Sandmann from Covington Catholic All Boys High School in Northern Kentucky, is seen with a smug smile, while classmates behind him jeer the Elder with chanting Trump 2020 and Make American Great Again. The group from Covington Catholic was attending a counter-protest during the Indigenous People's March at Lincoln Memorial. Nick Sandmann has issued a statement, which seems to mark each clichéd phrase attemping to make him appear to be the good guy, a similar tactic now Supreme Courte Justice Kavanaugh used with some success."
//   },
//   {
//     title: "Hackers Systematically Disassemble US DoD Cyber Security Infrastructure",
//     subtitle: "Hackers claiming to be from the group HackersWithoutBorders dismantle key us cyber security defenses in what seems to be the beginning of the first all-out Cyber War.",
//     author: "Xi Jiaolong Ga",
//     coverImage: "/photos/hacker-anon.jpg",
//     body: "Hackers claiming to be from HackersWithoutBorders on reddit, 4chan, and the darkweb circles have, for the fourth consecutive day, locked out the US Department of Defense from its own key Cyber Security Infrastructure, outlining the US' clear weakness in Cyber Security. President Trump has publicly scolded his agencies--CISA, a division in the Department of Homeland Security--for their lack of foresight or preparation, to which his Assistant Secretary Jeanette Manfra has rebuffed."
//   },
//   {
//     title: "Science Journal Nature Discovers Elaborate Fake Article Published",
//     subtitle: "The journal, through careful investigation, uncovers a conspiracy to fake the results of a study demonstrating non-concensus in the scientific community about the causes and effects of global climate change.",
//     author: "Arnold Gore",
//     coverImage: "/photos/science-truth.jpg",
//     body: "In one of the most elaborate conspiracies to date, a group of scientists all over the world attempted to sow dissent and spread misinformation through a peer-reviewed channel, the journal Nature, about the causes and effects of global warming, now called climate change. The 'meta-study' claimed to have gathered opinions from 85% of the scientific community, including all realms of peer-reviewed science--the largest sample to date, if it had been true. They claimed to have interviewed scientists from fields of Paleoclimatology, Trans-primate Behavioral Economics, Biological Market Economics, and Underwater Basketweavery. THe results apparently showed a weak consensus on the nature causes, and effects of human-caused climate change, upturning the established concensus that climate change is, indeed, caused by humans."
//   },
// ];

// var dataAnnounce = [
//   {
//     author: "Johann Steipgang",
//     body: "Philosophy Majors all around the world have decided to collectively protest at their universities' to increase the amount of prestige and acknowledgement of their colleagues. To wit, the USDT has decided to protest in solidarity will acknowledge a 42-second moment of silence (radio, internet, and what-have-you) on May 5, 2019 at 18:13 EST. Please prepare accordingly, as we will not be able to respond to requests."
//   },
//   {
//     author: "Cornelius Leipzig",
//     body: "The recent government shutdown means that 57% of the USDT workforce has been furloughed, while another 21% have began protesting in front of the White House Lawn. The rest of us are updating readers and maintaining infrastructure. Please do not attempt to inquire about submitted reports. We insist you join the protests."
//   },
//   {
//     author: "Jerome Liddelhammer",
//     body: "US DoD Cyber Infrastructure is currently being attacked by hackers of unknown origin(s). USDT's third- and fourth-level security infrastructure has so far withstood sophisticated attacks. The Department advises all citizens to turn off telecommunications devices, including phones, unless absolutely necessary, and if at all possible to avoid contact with critical infrastucture that are vulnerable to cyber attacks, such as hospitals, online-traffic systems, and smart-networks. Please disable smart devices from connecting with your home routers."
//   },
// ]

// News.create(dataArticles, (err, createdArticle) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("success!");
//   }
// });

// Announcement.create(dataAnnounce, (err, createdAnnounce) => {
//   if(err) {
//     console.log( err );
//   } else {
//     console.log( "success with announcements!" );
//   }
// });

// ========================================


// MONGOOSE SETTINGS
mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb://localhost/USDT", {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


// =======================================


//APP SETTINGS & CONFIG

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.locals.moment = require('moment');


// =======================================


//ROUTES

var reportRoutes        = require('./routes/reports')
    announcementRoutes  = require('./routes/announcements'),
    newsRoutes          = require('./routes/news')
    commentRoutes       = require('./routes/comments');

app.use(reportRoutes);
app.use(announcementRoutes);
app.use(newsRoutes);
app.use(commentRoutes);


  //Home

app.get('/', (req,res) => {
  Announcement.find({}, ( err, allAnnouncements) => {
    if( err ) {
      console.log( err );
    } else {
      res.render('index', { announcement: allAnnouncements });
    }
  });
});

// =======================================


//LISTENING ON PORT
app.listen(3000, function(){
  console.log("listening");
});