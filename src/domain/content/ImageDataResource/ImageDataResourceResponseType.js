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

const ImageDataResourceResponseType = new GraphQLObjectType({
  name: 'ImageDataResourceResponseType',
  description: 'response type for ImageDataResource',

  fields: () => ({
    dataResourceId: {type: GraphQLString},
    imageData: {type: new GraphQLList(GraphQLString)}
  })
});

export {ImageDataResourceResponseType};
    