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

const OrderSummaryEntryResponseType = new GraphQLObjectType({
  name: 'OrderSummaryEntryResponseType',
  description: 'response type for OrderSummaryEntry',

  fields: () => ({
    entryDate: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    grossSales: {type: GraphQLFloat},
    productCost: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    totalQuantity: {type: GraphQLFloat}
  })
});

export {OrderSummaryEntryResponseType};
    