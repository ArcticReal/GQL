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

const PaymentContentResponseType = new GraphQLObjectType({
  name: 'PaymentContentResponseType',
  description: 'response type for PaymentContent',

  fields: () => ({
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    paymentContentTypeId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PaymentContentResponseType};
    