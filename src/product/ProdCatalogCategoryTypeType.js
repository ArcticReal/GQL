
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProdCatalogCategoryType} from '../product/ProdCatalogCategoryType.js';


const ProdCatalogCategoryType = new GraphQLObjectType({
  name: 'ProdCatalogCategoryTypeType',
  description: 'Type for ProdCatalogCategoryType in product',

  fields: () => ({
    prodCatalogCategoryTypeId: {type: GraphQLString},
    parentType: {
      type: ProdCatalogCategoryTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (prodCatalogCategoryType, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogCategoryTypes/find?prodCatalogCategoryTypeId=${args.parentTypeId}`)
    },
    description: {type: GraphQLString}
  })
});

export {ProdCatalogCategoryType};
    