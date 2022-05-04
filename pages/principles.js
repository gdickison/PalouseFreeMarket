import NavBar from '../components/NavBar'

const OurValues = () => {
  return (
    <div className='w-screen max-w-[1600px]'>
      <NavBar/>
      <div className="flex flex-col my-2 pb-12 mx-4 md:mx-8 lg:mx-16 bg-gray-100">
        <h1 className="font-display text-2xl md:text-4xl py-4">Principles for Doing Business with Christians</h1>
        <ul className="space-y-6 text-md md:text-xl font-body ">
          <p>
            These principles are provided as an encouragement toward love and good works while doing business with fellow believers. We want people to have confidence that listed businesses have ethics that reflect Christian values.
          </p>
          <li>
            <p className="font-display text-2xl uppercase">One</p>
            <p>
              Businesses commit to honor God and their brethren by providing honest labor and quality goods.
            </p>
          </li>
          <li>
            <p className="font-display text-2xl uppercase">Two</p>
            <p>
              Customers commit to honor God and their entrepreneurial brethren by paying promptly for their goods and services.
            </p>
          </li>
          <li>
            <p className="font-display text-2xl uppercase">Three</p>
            <p>
              Do unto others as you would have them do unto you.
            </p>
          </li>
          <li>
            <p className="font-display text-2xl uppercase">Four</p>
            <p>
              If someone's workmanship is substandard, approach them about it and request that they make it right according to Matthew 18. If they refuse, please express these concerns to us at editor@palousefm.com. As much as possible, be at peace with one another.
            </p>
          </li>
          <li>
            <p className="font-display text-2xl uppercase">Five</p>
            <p>
              We employ a general application of the Ten Commandments as we serve one another through business. Matthew 22 says, "Love the Lord your God with all your heart, soul, and mind; and love your neighbor as yourself." By loving and respecting one another, we fulfill the Ten Commandments and encourage others to do the same.
            </p>
          </li>
          <li>
            <p>
              Exodus 20:1-17 - And God spoke all these words, saying: "I am the LORD your God, who brought you out of the land of Egypt, out of the house of bondage"
            </p>
            <ul className='list-disc pl-6'>
              <li>You shall have no other gods before Me</li>
              <li>You shall not make for yourself a carved image, or any likeness of anything that is in heaven above, or that is in the earth beneath, or that is in the water under the earth; you shall not bow down to them nor serve them. For I, the LORD your God, am a jealous God, visiting the iniquity of the fathers on the children to the third and fourth generations of those who hate Me, but showing mercy to thousands, to those who love Me and keep My commandments</li>
              <li>You shall not take the name of the LORD your God in vain, for the LORD will not hold him guiltless who takes His name in vain</li>
              <li>Remember the Sabbath day, to keep it holy. 9. Six days you shall labor and do all your work, but the seventh day is the Sabbath of the LORD your God. In it you shall do no work: you, nor your son, nor your daughter, nor your male servant, nor your female servant, nor your cattle, nor your stranger who is within your gates. For in six days the LORD made the heavens and the earth, the sea, and all that is in them, and rested the seventh day. Therefore the LORD blessed the Sabbath day and hallowed it</li>
              <li>Honor your father and your mother, that your days may be long upon the land which the LORD your God is giving you</li>
              <li>You shall not murder</li>
              <li>You shall not commit adultery</li>
              <li>You shall not steal</li>
              <li>You shall not bear false witness against your neighbor</li>
              <li>You shall not covet your neighbor’s house; you shall not covet your neighbor’s wife, nor his male servant, nor his female servant, nor his ox, nor his donkey, nor anything that is your neighbor’s</li>
            </ul>
          </li>
          <li>
            <p>
              Note: The Palouse Free Market is a privately owned endeavor and is not affiliated with any particular church. We are here to encourage Christian businesses throughout the Palouse and to develop a distinctly Christian economy that will be a testimony of how the gospel plays out in the everyday life of believers. 
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OurValues