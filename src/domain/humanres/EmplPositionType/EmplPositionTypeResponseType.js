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

const EmplPositionTypeResponseType = new GraphQLObjectType({
  name: 'EmplPositionTypeResponseType',
  description: 'response type for EmplPositionType',

  fields: () => ({
    description: {type: GraphQLString},
    emplPositionTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {EmplPositionTypeResponseType};
    