
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {GlAccountGroupTypeType} from '../accounting/GlAccountGroupTypeType.js';
import {GlAccountGroupType} from '../accounting/GlAccountGroupType.js';
import {GlAccountType} from '../accounting/GlAccountType.js';


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
    