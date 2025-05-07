// schemas/property.js (or the file where your property schema is defined)

export default {
    name: 'property',
    title: 'Property',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
          {
            type: 'image',
            title: 'Image',
            options: {
              hotspot: true, // Allows you to crop and adjust images in Sanity Studio
            },
          },
        ],
      },
    ],
  };
  