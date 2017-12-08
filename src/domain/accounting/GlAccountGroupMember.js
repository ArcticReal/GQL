
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

import {GlAccountGroupTypeType} from '../accounting/GlAccountGroupType.js';
import {GlAccountGroupType} from '../accounting/GlAccountGroup.js';
import {GlAccountType} from '../accounting/GlAccount.js';


const GlAccountGroupMemberType = new GraphQLObjectType({
  name: 'GlAccountGroupMemberType',
  description: 'Type for GlAccountGroupMember in accounting',

  fields: () => ({
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccountGroupMember, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${glAccountGroupMember.glAccountId}`)
    },
    glAccountGroupType: {
      type: GlAccountGroupTypeType,
      args : {glAccountGroupTypeId: {type: GraphQLString}},
      resolve: (glAccountGroupMember, args, {loaders}) => loaders.ofbiz.load(`glAccountGroupTypes/find?glAccountGroupTypeId=${glAccountGroupMember.glAccountGroupTypeId}`)
    },
    glAccountGroup: {
      type: GlAccountGroupType,
      args : {glAccountGroupId: {type: GraphQLString}},
      resolve: (glAccountGroupMember, args, {loaders}) => loaders.ofbiz.load(`glAccountGroups/find?glAccountGroupId=${glAccountGroupMember.glAccountGroupId}`)
    }
  })
});

export {GlAccountGroupMemberType};
    




const GlAccountGroupMemberInputType = new GraphQLInputObjectType({
  name: 'GlAccountGroupMemberInputType',
  description: 'input type for GlAccountGroupMember in accounting',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    glAccountGroupTypeId: {type: GraphQLString},
    glAccountGroupId: {type: GraphQLString}
  })
});

export {GlAccountGroupMemberInputType};
    