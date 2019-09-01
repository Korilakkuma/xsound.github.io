'use strict';

import React from 'react';
import { connect } from 'react-redux';

class Ready extends React.Component {
    static TITLE      = 'MediaModule#ready';
    static CLASS_NAME = 'Ready';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <main className={Ready.CLASS_NAME}>
                <section>
                    <div className="component-title">
                        <h1>ready</h1>
                        <p className="returns">Returns : <span>MediaModule</span></p>
                    </div>
                    <hr role="presentation" />
                    <p>
                        This method reads media.
                    </p>
                    <table>
                        <caption>Arguments</caption>
                        <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
                        <tbody>
                            <tr>
                                <th scope="row">1st</th>
                                <td><span className="argument-type">string</span></td>
                                <td>
                                    This value is media URL.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2nd</th>
                                <td><span className="argument-type">string</span></td>
                                <td>
                                    This value is codec (ex. &apos;audio/mpeg&apos;). This value is required in the case of audio streaming.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='MediaModule#ready | XSound - Web Audio API Library -' src='//codepen.io/Korilakkuma/embed/eMNmjK/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameBorder='no' allowtransparency='true' allowFullScreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/eMNmjK/'>MediaModule#ready | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                </section>
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='MediaModule#ready | XSound - Web Audio API Library -' src='//codepen.io/Korilakkuma/embed/xxKOWbv/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameBorder='no' allowtransparency='true' allowFullScreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/xxKOWbv/'>MediaModule#ready | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                </section>
            </main>
        );
    }
}

export default connect()(Ready);
