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

const InvoiceContentResponseType = new GraphQLObjectType({
  name: 'InvoiceContentResponseType',
  description: 'response type for InvoiceContent',

  fields: () => ({
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    invoiceContentTypeId: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {InvoiceContentResponseType};
    