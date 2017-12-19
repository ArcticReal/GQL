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

const InvoiceItemAssocInputType = new GraphQLInputObjectType({
  name: 'InvoiceItemAssocInputType',
  description: 'input type for InvoiceItemAssoc',

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

export {InvoiceItemAssocInputType};
    