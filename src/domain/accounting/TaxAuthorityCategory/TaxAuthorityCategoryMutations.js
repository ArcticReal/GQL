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
import {TaxAuthorityCategoryInputType} from '../../accounting/TaxAuthorityCategory/TaxAuthorityCategoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createTaxAuthorityCategory = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTaxAuthorityCategory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/taxAuthority/taxAuthorityCategorys/add?`, null, req);
  }
};
export {createTaxAuthorityCategory};


const updateTaxAuthorityCategory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTaxAuthorityCategory method',
  args:{taxAuthorityCategoryToBeUpdated: {type: TaxAuthorityCategoryInputType},taxAuthPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/taxAuthority/taxAuthorityCategorys/${args.taxAuthPartyId}?`, args.taxAuthorityCategoryToBeUpdated, req);
  }
};
export {updateTaxAuthorityCategory};


const deleteTaxAuthorityCategoryByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTaxAuthorityCategoryByIdUpdated method',
  args:{taxAuthorityCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/taxAuthority/taxAuthorityCategorys/${args.taxAuthorityCategoryId}?`, null, req);
  }
};
export {deleteTaxAuthorityCategoryByIdUpdated};
