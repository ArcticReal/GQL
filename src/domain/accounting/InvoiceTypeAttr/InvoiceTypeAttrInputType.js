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

const InvoiceTypeAttrInputType = new GraphQLInputObjectType({
  name: 'InvoiceTypeAttrInputType',
  description: 'input type for InvoiceTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    invoiceTypeId: {type: GraphQLString}
  })
});

export {InvoiceTypeAttrInputType};
    