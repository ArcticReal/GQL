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

const TermTypeInputType = new GraphQLInputObjectType({
  name: 'TermTypeInputType',
  description: 'input type for TermType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    termTypeId: {type: GraphQLString}
  })
});

export {TermTypeInputType};
    