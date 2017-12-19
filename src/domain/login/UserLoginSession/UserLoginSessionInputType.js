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

const UserLoginSessionInputType = new GraphQLInputObjectType({
  name: 'UserLoginSessionInputType',
  description: 'input type for UserLoginSession',

  fields: () => ({
    savedDate: {type: GraphQLString},
    sessionData: {type: GraphQLString},
    userLoginId: {type: GraphQLString}
  })
});

export {UserLoginSessionInputType};
    