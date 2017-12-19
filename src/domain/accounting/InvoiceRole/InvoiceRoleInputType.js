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

const InvoiceRoleInputType = new GraphQLInputObjectType({
  name: 'InvoiceRoleInputType',
  description: 'input type for InvoiceRole',

  fields: () => ({
    datetimePerformed: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    percentage: {type: GraphQLFloat},
    roleTypeId: {type: GraphQLString}
  })
});

export {InvoiceRoleInputType};
    