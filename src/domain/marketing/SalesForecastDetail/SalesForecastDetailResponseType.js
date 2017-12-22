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

const SalesForecastDetailResponseType = new GraphQLObjectType({
  name: 'SalesForecastDetailResponseType',
  description: 'response type for SalesForecastDetail',

  fields: () => ({
    amount: {type: GraphQLFloat},
    productCategoryId: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    quantityUomId: {type: GraphQLString},
    salesForecastDetailId: {type: GraphQLString},
    salesForecastId: {type: GraphQLString}
  })
});

export {SalesForecastDetailResponseType};
    