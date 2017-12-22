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

const InvoiceItemTypeGlAccountResponseType = new GraphQLObjectType({
  name: 'InvoiceItemTypeGlAccountResponseType',
  description: 'response type for InvoiceItemTypeGlAccount',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    invoiceItemTypeId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString}
  })
});

export {InvoiceItemTypeGlAccountResponseType};
    