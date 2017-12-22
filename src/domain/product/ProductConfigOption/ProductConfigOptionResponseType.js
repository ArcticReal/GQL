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

const ProductConfigOptionResponseType = new GraphQLObjectType({
  name: 'ProductConfigOptionResponseType',
  description: 'response type for ProductConfigOption',

  fields: () => ({
    configItemId: {type: GraphQLString},
    configOptionId: {type: GraphQLString},
    configOptionName: {type: GraphQLString},
    description: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {ProductConfigOptionResponseType};
    