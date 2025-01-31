import {defineField, defineType} from 'sanity'

export const archiveType = defineType({
  name: 'archive',
  title: 'Archive',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'main_description',
      title: 'Main Description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sub_description',
      title: 'Sub Description',
      type: 'string',
    }),
  ],
})
