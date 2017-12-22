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

const InvoiceItemTypeResponseType = new GraphQLObjectType({
  name: 'InvoiceItemTypeResponseType',
  description: 'response type for InvoiceItemType',

  fields: () => ({
    defaultGlAccountId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    invoiceItemTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {InvoiceItemTypeResponseType};
    