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

const ProductPriceChangeResponseType = new GraphQLObjectType({
  name: 'ProductPriceChangeResponseType',
  description: 'response type for ProductPriceChange',

  fields: () => ({
    changedByUserLogin: {type: GraphQLString},
    changedDate: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    oldPrice: {type: GraphQLFloat},
    price: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    productPriceChangeId: {type: GraphQLString},
    productPricePurposeId: {type: GraphQLString},
    productPriceTypeId: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductPriceChangeResponseType};
    