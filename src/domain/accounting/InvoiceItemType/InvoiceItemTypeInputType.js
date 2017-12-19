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

const InvoiceItemTypeInputType = new GraphQLInputObjectType({
  name: 'InvoiceItemTypeInputType',
  description: 'input type for InvoiceItemType',

  fields: () => ({
    defaultGlAccountId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    invoiceItemTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {InvoiceItemTypeInputType};
    