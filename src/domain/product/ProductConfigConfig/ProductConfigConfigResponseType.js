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

const ProductConfigConfigResponseType = new GraphQLObjectType({
  name: 'ProductConfigConfigResponseType',
  description: 'response type for ProductConfigConfig',

  fields: () => ({
    configId: {type: GraphQLString},
    configItemId: {type: GraphQLString},
    configOptionId: {type: GraphQLString},
    description: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {ProductConfigConfigResponseType};
    