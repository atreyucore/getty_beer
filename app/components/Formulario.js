var React = require('react');
var Form = require('grommet/components/Form');
var FormFields = require('grommet/components/FormFields');
var FormField = require('grommet/components/FormField');
var Header = require('grommet/components/Header');
var Footer = require('grommet/components/Footer');
var Button = require('grommet/components/Button');
var Select = require('grommet/components/Select');


var Formulario = React.createClass({
  render: function () {
    return (


      <Form compact={true}>
        <Header>
          <h3>Add Beer</h3>
        </Header>
        <FormFields>
          <fieldset>
            <FormField label="Beer Name">
              <input id="input-id" name="name" type="text"/>
            </FormField>
            <FormField label="Beer Description">
              <input id="input-id" name="name" type="text"/>
            </FormField>
            <FormField>
              <Select label="Type" options={["one", "two", "three", "four", "five", "six", "seven", "eight"]} />
            </FormField>
          </fieldset>
        </FormFields>
        <Footer pad={{vertical: 'medium'}}>
          <Button label="Add" primary={true} />
        </Footer>
      </Form>

    );
  }

});

module.exports = Formulario;