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

const InvoiceAttributeResponseType = new GraphQLObjectType({
  name: 'InvoiceAttributeResponseType',
  description: 'response type for InvoiceAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    invoiceId: {type: GraphQLString}
  })
});

export {InvoiceAttributeResponseType};
    