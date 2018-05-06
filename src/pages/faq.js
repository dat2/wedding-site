import React from 'react'
import './faq.less'
import Link from 'gatsby-link'

const FaqPage = () => (
  <div id="faq">
    <div className="faq-question">How do I get to the venue?</div>
    <div className="faq-answer">
      Please refer to the <Link to="/event/">wedding event</Link>.
    </div>
    <div className="faq-question">Is there parking available at the venue?</div>
    <div className="faq-answer">Yes, there is a parking lot attached.</div>
    <div className="faq-question">Will I have to pay for parking?</div>
    <div className="faq-answer">No!</div>
    <div className="faq-question">
      Will the ceremony be taking place indoors or outdoors?
    </div>
    <div className="faq-answer">It is an indoor event.</div>
    <div className="faq-question">Are kids welcome?</div>
    <div className="faq-answer">Of course!</div>
    <div className="faq-question">Does your wedding have a theme?</div>
    <div className="faq-answer">Colourful!</div>
    <div className="faq-question">What is the dress code for your wedding?</div>
    <div className="faq-answer">
      Please wear whatever you feel comfortable in! Some suggestions are below,
      <div>
        <i>
          <b>Men</b>:&nbsp;&nbsp;&nbsp;Suits, Dress shirt/pants, Vesthis,
          Sherwanis
        </i>
      </div>
      <div>
        <i>
          <b>Women</b>:&nbsp;&nbsp;&nbsp;Sarees, Dresses, Lehngas, Salwars
        </i>
      </div>
    </div>

    <div className="faq-question">
      Are there any colours you would prefer me not to wear?
    </div>
    <div className="faq-answer">
      All colours of the rainbow are welcome! We only ask you try to avoid stark
      white or black. However dress Pants and Suits may be black.
    </div>

    <div className="faq-question">
      Can I take pictures and/or post photos of your wedding on social media?
    </div>
    <div className="faq-answer">
      Yes! Please share your pictures with us using the hashtag&nbsp;
      <tt>#nickwedspirave</tt>.
    </div>
    <div className="faq-question">Will food be served?</div>
    <div className="faq-answer">
      Yes! We will have breafast and lunch with snacks provided in between.
    </div>
    <div className="faq-question">What kind of food will be served?</div>
    <div className="faq-answer">
      Following tradition, all food and drinks will be vegetarian and
      non-alchoholic. We are still working on the menu! Check back soon for more
      details.
    </div>
    <div className="faq-question">
      Will there be any activities happening that I need to know about?
    </div>
    <div className="faq-answer">
      Yes! Please refer to the <Link to="/program/">wedding program</Link> to
      learn more details.
    </div>

    <div className="faq-question">What time should I arrive?</div>
    <div className="faq-answer">
      Please try to be there by 9:00 AM for breakfast. The ceremony will begin
      shortly after.
    </div>
    <div className="faq-question">What time will the wedding end?</div>
    <div className="faq-answer">
      The ceremony will end just before noon, after which lunch is served.
      Please visit us up at the altar so we may gift you a box of snacks. You
      are welcome to stay back and socialize or leave anytime after.
    </div>

    <div className="faq-question">How can I RSVP?</div>
    <div className="faq-answer">
      Please RSVP online <Link to="/rsvp/">here</Link>.
    </div>
    <div className="faq-question">When is the RSVP deadline?</div>
    <div className="faq-answer">
      Please let us know by <b>June 15, 2018</b>.
    </div>

    <div className="faq-question">Is there a gifts registry?</div>
    <div className="faq-answer">
      The most important gift to us is have you share our day, but if insist
      please contact the Dujay residence for more details at (416) 898-4590.
      Information will also be sent with your RSVP confirmation :)
    </div>
    <div className="faq-question">
      Is there someone I can contact if I have any other questions about the
      wedding?
    </div>
    <div className="faq-answer">
      <div>
        <b>Dujay Residence</b>: (416) 898-4590
      </div>
      <div>
        <b>Eahalaivan Residence</b>: (905) 472-5599
      </div>
    </div>
  </div>
)

export default FaqPage
