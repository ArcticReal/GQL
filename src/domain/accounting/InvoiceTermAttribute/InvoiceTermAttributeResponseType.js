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

const InvoiceTermAttributeResponseType = new GraphQLObjectType({
  name: 'InvoiceTermAttributeResponseType',
  description: 'response type for InvoiceTermAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    invoiceTermId: {type: GraphQLString}
  })
});

export {InvoiceTermAttributeResponseType};
    