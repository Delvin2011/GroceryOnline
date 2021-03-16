import React from "react";
import "./checkout.scss";
import { TCList, Heading, IntextBold } from "./TandCs-styles";
import { Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

class TandCsPage extends React.Component {
  render() {
    return (
      <section className="fluid lg">
        <div className="shape shape-style-1 bg-gradient-default">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="lg">
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "14px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  1. Introduction
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>
                    These Website Terms and Conditions (
                    <IntextBold>“Terms and Conditions”</IntextBold>) govern the
                    ordering, sale and delivery of Goods, and the use of the
                    Website.
                  </li>
                  <li>
                    These Terms and Conditions are binding and enforceable
                    against every person that accesses or uses this Website (
                    <IntextBold>“you”, “your” or “user”</IntextBold>), including
                    without limitation each user who registers as contemplated
                    below{" "}
                    <IntextBold>
                      (“registered user”). By using the Website and by clicking
                      on the “Register Now” button on the Website, as may be
                      applicable, you acknowledge that you have read and agree
                      to be bound by these Terms and Conditions.
                    </IntextBold>
                  </li>
                  <li>
                    The Website enables you to shop online for an extensive
                    range of goods.
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "14px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  2. Important Notice
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>
                    These Terms and Conditions apply to users who are consumers
                    for purposes of the Consumer Protection Act, 68 of 2008 (the
                    “CPA”).
                  </li>
                  <li>
                    <IntextBold>
                      These Terms and Conditions contain provisions that appear
                      in similar text and style to this clause and which
                    </IntextBold>
                    <TCList>
                      <li>
                        <IntextBold>
                          may limit the risk or liability of SHOKO or a third
                          party; and/or
                        </IntextBold>
                      </li>
                      <li>
                        <IntextBold>
                          may create risk or liability for the user; and/or
                        </IntextBold>
                      </li>
                      <li>
                        <IntextBold>
                          may compel the user to indemnify SHOKO or a third
                          party; and/or
                        </IntextBold>
                      </li>
                      <li>
                        <IntextBold>
                          serves as an acknowledgement, by the user, of a fact.
                        </IntextBold>
                      </li>
                    </TCList>
                  </li>
                  <li>
                    <IntextBold>
                      Your attention is drawn to these Terms and Conditions
                      because they are important and should be carefully noted.
                    </IntextBold>
                  </li>
                  <li>
                    If there is any provision in these Terms and Conditions that
                    you do not understand, it is your responsibility to ask
                    SHOKO to explain it to you before you accept the Terms and
                    Conditions or continue using the Website. If you are
                    unfamiliar with eBooks, please pay particular attention to
                    clause 10 below, which describes the nature, functionality,
                    usage rights and delivery of eBooks.
                  </li>
                  <li>
                    Nothing in these Terms and Conditions is intended or must be
                    understood to unlawfully restrict, limit or avoid any right
                    or obligation, as the case may be, created for either you or
                    SHOKO in terms of the CPA.
                  </li>
                  <li>
                    SHOKO permits the use of this Website subject to the Terms
                    and Conditions. By using this Website in any way, you shall
                    be deemed to have accepted all the Terms and Conditions
                    unconditionally. You must not use this Website if you do not
                    agree to the Terms and Conditions.
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "14px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  3. Registration and use of the website
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>Only registered users may order Goods on the Website.</li>
                  <li>
                    To register as a user, you must provide a unique username
                    and password and provide certain information and personal
                    details to SHOKO. You will need to use your unique username
                    and password to access the Website in order to purchase
                    Goods
                  </li>
                  <li>
                    You agree and warrant that your username and password shall:
                    <TCList>
                      <li>be used for personal use only; and</li>
                      <li>not be disclosed by you to any third party.</li>
                    </TCList>
                  </li>
                  <li>
                    For security purposes you agree to enter the correct
                    username and password whenever ordering Goods, failing which
                    you will be denied access.
                  </li>
                  <li>
                    <IntextBold>
                      You agree that, once the correct username and password
                      relating to your account have been entered, irrespective
                      of whether the use of the username and password is
                      unauthorised or fraudulent, you will be liable for payment
                      of such order, save where the order is cancelled by you in
                      accordance with these Terms and Conditions.
                    </IntextBold>
                  </li>
                  <li>
                    You agree to notify SHOKO immediately upon becoming aware of
                    or reasonably suspecting any unauthorised access to or use
                    of your username and password and to take steps to mitigate
                    any resultant loss or harm.
                  </li>
                  <li>
                    <IntextBold>
                      By using the Website you warrant that you are 18
                      (eighteen) years of age or older and of full legal
                      capacity. If you are under the age of 18 (eighteen) or if
                      you are not legally permitted to enter into a binding
                      agreement, then you may use the Website only with the
                      involvement and supervision of your parent or legal
                      guardian. If your parent or legal guardian supervises you
                      and gives his/her consent, then such person agrees to be
                      bound to these Terms and Conditions and to be liable and
                      responsible for you and all your obligations under these
                      Terms and Conditions.
                    </IntextBold>
                  </li>
                  <li>
                    You agree that you will not in any way use any device,
                    software or other instrument to interfere or attempt to
                    interfere with the proper working of the Website. In
                    addition, you agree that you will not in any way use any
                    robot, spider, other automatic device, or manual process to
                    monitor, copy, distribute or modify the Website or the
                    information contained herein, without the prior written
                    consent from an authorised SHOKO representative (such
                    consent is deemed given for standard search engine
                    technology employed by Internet search websites to direct
                    Internet users to this Website).
                  </li>
                  <li>
                    You may not use the Website to distribute material which is
                    defamatory, offensive, contains or amounts to hate speech or
                    is otherwise unlawful.
                  </li>
                  <li>
                    You may not in any way display, publish, copy, print, post
                    or otherwise use the Website and/or the information
                    contained therein without the express prior written consent
                    of an authorised SHOKO representative.
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "14px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  4. Conclusion of sales and availability of stock
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>
                    Registered users may place orders for Goods, which SHOKO may
                    accept or reject. Whether or not SHOKO accepts an order
                    depends on the availability of Goods, correctness of the
                    information relating to the Goods (including without
                    limitation the price) and receipt of payment or payment
                    authorisation by SHOKO for the Goods.
                  </li>
                  <li>
                    <IntextBold>
                      NOTE: SHOKO will indicate the acceptance of your order by
                      delivering the Goods to you or allowing you to collect
                      them, and only at that point will an agreement of sale
                      between you and SHOKO come into effect (the “Sale”). This
                      is regardless of any communication from SHOKO stating that
                      your order or payment has been confirmed. SHOKO will
                      indicate the rejection of your order by cancelling it and,
                      as soon as possible thereafter, refunding you for any
                      amount already paid.
                    </IntextBold>
                  </li>
                  <li>
                    Placing Goods in a wishlist or shopping basket without
                    completing the purchase cycle does not constitute an order
                    for such Goods, and as such, Goods may be removed from the
                    shopping basket if stock is no longer available or the price
                    thereof might change without notice to you. You cannot hold
                    SHOKO liable if such Goods are not available or are not
                    available at the particular price when you complete or
                    attempt to complete the purchase cycle at a later stage.
                  </li>
                  <li>
                    <IntextBold>
                      You acknowledge that stock of all Goods on offer is
                      limited and that pricing may change at any time without
                      notice to you. In the case of Goods for sale by SHOKO,
                      SHOKO will take all reasonable efforts to monitor stock
                      levels and ensure that when stock is no longer available,
                      that offers thereof are discontinued on the Website.
                      However, we cannot guarantee the availability of stock.
                      When Goods are no longer available after you have placed
                      an order, SHOKO will notify you and you will be entitled
                      to a refund of any amount already paid by you for such
                      Goods.{" "}
                    </IntextBold>
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "14px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  5. Payment
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>
                    We are committed to providing secure online payment
                    facilities. All transactions are encrypted using appropriate
                    encryption technology.
                  </li>
                  <li>
                    Payment may be made for Goods via the following methods
                    (depending on its availability and/or your eligibility to
                    use such a method)
                    <TCList>
                      <li>
                        debit card; where payment is made by debit card, we may
                        require additional information in order to authorise
                        and/or verify the validity of payment. In such cases we
                        are entitled to withhold delivery until such time as the
                        additional information is received by us and
                        authorisation is obtained by us for the amounts. If we
                        do not receive authorisation your order for the Goods
                        will be cancelled.{" "}
                        <IntextBold>
                          You warrant that you are fully authorised to use the
                          debit card supplied for purposes of paying the Goods.
                          You also warrant that your debit card has sufficient
                          available funds to cover all the costs incurred as a
                          result of the services used on the Website;
                        </IntextBold>
                      </li>
                      <li>
                        redit card: where payment is made by credit card, we may
                        require additional information in order to authorise
                        and/or verify the validity of payment. In such cases we
                        are entitled to withhold delivery until such time as the
                        additional information is received by us and
                        authorisation is obtained by us for the amounts. If we
                        do not receive authorisation your order for the Goods
                        will be cancelled.{" "}
                        <IntextBold>
                          You warrant that you are fully authorised to use the
                          credit card supplied for purposes of paying the Goods.
                          You also warrant that your credit card has sufficient
                          available funds to cover all the costs incurred as a
                          result of the services used on the Website;
                        </IntextBold>
                      </li>
                      <li>Instant EFT;</li>
                    </TCList>
                  </li>
                  <li>
                    We will also send you email communications about your order
                    and payment.
                  </li>
                  <li>
                    Once you have selected your payment method (save for cash on
                    delivery or direct bank deposit), you will be directed to a
                    link to a secure site for payment of the applicable purchase
                    price for the Goods.
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "14px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  6. Delivery of goods
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>
                    Where it accepts your order, SHOKO will deliver the Goods to
                    you as soon as reasonably possible, but no later than 30
                    (thirty) days of receipt of your payment (“Delivery
                    Period”). We will notify you if we are unable to deliver the
                    Goods during the Delivery Period. You may then, within 7
                    (seven) days of receiving such notification elect whether or
                    not to cancel your order for the Goods. If you elect to
                    cancel your order, we will reimburse you for the purchase
                    price.
                  </li>
                  <li>
                    SHOKO’s obligation to deliver a product to you is fulfilled
                    when we deliver the product to the physical address
                    nominated by you for delivery of the order. SHOKO{" "}
                    <IntextBold>
                      is not responsible for any loss or unauthorised use of a
                      product, after it has delivered the product to the
                      physical address nominated by you.
                    </IntextBold>
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "14px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  7. Errors
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>
                    <IntextBold>
                      We shall take all reasonable efforts to accurately reflect
                      the description, availability, purchase price and delivery
                      charges of Goods on the Website. However, should there be
                      any errors of whatsoever nature on the Website (which are
                      not due to our gross negligence), we shall not be liable
                      for any loss, claim or expense relating to a transaction
                      based on any error, save – in the case of any incorrect
                      purchase price – to the extent of refunding you for any
                      amount already paid, or otherwise as set out in the
                    </IntextBold>
                  </li>
                  <li>
                    {" "}
                    <IntextBold>Combo Deals</IntextBold>
                    <TCList>
                      <li>
                        We may from time to time offer combo deals for sale
                        under the Bundle Deals tab on the Website (“Combo
                        Deals“). Each Combo Deal will consist of two or more
                        products that either we or you (as provided on the
                        Website) have combined together in a single bundle.
                      </li>
                      <li>
                        Any saving or discount resulting from purchasing a
                        Bundle Deal instead of its component products separately
                        may be applied to any of the component products
                        individually in our sole discretion. The actual purchase
                        price (after applying any applicable saving or discount)
                        of each component product will be communicated to you
                        upon checkout and reflected in your order history. This
                        is relevant to the amount that would be refunded to you,
                        if you were to return any product in a Bundle Deal for a
                        refund, in accordance with our Returns Policy.
                      </li>
                      <li>
                        A Bundle Deal should be distinguished from a pre-packed
                        bundle compiled by our supplier and supplied to us as a
                        single unit (“Pre-packed Combos“). Any saving or
                        discount in respect of a Pre-packed Bundle will be
                        applied only to the total combo price and not to the
                        prices of the individual component products.{" "}
                      </li>
                    </TCList>
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "14px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  8. Privacy policy
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>
                    We respect your privacy and will take reasonable measures to
                    protect it, as more fully detailed below.
                  </li>
                  <li>
                    Should you decide to register as a user on the Website, we
                    may require you to provide us with personal information
                    which includes but is not limited to -
                    <TCList>
                      <li>your name and surname;</li>
                      <li>your email address;</li>
                      <li>your physical address;</li>
                      <li>your gender;</li>
                      <li>your mobile number; and</li>
                      <li>your date of birth.</li>
                    </TCList>
                  </li>
                  <li>
                    Should your personal information change, please inform us
                    and provide us with updates to your personal information as
                    soon as reasonably possible to enable us to update your
                    personal information.
                  </li>
                  <li>
                    You may choose to provide additional personal information to
                    us, in which event you agree to provide accurate and current
                    information, and not to impersonate or misrepresent any
                    person or entity or falsely state or otherwise misrepresent
                    your affiliation with anyone or anything.
                  </li>
                  <li>
                    Subject to clause 15.6 below, we will not, without your
                    express consent
                    <TCList>
                      <li>
                        use your personal information for any purpose other than
                        as set out below:
                        <TCList>
                          <li>
                            in relation to the ordering, sale and delivery of
                            Goods
                          </li>
                          <li>
                            to contact you regarding current or new Goods or
                            services or any other goods offered by us or any of
                            our divisions, affiliates and/or partners (unless
                            you have opted out from receiving marketing material
                            from us);
                          </li>
                          <li>
                            to inform you of new features, special offers and
                            promotional competitions offered by us or any of our
                            divisions, affiliates and/or partners (unless you
                            have opted out from receiving marketing material
                            from us); and
                          </li>
                          <li>
                            to improve our product selection and your experience
                            on our Website by, for example, monitoring your
                            browsing habits, or tracking your sales on the
                            Website; or
                          </li>
                        </TCList>
                      </li>
                      <li>
                        disclose your personal information to any third party
                        other than as set out below:
                        <TCList>
                          <li>
                            to our employees and/or third party service
                            providers who assist us to interact with you via our
                            Website, email or any other method, for the ordering
                            of Goods or when delivering Goods to you, and thus
                            need to know your personal information in order to
                            assist us to communicate with you properly and
                            efficiently;
                          </li>
                          <li>
                            to our divisions, affiliates and/or partners
                            (including their employees and/or third party
                            service providers) in order for them to interact
                            directly with you via email or any other method for
                            purposes of sending you marketing material regarding
                            any o our divisions, affiliates and/or partners
                            (including their employees and/or third party
                            service providers) in order for them to interact
                            directly with you via email or any other method for
                            purposes of sending you marketing material regarding
                            any{" "}
                          </li>
                          <li>
                            to law enforcement, government officials, fraud
                            detection agencies or other third parties when we
                            believe in good faith that the disclosure of
                            personal information is necessary to prevent
                            physical harm or financial loss, to report or
                            support the investigation into suspected illegal
                            activity, or to investigate violations of these
                            Terms and Conditions;
                          </li>
                          <li>
                            to our service providers (under contract with us)
                            who help with parts of our business operations
                            (fraud prevention, marketing, technology services
                            etc). However, our contracts dictate that these
                            service providers may only use your information in
                            connection with the services they perform for us and
                            not for their own benefit;
                          </li>
                          <li>
                            to our suppliers in order for them to liaise
                            directly with you regarding any faulty Goods you
                            have purchased which requires their involvement; and
                          </li>
                          <li>
                            to any Third Party Seller for purposes of sending
                            you an invoice for any Goods purchased from such
                            Third Party Seller, which disclosed information will
                            be limited to your email address (refer to clause 14
                            above).
                          </li>
                        </TCList>
                      </li>
                    </TCList>
                  </li>
                  <li>
                    We are entitled to use or disclose your personal information
                    if such use or disclosure is required in order to comply
                    with any applicable law, subpoena, order of court or legal
                    process served on us, or to protect and defend our rights or
                    property. In the event of a fraudulent online payment, SHOKO
                    is entitled to disclose relevant personal information for
                    criminal investigation purposes or in line with any other
                    legal obligation for disclosure of the personal information
                    which may be required of it.
                  </li>
                  <li>
                    We will ensure that all of our employees, third party
                    service providers, divisions, affiliates and partners
                    (including their employees and third party service
                    providers) having access to your personal information are
                    bound by appropriate and legally binding confidentiality
                    obligations in relation to your personal information.
                  </li>
                  <li>
                    We will not retain your personal information longer than the
                    period for which it was originally needed, unless we are
                    required by law to do so, or you consent to us retaining
                    such information for a longer period.
                  </li>
                  <li>
                    <IntextBold>
                      SHOKO undertakes never to sell or make your personal
                      information available to any third party other than as
                      provided for in this policy.
                    </IntextBold>
                  </li>
                  <li>
                    <IntextBold>
                      Whilst we will do all things reasonably necessary to
                      protect your rights of privacy, we cannot guarantee or
                      accept any liability whatsoever for unauthorised or
                      unlawful disclosures of your personal information, whilst
                      in our possession, made by third parties who are not
                      subject to our control, unless such disclosure is as a
                      result of our gross negligence.
                    </IntextBold>
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "14px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  9. Changes to these Terms and Conditions
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>
                    SHOKO may, in its sole discretion, change any of these Terms
                    and Conditions at any time. It is your responsibility to
                    regularly check these Terms and Conditions and make sure
                    that you are satisfied with the changes. Should you not be
                    satisfied, you must not place any further orders on, or in
                    any other way use, the Website.
                  </li>
                  <li>
                    Any such change will only apply to your use of this Website
                    after the change is displayed on the Website. If you use the
                    Website after such amended Terms and Conditions have been
                    displayed on the Website, you will be deemed to have
                    accepted such changes.
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "14px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  10. Electronic communications
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>
                    When you visit the Website or send emails to us, you consent
                    to receiving communications from us or any of our divisions,
                    affiliates or partners electronically in accordance with our
                    privacy policy as set out in clause 9 above.
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "14px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  11. Ownership and copyright
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>
                    The contents of the Website, including any material,
                    information, data, software, icons, text, graphics,
                    lay-outs, images, sound clips, advertisements, video clips,
                    trade names, logos, trade-marks, designs and service marks
                    which are displayed on or incorporated in this Website
                    (“Website Content”) are protected by law, including but not
                    limited to copyright and trade mark law. The Website Content
                    is the property of SHOKO, its advertisers and/or sponsors
                    and/or is licensed to SHOKO.
                  </li>
                  <li>
                    You will not acquire any right, title or interest in or to
                    the Website or the Website Content.
                  </li>
                  <li>
                    Any use, distribution or reproduction of the Website Content
                    is prohibited unless expressly authorised in terms of these
                    Terms and Conditions or otherwise provided for in law. To
                    obtain permissions for the commercial use of any Website
                    Content contact us.
                  </li>
                  <li>
                    Where any of the Website Content has been licensed to SHOKO
                    or belongs to any third party, your rights of use will also
                    be subject to any terms and conditions which that licensor
                    or third party imposes from time to time and you agree to
                    comply with such third party terms and conditions.
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "14px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  12. Disclaimer
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>
                    <IntextBold>
                      The use of the Website is entirely at your own risk and
                      you assume full responsibility for any risk or loss
                      resulting from use of the Website or reliance on any
                      information on the Website.
                    </IntextBold>
                  </li>
                  <li>
                    Whilst SHOKO takes reasonable measures to ensure that the
                    content of the Website is accurate and complete, SHOKO makes
                    no representations or warranties, whether express or
                    implied, as to the quality, timeliness, operation,
                    integrity, availability or functionality of the Website or
                    as to the accuracy, completeness or reliability of any
                    information on the Website. If any such representations or
                    warranties are made by SHOKO’s representatives, SHOKO shall
                    not be bound thereby.
                  </li>
                  <li>
                    <IntextBold>
                      SHOKO disclaims liability for any damage, loss or
                      expenses, whether direct, indirect or consequential in
                      nature, arising out of or in connection with your access
                      to or use of the Website and/or any content therein unless
                      otherwise provided by law.
                    </IntextBold>
                  </li>
                  <li>
                    <IntextBold>
                      Although Goods sold from the Website may, under certain
                      specifically defined circumstances, be under warranty, the
                      Website itself and all information provided on the Website
                      is provided “as is” without warranty of any kind, either
                      express or implied, including, but not limited to, the
                      implied warranties of merchantability, fitness for a
                      particular purpose, completeness, or non-infringement, as
                      may be allowed in law
                    </IntextBold>
                  </li>
                  <li>
                    Any views or statements made or expressed on the Website are
                    not necessarily the views of SHOKO, its directors, employees
                    and/or agents.
                  </li>
                  <li>
                    <IntextBold>
                      In addition to the disclaimers contained elsewhere in
                      these Terms and Conditions, SHOKO also makes no warranty
                      or representation, whether express or implied, that the
                      information or files available on the Website are free of
                      viruses, spyware, malware, trojans, destructive materials
                      or any other data or code which is able to corrupt,
                      destroy, compromise, disrupt, disable, harm, jeopardise or
                      otherwise impede in any manner the operation, stability,
                      security functionality or content of your computer system,
                      computer network, hardware or software in any way. You
                      accept all risk associated with the existence of such
                      viruses, destructive materials or any other data or code
                      which is able to corrupt, compromise, jeopardise, disrupt,
                      disable, harm or otherwise impede in any manner the
                      operation or content of a computer system, computer
                      network, any handset or mobile device, or your hardware or
                      software, save where such risks arise due to the gross
                      negligence or wilful misconduct of SHOKO, its employees,
                      agents or authorised representatives. SHOKO thus disclaims
                      all liability for any damage, loss or liability of any
                      nature whatsoever arising out of or in in connection with
                      your access to or use of the Website.
                    </IntextBold>
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "14px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  13. Limitation of liability
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>
                    <IntextBold>
                      SHOKO cannot be held liable for any inaccurate information
                      published on the Website and/or any incorrect prices
                      displayed on the Website, save where such liability arises
                      from the gross negligence or wilful misconduct of SHOKO,
                      its employees, agents or authorised representatives.
                    </IntextBold>
                  </li>
                  <li>
                    <IntextBold>
                      SHOKO SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT,
                      INCIDENTAL, SPECIAL OR CONSEQUENTIAL LOSS OR DAMAGES WHICH
                      MIGHT ARISE FROM YOUR USE OF, OR RELIANCE UPON, THE
                      WEBSITE OR THE CONTENT CONTAINED IN THE WEBSITE; OR YOUR
                      INABILITY TO USE THE WEBSITE, AND/OR UNLAWFUL ACTIVITY ON
                      THE WEBSITE AND/OR ANY LINKED THIRD PARTY WEBSITE
                    </IntextBold>
                  </li>
                  <li>
                    <IntextBold>
                      YOU HEREBY INDEMNIFY SHOKO AGAINST ANY LOSS, CLAIM OR
                      DAMAGE WHICH MAY BE SUFFERED BY YOURSELF OR ANY THIRD
                      PARTY ARISING IN ANY WAY FROM YOUR USE OF THIS WEBSITE
                      AND/OR ANY LINKED THIRD PARTY WEBSITE.
                    </IntextBold>
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "14px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  14. Availability and termination
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>
                    We will use reasonable endeavours to maintain the
                    availability of the Website, except during scheduled
                    maintenance periods, and are entitled to discontinue
                    providing the Website or any part thereof with or without
                    notice to you.
                  </li>
                  <li>
                    <IntextBold>
                      SHOKO may in its sole discretion terminate, suspend and
                      modify this Website, with or without notice to you. You
                      agree that SHOKO will not be liable to you in the event
                      that it chooses to suspend, modify or terminate this
                      Website other than for processing any orders made by you
                      prior to such time, to the extent possible.
                    </IntextBold>
                  </li>
                  <li>
                    <IntextBold>
                      If you fail to comply with your obligations under these
                      Terms and Conditions, including any incident involving
                      payment of the price of an order for any Goods, this may
                      (in our sole discretion with or without notice to you)
                      lead to a suspension and/or termination of your access to
                      the Website without any prejudice to any claims for
                      damages or otherwise that we may have against you.
                    </IntextBold>
                  </li>
                  <li>
                    <IntextBold>
                      SHOKO is entitled, for purposes of preventing suspected
                      fraud and/or where it suspects that you are abusing the
                      Website and/or have created multiple user profiles to take
                      advantage of a promotion or Coupon intended by SHOKO to be
                      used once-off by you, to blacklist you on its database
                      (including suspending or terminating your access to the
                      Website), refuse to accept or process payment on any
                      order, and/or to cancel any order concluded between you
                      and SHOKO, in whole or in part, on notice to you. SHOKO
                      shall only be liable to refund monies already paid by you
                      and accepts no other liability which may arise as a result
                      of such blacklisting and/or refusal to process any order.
                    </IntextBold>
                  </li>
                  <li>
                    At any time, you can choose to stop using the Website, with
                    or without notice to SHOKO.
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "14px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  15. Governing law and jurisdiction
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>
                    These Terms and Conditions and our relationship and/or any
                    dispute arising from or in connection with these Terms and
                    Conditions shall be governed and interpreted in accordance
                    with the laws of the Republic of South Africa. Your
                    continued use of the Website will constitute your consent
                    and submission to the jurisdiction of the South African
                    courts regarding all proceedings, transactions, applications
                    or the like instituted by either party against the other,
                    arising from any of these Terms and Conditions.
                  </li>
                  <li>
                    In the event of any dispute arising between you and SHOKO,
                    you hereby consent to the non-exclusive jurisdiction of the
                    High Court of the Republic of South Africa notwithstanding
                    that the quantum in the action or proceedings may otherwise
                    fall below the monetary jurisdiction of that court.
                  </li>
                  <li>
                    Nothing in this clause 23 or the Terms and Conditions limits
                    your right to approach any court, tribunal or forum of
                    competent jurisdiction in terms of the CPA
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "12px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  16. Complaints
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>
                    We are a participant under the Consumer Goods and Services
                    Industry Code and are bound by it. An electronic copy of
                    this Code is available at http://www.cgso.org.za/downloads/.
                    If you have a complaint about the goods or services provided
                    by us or require information regarding our internal
                    complaints-handling process, please get in touch with us via
                    our Website.
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    "font-weight": "bold",
                    "font-size": "12px",
                    "font-family": "Segoe UI",
                    "letter-spacing": "1.5px",
                  }}
                >
                  17. General
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TCList>
                  <li>
                    SHOKO may, in its sole discretion, at any time and for any
                    reason and without prior written notice, suspend or
                    terminate the operation of the Website or the user’s right
                    to use the Website or any of its contents subject to us
                    processing any orders then already made by you.
                    <TCList>
                      <li>
                        You may not cede, assign or otherwise transfer your
                        rights and obligations in terms of these Terms and
                        Conditions to any third party.
                      </li>
                      <li>
                        Any failure on the part of you or SHOKO to enforce any
                        right in terms hereof shall not constitute a waiver of
                        that right.
                      </li>
                      <li>
                        If any term or condition contained herein is declared
                        invalid, the remaining terms and conditions will remain
                        in full force and effect.
                      </li>
                      <li>
                        No variation, addition, deletion, or agreed cancellation
                        of the Terms and Conditions will be of any force or
                        effect unless in writing and accepted by or on behalf of
                        the parties hereto.
                      </li>
                      <li>
                        No indulgence, extension of time, relaxation or latitude
                        which any party (the “grantor”) may show grant or allow
                        to the other (the “grantee”) shall constitute a waiver
                        by the grantor of any of the grantor’s rights and the
                        grantor shall not thereby be prejudiced or stopped from
                        exercising any of its rights against the grantee which
                        may have arisen in the past or which might arise in the
                        future.
                      </li>
                      <li>
                        These Terms and Conditions contain the whole agreement
                        between you and SHOKO and no other warranty or
                        undertaking is valid, unless contained in this document
                        between the parties.
                      </li>
                    </TCList>
                  </li>
                </TCList>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </section>
    );
  }
}

export default TandCsPage;
