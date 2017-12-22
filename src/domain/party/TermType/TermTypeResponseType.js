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

const TermTypeResponseType = new GraphQLObjectType({
  name: 'TermTypeResponseType',
  description: 'response type for TermType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    termTypeId: {type: GraphQLString}
  })
});

export {TermTypeResponseType};
    