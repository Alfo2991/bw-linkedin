import React from "react";

function Insights() {
  return (
    <section id="ember165" className="artdeco-card ember-view relative break-words pb3 mt2" tabIndex="-1">
      <div id="insights" className="pv-profile-card__anchor"></div>
      <div className="pvs-header__container">
        <div className="pvs-header__top-container--no-stack">
          <div className="pvs-header__left-container--stack">
            <div className="pvs-header__title-container">
              <h2 className="pvs-header__title text-heading-large">
                <span aria-hidden="true">Analytics</span>
                <span className="visually-hidden">Analytics</span>
              </h2>
              <p className="pvs-header__subtitle pvs-header__optional-link text-body-small">
                <span aria-hidden="true">
                  <li-icon aria-hidden="true" type="visibility" className="v-align-bottom" size="small">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      className="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
                    </svg>
                  </li-icon>
                  <span className="white-space-pre"> </span>Private to you
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pvs-list__outer-container">
        <ul className="pvs-list ph5 display-flex flex-row flex-wrap">
          <li className="pvs-list__item--three-column ">
            <div className="pvs-entity pvs-entity--padded pvs-list__item--no-padding-in-columns">
              <div className="mot">
                <a
                  data-field="insights_wvmp"
                  className="optional-action-target-wrapper display-flex"
                  target="_self"
                  tabIndex="-1"
                  aria-hidden="true"
                  href="https://www.linkedin.com/me/profile-views"
                >
                  <div className="ivm-image-view-model pvs-entity__image ">
                    <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
                      <li-icon aria-hidden="true" type="people" className="ivm-view-attr__icon--icon  " size="large">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          className="mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                        </svg>
                      </li-icon>
                    </div>
                  </div>
                </a>
              </div>
              <div className="display-flex align-items-center full-width">
                <div className="display-flex flex-row justify-content-center">
                  <a
                    data-field="insights_wvmp"
                    className="optional-action-target-wrapper display-flex align-items-center"
                    target="_self"
                    href="https://www.linkedin.com/me/profile-views"
                  >
                    <div className="discoverWho pvs-entity__image">
                      <span className="mr-2 hoverable-link-text mb-1">
                        <span aria-hidden="true" className="text-black views">
                          9 profile views
                        </span>
                        <span className="visually-hidden">9 profile views</span>
                      </span>
                      <span className=" t-14 t-normal mb-1">
                        <span aria-hidden="true">Discover who's viewed your profile.</span>
                        <span className="visually-hidden">Discover who's viewed your profile.</span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Insights;
