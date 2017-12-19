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

const InvoiceTermAttributeInputType = new GraphQLInputObjectType({
  name: 'InvoiceTermAttributeInputType',
  description: 'input type for InvoiceTermAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    invoiceTermId: {type: GraphQLString}
  })
});

export {InvoiceTermAttributeInputType};
    