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

const InvoiceContactMechResponseType = new GraphQLObjectType({
  name: 'InvoiceContactMechResponseType',
  description: 'response type for InvoiceContactMech',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    contactMechPurposeTypeId: {type: GraphQLString},
    invoiceId: {type: GraphQLString}
  })
});

export {InvoiceContactMechResponseType};
    