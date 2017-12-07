
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SegmentGroupRoleType} from '../marketing/SegmentGroupRoleType.js';
import {SegmentGroupTypeType} from '../marketing/SegmentGroupTypeType.js';
import {SegmentGroupGeoType} from '../marketing/SegmentGroupGeoType.js';
import {ProductStoreType} from '../product/ProductStoreType.js';
import {SegmentGroupClassificationType} from '../marketing/SegmentGroupClassificationType.js';


const SegmentGroupType = new GraphQLObjectType({
  name: 'SegmentGroupType',
  description: 'Type for SegmentGroup in marketing',

  fields: () => ({
    description: {type: GraphQLString},
    segmentGroupId: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (segmentGroup, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${segmentGroup.productStoreId}`)
    },
    segmentGroupType: {
      type: SegmentGroupTypeType,
      args : {segmentGroupTypeId: {type: GraphQLString}},
      resolve: (segmentGroup, args, {loaders}) => loaders.ofbiz.load(`segmentGroupTypes/find?segmentGroupTypeId=${segmentGroup.segmentGroupTypeId}`)
    },
    segmentGroupRole: {
      type: new GraphQLList(SegmentGroupRoleType),
      args : {segmentGroupId: {type: GraphQLString}},
      resolve: (segmentGroup, args, {loaders}) => loaders.ofbizArray.load(`segmentGroupRoles/find?segmentGroupId=${segmentGroup.segmentGroupId}`)
    },
    segmentGroupClassification: {
      type: new GraphQLList(SegmentGroupClassificationType),
      args : {segmentGroupId: {type: GraphQLString}},
      resolve: (segmentGroup, args, {loaders}) => loaders.ofbizArray.load(`segmentGroupClassifications/find?segmentGroupId=${segmentGroup.segmentGroupId}`)
    },
    segmentGroupGeo: {
      type: new GraphQLList(SegmentGroupGeoType),
      args : {segmentGroupId: {type: GraphQLString}},
      resolve: (segmentGroup, args, {loaders}) => loaders.ofbizArray.load(`segmentGroupGeos/find?segmentGroupId=${segmentGroup.segmentGroupId}`)
    }
  })
});

export {SegmentGroupType};
    