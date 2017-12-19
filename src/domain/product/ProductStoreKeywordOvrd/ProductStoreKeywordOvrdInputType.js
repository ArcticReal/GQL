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

const ProductStoreKeywordOvrdInputType = new GraphQLInputObjectType({
  name: 'ProductStoreKeywordOvrdInputType',
  description: 'input type for ProductStoreKeywordOvrd',

  fields: () => ({
    fromDate: {type: GraphQLString},
    keyword: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    target: {type: GraphQLString},
    targetTypeEnumId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreKeywordOvrdInputType};
    