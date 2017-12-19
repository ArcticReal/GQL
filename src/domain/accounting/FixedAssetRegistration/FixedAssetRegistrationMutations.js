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
import {FixedAssetRegistrationInputType} from '../../accounting/FixedAssetRegistration/FixedAssetRegistrationInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFixedAssetRegistration = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetRegistration method',
  args:{fixedAssetRegistrationToBeAdded: {type: FixedAssetRegistrationInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetRegistrations/add?`, args.fixedAssetRegistrationToBeAdded, req);
  }
};
export {createFixedAssetRegistration};


const deleteFixedAssetRegistrationByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetRegistrationByIdUpdated method',
  args:{fixedAssetRegistrationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetRegistrations/${args.fixedAssetRegistrationId}?`, null, req);
  }
};
export {deleteFixedAssetRegistrationByIdUpdated};


const updateFixedAssetRegistration = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetRegistration method',
  args:{fixedAssetRegistrationToBeUpdated: {type: FixedAssetRegistrationInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetRegistrations/${args.nullVal}?`, args.fixedAssetRegistrationToBeUpdated, req);
  }
};
export {updateFixedAssetRegistration};
