import React, { Component } from 'react';

export class Socials extends Component {
    static displayName = Socials.name;

    render() {
        return (
            <div>
                <h1>Connect with me!</h1>

                <p> </p>
                <p>Here are some of my socials! Feel free to reach out using any of the means below.</p>
                    <ul>
                        <li><strong>LinkedIn: </strong> The best way to reach out to me for professional and career related questions.</li>
                        <p></p>
                        <li><strong>Email: </strong> I regularly monitor my email, so it is another great way to reach out to me.</li>
                        <p></p>
                        <li><strong>Phone: </strong> My phone number is another viable method to reach out, and I'll try my best to take all the calls I can. </li>
                    </ul>
            </div>
        );
    }
}