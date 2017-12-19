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

const InvoiceItemTypeMapInputType = new GraphQLInputObjectType({
  name: 'InvoiceItemTypeMapInputType',
  description: 'input type for InvoiceItemTypeMap',

  fields: () => ({
    invoiceItemMapKey: {type: GraphQLString},
    invoiceItemTypeId: {type: GraphQLString},
    invoiceTypeId: {type: GraphQLString}
  })
});

export {InvoiceItemTypeMapInputType};
    