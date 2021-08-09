import React from "react";
import './styles/video.css';
import { FormBtn } from "../components/FormBtn";
import { Container } from 'react-bootstrap';


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
      <Container align= 'center' style={{ maxWidth: 'sm', marginTop: '20px' }}>
        <form onSubmit={this.onSubmit} className="search-form" style={{ maxWidth: '50%', textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
>
          <div className="form-controls">
            <label>Search</label>
            <input style={{ maxWidth: '85%' }}
              id="video-search"
              type="text"
              value={this.state.title}
              onChange={this.onSearchChanged}
              placeholder="Search"
            />
          </div>
          <FormBtn
          style={{ maxWidth: '100%' }}
                disabled={this.title}
                onClick={this.onSubmit}
              >
                Search YouTube
              </FormBtn>
        </form>
      </Container>
    );
  }
}

export default Search;