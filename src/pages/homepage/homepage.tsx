import React from "react"
// components
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit"
import { ContactForm } from "@feature/contact-form/contact-form"
// static assets
import head1 from "./img/head-1.png"
import head2 from "./img/head-2.png"
import head3 from "./img/head-3.png"
import head4 from "./img/head-4.png"

export const Homepage = (props: any): JSX.Element => {
    return (
        <MDBContainer fluid>
            <header className="masthead d-flex">
                <div className="container text-center my-auto">
                    <h1 className="mb-5">chromedome design</h1>
                    <div className="row mb-5">
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                            <img title="chromedome head 1" src={head1} />
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                            <img title="chromedome head 2" src={head2} />
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                            <img title="chromedome head 3" src={head3} />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <img title="chromedome head 4" src={head4} />
                        </div>
                    </div>
                    <h3 className="mb-5">
                        <em>
                            We plan, design, and execute custom applications and web solutions. Contact us for help with
                            your project.
                        </em>
                    </h3>
                    <MDBBtn tag="a" href="https://chromedomedesign.com/" target="_blank" role="button">
                        Get In Touch
                    </MDBBtn>
                </div>
                <div className="overlay"></div>
            </header>
            <ContactForm />
        </MDBContainer>
    )
}