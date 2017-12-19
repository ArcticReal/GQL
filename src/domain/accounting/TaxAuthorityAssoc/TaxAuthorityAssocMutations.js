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
import {TaxAuthorityAssocInputType} from '../../accounting/TaxAuthorityAssoc/TaxAuthorityAssocInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createTaxAuthorityAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTaxAuthorityAssoc method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/taxAuthority/taxAuthorityAssocs/add?`, null, req);
  }
};
export {createTaxAuthorityAssoc};


const updateTaxAuthorityAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTaxAuthorityAssoc method',
  args:{taxAuthorityAssocToBeUpdated: {type: TaxAuthorityAssocInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/taxAuthority/taxAuthorityAssocs/${args.nullVal}?`, args.taxAuthorityAssocToBeUpdated, req);
  }
};
export {updateTaxAuthorityAssoc};


const deleteTaxAuthorityAssocByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTaxAuthorityAssocByIdUpdated method',
  args:{taxAuthorityAssocId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/taxAuthority/taxAuthorityAssocs/${args.taxAuthorityAssocId}?`, null, req);
  }
};
export {deleteTaxAuthorityAssocByIdUpdated};
