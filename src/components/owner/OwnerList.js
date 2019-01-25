import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class OwnerList extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="owners">
          {this.props.owners.map(owner => (
            <div key={owner.id} className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {owner.name}
                  <a
                    href="#"
                    onClick={() => this.props.deleteOwner(owner.id)}
                    className="card-link"
                  >
                    Delete
                  </a>
                </h5>
              </div>
            </div>
          ))}
        </section>
      </React.Fragment>
    );
  }
}