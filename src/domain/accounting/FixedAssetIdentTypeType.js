
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FixedAssetIdentType} from '../accounting/FixedAssetIdentType.js';


const FixedAssetIdentTypeType = new GraphQLObjectType({
  name: 'FixedAssetIdentTypeType',
  description: 'Type for FixedAssetIdentType in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    fixedAssetIdentTypeId: {type: GraphQLString},
    fixedAssetIdent: {
      type: new GraphQLList(FixedAssetIdentType),
      args : {fixedAssetIdentTypeId: {type: GraphQLString}},
      resolve: (fixedAssetIdentType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetIdents/find?fixedAssetIdentTypeId=${fixedAssetIdentType.fixedAssetIdentTypeId}`)
    }
  })
});

export {FixedAssetIdentTypeType};
    