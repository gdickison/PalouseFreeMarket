/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'listing',
  title: 'New Listing',
  type: 'document',
  fields: [
    {
      name: 'agreeToPrinciples',
      title: 'Agree To Principles',
      type: 'boolean',
      validation: Rule => Rule.required()
    },
    {
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'ownerName',
      title: 'Owner Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description of the Business',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'keywords',
      title: 'Keywords',
      description: 'Add keywords that will help people find your listing',
      type: 'string'//,
      // of: [{type: 'string'}]
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image'
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: Rule => Rule.required().regex(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        {
          name: "email", // Error message is "Does not match email-pattern"
          invert: false, // Boolean to allow any value that does NOT match pattern
        }
      )
    },
    {
      name: 'emailPublish',
      title: 'Publish Email Address',
      description: 'We need your email address to contact you, but it will not appear in your listing unless you want it to.',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.regex(
        /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
        {
          name: 'phone',
          invert: false
        }
      )
    },
    {
      name: 'phonePublish',
      title: 'Publish Phone Number',
      description: "We need your phone number to contact you, but it will not appear in your listing unless you want it to",
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'website',
      title: 'Website',
      type: 'string',
      validation: Rule => Rule.uri({
        allowRelative: true, // Allow relative links
        relativeOnly: false, // Force only relative links
        scheme: ["https", "http", "mailto"], // Default is ["https", "http"]
      })
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
      validation: Rule => Rule.uri({
        allowRelative: true, // Allow relative links
        relativeOnly: false, // Force only relative links
        scheme: ["https", "http", "mailto"], // Default is ["https", "http"]
      })
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
      validation: Rule => Rule.uri({
        allowRelative: true, // Allow relative links
        relativeOnly: false, // Force only relative links
        scheme: ["https", "http", "mailto"], // Default is ["https", "http"]
      })
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
      validation: Rule => Rule.uri({
        allowRelative: true, // Allow relative links
        relativeOnly: false, // Force only relative links
        scheme: ["https", "http", "mailto"], // Default is ["https", "http"]
      })
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'string',
      validation: Rule => Rule.uri({
        allowRelative: true, // Allow relative links
        relativeOnly: false, // Force only relative links
        scheme: ["https", "http", "mailto"], // Default is ["https", "http"]
      })
    },
    {
      name: 'youtube',
      title: 'YouTube',
      type: 'string',
      validation: Rule => Rule.uri({
        allowRelative: true, // Allow relative links
        relativeOnly: false, // Force only relative links
        scheme: ["https", "http", "mailto"], // Default is ["https", "http"]
      })
    },
    {
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: {
      business: 'businessName',
      owner: 'ownerName',
      email: 'email'
    },
    prepare({business, owner, email}) {
      return {
        title: `${business}`,
        subtitle: `${owner} - ${email}`
      }
    }
  }
}