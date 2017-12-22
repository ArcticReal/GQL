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

const DeductionResponseType = new GraphQLObjectType({
  name: 'DeductionResponseType',
  description: 'response type for Deduction',

  fields: () => ({
    amount: {type: GraphQLFloat},
    deductionId: {type: GraphQLString},
    deductionTypeId: {type: GraphQLString},
    paymentId: {type: GraphQLString}
  })
});

export {DeductionResponseType};
    