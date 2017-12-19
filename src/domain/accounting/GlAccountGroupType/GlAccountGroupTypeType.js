
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

import {GlAccountGroupType} from '../../accounting/GlAccountGroup/GlAccountGroupType.js';
import {GlAccountGroupMemberType} from '../../accounting/GlAccountGroupMember/GlAccountGroupMemberType.js';


const GlAccountGroupTypeType = new GraphQLObjectType({
  name: 'GlAccountGroupTypeType',
  description: 'Type for GlAccountGroupType in accounting',

  fields: () => ({
    glAccountGroupTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    glAccountGroups: {
      type: new GraphQLList(GlAccountGroupType),
      args : {},
      resolve: (glAccountGroupType, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountGroups/find?glAccountGroupTypeId=${glAccountGroupType.glAccountGroupTypeId}`)
    },
    glAccountGroupMembers: {
      type: new GraphQLList(GlAccountGroupMemberType),
      args : {},
      resolve: (glAccountGroupType, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountGroupMembers/find?glAccountGroupTypeId=${glAccountGroupType.glAccountGroupTypeId}`)
    }
  })
});

export {GlAccountGroupTypeType};
    