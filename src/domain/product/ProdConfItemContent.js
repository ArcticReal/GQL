
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

import {ProductConfigItemType} from '../product/ProductConfigItem.js';
import {ContentType} from '../content/Content.js';
import {ProdConfItemContentTypeType} from '../product/ProdConfItemContentType.js';


const ProdConfItemContentType = new GraphQLObjectType({
  name: 'ProdConfItemContentType',
  description: 'Type for ProdConfItemContent in product',

  fields: () => ({
    configItem: {
      type: ProductConfigItemType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (prodConfItemContent, args, {loaders}) => loaders.ofbiz.load(`product/product/productConfigItems/find?configItemId=${prodConfItemContent.configItemId}`)
    },
    confItemContentType: {
      type: ProdConfItemContentTypeType,
      args : {confItemContentTypeId: {type: GraphQLString}},
      resolve: (prodConfItemContent, args, {loaders}) => loaders.ofbiz.load(`product/prodConfItemContent/prodConfItemContentTypes/find?confItemContentTypeId=${prodConfItemContent.confItemContentTypeId}`)
    },
    fromDate: {type: GraphQLString},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (prodConfItemContent, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${prodConfItemContent.contentId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProdConfItemContentType};
    




const ProdConfItemContentInputType = new GraphQLInputObjectType({
  name: 'ProdConfItemContentInputType',
  description: 'input type for ProdConfItemContent in product',

  fields: () => ({
    configItemId: {type: GraphQLString},
    confItemContentTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    contentId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProdConfItemContentInputType};
    