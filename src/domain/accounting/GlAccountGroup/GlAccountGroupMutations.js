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
import {GlAccountGroupInputType} from '../../accounting/GlAccountGroup/GlAccountGroupInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createGlAccountGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountGroup method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/glAccountGroups/add?`, null, req);
  }
};
export {createGlAccountGroup};


const updateGlAccountGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountGroup method',
  args:{glAccountGroupToBeUpdated: {type: GlAccountGroupInputType},glAccountGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/glAccountGroups/${args.glAccountGroupId}?`, args.glAccountGroupToBeUpdated, req);
  }
};
export {updateGlAccountGroup};


const deleteGlAccountGroupByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountGroupByIdUpdated method',
  args:{glAccountGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/glAccountGroups/${args.glAccountGroupId}?`, null, req);
  }
};
export {deleteGlAccountGroupByIdUpdated};
