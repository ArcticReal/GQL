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
import {ProductAssocTypeResponseType} from '../../product/ProductAssocType/ProductAssocTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductAssocType = {
  type: ProductAssocTypeResponseType,
  description: 'mutation for ofbiz createProductAssocType method',
  args:{productAssocTypeToBeAdded: {type: ProductAssocTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productAssocTypes/add?`, args.productAssocTypeToBeAdded, req);
  }
};
export {createProductAssocType};


const updateProductAssocType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductAssocType method',
  args:{productAssocTypeToBeUpdated: {type: ProductAssocTypeInputType},productAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productAssocTypes/${args.productAssocTypeId}?`, args.productAssocTypeToBeUpdated, req);
  }
};
export {updateProductAssocType};


const deleteProductAssocTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductAssocTypeByIdUpdated method',
  args:{productAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productAssocTypes/${args.productAssocTypeId}?`, null, req);
  }
};
export {deleteProductAssocTypeByIdUpdated};
