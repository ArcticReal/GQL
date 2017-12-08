
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

import {FixedAssetProductType} from '../accounting/FixedAssetProduct.js';


const FixedAssetProductTypeType = new GraphQLObjectType({
  name: 'FixedAssetProductTypeType',
  description: 'Type for FixedAssetProductType in accounting',

  fields: () => ({
    fixedAssetProductTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    fixedAssetProducts: {
      type: new GraphQLList(FixedAssetProductType),
      args : {fixedAssetProductTypeId: {type: GraphQLString}},
      resolve: (fixedAssetProductType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetProducts/find?fixedAssetProductTypeId=${fixedAssetProductType.fixedAssetProductTypeId}`)
    }
  })
});

export {FixedAssetProductTypeType};
    




const FixedAssetProductTypeInputType = new GraphQLInputObjectType({
  name: 'FixedAssetProductTypeInputType',
  description: 'input type for FixedAssetProductType in accounting',

  fields: () => ({
    fixedAssetProductTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {FixedAssetProductTypeInputType};
    