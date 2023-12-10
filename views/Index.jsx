const React = require('react');
function Index(props) 
{
    return(
      <div>
        <h2>{props.bottlesLeft} Bottles of Chocolate Milk on the wall </h2>
        {props.bottlesLeft > 0 && (
         <a href = {`/${props.bottlesLeft - 1}`}>Take one Down,Pass it around</a>
        )}
        {/* <a href="/">Start Over</a> */}
      </div>
    );
}

module.exports = Index;