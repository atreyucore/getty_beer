import React from 'react';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Select from 'grommet/components/Select';


class Formulario extends React.Component{
  render () {
    return (

      <Form compact={true}>
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

}

export default Formulario;