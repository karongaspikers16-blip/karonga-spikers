import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Player Name', type: 'string'}),
    defineField({name: 'role', title: 'Role', type: 'string'}),
    defineField({name: 'jersey', title: 'Jersey Number', type: 'number'}),
    defineField({name: 'photo', title: 'Photo', type: 'image'}),
    defineField({name: 'bio', title: 'Bio', type: 'text'}),
  ],
})
