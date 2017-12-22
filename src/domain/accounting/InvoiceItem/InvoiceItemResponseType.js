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

const InvoiceItemResponseType = new GraphQLObjectType({
  name: 'InvoiceItemResponseType',
  description: 'response type for InvoiceItem',

  fields: () => ({
    amount: {type: GraphQLFloat},
    description: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    invoiceItemTypeId: {type: GraphQLString},
    overrideGlAccountId: {type: GraphQLString},
    overrideOrgPartyId: {type: GraphQLString},
    parentInvoiceId: {type: GraphQLString},
    parentInvoiceItemSeqId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    salesOpportunityId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString},
    taxAuthorityRateSeqId: {type: GraphQLString},
    taxableFlag: {type: GraphQLBoolean},
    uomId: {type: GraphQLString}
  })
});

export {InvoiceItemResponseType};
    