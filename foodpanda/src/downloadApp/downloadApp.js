import React, { Component } from 'react';
import "./downloadApp.css"

class DownloadApp extends Component {

    render() {
        return(
            <div className="downloadApp">
            <h2>Приложение</h2>

            <a target="blank" href="https://itunes.apple.com/app/id758103884?mt=8">Download from AppStore</a>
            <a target="blank" href="https://play.google.com/store/apps/details?id=com.global.foodpanda.android&referrer=adjust_reftag%3DcbyWcuqkIRXlK%26utm_source%3DWebsite%26utm_campaign%3DBG_Homepage_Android">Download from Google Play</a>

            </div>
        )
    }
}

export default DownloadApp;
