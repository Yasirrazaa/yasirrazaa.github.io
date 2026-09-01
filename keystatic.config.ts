import { config, collection, fields } from '@keystatic/core';

export default config({
  // Local mode for development (no setup needed)
  // For production: set up a free GitHub OAuth App and switch to github mode
  // See .env.example for instructions
  storage: {
    kind: 'local',
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*/',
      format: { contentField: 'content' },
      columns: ['title', 'pubDate', 'category'],
      schema: {
        title: fields.slug({
          name: { label: 'Title', validation: { isRequired: true } },
        }),
        description: fields.text({
          label: 'Description',
          description: 'Short summary shown in blog cards and meta tags',
          validation: { isRequired: true },
        }),
        pubDate: fields.date({
          label: 'Published Date',
          validation: { isRequired: true },
        }),
        heroImage: fields.image({
          label: 'Hero Image',
          description: 'Featured image for the blog post card',
          directory: 'src/assets/blog',
          publicPath: '/src/assets/blog/',
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'AI Engineering', value: 'AI Engineering' },
            { label: 'Content Strategy', value: 'Content Strategy' },
            { label: 'Voice AI', value: 'Voice AI' },
            { label: 'MLOps', value: 'MLOps' },
            { label: 'Fine-tuning', value: 'Fine-tuning' },
            { label: 'Agent Systems', value: 'Agent Systems' },
          ],
          defaultValue: 'AI Engineering',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: (props) => props.value || 'New Tag',
          },
        ),
        featured: fields.checkbox({
          label: 'Featured',
          description: 'Show this post in the featured hero section',
          defaultValue: false,
        }),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Hide this post from the published site',
          defaultValue: false,
        }),
        content: fields.mdx({
          label: 'Content',
          extension: 'md',
          options: {
            image: {
              directory: 'src/assets/blog/images',
              publicPath: '/src/assets/blog/images/',
            },
          },
        }),
      },
    }),
  },
});
