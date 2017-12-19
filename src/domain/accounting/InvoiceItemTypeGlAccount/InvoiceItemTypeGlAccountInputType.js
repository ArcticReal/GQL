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

const InvoiceItemTypeGlAccountInputType = new GraphQLInputObjectType({
  name: 'InvoiceItemTypeGlAccountInputType',
  description: 'input type for InvoiceItemTypeGlAccount',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    invoiceItemTypeId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString}
  })
});

export {InvoiceItemTypeGlAccountInputType};
    