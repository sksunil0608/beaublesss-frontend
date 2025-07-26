import React from "react";
import Contact3 from "./Contact3";

export default function StoreLocations3() {
  return (
    <section className="mt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-us-map">
              <div className="wrap-map">
                <div
                  id="map-contact"
                  className="map-contact"
                  data-map-zoom={16}
                  data-map-scroll="true"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448988.3352548838!2d77.22003040607805!3d28.457814546055356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf18cd3c88caf%3A0xeb897787738a23c2!2sBeaubless%20Skincare!5e0!3m2!1sen!2sin!4v1753509259027!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* <img src="/images/banner/contact.jpg" className="rounded" style={{ border: 0,borderRadius:'10px',width: "100%", height: "100%" }}/> */}
                </div>
              </div>
              <div className="right"><Contact3 /></div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
