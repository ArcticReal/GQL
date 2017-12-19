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

const EmplPositionClassTypeInputType = new GraphQLInputObjectType({
  name: 'EmplPositionClassTypeInputType',
  description: 'input type for EmplPositionClassType',

  fields: () => ({
    description: {type: GraphQLString},
    emplPositionClassTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {EmplPositionClassTypeInputType};
    