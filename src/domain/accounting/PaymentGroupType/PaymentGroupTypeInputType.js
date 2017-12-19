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

const PaymentGroupTypeInputType = new GraphQLInputObjectType({
  name: 'PaymentGroupTypeInputType',
  description: 'input type for PaymentGroupType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    paymentGroupTypeId: {type: GraphQLString}
  })
});

export {PaymentGroupTypeInputType};
    