// Basic method to render the component on the root 
// of the document.body.
'use strict';

var render = function(component){
  React.renderComponent(component, document.body);
};

// Basic React js class. This will be like a wrapper for 
// the whole application.
var Application = React.createClass({

  // Display name for debug purposes.
  displayName: 'Application',

  // The actual render method of the Application component.
  render: function(){
    // Returns a simple DIV element with a class named
    // 'application' and contents 'Application OK!'. 
    return React.DOM.div({className: 'application'}, 
      [
        'Application OK!',
        this.props.view
      ]);
  },
  //called before the component is mounted. Gives these default props to
  //application class
  getDefaultProps: function(){
    return {
      color: 'black'
    };
  },
  //This makes color a required prop and need to be type string
  propTypes: {
    color: React.PropTypes.string.isRequired,
    view: React.PropTypes.component
  }
});

var Header = React.createClass({
  render: function(){
    return React.DOM.header({
      className: 'header'
    },
      React.DOM.nav({
        className: 'navigation'
      },
        React.DOM.a({}, 'Home'),
        React.DOM.a({children: 'Categories'})
      )
    )
  }
});






// The initial trigger that will make the Application 
// component to actually render on the document's body.

//does render default to document.body when no 2nd argument is passed in? 
render(new Application({
  color: 'blue',
  view: new Header()
}));