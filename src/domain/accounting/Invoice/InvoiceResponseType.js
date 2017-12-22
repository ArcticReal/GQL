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

const InvoiceResponseType = new GraphQLObjectType({
  name: 'InvoiceResponseType',
  description: 'response type for Invoice',

  fields: () => ({
    billingAccountId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    description: {type: GraphQLString},
    dueDate: {type: GraphQLString},
    invoiceDate: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    invoiceMessage: {type: GraphQLString},
    invoiceTypeId: {type: GraphQLString},
    paidDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    recurrenceInfoId: {type: GraphQLString},
    referenceNumber: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {InvoiceResponseType};
    