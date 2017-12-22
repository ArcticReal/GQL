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

const VarianceReasonResponseType = new GraphQLObjectType({
  name: 'VarianceReasonResponseType',
  description: 'response type for VarianceReason',

  fields: () => ({
    description: {type: GraphQLString},
    varianceReasonId: {type: GraphQLString}
  })
});

export {VarianceReasonResponseType};
    