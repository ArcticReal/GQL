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

const PaymentGroupTypeResponseType = new GraphQLObjectType({
  name: 'PaymentGroupTypeResponseType',
  description: 'response type for PaymentGroupType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    paymentGroupTypeId: {type: GraphQLString}
  })
});

export {PaymentGroupTypeResponseType};
    