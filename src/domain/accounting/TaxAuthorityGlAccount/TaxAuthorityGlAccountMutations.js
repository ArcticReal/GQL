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
import {TaxAuthorityGlAccountInputType} from '../../accounting/TaxAuthorityGlAccount/TaxAuthorityGlAccountInputType.js';
import {TaxAuthorityGlAccountResponseType} from '../../accounting/TaxAuthorityGlAccount/TaxAuthorityGlAccountResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTaxAuthorityGlAccount = {
  type: TaxAuthorityGlAccountResponseType,
  description: 'mutation for ofbiz createTaxAuthorityGlAccount method',
  args:{taxAuthorityGlAccountToBeAdded: {type: TaxAuthorityGlAccountInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/taxAuthorityGlAccounts/add?`, args.taxAuthorityGlAccountToBeAdded, req);
  }
};
export {createTaxAuthorityGlAccount};


const updateTaxAuthorityGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTaxAuthorityGlAccount method',
  args:{taxAuthorityGlAccountToBeUpdated: {type: TaxAuthorityGlAccountInputType},taxAuthPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/taxAuthorityGlAccounts/${args.taxAuthPartyId}?`, args.taxAuthorityGlAccountToBeUpdated, req);
  }
};
export {updateTaxAuthorityGlAccount};


const deleteTaxAuthorityGlAccountByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTaxAuthorityGlAccountByIdUpdated method',
  args:{taxAuthorityGlAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/taxAuthorityGlAccounts/${args.taxAuthorityGlAccountId}?`, null, req);
  }
};
export {deleteTaxAuthorityGlAccountByIdUpdated};
