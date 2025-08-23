import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'content', title: 'Content', type: 'text'}),
    defineField({name: 'publishedAt', title: 'Published At', type: 'datetime'}),
    defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
  ],
})
