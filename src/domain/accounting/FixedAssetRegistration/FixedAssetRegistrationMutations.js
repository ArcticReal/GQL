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
import {FixedAssetRegistrationResponseType} from '../../accounting/FixedAssetRegistration/FixedAssetRegistrationResponseType.js';
import {FixedAssetRegistrationInputType} from '../../accounting/FixedAssetRegistration/FixedAssetRegistrationInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFixedAssetRegistration = {
  type: FixedAssetRegistrationResponseType,
  description: 'mutation for ofbiz createFixedAssetRegistration method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetRegistrations/add?`, null, req);
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
