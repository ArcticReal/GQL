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

const ShipmentItemBillingInputType = new GraphQLInputObjectType({
  name: 'ShipmentItemBillingInputType',
  description: 'input type for ShipmentItemBilling',

  fields: () => ({
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ShipmentItemBillingInputType};
    