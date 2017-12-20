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
import {FixedAssetAttributeInputType} from '../../accounting/FixedAssetAttribute/FixedAssetAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFixedAssetAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFixedAssetAttribute method',
  args:{fixedAssetAttributeToBeAdded: {type: FixedAssetAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetAttributes/add?`, args.fixedAssetAttributeToBeAdded, req);
  }
};
export {createFixedAssetAttribute};


const updateFixedAssetAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFixedAssetAttribute method',
  args:{fixedAssetAttributeToBeUpdated: {type: FixedAssetAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetAttributes/${args.attrName}?`, args.fixedAssetAttributeToBeUpdated, req);
  }
};
export {updateFixedAssetAttribute};


const deleteFixedAssetAttributeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFixedAssetAttributeByIdUpdated method',
  args:{fixedAssetAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetAttributes/${args.fixedAssetAttributeId}?`, null, req);
  }
};
export {deleteFixedAssetAttributeByIdUpdated};
