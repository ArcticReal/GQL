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

const GlAccountGroupMemberInputType = new GraphQLInputObjectType({
  name: 'GlAccountGroupMemberInputType',
  description: 'input type for GlAccountGroupMember',

  fields: () => ({
    glAccountGroupId: {type: GraphQLString},
    glAccountGroupTypeId: {type: GraphQLString},
    glAccountId: {type: GraphQLString}
  })
});

export {GlAccountGroupMemberInputType};
    