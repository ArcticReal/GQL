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

const TerminationTypeResponseType = new GraphQLObjectType({
  name: 'TerminationTypeResponseType',
  description: 'response type for TerminationType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    terminationTypeId: {type: GraphQLString}
  })
});

export {TerminationTypeResponseType};
    