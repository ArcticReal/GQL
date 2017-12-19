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

const InvoiceTypeInputType = new GraphQLInputObjectType({
  name: 'InvoiceTypeInputType',
  description: 'input type for InvoiceType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    invoiceTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {InvoiceTypeInputType};
    