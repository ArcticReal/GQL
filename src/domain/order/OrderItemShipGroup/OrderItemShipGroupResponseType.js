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

const OrderItemShipGroupResponseType = new GraphQLObjectType({
  name: 'OrderItemShipGroupResponseType',
  description: 'response type for OrderItemShipGroup',

  fields: () => ({
    carrierPartyId: {type: GraphQLString},
    carrierRoleTypeId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    estimatedDeliveryDate: {type: GraphQLString},
    estimatedShipDate: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    giftMessage: {type: GraphQLString},
    isGift: {type: GraphQLBoolean},
    maySplit: {type: GraphQLBoolean},
    orderId: {type: GraphQLString},
    shipAfterDate: {type: GraphQLString},
    shipByDate: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString},
    shippingInstructions: {type: GraphQLString},
    supplierPartyId: {type: GraphQLString},
    telecomContactMechId: {type: GraphQLString},
    trackingNumber: {type: GraphQLString},
    vendorPartyId: {type: GraphQLString}
  })
});

export {OrderItemShipGroupResponseType};
    