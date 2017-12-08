
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
import {GlAccountGroupMemberType} from '../accounting/GlAccountGroupMember.js';


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
    glAccountGroupMembers: {
      type: new GraphQLList(GlAccountGroupMemberType),
      args : {glAccountGroupId: {type: GraphQLString}},
      resolve: (glAccountGroup, args, {loaders}) => loaders.ofbizArray.load(`glAccountGroupMembers/find?glAccountGroupId=${glAccountGroup.glAccountGroupId}`)
    }
  })
});

export {GlAccountGroupType};
    




const GlAccountGroupInputType = new GraphQLInputObjectType({
  name: 'GlAccountGroupInputType',
  description: 'input type for GlAccountGroup in accounting',

  fields: () => ({
    glAccountGroupTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    glAccountGroupId: {type: GraphQLString}
  })
});

export {GlAccountGroupInputType};
    