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

const SupplierProductResponseType = new GraphQLObjectType({
  name: 'SupplierProductResponseType',
  description: 'response type for SupplierProduct',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    availableFromDate: {type: GraphQLString},
    availableThruDate: {type: GraphQLString},
    canDropShip: {type: GraphQLBoolean},
    comments: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    lastPrice: {type: GraphQLFloat},
    minimumOrderQuantity: {type: GraphQLFloat},
    orderQtyIncrements: {type: GraphQLFloat},
    partyId: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantityUomId: {type: GraphQLString},
    shippingPrice: {type: GraphQLFloat},
    standardLeadTimeDays: {type: GraphQLFloat},
    supplierPrefOrderId: {type: GraphQLString},
    supplierProductId: {type: GraphQLString},
    supplierProductName: {type: GraphQLString},
    supplierRatingTypeId: {type: GraphQLString},
    unitsIncluded: {type: GraphQLFloat}
  })
});

export {SupplierProductResponseType};
    