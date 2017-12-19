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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProdConfItemContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProdConfItemContentType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/prodConfItemContent/prodConfItemContentTypes/add?`, null, req);
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
