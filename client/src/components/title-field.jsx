import React from 'react';

import {FormGroup, Input} from 'reactstrap';

import './title-field.css';

const TitleField = (props) => (
  <FormGroup>
    <Input className="title-field" type="text" name="text" id="exampleEmail" placeholder="Title of your task" />
  </FormGroup>
)

export default TitleField;