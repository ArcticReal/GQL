
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
import {GlAccountGroupMemberType} from '../accounting/GlAccountGroupMemberType.js';


const GlAccountGroupType = new GraphQLObjectType({
  name: 'GlAccountGroupType',
  description: 'Type for GlAccountGroup in accounting',

  fields: () => ({
    glAccountGroupType: {
      type: GlAccountGroupTypeType,
      args : {glAccountGroupTypeId: {type: GraphQLString}},
      resolve: (glAccountGroup, args, {loaders}) => loaders.ofbiz.load(`glAccountGroupTypes/find?glAccountGroupTypeId=${glAccountGroup.glAccountGroupTypeId}`)
    },
    description: {type: GraphQLString},
    glAccountGroupId: {type: GraphQLString},
    glAccountGroupMember: {
      type: new GraphQLList(GlAccountGroupMemberType),
      args : {glAccountGroupId: {type: GraphQLString}},
      resolve: (glAccountGroup, args, {loaders}) => loaders.ofbizArray.load(`glAccountGroupMembers/find?glAccountGroupId=${glAccountGroup.glAccountGroupId}`)
    }
  })
});

export {GlAccountGroupType};
    