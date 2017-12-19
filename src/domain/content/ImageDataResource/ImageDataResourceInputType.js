import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const ImageDataResourceInputType = new GraphQLInputObjectType({
  name: 'ImageDataResourceInputType',
  description: 'input type for ImageDataResource',

  fields: () => ({
    dataResourceId: {type: GraphQLString},
    imageData: {type: new GraphQLList(GraphQLString)}
  })
});

export {ImageDataResourceInputType};
    