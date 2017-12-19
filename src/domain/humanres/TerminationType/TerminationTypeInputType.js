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

const TerminationTypeInputType = new GraphQLInputObjectType({
  name: 'TerminationTypeInputType',
  description: 'input type for TerminationType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    terminationTypeId: {type: GraphQLString}
  })
});

export {TerminationTypeInputType};
    