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
import {AffiliateInputType} from '../../party/Affiliate/AffiliateInputType.js';
import {AffiliateResponseType} from '../../party/Affiliate/AffiliateResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAffiliate = {
  type: AffiliateResponseType,
  description: 'mutation for ofbiz createAffiliate method',
  args:{affiliateToBeAdded: {type: AffiliateInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/affiliates/add?`, args.affiliateToBeAdded, req);
  }
};
export {createAffiliate};


const deleteAffiliateByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAffiliateByIdUpdated method',
  args:{affiliateId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/affiliates/${args.affiliateId}?`, null, req);
  }
};
export {deleteAffiliateByIdUpdated};


const updateAffiliate = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAffiliate method',
  args:{affiliateToBeUpdated: {type: AffiliateInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/affiliates/${args.nullVal}?`, args.affiliateToBeUpdated, req);
  }
};
export {updateAffiliate};
