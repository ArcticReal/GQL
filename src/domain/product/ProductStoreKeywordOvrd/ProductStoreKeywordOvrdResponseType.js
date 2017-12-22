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

const ProductStoreKeywordOvrdResponseType = new GraphQLObjectType({
  name: 'ProductStoreKeywordOvrdResponseType',
  description: 'response type for ProductStoreKeywordOvrd',

  fields: () => ({
    fromDate: {type: GraphQLString},
    keyword: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    target: {type: GraphQLString},
    targetTypeEnumId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreKeywordOvrdResponseType};
    