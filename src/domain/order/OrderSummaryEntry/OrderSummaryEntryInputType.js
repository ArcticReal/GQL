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

const OrderSummaryEntryInputType = new GraphQLInputObjectType({
  name: 'OrderSummaryEntryInputType',
  description: 'input type for OrderSummaryEntry',

  fields: () => ({
    entryDate: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    grossSales: {type: GraphQLFloat},
    productCost: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    totalQuantity: {type: GraphQLFloat}
  })
});

export {OrderSummaryEntryInputType};
    