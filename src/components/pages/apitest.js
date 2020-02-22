import React from 'react';

class Apitest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://apis.is/concerts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        // Notes: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
            <div className="card">
              <img src={item.imageSource} class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{item.eventDateName}</h5>
                <p className="card-text">
                 Titill : {item.userGroupName}
                 Dagsetning: {item.dateOfShow}
                </p>
              </div>
              </div>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Apitest;
