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
import {DataResourceTypeAttrInputType} from '../../content/DataResourceTypeAttr/DataResourceTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDataResourceTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createDataResourceTypeAttr method',
  args:{dataResourceTypeAttrToBeAdded: {type: DataResourceTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataResource/dataResourceTypeAttrs/add?`, args.dataResourceTypeAttrToBeAdded, req);
  }
};
export {createDataResourceTypeAttr};


const updateDataResourceTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateDataResourceTypeAttr method',
  args:{dataResourceTypeAttrToBeUpdated: {type: DataResourceTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataResource/dataResourceTypeAttrs/${args.attrName}?`, args.dataResourceTypeAttrToBeUpdated, req);
  }
};
export {updateDataResourceTypeAttr};


const deleteDataResourceTypeAttrByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteDataResourceTypeAttrByIdUpdated method',
  args:{dataResourceTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataResource/dataResourceTypeAttrs/${args.dataResourceTypeAttrId}?`, null, req);
  }
};
export {deleteDataResourceTypeAttrByIdUpdated};
