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

const ReturnReasonInputType = new GraphQLInputObjectType({
  name: 'ReturnReasonInputType',
  description: 'input type for ReturnReason',

  fields: () => ({
    description: {type: GraphQLString},
    returnReasonId: {type: GraphQLString},
    sequenceId: {type: GraphQLString}
  })
});

export {ReturnReasonInputType};
    