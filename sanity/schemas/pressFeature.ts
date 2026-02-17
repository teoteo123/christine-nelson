import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pressFeature',
  title: 'Press Feature',
  type: 'document',
  fields: [
    defineField({ name: 'publicationName', title: 'Publication Name', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: { list: ['print', 'tv', 'speaking'] },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'date' }),
    defineField({ name: 'link', title: 'Link', type: 'url' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'topic', title: 'Topic', type: 'string' }),
    defineField({ name: 'subtype', title: 'Subtype', type: 'string' }),
  ],
})
