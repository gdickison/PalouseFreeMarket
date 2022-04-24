import NavBar from '../components/NavBar'

const OurValues = () => {
  return (
    <div className='max-w-[1600px]'>
      <NavBar/>
      <div className="flex flex-col my-2 pb-12 mx-4 md:mx-8 lg:mx-16 bg-gray-100">
        <h1 className="font-display text-2xl md:text-4xl py-4">Nine Principles for Doing Business with Brothers</h1>
        <ul className="space-y-6 text-md md:text-xl font-body ">
          <li>
            <p className="font-display text-2xl md:text-4xl uppercase">One</p>
            <p>
              You should go into every business relationship with a brother looking to give something additional, rather than trying to get something additional. Don’t expect discounts because you are a brother. Try, when possible, to give something additional because he’s a brother. Remember to pay promptly. Fast pay makes fast friends.
            </p>
          </li>
          <li>
            <p className="font-display text-2xl md:text-4xl uppercase">Two</p>
            <p>
              When someone in the church is doing business with you, you are not responsible for whether or not they are observing #1 above.
            </p>
          </li>
          <li>
            <p className="font-display text-2xl md:text-4xl uppercase">Three</p>
            When you decide to stop using the services of a brother it may be because of (a) ordinary reasons (price, distance, etc.), (b) slipshod or substandard workmanship, or (c) unethical work (biblically defined). For (a), no explanation is necessary. Just go your way. If the person asks, tell them. For (b), you must tell your brother about your concerns. If you have done so, then it is legitimate to express those concerns to others if they seek or need your recommendation on this brother’s work. For (c), you must follow the pattern given in Matthew 18.
          </li>
          <li>
            <p className="font-display text-2xl md:text-4xl uppercase">Four</p>
            Being a member of the same church does not entitle you to free consulting services. When you ask questions of a brother in business, it should only be in order to determine whether or not you need his services, and not an attempt to get his services without paying for them. Avoid making anyone “set up shop” at church or fellowship events. At a fellowship event, you can ask questions about “when would be a good time to call about thus and such?” But even here, be sensitive. When you call, after you have asked a few questions about whether or not the services are necessary, you are on the threshold of imposing upon a brother. This means that after the first few minutes, you should expect the meter to be running (and should say so). If the person you are talking to does not charge you, that is his business. But you should expect a bill as soon as you get to the point of using his expertise.
          </li>
          <li>
            <p className="font-display text-2xl md:text-4xl uppercase">Five</p>
            Remember some professions are more vulnerable to this kind of imposition than others. Low Risk: MRI technicians, librarians. Medium Risk: teachers, guys with tools, photographers. High Risk: medical doctors, auto mechanics, veterinarians, realtors.
          </li>
          <li>
            <p className="font-display text-2xl md:text-4xl uppercase">Six</p>
            Beware of the egalitarianism which says that it is all right to do this to what you consider “high income” professions.
          </li>
          <li>
            <p className="font-display text-2xl md:text-4xl uppercase">Seven</p>
            Don’t assume that someone “doesn’t mind” because you have been doing this to him for years. He just has better manners than you do.
          </li>
          <li>
            <p className="font-display text-2xl md:text-4xl uppercase">Eight</p>
            Wives, do not do an end run around your husband. If he has said that you are not going to spend any money on whatever it is, then you should not try to get the service without spending any money. This just turns one sin into two.
          </li>
          <li>
            <p className="font-display text-2xl md:text-4xl uppercase">Nine</p>
            In all things, apply the golden rule. Ask yourself what would be a temptation to you in your profession, and then don’t do that to other people in theirs.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OurValues