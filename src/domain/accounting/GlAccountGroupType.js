
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

import {GlAccountGroupType} from '../accounting/GlAccountGroup.js';
import {GlAccountGroupMemberType} from '../accounting/GlAccountGroupMember.js';


const GlAccountGroupTypeType = new GraphQLObjectType({
  name: 'GlAccountGroupTypeType',
  description: 'Type for GlAccountGroupType in accounting',

  fields: () => ({
    glAccountGroupTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    glAccountGroups: {
      type: new GraphQLList(GlAccountGroupType),
      args : {glAccountGroupTypeId: {type: GraphQLString}},
      resolve: (glAccountGroupType, args, {loaders}) => loaders.ofbizArray.load(`glAccountGroups/find?glAccountGroupTypeId=${glAccountGroupType.glAccountGroupTypeId}`)
    },
    glAccountGroupMembers: {
      type: new GraphQLList(GlAccountGroupMemberType),
      args : {glAccountGroupTypeId: {type: GraphQLString}},
      resolve: (glAccountGroupType, args, {loaders}) => loaders.ofbizArray.load(`glAccountGroupMembers/find?glAccountGroupTypeId=${glAccountGroupType.glAccountGroupTypeId}`)
    }
  })
});

export {GlAccountGroupTypeType};
    




const GlAccountGroupTypeInputType = new GraphQLInputObjectType({
  name: 'GlAccountGroupTypeInputType',
  description: 'input type for GlAccountGroupType in accounting',

  fields: () => ({
    glAccountGroupTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {GlAccountGroupTypeInputType};
    