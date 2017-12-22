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
import {GlAccountOrganizationResponseType} from '../../accounting/GlAccountOrganization/GlAccountOrganizationResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlAccountOrganization = {
  type: GlAccountOrganizationResponseType,
  description: 'mutation for ofbiz createGlAccountOrganization method',
  args:{glAccountOrganizationToBeAdded: {type: GlAccountOrganizationInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/glAccountOrganizations/add?`, args.glAccountOrganizationToBeAdded, req);
  }
};
export {createGlAccountOrganization};


const deleteGlAccountOrganizationByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountOrganizationByIdUpdated method',
  args:{glAccountOrganizationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/glAccountOrganizations/${args.glAccountOrganizationId}?`, null, req);
  }
};
export {deleteGlAccountOrganizationByIdUpdated};


const updateGlAccountOrganization = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountOrganization method',
  args:{glAccountOrganizationToBeUpdated: {type: GlAccountOrganizationInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/glAccountOrganizations/${args.nullVal}?`, args.glAccountOrganizationToBeUpdated, req);
  }
};
export {updateGlAccountOrganization};
