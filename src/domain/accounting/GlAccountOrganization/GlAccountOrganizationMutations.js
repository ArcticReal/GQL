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
import {GlAccountOrganizationInputType} from '../../accounting/GlAccountOrganization/GlAccountOrganizationInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlAccountOrganization = {
  type: ResopnseType,
  description: 'mutation for ofbiz createGlAccountOrganization method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/glAccountOrganizations/add?`, null, req);
  }
};
export {createGlAccountOrganization};


const deleteGlAccountOrganizationByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteGlAccountOrganizationByIdUpdated method',
  args:{glAccountOrganizationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/glAccountOrganizations/${args.glAccountOrganizationId}?`, null, req);
  }
};
export {deleteGlAccountOrganizationByIdUpdated};


const updateGlAccountOrganization = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateGlAccountOrganization method',
  args:{glAccountOrganizationToBeUpdated: {type: GlAccountOrganizationInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/glAccountOrganizations/${args.nullVal}?`, args.glAccountOrganizationToBeUpdated, req);
  }
};
export {updateGlAccountOrganization};
