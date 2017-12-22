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

const InvoiceStatusResponseType = new GraphQLObjectType({
  name: 'InvoiceStatusResponseType',
  description: 'response type for InvoiceStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {InvoiceStatusResponseType};
    