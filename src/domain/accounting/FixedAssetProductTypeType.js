
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FixedAssetProductType} from '../accounting/FixedAssetProductType.js';


const FixedAssetProductTypeType = new GraphQLObjectType({
  name: 'FixedAssetProductTypeType',
  description: 'Type for FixedAssetProductType in accounting',

  fields: () => ({
    fixedAssetProductTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    fixedAssetProduct: {
      type: new GraphQLList(FixedAssetProductType),
      args : {fixedAssetProductTypeId: {type: GraphQLString}},
      resolve: (fixedAssetProductType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetProducts/find?fixedAssetProductTypeId=${fixedAssetProductType.fixedAssetProductTypeId}`)
    }
  })
});

export {FixedAssetProductTypeType};
    