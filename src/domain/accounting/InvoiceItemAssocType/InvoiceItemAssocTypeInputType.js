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

const InvoiceItemAssocTypeInputType = new GraphQLInputObjectType({
  name: 'InvoiceItemAssocTypeInputType',
  description: 'input type for InvoiceItemAssocType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    invoiceItemAssocTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {InvoiceItemAssocTypeInputType};
    