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
import {CustRequestResolutionInputType} from '../../order/CustRequestResolution/CustRequestResolutionInputType.js';
import {CustRequestResolutionResponseType} from '../../order/CustRequestResolution/CustRequestResolutionResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequestResolution = {
  type: CustRequestResolutionResponseType,
  description: 'mutation for ofbiz createCustRequestResolution method',
  args:{custRequestResolutionToBeAdded: {type: CustRequestResolutionInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestResolutions/add?`, args.custRequestResolutionToBeAdded, req);
  }
};
export {createCustRequestResolution};


const updateCustRequestResolution = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustRequestResolution method',
  args:{custRequestResolutionToBeUpdated: {type: CustRequestResolutionInputType},custRequestResolutionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestResolutions/${args.custRequestResolutionId}?`, args.custRequestResolutionToBeUpdated, req);
  }
};
export {updateCustRequestResolution};


const deleteCustRequestResolutionByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustRequestResolutionByIdUpdated method',
  args:{custRequestResolutionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestResolutions/${args.custRequestResolutionId}?`, null, req);
  }
};
export {deleteCustRequestResolutionByIdUpdated};
