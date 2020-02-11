import React, { Component } from 'react';
import Header from '../../../components/Header/Header';

class About extends Component {
  handleReload = () => {
    ServiceWorkerRegistration.onupdatefound = () => {
      // Check if online
      if (navigator.onLine) {
        // Delete cache
        caches.keys()
          .then(function(names) {
            for (let name of names)
                caches.delete(name);
          })

          .then(() => {
            window.location.reload(true);
          })
      }
    }
  }

  render() {
    return (
      <div className="container">
        <Header title="About...."/>
        <button onClick={this.handleReload}>Reload</button>
      </div>
    );
  }
}

export default About;
