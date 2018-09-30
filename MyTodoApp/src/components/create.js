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
      <div>
        new item: <input
          type="text"
          value={this.state.itemText}
          onChange={(e) => {
            e.preventDefault();

            this.setState({
              itemText: e.target.value,
            })
          }}
        ></input>
        <button onClick={() => {
          this.props.onSubmit(this.state.itemText);
        }}>Submit</button>
      </div>
    );
  }
}