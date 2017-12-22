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

const InvoiceTermResponseType = new GraphQLObjectType({
  name: 'InvoiceTermResponseType',
  description: 'response type for InvoiceTerm',

  fields: () => ({
    description: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    invoiceTermId: {type: GraphQLString},
    termDays: {type: GraphQLInt},
    termTypeId: {type: GraphQLString},
    termValue: {type: GraphQLFloat},
    textValue: {type: GraphQLString},
    uomId: {type: GraphQLString}
  })
});

export {InvoiceTermResponseType};
    