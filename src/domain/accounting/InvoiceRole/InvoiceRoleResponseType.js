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

const InvoiceRoleResponseType = new GraphQLObjectType({
  name: 'InvoiceRoleResponseType',
  description: 'response type for InvoiceRole',

  fields: () => ({
    datetimePerformed: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    percentage: {type: GraphQLFloat},
    roleTypeId: {type: GraphQLString}
  })
});

export {InvoiceRoleResponseType};
    