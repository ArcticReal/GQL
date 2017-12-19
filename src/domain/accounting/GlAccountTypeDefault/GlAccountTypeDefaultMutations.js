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
import {GlAccountTypeDefaultInputType} from '../../accounting/GlAccountTypeDefault/GlAccountTypeDefaultInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createGlAccountTypeDefault = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountTypeDefault method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/glAccountTypeDefaults/add?`, null, req);
  }
};
export {createGlAccountTypeDefault};


const deleteGlAccountTypeDefaultByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountTypeDefaultByIdUpdated method',
  args:{glAccountTypeDefaultId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/glAccountTypeDefaults/${args.glAccountTypeDefaultId}?`, null, req);
  }
};
export {deleteGlAccountTypeDefaultByIdUpdated};


const updateGlAccountTypeDefault = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountTypeDefault method',
  args:{glAccountTypeDefaultToBeUpdated: {type: GlAccountTypeDefaultInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/glAccountTypeDefaults/${args.nullVal}?`, args.glAccountTypeDefaultToBeUpdated, req);
  }
};
export {updateGlAccountTypeDefault};
