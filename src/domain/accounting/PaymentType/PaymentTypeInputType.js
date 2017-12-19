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

const PaymentTypeInputType = new GraphQLInputObjectType({
  name: 'PaymentTypeInputType',
  description: 'input type for PaymentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    paymentTypeId: {type: GraphQLString}
  })
});

export {PaymentTypeInputType};
    