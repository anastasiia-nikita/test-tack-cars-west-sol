import React from 'react';
import './Questions.scss';

export const Questions: React.FC = () => (
  <div className="App__questions questions container ">
    <h2 className="questions__title">Popular questions</h2>

    <div className="row justify-content-center">
      <div className="col-sm-12 col-lg-8">
        <div className="questions__accordion-block accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="questions__accordion-header accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                1. Scope
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse questions__accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="questions__accordion-header accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                2. Vehicle characteristics
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse questions__accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="questions__accordion-header accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                3. Warranty / guarantee
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse questions__accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body questions__accordion-body">
                <p>
                  3.1 The statutory warranty is completely excluded to the extent permitted by law.
                </p>

                <p>
                  3.2 If the vehicle still has a current factory warranty,
                  a sales representative (brand representative)
                  of the manufacturer shall provide the services owed therein.
                  If there is a factory warranty, the beginning of the warranty
                  for new vehicles or vehicles with a current manufacturer&apos;s warranty
                  is not the date of the first placing on the market,
                  but the beginning of the warranty in the manufacturer&apos;s system or the
                  contractually agreed beginning of the warranty, if any.
                </p>
                <p>
                  3.3 If there is a special warranty insurance for the vehicle,
                  this will take the place of the material warranty according
                  to section 3.1 and replace it. In this case,
                  the General Terms and Conditions of the respective warranty
                  service provider apply.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button className="questions__accordion-header accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                4. Trade-in vehicle
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse questions__accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button className="questions__accordion-header accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                5. Home Delivery
              </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse questions__accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSix">
              <button className="questions__accordion-header accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                6. Right of return
              </button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse questions__accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSeven">
              <button className="questions__accordion-header accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                7. Written form
              </button>
            </h2>
            <div id="flush-collapseSeven" className="accordion-collapse questions__accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header" id="flush-headingEight">
              <button className="questions__accordion-header accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                8. Applicable law and place of jurisdiction
              </button>
            </h2>
            <div id="flush-collapseEight" className="accordion-collapse questions__accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
