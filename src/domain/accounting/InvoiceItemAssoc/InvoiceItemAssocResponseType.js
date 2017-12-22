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

const InvoiceItemAssocResponseType = new GraphQLObjectType({
  name: 'InvoiceItemAssocResponseType',
  description: 'response type for InvoiceItemAssoc',

  fields: () => ({
    amount: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    invoiceIdFrom: {type: GraphQLString},
    invoiceIdTo: {type: GraphQLString},
    invoiceItemAssocTypeId: {type: GraphQLString},
    invoiceItemSeqIdFrom: {type: GraphQLString},
    invoiceItemSeqIdTo: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    thruDate: {type: GraphQLString}
  })
});

export {InvoiceItemAssocResponseType};
    