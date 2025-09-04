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
      {
        name: 'bedrooms',
        title: 'Number of Bedrooms',
        type: 'number',
        validation: Rule => Rule.required().min(0),
      },
      {
        name: 'bathrooms',
        title: 'Number of Bathrooms',
        type: 'number',
        validation: Rule => Rule.required().min(0),
      },
      {
        name: 'propertyType',
        title: 'Property Type',
        type: 'string',
        options: {
          list: [
            { title: 'House', value: 'House' },
            { title: 'Flat', value: 'Flat' },
            { title: 'Apartment', value: 'Apartment' },
            { title: 'Bungalow', value: 'Bungalow' },
            { title: 'Studio', value: 'Studio' },
            { title: 'Other', value: 'Other' },
          ],
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'Property price in pounds (optional)',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 4,
      },
    ],
  };
  