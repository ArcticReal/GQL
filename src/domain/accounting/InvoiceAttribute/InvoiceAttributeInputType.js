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

const InvoiceAttributeInputType = new GraphQLInputObjectType({
  name: 'InvoiceAttributeInputType',
  description: 'input type for InvoiceAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    invoiceId: {type: GraphQLString}
  })
});

export {InvoiceAttributeInputType};
    