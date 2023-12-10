// ===== Load express =====
const express = require('express');

// ===== Create our express app ======
const app = express();

// ===== configure the app (app.set) =====
 const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());


// Define another route - /home

app.get('/', (req, res) => {
    // res.send('99 Bottles of chocolate milk on the wall')
    res.render('Index', {bottlesLeft:99})
  })
  
  app.get('/:number_of_bottles', (req, res) => {
    const bottlesLeft = parseInt(req.params.number_of_bottles, 10);
    if(bottlesLeft > 0) {

      res.render('Index', {bottlesLeft})
    } else {
      res.render('NoMore');
    }
  });
    
    
// ===== Tell the app to listen on port 3000 =====
// for HTTP requests from clients
app.listen(3000, function() {
    console.log('Listenting on port 3000');
})