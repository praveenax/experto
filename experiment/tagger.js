//input - feed it a input text
//output - tags & ranked tags

//npm install classify.js

var Classifier = require('classify.js');
var sw = require('stopword');

var inputJson = [
    {
    "id": "15bda33f2d729d9b",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "IGN is live streaming Prey Launch Day Stream - IGN Plays Live. Prey Launch Day Stream - IGN Plays Live by IGN Join us as we take a look at the 2017 reboot of Prey from Dishonored developers Arkane"
}, {
    "id": "15bdb8c8e7401ea9",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "Daily Digest Your daily three Why We Write Tickets Shared with my team the other day in Slack … John Cutler John Cutler in Hacker Noon 1 min read Recommended by Violet The resident cheerleader needs to"
}, {
    "id": "15bd9c9d26e813fe",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "Meetup Chennai Weekend Musicians Meetup Are you a crazy music listener or singer? looking to learn and master a music Instrument? Are you passionate about Sound and Audio Recording? This group is for"
}, {
    "id": "15bdc7205b4b2a47",
    "labels": ["CHAT"],
    "snippet": ""
}, {
    "id": "15bdaccbff3e8fa4",
    "labels": ["IMPORTANT", "CATEGORY_PERSONAL", "INBOX"],
    "snippet": "Review blocked sign-in attempt Hi praveen, Google just blocked someone from signing into your Google account xav.axp@gmail.com from an app that may put your account at risk. Less secure app Saturday, 6"
}, {
    "id": "15bd9f788a0487f2",
    "labels": ["CHAT"],
    "snippet": "COGNATE"
}, {
    "id": "15bdc9af1d4aea03",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "www.eventshigh.com Shine Silent Party Sanctum Club Sanctum club is reinventing clubbing, one pair of headphones at a time. This Saturday you are in for a quiet party, or “silent disco” as they&#39;ve"
}, {
    "id": "15bdb7dadb62dcd2",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Hi praveen kumar, Thank you for using Freecharge We hope you had a good experience. Please take one minute to share your feedback by clicking on a rating below. How likely is it that you would"
}, {
    "id": "15bdb57b2826d0c6",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Quora Follow your Facebook friend Gilbert Thangaraj on Quora Gilbert Thangaraj Gilbert Thangaraj Follow This email was sent by Quora (650 Castro Street #450, Mountain View, CA 94041). If you don&#39;t"
}, {
    "id": "15bdc2a5331bdbc0",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "If you have difficulties viewing this mail, click here Avail 200 instant discount* at Grofers with your Standard Chartered card. Why step out for grocery shopping when you can get everything at your"
}, {
    "id": "15bd98ebdd368f0b",
    "labels": ["IMPORTANT", "CATEGORY_PERSONAL", "INBOX"],
    "snippet": "Hi, SAVE THE HACKER is all about building something incredibly awesome, really fast! And we&#39;re about FAST! This is what you get instantly as you create a Hasura project: 1. Data APIs with built-in"
}, {
    "id": "15bd978a6bb7b864",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Customize this newsletter and easily invite subscribers. Find out how Inside Insights Published by praveen kumar ax 05 May 2017 Business Science Technology Leisure Environment #marketresearch #"
}, {
    "id": "15bdb4cda5fb0b3f",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Dave Weasel @DaveWeasel writer. banned from walmart 03-04. Los Angeles, California · http://instagram.com/daveweasel Followed by"
}, {
    "id": "15bdbfed8fdcd5d8",
    "labels": ["UNREAD", "CATEGORY_FORUMS", "INBOX"],
    "snippet": "Hi everyone, Welcome to the meetup group. Please introduce yourself and briefly tell us: 1. What you do 2. What you would like us to discuss in our meetings 3. Whether you would like to speak/present"
}, {
    "id": "15bd951de4b6aacf",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "The most recommended Chrome Extension is Grammarly. Get it. It will help you write more good and save you from embarrassing errors. What are some of the other must-have Chrome Extensions? 🤔 Over 130+"
}, {
    "id": "15bda75eebedaee3",
    "labels": ["UNREAD", "IMPORTANT", "CATEGORY_PERSONAL", "INBOX"],
    "snippet": "Exam Sphere connected to your Google Account Hi praveen, Exam Sphere now has access to your Google account xav.axp@gmail.com. Exam Sphere can: View your emails messages and settings You should only"
}, {
    "id": "15bd799ec2cce807",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Demian Blair @DemianBlair As a Spectrum Enterprise Strategic Account Manager I help our largest customers manage their Internet,"
}, {
    "id": "15bd9d0b5cce1c29",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax バイブ @AestheticAnime #VibeNinjas Followed by Horfrid and 12 others. Follow Forgot your Twitter password? Get instructions on how to"
}, {
    "id": "15bdbe22545ea32b",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "May 6, 2017 FEATURED STORY Death penalty for December 2012 gang rape convicts is inconsistent with Supreme Court&#39;s past record The four men were not given the benefit of &#39;mitigating"
}, {
    "id": "15bd87a91e18b4e6",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Evernote Last chance for 20% off Evernote Plus Use all your devices at our lowest price. If you&#39;ve outgrown Evernote Basic but don&#39;t need the full feature set of Premium, there&#39;s a third"
}, {
    "id": "15bd8f7992002c0b",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Your Deals: Havoc Rising by Brian S. Leon. Steve is no ordinary fisherman — he&#39;s actually Diomedes Tydides, an immortal hero of the Trojan War. Tasked with locating a stolen chalice, he must battle"
}, {
    "id": "15bd9e3fc445e776",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "Yogananth Gopinathan said he was with you and சகாய ஜெஸ்வின் at SP Infocity . Yogananth wrote: &quot;Fresh Desk &quot; Save the Hacker&quot; Hackathon .!&quot; Learn more about tagging on Facebook ."
}, {
    "id": "15bda62f40c798a6",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "Answer: A2A.​ Salary: I don&#39;t work every single month, but when I get back to.​.​.​ Quora Your Reading Digest Top Stories For You What is it like to earn around 2-3 L per month in India? Avinash"
}, {
    "id": "15bd7ccf489f0e20",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax David Geer @geercom Technology writer-journo David Geer writes for CSO &amp; other publications. Quote: It&#39;s a trade secret. I"
}, {
    "id": "15bd9bbbbb24f6c3",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Upwork Simply life. Bring your clients to Upwork Hi Praveen, Your profile is set, but it looks like you haven&#39;t found any projects that spark your interest. If you&#39;re already working with great"
}, {
    "id": "15bdbb1f31b36d41",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "Meetup tomorrow Leverage web development skills to build telecom applications Hackathons, Datapaloozas, Barcamps, Codesprints &amp; Jams Sunday, May 7, 2017 12:15 PM Online Challenge Submit to link"
}, {
    "id": "15bdb7c8cadf4ad3",
    "labels": ["CATEGORY_UPDATES", "INBOX"],
    "snippet": "API News API Directory Add an API Search APIs Our Data. Your Powerpoint → Watchlist May. 5 2017 API Updates to Your Inbox Here Is Your ProgrammableWeb WatchList Alert Here you go! This week&#39;s"
}, {
    "id": "15bd72a5f9ce3136",
    "labels": ["IMPORTANT", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Where do you watch T20 matches? Can&#39;t Get Enough Cricket? If it&#39;s hard to think of anything but T20, here&#39;s a fun distraction between matches: add, update, or review restaurants, pubs, and"
}, {
    "id": "15bdbf62ec4d48b8",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "All Events in City Hi, Hope you had a great time! It&#39;s hard to recall people whom you met at that last event. Worry not. Find them below and explore more events together. You were toghether : Save"
}, {
    "id": "15bd90eeff8f0181",
    "labels": ["UNREAD", "IMPORTANT", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "₹ 170.54 Thanks for choosing Uber, Praveen May 5, 2017 | uberGO 07:48pm | Lilavati Apartments, New Beach Rd, Rajaji Nagar, Valmiki Nagar, Chennai, Tamil Nadu 600041, India 07:59pm | 10 A, MGR Main Rd,"
}, {
    "id": "15bdc3dd7bc65a93",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "Love as beautiful as your mother&#39;s deserves designs as stunning as these. Our Mother&#39;s Day Picks image Surprise your mom this Mother&#39;s day with these collection of designs. Start designing"
}, {
    "id": "15bd74a56f6ce2ab",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "THE ECONOMIC TIMES Fri, May 05, 2017 | 06:33 AM IST ET Investment Opportunities NOT TO MISS #Stocks In News,#Recos,#Expert Views,#IPOs,#Commodities Confused what to do in market now? Take a look at"
}, {
    "id": "15bd9842fda6f656",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "IMPORTANT", "INBOX"],
    "snippet": "Welcome to Slack! You&#39;ve joined the new Slack team Save the Hacker. Here are your account details: S Save the Hacker Team URL: savethehacker.slack.com Email: xav.axp@gmail.com Sign In We&#39;ll"
}, {
    "id": "15bd8f02ba1b4a50",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "This week&#39;s JavaScript news — Read this e-mail on the Web JavaScript Weekly Issue 333 — May 5, 2017 Prepack: An Optimization Tool to Produce More Efficient JavaScript Prepack optimizes JavaScript"
}, {
    "id": "15bd98d1e88315a0",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "Trending in design this week Save Personal Branding #Infographic -- This is a heck of ... Save On the Creative Market Blog - How to Design a Logo: ... Save HTML5 Cheatsheet Save Got a favorite color?"
}, {
    "id": "15bd804edfbdfec1",
    "labels": ["IMPORTANT", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Grow your network with the right people Your weekly stats are here! 181 Followers 155 Unfollowers Get More Followers Tweet your stats Questions? Reply to this email and we&#39;ll help you out. Upgrade"
}, {
    "id": "15bd765e7d501d31",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Crane Island @CraneIslandFL Crane Island represents one of the most desirable properties available on the Eastern seaboard today."
}, {
    "id": "15bd815d9c14ac7b",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Dana THE Trainer @DanaTheTrainer The most fun you ever had while #learning! #Trainer #Facilitator #Coach #Agile 🌐linkedin.com/in/"
}, {
    "id": "15bd84373cea45e9",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Transaction ID 10078206014 Transaction Date May 5, 2017 16:29:09 You added ₹500 to your Paytm wallet. Updated wallet balance is ₹848.14 How likely are you to recommend Paytm to a friend or colleague?"
}, {
    "id": "15bd73ad6694c561",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Kate Bourland @katebourland Consultant, Author, Speaker, Mom &amp; Animal Lover. Thought leader: Marketing Expert. Helping you"
}, {
    "id": "15bd7c5b256a72f7",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "The most interesting tutorials, libraries and tools for the week by Tutorialzine Web development newsletter Open this newsletter in your browser. “Any sufficiently advanced bug is indistinguishable"
}, {
    "id": "15bd8765fa9e2430",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Jonelle Hilleary @JLHilleary I influence positive changes in life by working with smart people who want to serve others &amp;"
}, {
    "id": "15bd7f84c821960b",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Christopher Lochhead @lochhead @LegendsLosers #Podcast #PlayBigger #Businessbooks #CategoryDesign @1LifeFullyLived I follow back."
}, {
    "id": "15bdadde12cbead4",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "Meetup tomorrow Pencil&amp;Chai&#39;s 183rd Realistic Art Session Pencil &amp; Chai Fine arts Gurukul - Bangalore Fine Arts Meetup Sunday, May 7, 2017 10:00 AM STATE CENTRAL LIBRARY Cubbon Park"
}, {
    "id": "15bda8bd9858dfd1",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Globemad Pete @globemadpete Globe exploring, spiritually curious, ship wreck survivor, who wants to better understand the world we"
}, {
    "id": "15bd7deea7f4b7c5",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "JapanesePod101.com Your Japanese word of the day is: 冬 (Can you guess what it is? Click here to find out.) 冬 (Click here to listen to a native speaker) Learn a little Japanese every day with the free"
}, {
    "id": "15bda2a97757113d",
    "labels": ["CHAT"],
    "snippet": ""
}, {
    "id": "15bda2b378b7d34f",
    "labels": ["CHAT"],
    "snippet": ""
}, {
    "id": "15bda77a9ed70f3a",
    "labels": ["CHAT"],
    "snippet": "https://tympanus.net/codrops/2013/09/18/creative-loading-effects/"
}, {
    "id": "15bdc04076e2e131",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "How is WikiTribune different from other news platforms? Quora Jimmy Wales on May 3, 2017 Jimmy Wales answered 32 questions How is WikiTribune different from other news platforms? Jimmy Wales Jimmy"
}, {
    "id": "15bd95e1ccd6e498",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "Friday, May 5 Launching Next publishes the world&#39;s most promising startups every day. You are receiving this email because you signed up for Launching Next&#39;s email newsletter on our website."
}, {
    "id": "15bd77e72307d5fc",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "Look who&#39;s loving your Pins and boards Your Pin from Tech was saved to this board. Programming Techy Sg See more Pinterest The world&#39;s catalogue of ideas 572 7th Street · San Francisco CA,"
}, {
    "id": "15bdb2a895d53b0c",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "Pay only 50%! Save the rest Mobile App Gift Voucher Mobiles | Lifestyle | Home | Offer Zone Flipkart Bean Bag Covers Bean Bag Covers Suitcases Men&#39;s Footwear Mobile Cases and Covers Women&#39;s"
}, {
    "id": "15bda2d7370d6510",
    "labels": ["CHAT"],
    "snippet": ""
}, {
    "id": "15bd92e1b836d2ab",
    "labels": ["IMPORTANT", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Join Save the Hacker on Slack rescue@savethehacker.​com has invited you to join the Slack team Save the Hacker. Join now to start collaborating! Join Now S Save the Hacker Team URL: savethehacker.slack"
}, {
    "id": "15bd7b654c36513e",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Steffan Surdek @ssurdek I am a professional speaker, an author and a leadership development coach. I light up passionate people"
}, {
    "id": "15bd9d3718277e21",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "Meetup Chennai entrepreneur matchmaking Meetup I would like to invite people who have interest in joining new business and starting a new venture especially people who have more years of experience in"
}, {
    "id": "15bd887cea13a64c",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Praveen, your chance to join the Social Media Marketing Society at half the regular price is about to end today (May 5th at midnight Pacific). A few factoids for you: #1: Facebook is changing rapidly:"
}, {
    "id": "15bd787e52d661f5",
    "labels": ["UNREAD", "IMPORTANT", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Hi there, I hope you&#39;re well and thanks again for trusting our platform to build your projects. As we continue to put our efforts in making Stamplay a better platform everyday, we&#39;re changing"
}, {
    "id": "15bd9a857d72bd73",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Hey Praveen, new content in this issue... How to Make an Animated GIF: A Guide for Marketers Looking for a way to stand out on your social media channels? Have you thought about using animated GIFs?"
}, {
    "id": "15bdace05dc6fcbf",
    "labels": ["IMPORTANT", "CATEGORY_PERSONAL", "INBOX"],
    "snippet": "Access for less secure apps has been turned on Hi praveen, You recently changed your security settings so that your Google account xav.axp@gmail.com is no longer protected by modern security standards."
}, {
    "id": "15bd7d4e508eb850",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "www.eventshigh.com Food Trippin&#39; ft. Rocky &amp; Mayur, 7th May VR Bengaluru Food Trippin&#39; featuring Rocky &amp; Mayur, India&#39;s Popular Foodies - A chilled out Sunday with food, beer, live"
}, {
    "id": "15bd8b4d7dfaee71",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Smart Lad @ASmartLad Get all the outdoor equipment and read exclusive outdoor kit reviews at Thesmartlad.com United States · http:"
}, {
    "id": "15bd96fda67be9c2",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "If you have trouble viewing this email, read the online version. Fun Friday May 5, 2017 Insights, Events &amp; Humor Hubsan FPV drone teardown Quadcopter sitting in a tree, FALLING. Pebble Time Round"
}, {
    "id": "15bd8865c6a54e97",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "@Hopesmalling: Hey praveen, thanks for the recent follow :) (Want this? The easiest way to grow followers for free - It&#39;s Magical! …) Hopeton Smalling sent you a Direct Message. Hey praveen, thanks"
}, {
    "id": "15bdab356583fc27",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "6 world-class teams, 2 Aussie challengers, $200k. LIVE on Twitter. Let the games begin Watch LIVE on Live on Twitter: IEM Sydney 2017 The Counter-Strike: Global Offense games are on! For the first time"
}, {
    "id": "15bd8871b12b5ef4",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "Just for you - the best reads from YourStory On a holiday to Europe, Nishanth Chandra was startled to find how different the meat markets were compared to those in India in terms of cleanliness,"
}, {
    "id": "15bd751480390790",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Beth @MsMediaBeth *Game Day* is one of the best things ever #IloveThePatriots Super Bowl LI Champions 🏆🏆🏆🏆🏆 #"
}, {
    "id": "15bd8ed6c803d44b",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "Encourage instructors to keep sharing what they love. It&#39;s your last chance to catch this sale. -- Check Out Top Game Design Courses: Become a Game Developer/Designer : Complete Master Series"
}, {
    "id": "15bd839c983a9cdd",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Direct Source Wealth @DSWCashFlow Co-Investors In Multi-family and Commercial Real Estate Cabo Rojo, Puerto Rico · http://"
}, {
    "id": "15bd8c8e6b4ef259",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "For Japanese Learners! Click Here To Get The Free Lesson! Hello Listener, How well do you know your holidays? Children&#39;s Day is celebrated on May 5th in Japan and there&#39;s no excuse for skipping"
}, {
    "id": "15bd869d19123462",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "Save up to 90% on the web&#39;s top tech: gadgets, software, online courses, VPNs, pay what you want, drones &amp; more sale_featured1 sale_item1 sale_item2 sale_item3 sale_item4 sale_item5 sale_item6"
}, {
    "id": "15bd761f84d12c9f",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Anthony Turgman @TurgSaysNo Co-Host of 🎙@@talkthirtypod Striving to be the ##BestDadEver Star Wars Die-hard. Marvel Nerd. Tech"
}, {
    "id": "15bd6b102bfa344d",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "New on CodinGame: Check it out! Hey praveenax, here&#39;s a special digest built for you. Enjoy your weekly news! :) Puzzle of the Week Skylines Check out the Puzzle of the Week, crafted by Heino! TRY"
}, {
    "id": "15bd71e9ef4c66fe",
    "labels": ["IMPORTANT", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Hasura Free trial: Expiry and more Hi, How is your free trial coming along? Your Hasura free trial project evening80 is scheduled for recycling in 7 days. The credentials for this project have already"
}, {
    "id": "15bda884f66f7a90",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "Plus, the senators who will decide health care and the revival of Guardians of the Galaxy. | Don&#39;t have time to read now? Follow 10 for Today on Flipboard to browse later. 10 for Today Interesting"
}, {
    "id": "15bd6f61ce4e6ca1",
    "labels": ["CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Bitcoin Debit Card💳 @paycentio The Better Bitcoin Debit Card with iOS and Android, visit paycent.io to find out more and reserve a"
}, {
    "id": "15bd7ccd54067c1e",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Gene Petrov @GenePetrovLMC Fundamental Leadership Principles From A To Z. Marketing. Entrepreneurship. Social Media. Father of"
}, {
    "id": "15bdc71e38a39530",
    "labels": ["CHAT"],
    "snippet": ""
}, {
    "id": "15bd78c7e65b96df",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Amy Buck @AmyBatDell #Content developer, UX architect, open source guru, #technology news junkie, world travel, and personal"
}, {
    "id": "15bd6fb2562481cb",
    "labels": ["CATEGORY_UPDATES", "INBOX"],
    "snippet": "Your wish is our command. Hire a Freelancer Now → Let&#39;s cut to the chase. The weekend is about to start. It&#39;s likely that your to-do list for this week hasn&#39;t been fully completed. Don&#39;"
}, {
    "id": "15bd77fb59819848",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Leah M Berry @leahmberry Want to know what your ideal customers want and create marketing messages they can&#39;t resist? Get the"
}, {
    "id": "15bd8180c3e7e41f",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Your friend Yosun published a project on Devpost. AlexaPet A virtual pet for your Amazon Alexa device BUILT WITH: Check out AlexaPet © 2016 Devpost. All rights reserved. Unsubscribe from notification"
}, {
    "id": "15bd767f30d7b544",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Java/scala/j2ee Developer Keyskills: Java, J2Ee, Akka, SOAP, Web Services, SCALA, Web Technologies, Linux Dear praveen kumar Here are new jobs matching your profile Jobs in your preferred locations"
}, {
    "id": "15bd6f561a011519",
    "labels": ["IMPORTANT", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Your Hasura project is ready Your new Hasura project can be accessed at http://console.evening80.hasura-app.io Following are the credentials to login to the console: Username: admin Password: backwoods"
}, {
    "id": "15bd7f6c2ce4d470",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "Hey Praveen, Your friend Yosun just registered for this hackathon. You two should team up! Intel Hacks 2017 Plug, play, and power up with Arduino 101 to win prizes. Learn more about this hackathon ©"
}, {
    "id": "15bd7c907463f2eb",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax Dale East @DaleEast Helping People Find Happiness &amp; Fulfillment and Success in Everyday Life! Best Selling Author, Coach,"
}, {
    "id": "15bd6d69b3d4babb",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "May 5, 2017 THE DAILY FIX Bilkis Bano verdict is a reminder of state complicity in the 2002 Gujarat riots One of the many horrors that came into public view after the Gujarat riots of 2002 was the"
}, {
    "id": "15bdc1504b21a024",
    "labels": ["IMPORTANT", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "Quora Can you answer this question? From topics you know about As someone who answered questions about Learning New Things before, can you help Mittali Aggarwal? Mittali Aggarwal and 4 others want an"
}, {
    "id": "15bd96f7496b7f55",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax MoodPeek @moodpeek_byOpen La Solution d&#39;analyse des opinions des utilisateurs mobiles by @Open_ESN. Video: goo.gl/SlU0Bm | @"
}, {
    "id": "15bd6e08acae4ee2",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "This Week&#39;s Best Cashback Offers Baahubali 2: Buy 1 Get 1 Free on Movie Ticket Bookings with Credit/Debit Cards See all 29 BookMyShow Offers Exclusive: Flat 10% SuperCash on Minimum Recharges/Bill"
}, {
    "id": "15bd88909533373a",
    "labels": ["IMPORTANT", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "₹ 273.81 Thanks for choosing Uber, Praveen May 5, 2017 | uberGO 04:45pm | Arundale Beach Rd, Lakshmipuram, Radhakrishnan Nagar, Besant Nagar, Chennai, Tamil Nadu 600090, India 05:44pm | 84/203,"
}, {
    "id": "15bd824199ed453c",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "Free Shipping. Easy Returns. No Cost EMI. pepperfry Furniture Home Decor Lamps &amp; Lighting More on all orders above Rs.200 Coupon Code 4INPCL START SHOPPING NOW Applicable Site Wide. For First 500"
}, {
    "id": "15bd9f181f13c5b9",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "API DirectoryNewsAdd an API Today in APIs May 5, 2017 New APIs CGTrader CGTrader DataSift HTTP Streaming DataSift HTTP Streaming Phone.com Phone.com Latest Headlines What is Express.js and Why Does It"
}, {
    "id": "15bd95d6af8ca981",
    "labels": ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    "snippet": "THE DAILY CRUNCH FRIDAY, MAY 5 2017 By Anthony Ha Facebook shuts down its award-winning VR studio, the Department of Justice may be investigating Uber and YouTube teams up with big stars. All that and"
}, {
    "id": "15bd83a0e45d1d7a",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "Praveen Kumar, dive into your weekly Flipboard digest. Stories from your Flipboard CRAFTING Open CRAFTING 17 Fascinating Facts You Probably Never Knew About Yankee Candles 17 Fascinating Facts You"
}, {
    "id": "15bd7cb5f855640b",
    "labels": ["CATEGORY_PROMOTIONS", "UNREAD", "INBOX"],
    "snippet": "Watch it Today, Book Your Movie Tickets Now. #PaytmKaro Browser View #PaytmKaro Download Paytm App Download Android App Download IOS App Download Window App Movies Amusement Parks Events Updates Offers"
}, {
    "id": "15bd84a4a9e91027",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "praveen kumar ax, You have a new follower on Twitter. praveen kumar ax GTBusiness @GlobalTelecoms A trusted source of mission critical information for global telecoms leaders. Providing comprehensive"
}, {
    "id": "15bda7fc179358b1",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "The Young Turks is live streaming The Young Turks 05.05.17. The Young Turks 05.05.17 by The Young Turks http://www.tytnetwork.com/go Download audio and video of the full two hour show on-demand + the"
}, {
    "id": "15bd8e50a57c4959",
    "labels": ["UNREAD", "CATEGORY_SOCIAL", "INBOX"],
    "snippet": "We found some Pins that we think might be right up your street. New ideas for you in Military We found some Pins that we think might be right up your street. Save Military Humor Save A-10 Warthog Save"
}];

//console.log(inputJson);
//console.log(inputJson.replace(/@/g,''));
//const oldString = 'a really Interesting string with some words'.split(' ')
//const newString = sw.removeStopwords(oldString)
//console.log(newString);
//console.log(newString.join(" "));
//
//var inp_txt = "Meetup Chennai Weekend Musicians Meetup Are you a crazy music listener or singer? looking to learn and master a music Instrument? Are you passionate about Sound and Audio Recording? This group is for";


var skilltargets = ["Sales","Artist","Photoshop","Tally","Marketing","HR","Programming","Therapist","Physiotheraphy","Dancer","Decorator","Event Planner","Coaching","Singer","Photographer","Guitarist"];

var classifier = new Classifier();

classifier.train("Sales", "A sale is the exchange of a commodity or money as the price of a good or a service.[1] Sales (plural only) is activity related to selling or the amount of goods or services sold in a given time period.The seller or the provider of the goods or services completes a sale in response to an acquisition, appropriation,[2] requisition or a direct interaction with the buyer at the point of sale.");
classifier.train("Artist", "An artist is a person engaged in an activity related to creating art, practicing the arts, or demonstrating an art. The common usage in both everyday speech and academic discourse is a practitioner in the visual arts only. ");
classifier.train("Photoshop", "Adobe Photoshop is a raster graphics editor developed and published by Adobe Systems for macOS and Windows.Photoshop was created in 1988 by Thomas and John Knoll. Since then, it has become the de facto industry standard in raster graphics editing, such that the word photoshop has become a verb as in to Photoshop an image,photoshopping and photoshop contest, though Adobe discourages such use.");
classifier.train("Tally", "The reckoning of a debt or score; a total score or amount");
classifier.train("Marketing", "Marketing is the study and management of exchange relationships. The American Marketing Association has defined marketing as the activity, set of institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large");
classifier.train("HR", "Human resource management (HRM or HR) is the management of human resources. Human resource mean managing capital of an organization.It is designed to maximize employee performance in service of an employer's strategic objectives.");
//classifier.train("Programming", "Some input that belongs in GROUP-B");
//classifier.train("Therapist", "Some input that belongs in GROUP-B");
//classifier.train("Physiotheraphy", "Some input that belongs in GROUP-B");
//classifier.train("Dancer", "Some input that belongs in GROUP-B");
//classifier.train("Coaching", "Some input that belongs in GROUP-B");


for(var i=0;i<inputJson.length;i++){
    var group = classifier.classify(inputJson[i].snippet);
console.log(group);
}


//classifier.trainFromFile("GROUP-A", filename);
//classifier.classifyFile(filename);

//var groupList = classifier.rankGroups("Some input that should be GROUP-B");
//console.log(groupList);
  // groupList = [ { group: 'GROUP-B', probability: -0.75 }, { group: 'GROUP-A', probability: -0.45 } ] 

