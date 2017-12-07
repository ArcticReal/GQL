
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {GlAccountGroupType} from '../accounting/GlAccountGroupType.js';
import {GlAccountGroupMemberType} from '../accounting/GlAccountGroupMemberType.js';


const GlAccountGroupTypeType = new GraphQLObjectType({
  name: 'GlAccountGroupTypeType',
  description: 'Type for GlAccountGroupType in accounting',

  fields: () => ({
    glAccountGroupTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    glAccountGroup: {
      type: new GraphQLList(GlAccountGroupType),
      args : {glAccountGroupTypeId: {type: GraphQLString}},
      resolve: (glAccountGroupType, args, {loaders}) => loaders.ofbizArray.load(`glAccountGroups/find?glAccountGroupTypeId=${glAccountGroupType.glAccountGroupTypeId}`)
    },
    glAccountGroupMember: {
      type: new GraphQLList(GlAccountGroupMemberType),
      args : {glAccountGroupTypeId: {type: GraphQLString}},
      resolve: (glAccountGroupType, args, {loaders}) => loaders.ofbizArray.load(`glAccountGroupMembers/find?glAccountGroupTypeId=${glAccountGroupType.glAccountGroupTypeId}`)
    }
  })
});

export {GlAccountGroupTypeType};
    