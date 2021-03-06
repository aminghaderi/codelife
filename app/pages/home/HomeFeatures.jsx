import React, {Component} from "react";
import {Link} from "react-router";
import {translate} from "react-i18next";
import CloudDiagonalGradual from "components/CloudDiagonalGradual.svg.jsx";
import "./HomeFeatures.css";

class HomeFeatures extends Component {

  render() {
    const {t} = this.props;

    return (
      <div className="content-section features-section">

        {/* clouds */}
        <div className="features-bg">
          <CloudDiagonalGradual />
          <CloudDiagonalGradual />
        </div>

        {/* section heading */}
        <h2 className="feature-list-heading font-xl">{t("Features")}</h2>

        <div className="feature-list u-list-reset u-margin-bottom-off-children">

          {/* feature 1 */}
          <section className="feature-item">
            <span className="feature-icon pt-icon pt-icon-send-to-map" />
            <h3 className="feature-text font-lg">
              {t("Home.Feature1")}
            </h3>
            <p className="feature-caption font-md u-margin-top-xs">
              {t("Home.Feature1Caption")}
            </p>
          </section>

          {/* feature 2 */}
          <section className="feature-item">
            <span className="feature-icon pt-icon pt-icon-console" />
            <h3 className="feature-text font-lg">
              {t("Home.Feature2")}
            </h3>
            <p className="feature-caption font-md u-margin-top-xs">
              {t("Home.Feature2Caption")}
            </p>
          </section>

          {/* feature 3 */}
          <section className="feature-item">
            <span className="feature-icon pt-icon pt-icon-clipboard" />
            <h3 className="feature-text font-lg">
              {t("Home.Feature3")}
            </h3>
            <p className="feature-caption font-md u-margin-top-xs">
              {t("Home.Feature3Caption")}
            </p>
          </section>

        </div>
      </div>
    );
  }
}

export default translate()(HomeFeatures);
