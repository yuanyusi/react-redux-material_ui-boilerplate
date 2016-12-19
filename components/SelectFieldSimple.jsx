import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
  },
};

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class SelectFieldSimple extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Grade"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="SE-JP" />
          <MenuItem value={2} primaryText="SE-PG" />
          <MenuItem value={3} primaryText="SE-AP" />
          <MenuItem value={4} primaryText="SE-AN" />
        </SelectField>
      </div>
    );
  }
}