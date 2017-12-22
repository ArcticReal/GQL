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

const GlAccountGroupMemberResponseType = new GraphQLObjectType({
  name: 'GlAccountGroupMemberResponseType',
  description: 'response type for GlAccountGroupMember',

  fields: () => ({
    glAccountGroupId: {type: GraphQLString},
    glAccountGroupTypeId: {type: GraphQLString},
    glAccountId: {type: GraphQLString}
  })
});

export {GlAccountGroupMemberResponseType};
    