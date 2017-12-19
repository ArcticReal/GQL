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
import {RateTypeInputType} from '../../accounting/RateType/RateTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createRateType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createRateType method',
  args:{rateTypeToBeAdded: {type: RateTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/rateTypes/add?`, args.rateTypeToBeAdded, req);
  }
};
export {createRateType};


const updateRateType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRateType method',
  args:{rateTypeToBeUpdated: {type: RateTypeInputType},rateTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/rateTypes/${args.rateTypeId}?`, args.rateTypeToBeUpdated, req);
  }
};
export {updateRateType};


const deleteRateTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRateTypeByIdUpdated method',
  args:{rateTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/rateTypes/${args.rateTypeId}?`, null, req);
  }
};
export {deleteRateTypeByIdUpdated};
