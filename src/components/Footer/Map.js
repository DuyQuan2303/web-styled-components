import {  GoogleApiWrapper,  } from "google-maps-react";
import React, { Component } from "react";
export class MapContainer extends Component {
  render() {
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.768381709164!2d106.6770096504623!3d10.829029192247969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528fe7d67995d%3A0x4391ff28950c2c3b!2zODkgxJDGsOG7nW5nIHPhu5EgMSwgUGjGsOG7nW5nIDcsIEfDsiBW4bqlcCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1655778610706!5m2!1sen!2s"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8	",
})(MapContainer);
