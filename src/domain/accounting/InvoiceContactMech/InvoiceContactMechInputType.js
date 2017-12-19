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

const InvoiceContactMechInputType = new GraphQLInputObjectType({
  name: 'InvoiceContactMechInputType',
  description: 'input type for InvoiceContactMech',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    contactMechPurposeTypeId: {type: GraphQLString},
    invoiceId: {type: GraphQLString}
  })
});

export {InvoiceContactMechInputType};
    