var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {

    'book-one' : {
     title:'Article One',
     heading:'Article 1',
     date:'09-Oct-2016',
     content:
              ` <p>
                    this is article one created by me sree ranjan r. this is article one created by me sree ranjan r. this is article one created by me sree ranjan r. this is article one created by me sree ranjan r. this is article one created by me sree ranjan r
                </p>
                
                 <p>
                    this is article one created by me sree ranjan r. this is article one created by me sree ranjan r. this is article one created by me sree ranjan r. this is article one created by me sree ranjan r. this is article one created by me sree ranjan r
                </p>
                
                 <p>
                    this is article one created by me sree ranjan r. this is article one created by me sree ranjan r. this is article one created by me sree ranjan r. this is article one created by me sree ranjan r. this is article one created by me sree ranjan r
                </p>`
        },
    'book-two' : { 
     title:'Article Two',
     heading:'Article 2',
     date:'10-Oct-2016',
     content:
              ` <p>
                    this is article 2 created by me sree ranjan r. this is article 2 created by me sree ranjan r. this is article 2 created by me sree ranjan r. this is article 2 created by me sree ranjan r. this is article 2 created by me sree ranjan r
                </p>
                
                 <p>
                    this is article 2 created by me sree ranjan r. this is article 2 created by me sree ranjan r. this is article 2 created by me sree ranjan r. this is article 2 created by me sree ranjan r. this is article 2 created by me sree ranjan r
                </p>
                
                 <p>
                    this is article 2 created by me sree ranjan r. this is article 2 created by me sree ranjan r. this is article 2 created by me sree ranjan r. this is article 2 created by me sree ranjan r. this is article 2 created by me sree ranjan r
                </p>`},
    'book-three' : {
     title:'Article Three',
     heading:'Article 3',
     date:'10-Oct-2016',
     content:
              ` <p>
                    this is article 3 created by me sree ranjan r. this is article 3 created by me sree ranjan r. this is article 3 created by me sree ranjan r. this is article 3 created by me sree ranjan r. this is article 3 created by me sree ranjan r
                </p>
                
                 <p>
                    this is article 3 created by me sree ranjan r. this is article 3 created by me sree ranjan r. this is article 3 created by me sree ranjan r. this is article 3 created by me sree ranjan r. this is article 3 created by me sree ranjan r
                </p>
                
                 <p>
                    this is article 3 created by me sree ranjan r. this is article 3 created by me sree ranjan r. this is article 3 created by me sree ranjan r. this is article 3 created by me sree ranjan r. this is article 3 created by me sree ranjan r
                </p>`},
            
    
};

function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

    var htmlTemplate =`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
             <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
          <div class="container">
            <div>
                <a href="/"> Home </a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
           </div>
        </body>
    </html>
`;
    return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:bookName', function (req, res) {
    //articleName = article-oneName;
    var bookName = req.params.bookName;
    res.send(createTemplate(articles[bookName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
