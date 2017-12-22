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
import {TaxAuthorityInputType} from '../../accounting/TaxAuthority/TaxAuthorityInputType.js';
import {TaxAuthorityResponseType} from '../../accounting/TaxAuthority/TaxAuthorityResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTaxAuthority = {
  type: TaxAuthorityResponseType,
  description: 'mutation for ofbiz createTaxAuthority method',
  args:{taxAuthorityToBeAdded: {type: TaxAuthorityInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/taxAuthoritys/add?`, args.taxAuthorityToBeAdded, req);
  }
};
export {createTaxAuthority};


const updateTaxAuthority = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTaxAuthority method',
  args:{taxAuthorityToBeUpdated: {type: TaxAuthorityInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/taxAuthoritys/${args.nullVal}?`, args.taxAuthorityToBeUpdated, req);
  }
};
export {updateTaxAuthority};


const deleteTaxAuthorityByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTaxAuthorityByIdUpdated method',
  args:{taxAuthorityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/taxAuthoritys/${args.taxAuthorityId}?`, null, req);
  }
};
export {deleteTaxAuthorityByIdUpdated};
