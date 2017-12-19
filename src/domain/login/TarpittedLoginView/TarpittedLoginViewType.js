
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



const TarpittedLoginViewType = new GraphQLObjectType({
  name: 'TarpittedLoginViewType',
  description: 'Type for TarpittedLoginView in login',

  fields: () => ({
    viewNameId: {type: GraphQLString},
    userLoginId: {type: GraphQLString},
    tarpitReleaseDateTime: {type: GraphQLInt}
  })
});

export {TarpittedLoginViewType};
    