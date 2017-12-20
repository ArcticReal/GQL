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
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlAccountTypeDefault = {
  type: ResopnseType,
  description: 'mutation for ofbiz createGlAccountTypeDefault method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/glAccountTypeDefaults/add?`, null, req);
  }
};
export {createGlAccountTypeDefault};


const deleteGlAccountTypeDefaultByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteGlAccountTypeDefaultByIdUpdated method',
  args:{glAccountTypeDefaultId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/glAccountTypeDefaults/${args.glAccountTypeDefaultId}?`, null, req);
  }
};
export {deleteGlAccountTypeDefaultByIdUpdated};


const updateGlAccountTypeDefault = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateGlAccountTypeDefault method',
  args:{glAccountTypeDefaultToBeUpdated: {type: GlAccountTypeDefaultInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/glAccountTypeDefaults/${args.nullVal}?`, args.glAccountTypeDefaultToBeUpdated, req);
  }
};
export {updateGlAccountTypeDefault};
