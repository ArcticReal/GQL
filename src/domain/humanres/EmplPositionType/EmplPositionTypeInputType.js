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

const EmplPositionTypeInputType = new GraphQLInputObjectType({
  name: 'EmplPositionTypeInputType',
  description: 'input type for EmplPositionType',

  fields: () => ({
    description: {type: GraphQLString},
    emplPositionTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {EmplPositionTypeInputType};
    