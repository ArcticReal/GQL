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

const InvoiceItemTypeAttrResponseType = new GraphQLObjectType({
  name: 'InvoiceItemTypeAttrResponseType',
  description: 'response type for InvoiceItemTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    invoiceItemTypeId: {type: GraphQLString}
  })
});

export {InvoiceItemTypeAttrResponseType};
    