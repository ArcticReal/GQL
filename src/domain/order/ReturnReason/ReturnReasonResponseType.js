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

const ReturnReasonResponseType = new GraphQLObjectType({
  name: 'ReturnReasonResponseType',
  description: 'response type for ReturnReason',

  fields: () => ({
    description: {type: GraphQLString},
    returnReasonId: {type: GraphQLString},
    sequenceId: {type: GraphQLString}
  })
});

export {ReturnReasonResponseType};
    