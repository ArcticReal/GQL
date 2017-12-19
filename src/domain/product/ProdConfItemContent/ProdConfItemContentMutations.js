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
import {ProdConfItemContentInputType} from '../../product/ProdConfItemContent/ProdConfItemContentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProdConfItemContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProdConfItemContent method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/prodConfItemContents/add?`, null, req);
  }
};
export {createProdConfItemContent};


const updateProdConfItemContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProdConfItemContent method',
  args:{prodConfItemContentToBeUpdated: {type: ProdConfItemContentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/prodConfItemContents/${args.nullVal}?`, args.prodConfItemContentToBeUpdated, req);
  }
};
export {updateProdConfItemContent};


const deleteProdConfItemContentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProdConfItemContentByIdUpdated method',
  args:{prodConfItemContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/prodConfItemContents/${args.prodConfItemContentId}?`, null, req);
  }
};
export {deleteProdConfItemContentByIdUpdated};
