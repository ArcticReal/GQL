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

const EmplPositionClassTypeResponseType = new GraphQLObjectType({
  name: 'EmplPositionClassTypeResponseType',
  description: 'response type for EmplPositionClassType',

  fields: () => ({
    description: {type: GraphQLString},
    emplPositionClassTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {EmplPositionClassTypeResponseType};
    