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

const SalesForecastDetailInputType = new GraphQLInputObjectType({
  name: 'SalesForecastDetailInputType',
  description: 'input type for SalesForecastDetail',

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

export {SalesForecastDetailInputType};
    