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

const ProductConfigItemResponseType = new GraphQLObjectType({
  name: 'ProductConfigItemResponseType',
  description: 'response type for ProductConfigItem',

  fields: () => ({
    configItemId: {type: GraphQLString},
    configItemName: {type: GraphQLString},
    configItemTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    imageUrl: {type: GraphQLString},
    longDescription: {type: GraphQLString}
  })
});

export {ProductConfigItemResponseType};
    