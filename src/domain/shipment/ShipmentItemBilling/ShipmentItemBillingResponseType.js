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

const ShipmentItemBillingResponseType = new GraphQLObjectType({
  name: 'ShipmentItemBillingResponseType',
  description: 'response type for ShipmentItemBilling',

  fields: () => ({
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ShipmentItemBillingResponseType};
    