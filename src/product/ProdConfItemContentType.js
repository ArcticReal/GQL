
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductConfigItem} from '../product/ProductConfigItem.js';
import {ProdConfItemContentType} from '../product/ProdConfItemContentType.js';
import {Content} from '../product/Content.js';


const ProdConfItemContent = new GraphQLObjectType({
  name: 'ProdConfItemContentType',
  description: 'Type for ProdConfItemContent in product',

  fields: () => ({
    configItem: {
      type: ProductConfigItemType,
      args : {configItemId: {type: GraphQLString}},
      resolve: (prodConfItemContent, args, {loaders}) => loaders.ofbizArray.load(`productConfigItems/find?=${args.configItemId}`)
    },
    confItemContentType: {
      type: ProdConfItemContentTypeType,
      args : {confItemContentTypeId: {type: GraphQLString}},
      resolve: (prodConfItemContent, args, {loaders}) => loaders.ofbizArray.load(`prodConfItemContentTypes/find?=${args.confItemContentTypeId}`)
    },
    fromDate: {type: GraphQLString},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (prodConfItemContent, args, {loaders}) => loaders.ofbizArray.load(`contents/find?=${args.contentId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProdConfItemContent};
    