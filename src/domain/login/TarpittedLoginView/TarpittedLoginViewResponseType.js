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

const TarpittedLoginViewResponseType = new GraphQLObjectType({
  name: 'TarpittedLoginViewResponseType',
  description: 'response type for TarpittedLoginView',

  fields: () => ({
    tarpitReleaseDateTime: {type: GraphQLInt},
    userLoginId: {type: GraphQLString},
    viewNameId: {type: GraphQLString}
  })
});

export {TarpittedLoginViewResponseType};
    