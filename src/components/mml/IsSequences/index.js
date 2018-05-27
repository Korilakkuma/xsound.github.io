'use strict';

import React from 'react';
import { connect } from 'react-redux';

class IsSequences extends React.Component {
    static TITLE      = 'MML#isSequences';
    static CLASS_NAME = 'IsSequences';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <main className={IsSequences.CLASS_NAME}>
                <section>
                    <div className="component-title">
                        <h1>isSequences</h1>
                        <p className="returns">Returns : <span>boolean</span></p>
                    </div>
                    <hr role="presentation" />
                    <p>
                        This method is to check for presence or absence of parsed MML.
                    </p>
                </section>
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='MML#isSequences | XSound - Web Audio API Library -' src='//codepen.io/Korilakkuma/embed/ZxwmRr/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameBorder='no' allowtransparency='true' allowFullScreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/ZxwmRr/'>MML#isSequences | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                </section>
            </main>
        );
    }
}

export default connect()(IsSequences);
