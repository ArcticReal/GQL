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

const InvoiceItemTypeAttrInputType = new GraphQLInputObjectType({
  name: 'InvoiceItemTypeAttrInputType',
  description: 'input type for InvoiceItemTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    invoiceItemTypeId: {type: GraphQLString}
  })
});

export {InvoiceItemTypeAttrInputType};
    