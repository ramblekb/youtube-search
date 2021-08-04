import React from "react";
import './styles/video.css';
import { FormBtn } from "../components/FormBtn";


class Search extends React.Component {
  state = { title: "" };
  onSearchChanged = event => {
    const _title = event.target.value;
    this.setState({ title: _title });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.title);
  };
  render() {
    return (
      <>
        <form onSubmit={this.onSubmit} className="search-form">
          <div className="form-controls">
            <label>Search</label>
            <input
              id="video-search"
              type="text"
              value={this.state.title}
              onChange={this.onSearchChanged}
              placeholder="Enter Search Keyword"
            />
          </div>
          <FormBtn
                disabled={this.title}
                onClick={this.onSubmit}
              >
                Submit Book
              </FormBtn>
        </form>
      </>
    );
  }
}

export default Search;