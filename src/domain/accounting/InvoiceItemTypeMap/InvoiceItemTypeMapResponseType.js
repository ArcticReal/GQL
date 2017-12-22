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

const InvoiceItemTypeMapResponseType = new GraphQLObjectType({
  name: 'InvoiceItemTypeMapResponseType',
  description: 'response type for InvoiceItemTypeMap',

  fields: () => ({
    invoiceItemMapKey: {type: GraphQLString},
    invoiceItemTypeId: {type: GraphQLString},
    invoiceTypeId: {type: GraphQLString}
  })
});

export {InvoiceItemTypeMapResponseType};
    