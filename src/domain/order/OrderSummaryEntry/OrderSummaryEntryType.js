
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

import {ProductType} from '../../product/Product/ProductType.js';
import {FacilityType} from '../../product/Facility/FacilityType.js';


const OrderSummaryEntryType = new GraphQLObjectType({
  name: 'OrderSummaryEntryType',
  description: 'Type for OrderSummaryEntry in order',

  fields: () => ({
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (orderSummaryEntry, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${orderSummaryEntry.facilityId}`)
    },
    totalQuantity: {type: GraphQLFloat},
    productCost: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (orderSummaryEntry, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${orderSummaryEntry.productId}`)
    },
    entryDate: {type: GraphQLString},
    grossSales: {type: GraphQLFloat}
  })
});

export {OrderSummaryEntryType};
    