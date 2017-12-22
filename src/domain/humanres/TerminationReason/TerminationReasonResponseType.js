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

const TerminationReasonResponseType = new GraphQLObjectType({
  name: 'TerminationReasonResponseType',
  description: 'response type for TerminationReason',

  fields: () => ({
    description: {type: GraphQLString},
    terminationReasonId: {type: GraphQLString}
  })
});

export {TerminationReasonResponseType};
    