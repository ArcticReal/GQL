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
import {UnemploymentClaimInputType} from '../../humanres/UnemploymentClaim/UnemploymentClaimInputType.js';
import {UnemploymentClaimResponseType} from '../../humanres/UnemploymentClaim/UnemploymentClaimResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createUnemploymentClaim = {
  type: UnemploymentClaimResponseType,
  description: 'mutation for ofbiz createUnemploymentClaim method',
  args:{unemploymentClaimToBeAdded: {type: UnemploymentClaimInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/unemploymentClaims/add?`, args.unemploymentClaimToBeAdded, req);
  }
};
export {createUnemploymentClaim};


const updateUnemploymentClaim = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateUnemploymentClaim method',
  args:{unemploymentClaimToBeUpdated: {type: UnemploymentClaimInputType},unemploymentClaimId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/unemploymentClaims/${args.unemploymentClaimId}?`, args.unemploymentClaimToBeUpdated, req);
  }
};
export {updateUnemploymentClaim};


const deleteUnemploymentClaimByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteUnemploymentClaimByIdUpdated method',
  args:{unemploymentClaimId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/unemploymentClaims/${args.unemploymentClaimId}?`, null, req);
  }
};
export {deleteUnemploymentClaimByIdUpdated};
