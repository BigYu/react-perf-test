import React from 'react';

export default class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemText: '',
    }
  }

  render() {
    return (
      <div className="form-group container-fluid row">
        <input
          placeholder="new item"
          className="form-control col-sm-10"
          type="text"
          value={this.state.itemText}
          onChange={(e) => {
            e.preventDefault();

            this.setState({
              itemText: e.target.value,
            })
          }}
        ></input>
        <button
          className="col-sm-2 btn btn-primary"
          onClick={() => {
            this.props.onSubmit(this.state.itemText);

            this.setState({
              itemText: '',
            });
          }}
        >Submit</button>
      </div>
    );
  }
}