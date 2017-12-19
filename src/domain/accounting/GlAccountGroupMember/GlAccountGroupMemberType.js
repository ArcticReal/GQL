
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

import {GlAccountGroupTypeType} from '../../accounting/GlAccountGroupType/GlAccountGroupTypeType.js';
import {GlAccountGroupType} from '../../accounting/GlAccountGroup/GlAccountGroupType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';


const GlAccountGroupMemberType = new GraphQLObjectType({
  name: 'GlAccountGroupMemberType',
  description: 'Type for GlAccountGroupMember in accounting',

  fields: () => ({
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccountGroupMember, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${glAccountGroupMember.glAccountId}`)
    },
    glAccountGroupType: {
      type: GlAccountGroupTypeType,
      args : {glAccountGroupTypeId: {type: GraphQLString}},
      resolve: (glAccountGroupMember, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccount/glAccountGroupTypes/find?glAccountGroupTypeId=${glAccountGroupMember.glAccountGroupTypeId}`)
    },
    glAccountGroup: {
      type: GlAccountGroupType,
      args : {glAccountGroupId: {type: GraphQLString}},
      resolve: (glAccountGroupMember, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccount/glAccountGroups/find?glAccountGroupId=${glAccountGroupMember.glAccountGroupId}`)
    }
  })
});

export {GlAccountGroupMemberType};
    