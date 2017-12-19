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

const InvoiceContentInputType = new GraphQLInputObjectType({
  name: 'InvoiceContentInputType',
  description: 'input type for InvoiceContent',

  fields: () => ({
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    invoiceContentTypeId: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {InvoiceContentInputType};
    