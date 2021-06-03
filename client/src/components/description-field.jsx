import React from 'react';

import {FormGroup, Input} from 'reactstrap';

import './description-field.css'

const DescriptionField = (props) => (
  <FormGroup>
    <Input placeholder="Description of your task" type="textarea" name="description" id="description" className="description-textarea" />
  </FormGroup>
)

export default DescriptionField;