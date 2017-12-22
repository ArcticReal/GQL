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
import {ProdConfItemContentTypeInputType} from '../../product/ProdConfItemContentType/ProdConfItemContentTypeInputType.js';
import {ProdConfItemContentTypeResponseType} from '../../product/ProdConfItemContentType/ProdConfItemContentTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProdConfItemContentType = {
  type: ProdConfItemContentTypeResponseType,
  description: 'mutation for ofbiz createProdConfItemContentType method',
  args:{prodConfItemContentTypeToBeAdded: {type: ProdConfItemContentTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/prodConfItemContent/prodConfItemContentTypes/add?`, args.prodConfItemContentTypeToBeAdded, req);
  }
};
export {createProdConfItemContentType};


const updateProdConfItemContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProdConfItemContentType method',
  args:{prodConfItemContentTypeToBeUpdated: {type: ProdConfItemContentTypeInputType},confItemContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/prodConfItemContent/prodConfItemContentTypes/${args.confItemContentTypeId}?`, args.prodConfItemContentTypeToBeUpdated, req);
  }
};
export {updateProdConfItemContentType};


const deleteProdConfItemContentTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProdConfItemContentTypeByIdUpdated method',
  args:{prodConfItemContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/prodConfItemContent/prodConfItemContentTypes/${args.prodConfItemContentTypeId}?`, null, req);
  }
};
export {deleteProdConfItemContentTypeByIdUpdated};
