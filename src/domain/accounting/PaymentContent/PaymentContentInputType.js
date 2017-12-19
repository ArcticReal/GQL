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

const PaymentContentInputType = new GraphQLInputObjectType({
  name: 'PaymentContentInputType',
  description: 'input type for PaymentContent',

  fields: () => ({
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    paymentContentTypeId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PaymentContentInputType};
    