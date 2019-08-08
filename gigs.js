var jquery = require('jquery');
var Nightmare = require('nightmare'),
    nightmare = Nightmare()

    var city = process.argv[2]

    nightmare.goto('http://' + city + '.craigslist.org/search/cpg?is_paid=yes')

    .wait(2000)

    .evaluate(()=> {
     var gigs = [];

     $('.hdrlnk').each(function(){
      item = {}
      item["title"] = $(this).text()
      item["link"] = $(this).attr("href")
      gigs.push(item)
     })

     return gigs

    })
    .end()
    .then((result) => {
     console.log("To: kuwahara.mee@gmail.com")
     console.log("From: kuwahara.mee@gmail.com")
     console.log("Subject: Today's Gigs")
     console.log("\n")




     for(gig in result){
      console.log(result[gig].title)
      console.log(result[gig].link)
      console.log("\n")


     }
    })