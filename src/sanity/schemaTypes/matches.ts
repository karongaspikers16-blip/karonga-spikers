import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'match',
  title: 'Matches',
  type: 'document',
  fields: [
    defineField({name: 'opponent', title: 'Opponent', type: 'string'}),
    defineField({name: 'date', title: 'Date', type: 'datetime'}),
    defineField({name: 'location', title: 'Location', type: 'string'}),
    defineField({name: 'score', title: 'Score', type: 'string'}),
  ],
})
