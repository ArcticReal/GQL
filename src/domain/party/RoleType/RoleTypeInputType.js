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

const RoleTypeInputType = new GraphQLInputObjectType({
  name: 'RoleTypeInputType',
  description: 'input type for RoleType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {RoleTypeInputType};
    