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
import {ProductAssocTypeInputType} from '../../product/ProductAssocType/ProductAssocTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductAssocType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductAssocType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productAssocTypes/add?`, null, req);
  }
};
export {createProductAssocType};


const updateProductAssocType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductAssocType method',
  args:{productAssocTypeToBeUpdated: {type: ProductAssocTypeInputType},productAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productAssocTypes/${args.productAssocTypeId}?`, args.productAssocTypeToBeUpdated, req);
  }
};
export {updateProductAssocType};


const deleteProductAssocTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductAssocTypeByIdUpdated method',
  args:{productAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productAssocTypes/${args.productAssocTypeId}?`, null, req);
  }
};
export {deleteProductAssocTypeByIdUpdated};
