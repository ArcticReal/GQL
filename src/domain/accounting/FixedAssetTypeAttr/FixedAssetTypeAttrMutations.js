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
import {FixedAssetTypeAttrInputType} from '../../accounting/FixedAssetTypeAttr/FixedAssetTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFixedAssetTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetTypeAttr method',
  args:{fixedAssetTypeAttrToBeAdded: {type: FixedAssetTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetTypeAttrs/add?`, args.fixedAssetTypeAttrToBeAdded, req);
  }
};
export {createFixedAssetTypeAttr};


const updateFixedAssetTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetTypeAttr method',
  args:{fixedAssetTypeAttrToBeUpdated: {type: FixedAssetTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetTypeAttrs/${args.attrName}?`, args.fixedAssetTypeAttrToBeUpdated, req);
  }
};
export {updateFixedAssetTypeAttr};


const deleteFixedAssetTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetTypeAttrByIdUpdated method',
  args:{fixedAssetTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetTypeAttrs/${args.fixedAssetTypeAttrId}?`, null, req);
  }
};
export {deleteFixedAssetTypeAttrByIdUpdated};
