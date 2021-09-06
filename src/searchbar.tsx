import React from "react";

class SearchBar extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    this.state = {
      value:"Find smth interesting"
    }
  }
  render(){
    return (
      <div className="input-group">
  <div className="form-outline">
    <input type="search" id="form1" className="form-control" />
    <label className="form-label" htmlFor="form1">Search</label>
  </div>
  <button type="button" className="btn btn-primary">
    <i className="fas fa-search"></i>
  </button>
</div>
    )
  }
}

export default SearchBar