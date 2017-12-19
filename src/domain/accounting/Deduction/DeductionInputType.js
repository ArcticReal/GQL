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

const DeductionInputType = new GraphQLInputObjectType({
  name: 'DeductionInputType',
  description: 'input type for Deduction',

  fields: () => ({
    amount: {type: GraphQLFloat},
    deductionId: {type: GraphQLString},
    deductionTypeId: {type: GraphQLString},
    paymentId: {type: GraphQLString}
  })
});

export {DeductionInputType};
    