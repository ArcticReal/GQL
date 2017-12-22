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

const PaymentContentTypeResponseType = new GraphQLObjectType({
  name: 'PaymentContentTypeResponseType',
  description: 'response type for PaymentContentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    paymentContentTypeId: {type: GraphQLString}
  })
});

export {PaymentContentTypeResponseType};
    