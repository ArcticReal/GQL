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

const InvoiceStatusInputType = new GraphQLInputObjectType({
  name: 'InvoiceStatusInputType',
  description: 'input type for InvoiceStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {InvoiceStatusInputType};
    