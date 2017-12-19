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

const VarianceReasonInputType = new GraphQLInputObjectType({
  name: 'VarianceReasonInputType',
  description: 'input type for VarianceReason',

  fields: () => ({
    description: {type: GraphQLString},
    varianceReasonId: {type: GraphQLString}
  })
});

export {VarianceReasonInputType};
    