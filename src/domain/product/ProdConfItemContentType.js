
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductConfigItemType} from '../product/ProductConfigItemType.js';
import {ContentType} from '../content/ContentType.js';
import {ProdConfItemContentTypeType} from '../product/ProdConfItemContentTypeType.js';


const ProdConfItemContentType = new GraphQLObjectType({
  name: 'ProdConfItemContentType',
  description: 'Type for ProdConfItemContent in product',

  fields: () => ({
    configItem: {
      type: ProductConfigItemType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (prodConfItemContent, args, {loaders}) => loaders.ofbiz.load(`productConfigItems/find?configItemId=${prodConfItemContent.configItemId}`)
    },
    confItemContentType: {
      type: ProdConfItemContentTypeType,
      args : {confItemContentTypeId: {type: GraphQLString}},
      resolve: (prodConfItemContent, args, {loaders}) => loaders.ofbiz.load(`prodConfItemContentTypes/find?confItemContentTypeId=${prodConfItemContent.confItemContentTypeId}`)
    },
    fromDate: {type: GraphQLString},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (prodConfItemContent, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${prodConfItemContent.contentId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProdConfItemContentType};
    