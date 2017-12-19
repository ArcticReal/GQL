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

const TerminationReasonInputType = new GraphQLInputObjectType({
  name: 'TerminationReasonInputType',
  description: 'input type for TerminationReason',

  fields: () => ({
    description: {type: GraphQLString},
    terminationReasonId: {type: GraphQLString}
  })
});

export {TerminationReasonInputType};
    