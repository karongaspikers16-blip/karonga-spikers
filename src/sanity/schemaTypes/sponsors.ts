import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'sponsor',
  title: 'Sponsors',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Sponsor Name', type: 'string'}),
    defineField({name: 'logo', title: 'Logo', type: 'image'}),
    defineField({name: 'website', title: 'Website', type: 'url'}),
  ],
})
