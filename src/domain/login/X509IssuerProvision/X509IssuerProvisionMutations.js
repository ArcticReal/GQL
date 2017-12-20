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
import {X509IssuerProvisionInputType} from '../../login/X509IssuerProvision/X509IssuerProvisionInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createX509IssuerProvision = {
  type: ResopnseType,
  description: 'mutation for ofbiz createX509IssuerProvision method',
  args:{x509IssuerProvisionToBeAdded: {type: X509IssuerProvisionInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`login/x509IssuerProvision/x509IssuerProvisions/add?`, args.x509IssuerProvisionToBeAdded, req);
  }
};
export {createX509IssuerProvision};


const updateX509IssuerProvision = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateX509IssuerProvision method',
  args:{x509IssuerProvisionToBeUpdated: {type: X509IssuerProvisionInputType},certProvisionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`login/x509IssuerProvision/x509IssuerProvisions/${args.certProvisionId}?`, args.x509IssuerProvisionToBeUpdated, req);
  }
};
export {updateX509IssuerProvision};


const deleteX509IssuerProvisionByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteX509IssuerProvisionByIdUpdated method',
  args:{x509IssuerProvisionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`login/x509IssuerProvision/x509IssuerProvisions/${args.x509IssuerProvisionId}?`, null, req);
  }
};
export {deleteX509IssuerProvisionByIdUpdated};
