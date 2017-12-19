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

const TarpittedLoginViewInputType = new GraphQLInputObjectType({
  name: 'TarpittedLoginViewInputType',
  description: 'input type for TarpittedLoginView',

  fields: () => ({
    tarpitReleaseDateTime: {type: GraphQLInt},
    userLoginId: {type: GraphQLString},
    viewNameId: {type: GraphQLString}
  })
});

export {TarpittedLoginViewInputType};
    